const NasaApiClient = require("./NasaApiClient");
const LibValidacion = require("../lib/LibValidacion");

describe('NasaApiClient', function () {
  it('should return api response  - no value is current date ', async function () {
    const result= await NasaApiClient.Apod();
    expect(result).toBeTruthy();
    const propList=[
      "copyright",
      "date",
      "explanation",
      "hdurl",
      "media_type",
      "service_version",
      "title",
      "url"
    ];
    LibValidacion.modelHasPropOrMsgError(result,propList);
    
  });
});