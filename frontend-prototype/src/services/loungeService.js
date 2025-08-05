import lounges from '../data/lounges.json';

export function getLoungesByAirport(airportCode) {
  return lounges.filter(lounge => lounge.airport === airportCode);
}