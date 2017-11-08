// Enable .vue extension in typescript
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

// example for JSON returned from "https://swapi.co/api/people/1/"
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
