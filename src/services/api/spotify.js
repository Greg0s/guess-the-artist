import { idSpotify } from './apiKey.js';
let bearerSpotify = "";

//const playlist = '1ISSOeZLHpzuOJ0CdSYwgD'
const playlist = '37i9dQZF1DWTIfBdh7WtFL'

let spotify = {
    async getAccessToken(){
        let res = await fetch('https://accounts.spotify.com/api/token?grant_type=client_credentials', {
            method: "POST",
            headers: {
                "Authorization" : "Basic " + idSpotify,
                "Content-Type" : "application/x-www-form-urlencoded"
            }
        });
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    },
    async getSongs(){   
        if(bearerSpotify == ""){await newToken()}
        let res = await fetch('https://api.spotify.com/v1/playlists/' + playlist + '/tracks', {
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + bearerSpotify
            }
        });
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    },
    async getArtist(id){
        if(bearerSpotify == ""){await newToken()}
        let res = await fetch('https://api.spotify.com/v1/artists/' + id, {
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + bearerSpotify
            }
        });
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    },
    async getTopSongsArtist(id){
        if(bearerSpotify == ""){await newToken()}
        let res = await fetch('https://api.spotify.com/v1/artists/' + id + '/top-tracks?market=US',{
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + bearerSpotify
            }
        });
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    }
}

async function newToken(){
    bearerSpotify = await spotify.getAccessToken();
    bearerSpotify = bearerSpotify.access_token;
}
setInterval(newToken(), 1000 * 60 * 60);

export default spotify;