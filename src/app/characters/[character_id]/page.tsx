//Services
import { getCharById } from "../../../../services/getCharById";

type Params = { params: { character_id: string } }

async function page({ params }: Params) {
    const { character_id } = params
    const character = await getCharById(character_id)
    console.log(character)
    return (
        <div>
            <h1>{character?.data
                ? character?.data.name
                : 'Unexpected Error'}</h1>
        </div>
    )
}

export default page