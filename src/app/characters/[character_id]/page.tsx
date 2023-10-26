//Services
import Image from "next/image";
import { getCharById } from "../../../../services/getCharById";


type Params = { params: { character_id: string } }

async function page({ params }: Params) {
    const { character_id } = params
    const character = await getCharById(character_id)
    console.log(character)
    return (
        <div className="flex flex-col">
            {character?.data
                ? (
                    <>
                        <h1 className="">{character.data.name}</h1>
                        <Image alt={character.data.name} src={character.data.images.webp.image_url} width={150} height={150}></Image>
                        {"About :"}
                        <span>
                            <p>{character.data.about}</p>
                        </span>
                        {"Voices :"}
                        <ul>
                            {character.data.voices.map((voice, index) => {
                                return <li key={index}>{voice.person.name}</li>
                            })}
                        </ul>
                    </>)
                : 'Unexpected Error'}
        </div>
    )
}

export default page