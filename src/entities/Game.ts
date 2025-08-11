import  Genre  from './Genre';
import  Platform  from './Platform';
import  Publisher  from './Publishere';

//these are the types of the data we get ,it's defined in the website /api documentation

export default interface Game {
    id: number;
    name: string;
    genres: Genre[];
    publishers:Publisher[]
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    slug: string;
    description_raw: string;
}
