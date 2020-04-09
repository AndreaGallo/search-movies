import React from 'react'
import { Movie } from './Movie'
import PropTypes from 'prop-types'

export const MoviesList = ({results}) => (
    <div className="MoviesList">
        {results.map(movie => 
            <div className="MoviesList-item"  key={movie.imdbID}>
                <Movie 
                    id={movie.imdbID}
                    title={movie.Title}
                    poster={movie.Poster}
                    year={movie.Year}
                />
            </div>)}
    </div>
)

MoviesList.propTypes = {
    results: PropTypes.array
}

