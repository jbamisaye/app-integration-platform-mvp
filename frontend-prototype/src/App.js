import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FlightInfo from './pages/FlightInfo';
import TaxiBooking from './pages/TaxiBooking';
import Lounges from './pages/Lounges';
import Summary from './pages/Summary';
import TaxiLoungeView from './pages/TaxiLoungeView';
 

import { useAppContext } from './AppContext';

function App() {
  const { notification, setNotification } = useAppContext();

  return (
    <div>
      <Navbar />

      {notification && (
        <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-2 text-sm text-center">
          {notification}
          <button
            onClick={() => setNotification("")}
            className="ml-4 text-green-700 underline"
          >
            Dismiss
          </button>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight-info" element={<FlightInfo />} />
        <Route path="/taxi-booking" element={<TaxiBooking />} />
        <Route path="/lounges" element={<Lounges />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/taxi-app/lounges" element={<TaxiLoungeView />} />

      </Routes>
    </div>
  );
}

export default App;
