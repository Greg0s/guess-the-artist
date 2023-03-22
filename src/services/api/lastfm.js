import { api_key_lastfm } from './api_key.js';

let lastfm = {
    async getTopSongs(){   
        let res = await fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=united states&api_key='+ api_key_lastfm +'&format=json');
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    },
    async getTrack(mbid){
        let res = await fetch('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key='+ api_key_lastfm +'&mbid=' + mbid +'&format=json');
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    },
    async getTopArtists(){
        let res = await fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key='+ api_key_lastfm +'&format=json');
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    },
    async getArtist(mbid){
        let res = await fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&api_key='+ api_key_lastfm +'&mbid=' + mbid +'&format=json');
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    }
}

export default lastfm;