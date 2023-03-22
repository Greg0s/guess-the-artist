import { bearer_spotify } from './api_key.js';

let spotify = {
    async getSongs(){   
        let res = await fetch('https://api.spotify.com/v1/playlists/1ISSOeZLHpzuOJ0CdSYwgD/tracks', {
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + bearer_spotify
            }
        });
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    },
    async getArtist(id){
        let res = await fetch('https://api.spotify.com/v1/artists/' + id, {
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + bearer_spotify
            }
        });
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    }
}

export default spotify;