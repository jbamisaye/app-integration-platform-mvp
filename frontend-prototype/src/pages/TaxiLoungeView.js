import { useEffect, useState } from 'react';
import { getLoungesByAirport } from '../services/loungeService';
import LoungeList from '../components/LoungeList';

export default function TaxiLoungeView() {
  const [lounges, setLounges] = useState([]);

  useEffect(() => {
    // Hardcoded for prototyping – LHR (London Heathrow)
    const airportCode = 'LHR';
    const results = getLoungesByAirport(airportCode);
    setLounges(results);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🚖 Lounge Access via Taxi App</h2>
      <p className="text-sm text-gray-700 mb-3">
        Showing Priority Pass lounges at <strong>London Heathrow (LHR)</strong>
      </p>
      <LoungeList lounges={lounges} title="Priority Pass Lounges (Shared API)" />
    </div>
  );
}
