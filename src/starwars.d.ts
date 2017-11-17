// actor "https://swapi.co/api/people/1/"
declare type Actor = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
}

// film "https://swapi.co/api/films/"
declare type Film = {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: Actor[],
    planets: any[],
    starships: any[],
    vehicles: any[],
    species: any[],
    created: string,
    edited: string,
    url: string
}