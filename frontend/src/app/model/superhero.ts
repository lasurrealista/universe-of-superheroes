import { Appearance } from "./appearance";
import { Biography } from "./biography";
import { Connections } from "./connections";
import { Images } from "./images";
import { Powerstats } from "./powerstats";
import { Work } from "./work";

export class Superhero {
    _id: number | string = 0;
    name: string = '';
    slug: string = '';
    powerstats: Powerstats = new Powerstats();
    appearance: Appearance = new Appearance();
    biography: Biography = new Biography();
    work: Work = new Work();
    connections: Connections = new Connections();
    images: Images = new Images();
}
