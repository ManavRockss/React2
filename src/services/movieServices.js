const key=import.meta.env.VITE_TMDB_KEY;
const baseUrl="https://api.themoviedb.org/3"

const endpoints={
    nowPlaying:`${baseUrl}/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    popular:`${baseUrl}/trending/movie/day?api_key=${key}&language=en-US`,
    topRated:`${baseUrl}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    airingToday:`${baseUrl}/trending/tv/day?api_key=${key}&language=en-US`,
    upcoming:`${baseUrl}/movie/upcoming?api_key=${key}&language=en-US&page=1`
    
}
export function createImageUrl(filename, size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`
}
export default endpoints