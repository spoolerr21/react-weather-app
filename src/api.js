export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1236f4011cmshb4ba25cff5b3b7bp1700a0jsn372070b619aa',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"
export const WEATHER_API_KEY = "02dbdbf1989c9908b3754e03eff911d3"

export function getDirection(angle) {
    // We divide it into 16 sections
    let directions = ["N", "NNE", "NE", "ENE", "E",
        "ESE", "SE", "SSE", "S",
        "SSW", "SW", "WSW", "W",
        "WNW", "NW", "NNW"
    ];
    // This means, every 360 / 16 degree, there's a section change
    // So, in our case, every 22.5 degree, there's a section change
    // In order to get the correct section, we just need to divide
    let section = parseInt(angle / 22.5 + 0.5);
    // If our result comes to be x.6, which should normally be rounded off to
    // int(x) + 1, but parseInt doesn't care about it
    // Hence, we are adding 0.5 to it

    // Now we know the section, just need to make sure it's under 16
    section = section % 16;

    // Now we can return it
    return directions[section];
}