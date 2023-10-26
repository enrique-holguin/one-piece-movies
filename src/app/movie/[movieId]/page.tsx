

import { useEffect, useState } from 'react';
import { MovieByID } from '../../types/movieById.types';

const fetchData = async (idMovie: string) => {
    try {
        const url = `https://api.jikan.moe/v4/anime/${idMovie}`
        const response = await fetch(url);
        const data = await response.json() as MovieByID;
        return data
    } catch (error) {
        console.error(error);
    }
}



async function page({ params }: {
    params: {
        movieId: string
    }
}) {
    console.log(params)
    const { movieId } = params
    const movie = await fetchData(movieId)
    console.log(movie)
    return (
        <div>
            <h1>{movie?.data
                ? movie.data.title
                : 'ERROR, página no encontrada'}
            </h1>
        </div>
    )
}

export default page