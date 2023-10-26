import Link from 'next/link';
import { getCharsByMovie } from '../../../../services/getCharsByMovie';

type Params = {
    params: {
        movieId: string
    }
}

async function page({ params }: Params) {
    console.log(params)
    const { movieId } = params
    const characters = await getCharsByMovie(movieId)
    return (
        <div>
            <h1>{ }</h1>
            <h2 className='font-bold'>Characters</h2>
            {characters && characters.data.length > 0
                ? <ul className='grid grid-cols-5 place-items-center'>
                    {characters.data.map((data, index) => {
                        return <li key={data.character.mal_id}>
                            <Link href={`/characters/${data.character.mal_id}/`}><h3>{data.character.name}</h3></Link>
                        </li>
                    })}
                </ul>
                : 'No hay personas para mostrar'}
        </div>
    )
}

export default page