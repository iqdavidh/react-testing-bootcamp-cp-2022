import ApodImgService from "./ApodImgService";

const getToday = () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  
  return today.getFullYear() + `-${month}-${day}`;
}

describe('ApodImgService', function () {
  it('should get image data from null date as curent date', async function () {
    const data = await ApodImgService.getItemFromDate();
    expect(data).toBeTruthy();
    expect(data.date).toBe(getToday());
    
    const propList = [
      "copyright",
      "date",
      "explanation",
      "hdurl",
      "media_type",
      "service_version",
      "title",
      "url"
    ];
    propList.forEach(p => {
      expect(data[p]).not.toBeUndefined();
    })
    
    
  });
  
  it('should get image data from especific date', async function () {
    
    const date="2022-04-30"
    const data = await ApodImgService.getItemFromDate(date);
    expect(data).toBeTruthy();
    expect(data.date).toBe(date);
   
  });
});