import taxis from '../data/taxi.json';
import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';

export default function TaxiBooking() {
  const {
    selectedTaxi,
    setSelectedTaxi,
    selectedFlight,
    setNotification
  } = useAppContext();

  const navigate = useNavigate();

  const handleTaxiSelect = (taxi) => {
    if (!selectedFlight) {
      setNotification("⚠️ Please select a flight before booking a taxi.");
      return;
    }

    setSelectedTaxi(taxi);
    setNotification(`🚖 Taxi booked with ${taxi.provider}`);
  };

  const handleGoToSummary = () => {
    navigate('/summary');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Available Taxis</h2>

      {selectedFlight ? (
        <p className="mb-4 text-sm text-gray-700">
          Flight: <strong>{selectedFlight.flightNumber}</strong> → {selectedFlight.arrivalAirport} (Terminal {selectedFlight.terminal})
        </p>
      ) : (
        <p className="mb-4 text-sm text-red-600 font-medium">
          ⚠️ No flight selected. Taxi bookings require a selected flight.
        </p>
      )}

      {selectedTaxi && (
        <div className="mb-4 p-3 bg-green-50 border border-green-300 rounded text-green-700">
          ✅ You booked: {selectedTaxi.provider} for {selectedTaxi.price}
          <div className="mt-3">
            <button
              onClick={handleGoToSummary}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              View Trip Summary →
            </button>
          </div>
        </div>
      )}

      <ul className="space-y-4">
        {taxis.map(taxi => (
          <li key={taxi.id} className="p-4 border rounded bg-white shadow flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-blue-700">{taxi.provider}</h3>
              <p className="text-gray-600">ETA: {taxi.estimatedArrival}</p>
              <p className="text-gray-600">Leave by: {new Date(taxi.recommendedLeaveTime).toLocaleTimeString()}</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-lg font-bold">{taxi.price}</span>
              <button
                onClick={() => handleTaxiSelect(taxi)}
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Book
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
