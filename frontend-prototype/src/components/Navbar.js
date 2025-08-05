import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Priority Travel</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/flight-info" className="hover:underline">Flight Info</Link>
          <Link to="/taxi-booking" className="hover:underline">Book Taxi</Link>
          <Link to="/lounges" className="hover:underline">Lounges</Link>
          <Link to="/summary" className="hover:underline">Summary</Link>
     
          <Link to="/taxi-app/lounges" className="hover:underline">Taxi App Lounges</Link>
        
        </div>
      </div>
    </nav>
  );
}
