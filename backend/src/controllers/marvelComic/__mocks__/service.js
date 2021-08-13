const marvelComicService = jest.mock('./service');

let mockData;

marvelComicService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( entity => entity.id === id) ) 
);

marvelComicService.__setMockData = data => mockData = data;

module.exports = marvelComicService;
