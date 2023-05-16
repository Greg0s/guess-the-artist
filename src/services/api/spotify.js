import { idSpotify } from './apiKey.js';
let bearerSpotify = "";

let playlist = ['0XXN2jKGfxhnAxzosyjJbd','1ISSOeZLHpzuOJ0CdSYwgD', '37i9dQZF1DWTIfBdh7WtFL'];
let playlistNb = 0;

//const playlist = '1ISSOeZLHpzuOJ0CdSYwgD'
//const playlist = '37i9dQZF1DWTIfBdh7WtFL'

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
    async getSongs(playlist){   
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
    },
    async getArtistInfos(id){
        let artistInfos = [];
        let artist = await spotify.getArtist(id);
        if(artist.genres){
          artistInfos.push(artist.genres.join());
        }else{
          artistInfos.push("");
        }
        artistInfos.push(artist.images[0].url);

        return artistInfos;
    },
    async getArtistDecades(artistId){
        let topSongs = await this.getTopSongsArtist(artistId);
        let artistDecades ="";
        let d_2000 = new Date("2000-01-01");
        let date;
        topSongs.tracks.forEach(track => {
          date = new Date(track.album.release_date);
          if(date < d_2000) { artistDecades += "old ";
        } 
          else { artistDecades += "recent " }
        })
        return artistDecades;
    },
    async getDataset(){
        const data = await spotify.getSongs(playlist[playlistNb]);
        return data.items;  
    },
    async createDatabase(){
        let list = await this.getDataset();
        console.log(list);
        let database = [];
        let id, name, genre, period, img, artist, artistInfos;
        for(let i = 0 ; i < 50 ; i ++){
          id = list[i].track.artists[0].id;
          name = list[i].track.artists[0].name;
          period = await this.getArtistDecades(id);
          artistInfos = await this.getArtistInfos(id);
          genre = artistInfos[0];
          img = artistInfos[1];
          artist = [id, name, period, genre, img];
          database.push(artist);
        }
        return database = JSON.stringify(Object.assign({}, database))
      }
}

async function newToken(){
    bearerSpotify = await spotify.getAccessToken();
    bearerSpotify = bearerSpotify.access_token;
}
setInterval(newToken(), 1000 * 60 * 60);

export default spotify;