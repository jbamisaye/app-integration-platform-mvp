import flights from '../data/flight.json';
import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';

export default function FlightInfo() {
  const {
    selectedFlight,
    setSelectedFlight,
    setNotification
  } = useAppContext();

  const navigate = useNavigate();

  const handleSelect = (flight) => {
    setSelectedFlight(flight);
    setNotification(`Flight ${flight.flightNumber} selected.`);
  };

  const handleContinue = () => {
    navigate('/taxi-booking');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Select Your Flight</h2>

      {selectedFlight && (
        <div className="mb-4 p-3 bg-green-50 border border-green-300 rounded text-green-700">
          ✅ You selected: {selectedFlight.airline} {selectedFlight.flightNumber}
          <div className="mt-3">
            <button
              onClick={handleContinue}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Continue to Taxi Booking →
            </button>
          </div>
        </div>
      )}

      <ul className="space-y-4">
        {flights.map(flight => (
          <li key={flight.id} className="p-4 border rounded bg-white shadow flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">
                {flight.airline} - {flight.flightNumber}
              </h3>
              <p className="text-gray-600">{flight.departureAirport} → {flight.arrivalAirport}</p>
              <p className="text-sm text-gray-500">
                Terminal: {flight.terminal} | Departs: {new Date(flight.departureTime).toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => handleSelect(flight)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
