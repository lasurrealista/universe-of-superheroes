const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("Marvel character controller", () => {
    const mockData = [{
        "id": 1,
        "name": "Adam Warlock",
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860,jpg",
        "profile": "http://marvel.com/universe/Warlock,_Adam?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc",
        "url": "http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc",
        "stories": 217
      },{
        "id": 2,
        "name": "Aegis (Trey Rollins)",
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d.gif",
        "profile": "http://marvel.com/universe/Aegis_%28Trey_Rollins%29?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc",
        "url": "https://www.marvel.com/comics?&options%5Boffset%5D=0&totalcount=12",
        "stories": 0
      },{
        "id": 3,
        "name": "Adam Destine",
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
        "profile": "http://marvel.com/universe/Destine,_Adam?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc",
        "url": "https://www.marvel.com/comics?&options%5Boffset%5D=0&totalcount=12",
        "stories": 0}];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const MARVELCHARACTER_ID = 1;

        const request = mockRequest({
            params: {
                id: MARVELCHARACTER_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(MARVELCHARACTER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === MARVELCHARACTER_ID)
                );                
            })
    });
});