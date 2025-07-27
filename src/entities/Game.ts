import { Platform } from './Platform';

//these are the types of the data we get ,it's defined in the website /api documentation

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    slug: string;
    description_raw: string;
}
