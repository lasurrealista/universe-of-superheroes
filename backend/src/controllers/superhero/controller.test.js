const { mockRequest, mockResponse } = require('jest-mock-req-res');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("Superhero controller", () => {
    const mockData = [{
        "id": 1,
        "name": "Vixen",
        "slug": "699-vixen",
        "powerstats": {
            "intelligence": 50,
            "strength": 38,
            "speed": 50,
            "durability": 50,
            "power": 62,
            "combat": 25
        },
        "appearance": {
            "gender": "Female",
            "race": "Human",
            "height": [
                "5'9", "175 cm"
            ],
            "weight": [
                "140 lb", "63 kg"
            ],
            "eyeColor": "Amber",
            "hairColor": "Black"
        },
        "biography": {
            "fullName": "Mari McCabe",
            "alterEgos": "No alter egos found.",
            "aliases": ["-"],
            "placeOfBirth": "Zambesi",
            "firstAppearance": "Action Comics #521 (July, 1981)",
            "publisher": "DC Comics",
            "alignment": "good"
        },
        "work": {
            "occupation": "Former Model",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "Formerly Suicide Squad, Checkmate, Ultramarines, Birds of Prey, Justice League of America",
            "relatives": "Reverend Richard Jiwe (father, deceased), Jeanne-Mari Jiwe (mother, deceased), General Mustapha Maksai (uncle, deceased), Tantu (ancestor)"
        },
        "images": {
            "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/699-vixen.jpg",
            "sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/699-vixen.jpg",
            "md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/699-vixen.jpg",
            "lg": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/699-vixen.jpg"
        }
    }, {
        "id": 2,
        "name": "Vulture",
        "slug": "701-vulture",
        "powerstats": {
            "intelligence": 75,
            "strength": 22,
            "speed": 42,
            "durability": 25,
            "power": 26,
            "combat": 30
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "5'11", "180 cm"
            ],
            "weight": [
                "175 lb", "79 kg"
            ],
            "eyeColor": "Brown",
            "hairColor": "No Hair"
        },
        "biography": {
            "fullName": "Adrian Toomes",
            "alterEgos": "No alter egos found.",
            "aliases": ["-"],
            "placeOfBirth": "Staten Island, New York City",
            "firstAppearance": "Amazing Spider-Man #2",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "work": {
            "occupation": "Professional criminal; formerly electronics engineer",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "Formerly Sinister Twelve, Sinister Six",
            "relatives": "Marcus (brother, possibly deceased), Malachi Toomes (nephew, deceased), Valeria Toomes (daughter), unnamed son, Ramona (daughter-in-law), unnamed grandson"
        },
        "images": {
            "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/701-vulture.jpg",
            "sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/701-vulture.jpg",
            "md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/701-vulture.jpg",
            "lg": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/701-vulture.jpg"
        }
    }, {
        "id": 3,
        "name": "Walrus",
        "slug": "702-walrus",
        "powerstats": {
            "intelligence": 50,
            "strength": 28,
            "speed": 8,
            "durability": 50,
            "power": 11,
            "combat": 20
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'0", "183 cm"
            ],
            "weight": [
                "360 lb", "162 kg"
            ],
            "eyeColor": "Blue",
            "hairColor": "Black"
        },
        "biography": {
            "fullName": "Hubert Carpent",
            "alterEgos": "No alter egos found.",
            "aliases": ["-"],
            "placeOfBirth": "Brooklyn, New York",
            "firstAppearance": "Defenders #131 (May, 1984)",
            "publisher": "Marvel Comics",
            "alignment": "bad"
        },
        "work": {
            "occupation": "Cab driver",
            "base": "-"
        },
        "connections": {
            "groupAffiliation": "-",
            "relatives": "Humbert Carpenter (uncle)"
        },
        "images": {
            "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/702-walrus.jpg",
            "sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/702-walrus.jpg",
            "md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/702-walrus.jpg",
            "lg": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/702-walrus.jpg"
        }
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const SUPERHERO_ID = 1;

        const request = mockRequest({
            params: {
                id: SUPERHERO_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(SUPERHERO_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(entity => entity.id === SUPERHERO_ID)
                );                
            })
    });
});