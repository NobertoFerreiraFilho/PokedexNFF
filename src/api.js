export const getPokemons = async (limit=50, offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error){
        console.log("error:", error)
    }
}

export const GetPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error){
        console.log("error:", error)
    }
}
export const GetPokeDatasSpecies = async (chosenId) => {
    try {
        let url1 = `https://pokeapi.co/api/v2/pokemon-species/${chosenId}/`
        const response = await fetch(url1)
        return await response.json()
    } catch (error){
        console.log("error:", error)
    }
}

export const GetTypeData = async (chosenType) => {
    try {
        let url = `https://pokeapi.co/api/v2/type/${chosenType}/`
        const response = await fetch(url)
        return await response.json()
    } catch (error){
        console.log("error:", error)
    }
}

export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error){
        console.log("error:", error)
    }
}