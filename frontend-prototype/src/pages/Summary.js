import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';

export default function Summary() {
  const { selectedFlight, selectedTaxi } = useAppContext();
   const navigate = useNavigate();


  const formatArrivalFromLeaveTime = (leaveTime, durationMins) => {
  const leave = new Date(leaveTime);
  const arrival = new Date(leave.getTime() + durationMins * 60000);
  return arrival.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

  const handleGoLounges = () => {
    navigate('/lounges');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Trip Summary</h2>

      {/* Flight Section */}
      <div className="mb-6 p-4 border rounded bg-white shadow">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Flight Details</h3>
        {selectedFlight ? (
          <>
            <p><strong>{selectedFlight.airline}</strong> - {selectedFlight.flightNumber}</p>
            <p>{selectedFlight.departureAirport} → {selectedFlight.arrivalAirport}</p>
            <p>Terminal: {selectedFlight.terminal}</p>
            <p>Departure Time: {new Date(selectedFlight.departureTime).toLocaleString()}</p>
          </>
        ) : (
          <p className="text-gray-500">No flight selected yet.</p>
        )}
      </div>

      {/* Taxi Section */}
      <div className="mb-6 p-4 border rounded bg-white shadow">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Taxi Booking</h3>
        {selectedTaxi ? (
          <>
            <p><strong>{selectedTaxi.provider}</strong></p>
            <p>ETA: <strong>{formatArrivalFromLeaveTime(selectedTaxi.recommendedLeaveTime, selectedTaxi.duration)}</strong></p>
            <p>Leave by: {new Date(selectedTaxi.recommendedLeaveTime).toLocaleTimeString()}</p>
            <p>Price: {selectedTaxi.price}</p>
          </>
        ) : (
          <p className="text-gray-500">No taxi booked yet.</p>
        )}
      </div>

    {/* Taxi Section */}
      <div className="mb-4 p-3 bg-green-50 border border-green-300 rounded text-green-700">
           
          <div className="mt-3">
            <button
              onClick={handleGoLounges}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              View Lounges →
            </button>
          </div>
        </div>
    </div>
  );
}
