const { mockRequest, mockResponse } = require('jest-mock-req-res');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("Marvel event controller", () => {
    const mockData = [ {
        "id": 1,
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/5/60/51cb2d77a0410.jpg",
        "title": "Crossing",
        "description": "Norman Osborn came out the hero of Secret Invasion, and now the former Green Goblin has been handed control of the Marvel Universe. With his Cabal and the Dark Avengers at his side, can anything stop this long time villain from reshaping the world in his own image? And what has become of the heroes?",
        "modified": "2013-10-18T12:32:59-0400",
        "url": "http://marvel.com/comics/events/239/crossing?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc"
      },
      {
        "id": 2,
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/528cf4ac6c15f.jpg",
        "title": "Dark Reign",
        "description": "An adult Franklin Richards travels back from the year 2017 to repair perceived \"inaccuracies\" in the timeline by altering reality. Richards' tampering of reality triggers a Sentinel program that awakens Ahab, the mutant hound-master, who attempts to apprehend the adult Richards in order to prevent any deviations from the timeline that spurs the Sentinel-ruled North America.",
        "modified": "2013-11-20T12:51:39-0500",
        "url": "http://marvel.com/comics/events/318/dark_reign?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc"
      },
      {
        "id": 3,
        "thumbnail": "http://i.annihil.us/u/prod/marvel/i/mg/6/00/51cb2ea890038.jpg",
        "title": "Days of Future Present",
        "description": "-",
        "modified": "2013-10-18T12:33:05-0400",
        "url": "http://marvel.com/comics/events/240/days_of_future_present?utm_campaign=apiRef&utm_source=14f4ae6a45f097d65a5b56530da74ecc"
      }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const MARVELEVENT_ID = 1;

        const request = mockRequest({
            params: {
                id: MARVELEVENT_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(MARVELEVENT_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(entity => entity.id === MARVELEVENT_ID)
                );                
            })
    });
});