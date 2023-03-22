import { id_spotify } from './api_key.js';
let bearer_spotify = "";

let spotify = {
    async getAccessToken(){
        let res = await fetch('https://accounts.spotify.com/api/token?grant_type=client_credentials', {
            method: "POST",
            headers: {
                "Authorization" : "Basic " + id_spotify,
                "Content-Type" : "application/x-www-form-urlencoded"
            }
        });
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    },
    async getSongs(){   
        if(bearer_spotify == ""){await newToken()}
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
        if(bearer_spotify == ""){await newToken()}
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

async function newToken(){
    bearer_spotify = await spotify.getAccessToken();
    bearer_spotify = bearer_spotify.access_token;
}
setInterval(newToken(), 1000 * 60 * 60);

export default spotify;