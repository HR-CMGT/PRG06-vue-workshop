export default class DataService {
    async getData(url:string) : Promise<any> {
        let res = await fetch(url)
        return await res.json()
    }
}