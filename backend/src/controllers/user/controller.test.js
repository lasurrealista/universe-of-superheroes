const { mockRequest, mockResponse } = require('jest-mock-req-res');

const controller = require('./controller');
const service = require('./service');

jest.mock('./service');

describe("User controller", () => {
    const mockData = [{
        "id": 1,
        "first_name": "Missy",
        "last_name": "Peasee",
        "email": "mpeasee2f@indiatimes.com",
        "password": "$2a$10$RPE9tb5vX4YOniyMRV9pKu/OOt3HSU3Iz/C9H0i1WUBnQJK4/Cr12",
        "role": 3
    },
    {
        "id": 2,
        "first_name": "Charlotta",
        "last_name": "Enrigo",
        "email": "cenrigo2g@mashable.com",
        "password": "$2a$10$eeOqYlqF9aZB3XAY0dvJSOybLmJR2mh3x.8exWm02jIyHR4DWG9X2",
        "role": 2
    },
    {
        "id": 3,
        "first_name": "Hobie",
        "last_name": "Skoate",
        "email": "hskoate2h@nationalgeographic.com",
        "password": "$2a$10$aCbhQ4LzZGMIF8PKmNXbLejen5U./lhJ1fkNMW8mzx/SD.nggu19y",
        "role": 3
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        service.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const USER_ID = 1;

        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });

        return controller.findOne(request, response, nextFunction)
            .then( () => {
                expect(service.findOne).toBeCalledWith(USER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(entity => entity.id === USER_ID)
                );                
            })
    });
});