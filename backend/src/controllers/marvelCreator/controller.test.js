const { mockRequest, mockResponse } = require('jest-mock-req-res');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("Marvel creator controller", () => {
    const mockData = [{
        "id": 1,
        "fullName": "Blank",
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
        "comicsAvailable": 8,
        "url": "http://marvel.com/comics/creators/3095/blank?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc"
      }, {
        "id": 2,
        "fullName": "Blond",
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
        "comicsAvailable": 8,
        "url": "http://marvel.com/comics/creators/7646/blond?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc"
      }, {
        "id": 3,
        "fullName":"Brown",
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
        "comicsAvailable": 0,
        "url": "http://marvel.com/comics/creators/7596/brown?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc"
      }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const MARVELCREATOR_ID = 1;

        const request = mockRequest({
            params: {
                id: MARVELCREATOR_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(MARVELCREATOR_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(entity => entity.id === MARVELCREATOR_ID)
                );                
            })
    });
});