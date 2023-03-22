import { api_key_ocr } from './api_key.js';

let ocr = {
    async hasText(imgUrl){      
        let res = await fetch('https://api.ocr.space/parse/imageurl?apikey='+ api_key_ocr +'&url='+ imgUrl);
        if(!res) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    }
}

export default ocr;