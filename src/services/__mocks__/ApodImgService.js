

const ApodImgService = {
  
  getIsValidDate:(d)=>{
    return true;
  },
  
  getItemFromDate: async (date) => {
    return {
      "copyright": "Stan Honda",
      "date": date,
      "explanation": "MOCK - There's an interesting sky to see if you wake up before the Sun. Lined up on toward the eastern horizon are four planets in a row. The planets are so bright they can even be seen from the bright sky inside a city. In fact, the featured image was taken from New York City, USA, with the foreground highlighted by the RFK (Triborough) Bridge. Pictured, the planets are, left to right, Jupiter, Venus, Mars, and Saturn.  The planets all appear in a row because they all orbit the Sun in the same plane. This plane, called the ecliptic plane, was created in the early days of our Solar System and includes all planets, including Earth.  The morning planet parade will continue throughout April and May, and will even be joined by Mercury in June.   APOD volunteer programming opportunity: Discord",
      "hdurl": "https://apod.nasa.gov/apod/image/2204/PlanetBridge_Honda_3000.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "MOCK - Planet Line over New York Bridge -",
      "url": "https://apod.nasa.gov/apod/image/2204/PlanetBridge_Honda_960.jpg"
    }
  
  }
}

export default ApodImgService;