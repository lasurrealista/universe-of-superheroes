const { mockRequest, mockResponse } = require('jest-mock-req-res');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("Marvel comic controller", () => {
    const mockData = [{
            "id": 1,
            "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239.jpg",
            "title":"X-Men: Days of Future Past (Trade Paperback)",
            "pageCount": 144,
            "url": "http://marvel.com/comics/collection/1332/x-men_days_of_future_past_trade_paperback?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc"
          },
          {
            "id": 2,
            "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4.jpg",
            "title": "Official Handbook of the Marvel Universe (2004) #11 (X-MEN - AGE OF APOCALYPSE)",
            "pageCount": 0,
            "url": "http://marvel.com/comics/issue/1749/official_handbook_of_the_marvel_universe_2004_11_x-men_-_age_of_apocalypse/x-men_-_age_of_apocalypse?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc"
          },
          {
            "id": 3,
            "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc69f33cafc0.jpg",
            "title": "Ant-Man (2003) #2",
            "pageCount": 0,
            "url": "http://marvel.com/comics/issue/323/ant-man_2003_2?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc"
          }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const MARVELCOMIC_ID = 1;

        const request = mockRequest({
            params: {
                id: MARVELCOMIC_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(MARVELCOMIC_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(entity => entity.id === MARVELCOMIC_ID)
                );                
            })
    });
});