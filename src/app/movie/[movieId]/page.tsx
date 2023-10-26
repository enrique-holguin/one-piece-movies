import { Characters } from '@/app/types/characters';
import { getCharsByMovie } from '../../../../services/getCharsByMovie';




async function page({ params }: {
    params: {
        movieId: string
    }
}) {
    console.log(params)
    const { movieId } = params
    const characters = await getCharsByMovie(movieId)
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