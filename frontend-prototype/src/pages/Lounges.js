import lounges from '../data/lounges.json';

export default function Lounges() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Available Lounges</h2>
      <ul className="space-y-4">
        {lounges.map((lounge, index) => (
          <li key={index} className="p-4 border rounded bg-white shadow">
            <h3 className="text-lg font-semibold">{lounge.name}</h3>
            <p className="text-gray-600">{lounge.airport} - {lounge.location}</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              {lounge.perks.map((perk, idx) => <li key={idx}>{perk}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
