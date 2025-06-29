
//example:https://media.rawg.io/media/games/456/456abc123.jpg
//https://media.rawg.io/media/crop/600/400/games/456/456abc123.jpg

//it adds the word 'crop/600/400/' to make the image smaller


const getCroppedImageUrl=(url:string)=>{
    const index = url.indexOf('media/') +'media/'.length; //index of the word 'media/' + it's length which is 6
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;