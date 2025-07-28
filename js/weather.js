class Weather {
    constructor(city) {
        this.apiKey = '86b0bd9b76517148d71f0967cc7de574';
        this.city = city; 
    }
    async getWeather() {
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&appid=${this.apiKey}`); 
        if(res.ok) {
            const cityData = await res.json(); 

            if(cityData.length === 0) {
                throw Error("Invalid city name: ");
                
            }
            const resWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityData[0].lat}&lon=${cityData[0].lon}&lang=fa&appid=${this.apiKey}`); 
            const data = await resWeather.json(); 
            return data; 
        } else {
            throw new Error(`Error get city data, status: ${res.status}`);
            
        }
        
    }

    changeLocation(city) {
        this.city = city; 
    }

    get location() {
        return this.city; 
    }
}