import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')

// let main = {
//     async getDataset(){
//         const data = await lastfm.getTopSongs();
//         let tracks = data.tracks.track;
//         return tracks;
//         //console.log(data.tracks.track);
//         // console.log(data[0]["name"]);
//         //document.querySelector('#test').innerHTML=tracks[5].name;
//     },
//     getRandomSong(songList) {
//         //let rand = floor(Math.random()*50);
//         return songList[5];
//     },
//     play(song){
//         QuizCover.setCover(song.image[3]);
//         QuizAnswerField.setAnswer(song.artist.name);
//     }
// }