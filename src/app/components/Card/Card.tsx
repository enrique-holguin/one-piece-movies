'use client'

import { OnePieceMovie } from '@/app/types/movie.types'
import Image from 'next/image';
import React,{useEffect,useState} from 'react'


function Card() {
    const [movies, setMovies] = useState<OnePieceMovie | null>(null);
    const [loading,setLoading] = useState(true)
    const [errorFetch,setErrorFetch] =useState(false)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
        const url = 'https://api.jikan.moe/v4/anime?q=one%20piece&type=Movie'
          const response = await fetch(url);
          const data = await response.json();
          setMovies(data);
        } catch (error) {
          console.error(error);
          setErrorFetch(true)
        }
        finally {   
            setLoading(false)
        }
      };
  
      fetchData();
  
      return () => {
        setMovies(null);
      };
    }, []);
  
    return (
      <div>
        {movies && movies.data.length>0 && !loading 
        ? <ul className='grid grid-cols-4 gap-6 px-6 py-4'>
            {movies.data.map((movie,index) => <li key={`movie-${index}`}>
                <div className='flex flex-col'>
                <h2>{movie.title}</h2>
                <img alt={movie.title} width={400}  src={movie?.images?.jpg?.large_image_url}></img>
                <p>
                    <span>{movie.aired.string}</span>
                </p>
                </div>
            </li>)}
        </ul> : loading ? 'Cargando' : 'No hay pelis'}
        {errorFetch && <h2 className='bg-red-600'>Ocurrió un error</h2>}
      </div>
    );
  }
export default Card