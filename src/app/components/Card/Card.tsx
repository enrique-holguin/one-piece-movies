'use client'

//React
import React, { useEffect, useState } from 'react'

//Components from Next
import Image from 'next/image';
import Link from 'next/link';

//Types
import { ApiMovies as ApiResponse } from '@/app/types/movies.types'

//Services
import { getAllMovies } from '../../../../services/getAllMovies';

function Card() {
  const [movies, setMovies] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true)
  const [errorFetch, setErrorFetch] = useState(false)

  useEffect(() => {
    getAllMovies().then(movies => {
      setMovies(movies)
    }).catch(error => {
      setErrorFetch(true)
    }).finally(() => {
      setLoading(false)
    })

    return () => {
      setMovies(null);
    };
  }, []);

  return (
    <div>
      {movies && movies?.data?.length > 0 && !loading
        ? <ul className='grid grid-cols-4 gap-6 px-6 py-4'>
          {
            movies.data.map((movie) => <li key={movie.mal_id}>
              <div className='flex flex-col'>
                <Link href={`/movie/${movie.mal_id}`}>{movie.title}</Link>
                <Image priority={true} alt={movie.title} width={300} height={250} src={movie?.images?.jpg?.large_image_url}></Image>
                <p>
                  <span>{movie.aired.string}</span>
                </p>
              </div>
            </li>)
          }
        </ul>
        : loading ? 'Cargando' : 'No hay pelis'}
      {errorFetch && <h2 className='bg-red-600'>Ocurrió un error</h2>}
    </div>
  );
}
export default Card