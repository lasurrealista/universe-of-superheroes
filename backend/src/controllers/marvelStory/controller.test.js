const { mockRequest, mockResponse } = require('jest-mock-req-res');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("Marvel story controller", () => {
    const mockData = [{
            "id": 1,
            "name": "Daredevil/Elektra: Love & War (Hardcover)",
            "title": "Elektra: Assassin the story of how a tragic murder transformed an innocent, naive college student into a deadly assassin, and "
          },
          {
            "id": 2,
            "name": "Elektra & Wolverine: The Redeemer (Hardcover)",
            "title":"Haunted by her own father's death, Elektra finds that killing her latest target's daughter the only witness to the murder is"
          },
          {
            "id": 3,
            "name": "Elektra Lives Again (Hardcover)",
            "title": "Despite the fact that Elektra died in his arms, Daredevil is plagued by recurring nightmares and terrible premonitions that his "
          }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const MARVELSTORY_ID = 1;

        const request = mockRequest({
            params: {
                id: MARVELSTORY_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(MARVELSTORY_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(entity => entity.id === MARVELSTORY_ID)
                );                
            })
    });
});