# Weather API

## Setup

- Create .env file with the next data

```
WEATHER_API = "https://api.openweathermap.org/data/2.5"
IP_API = "http://ip-api.com/json/"
WEATHER_API_KEY = XXXXXXXXXXXX
```

- then run

```sh
npm install
```

## Run

```sh
npm start
```

## Test

```sh
npm run test
```

## Test with coverage info

```sh
npm run coverage
```

## End Points

`/location`

Devuelve los datos de ubicación city según ip-api.

`/current[/city]`

City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo actual.

`/forecast[/city]`

City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días
