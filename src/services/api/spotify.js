import { idSpotify } from './apiKey.js';
let bearerSpotify = "";

let playlist = ['0XXN2jKGfxhnAxzosyjJbd','7oBeEkujcRybm7dCAUAIhG', '68BOljqWA5DyNsTXE5qbXr', '0g5bk8atjp6cIeN5WbS4B9', '230z2ul4DpViQvSdHwkuQr'];
let playlistNb = 0;

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
        playlistNb ++;
        return data.items;  
    },
    async createDatabase(){
        let list = await this.getDataset();
        let database = [];
        let id, name, genres, period, img, artist, artistInfos;
        for(let i = 0 ; i < list.length ; i ++){
          id = list[i].track.artists[0].id;
          name = list[i].track.artists[0].name;
          period = await this.getArtistDecades(id);
          artistInfos = await this.getArtistInfos(id);
          genres = artistInfos[0];
          img = artistInfos[1];
          artist = {id: id, name: name, period: period, genres: genres, img: img};
          database.push(artist);
        }
        database = shuffle(database);
        return database = JSON.stringify(database)
      }
}

// functions for internal use only
// token getter
async function newToken(){
    bearerSpotify = await spotify.getAccessToken();
    bearerSpotify = bearerSpotify.access_token;
}
setInterval(newToken(), 1000 * 60 * 60);

//shuffle playlist
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

export default spotify;