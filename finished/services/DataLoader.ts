export default class DataLoader {

    static async loadJSON(url:string): Promise<any> {
        // tip: CMD+CLICK op een type om alle opties te zien
        const myHeaders = new Headers();

        const init:RequestInit = {
            method: "GET",
            headers: myHeaders,
            mode: "cors",
            cache: "default"
        };

        let res = await fetch(url, init)
        return await res.json()
    }

    static async loadImage(img: string): Promise<any> {
        let url = `http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(img)}&api_key=dc6zaTOxFJmzC`
        let res = await fetch(url)
        let json = await res.json()
        return await DataLoader.checkData(json)
    }

    static async checkData(json: any): Promise<any> {
        return new Promise((resolve, reject) => {
            if (json.data.length == 0) {
                reject("No gif found!")
            } else {
                let ind:number = Math.floor(Math.random()*json.data.length)
                let gifurl: string = json.data[ind].images.fixed_height.url;
                resolve(gifurl);
            }
        })
    }
}