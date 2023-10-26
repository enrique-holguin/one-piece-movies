import { Character } from "@/app/types/characterById.types";


const fetchData = async (characterId: string) => {
    try {
        const url = `https://api.jikan.moe/v4/characters/${characterId}/full`
        const response = await fetch(url);
        const data = await response.json() as Character;
        return data
    } catch (error) {
        console.error(error);
    }
}

async function page({ params }: { params: { character_id: string } }) {
    const { character_id } = params
    const character = await fetchData(character_id)
    console.log(character)
    return (
        <div>
            <h1>{character?.data.name}</h1>
        </div>
    )
}

export default page