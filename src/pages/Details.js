import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = "a2bd4f0f";
const END_POINT = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

export  class Details extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object, // objeto que contiene todos los parametros de la url
            isExact: PropTypes.bool, // nos indica si la ruta a la que se entro es exactamente la que se esperaba
            path: PropTypes.string, // tiene el patron que hemos usado para esta ruta
            url: PropTypes.string // la url que ha hecho match con la ruta
        })    
    }

    state = {
        movie: {
            Title: '',
            Poster: '',
            Actors: '',
            Metascore: '',
            Plot: ''
        }
    }


    componentDidMount(){
        console.log(this.props);
        const {id} = this.props.match.params;
        this._fetchMovie(id);    
    }

    _fetchMovie = (id) => {
        fetch(`${END_POINT}i=${id}`)
            .then(resp => resp.json())
            .then(movie => {
                console.log(movie)
                this.setState({movie});
            })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
        return (
            <div>
                <ButtonBackToHome />
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <span>{Plot}</span>
             </div>
        )
    }
}
