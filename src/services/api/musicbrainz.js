// export async function getTopSongs(){
//     const response =  await fetch(
//         'https://musicbrainz.org/ws/2/release/76df3287-6cda-33eb-8e9a-044b5e15ffdd' + new URLSearchParams({
//         fmt: 'json'
//     }))
//     if (response.status == 200) {
//         const data = response.json();
//         return data;
//     } else {
//       new Error(response.statusText)
//     } 
// }

let test = {
    getTopSongs(){
        fetch(
            'https://musicbrainz.org/ws/2/release/76df3287-6cda-33eb-8e9a-044b5e15ffdd?fmt=json')
        .then((response) => {
            if(!response.ok){ 
                throw new Error("Something went wrong!");
            }
            return response.json(); 
        })
        .then((data) => {
            let res = data["quality"];
            console.log(res);
            return res;
        })
    },
    fcTest(){
        console.log('test');
    },
    async getTopSongs2(){
        const response = await fetch("https://musicbrainz.org/ws/2/release/76df3287-6cda-33eb-8e9a-044b5e15ffdd?fmt=json") 
        if (response.status == 200) {
            const data = response.json();
            return data;
        } else {
        new Error(response.statusText)
        }
    }
}

export default test;