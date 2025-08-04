export default function Home() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Priority Travel Experience</h2>
      <p className="text-gray-600 mb-6">
        Manage airport lounges and book taxis based on your flight.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Flight Info" href="/flight-info" description="Enter or view your upcoming flights." />
        <Card title="Taxi Booking" href="/taxi-booking" description="Compare and reserve a ride." />
        <Card title="Lounges & Perks" href="/lounges" description="View lounge access and perks." />
      </div>
    </div>
  );
}

function Card({ title, description, href }) {
  return (
    <a href={href} className="block p-4 border rounded-lg shadow hover:shadow-md transition bg-white">
      <h3 className="font-semibold text-lg text-blue-600">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </a>
  );
}
