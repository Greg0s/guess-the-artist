const api_key = '70aedb578d041a0913ff55cb0389bc00';

let lastfm = {
    async getTopSongs(){      
        let res = await fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=united states&api_key='+ api_key +'&format=json');
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    }
}

export default lastfm;