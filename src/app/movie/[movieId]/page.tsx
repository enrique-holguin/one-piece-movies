

import { useEffect, useState } from 'react';
import { MovieByID } from '../../types/movieById.types';
import { Characters } from '@/app/types/characters';

const fetchData = async (idMovie: string) => {
    try {
        const url = `https://api.jikan.moe/v4/anime/${idMovie}/characters`
        const response = await fetch(url);
        const data = await response.json() as Characters;
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
    const characters = await fetchData(movieId)
    console.log(characters)
    return (
        <div>
            <h1>{ }</h1>
            <h2>{characters?.data
                ? characters.data.map((data) => data.character.name)
                : 'ERROR, página no encontrada'}
            </h2>
        </div>
    )
}

export default page