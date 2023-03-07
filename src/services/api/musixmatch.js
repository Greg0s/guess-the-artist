// let KEY = 'c0ef95d0d70e58df2d45e180a030edc1';

// export async function getTopSongs(){
//     const response =  await fetch('http://api.musixmatch.com/ws/1.1/?' + new URLSearchParams({
//         apikey: KEY,
//         chart_name: 'top',
//         page: 1,
//         page_size: 5,
//         country: 'fr'
//     }))
//     if (response.status == 200) {
//         const data = response.json();
//         return data;
//     } else {
//       new Error(response.statusText)
//     } 
// }