

export function firstFetchCall<Pokemon>(url:string): Promise<{pokemons:Pokemon[],next:string}> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as any
      })
      .then(data => {
          return {pokemons:data.results ,next:data.next}
      })
  }

  export function fetchPokemonCall<Pokemon>(url:string): Promise<Pokemon> {
    
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Pokemon
      })
      .then(data => {
          return data 
      })
  }