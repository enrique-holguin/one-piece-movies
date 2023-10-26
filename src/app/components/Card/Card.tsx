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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies && movies?.data?.length > 0 && !loading ? (
          movies.data.map((movie) => (
            <div
              key={movie.mal_id}
              className="border border-gray-300 rounded shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href={`/movie/${movie.mal_id}`}>
                <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={movie?.images?.jpg?.large_image_url}
                    alt={movie.title}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{movie.title}</h3>
                  <p className="text-sm text-gray-600">{movie.aired.string}</p>
                </div>
              </Link>
            </div>
          ))
        ) : loading ? (
          'Loading'
        ) : (
          'No movies to show'
        )}
      </div>
      {errorFetch && <h2 className="bg-red-600">An error occurred</h2>}
    </div>
  );
}
export default Card