import lounges from '../data/lounges.json';
import LoungeList from '../components/LoungeList';

export default function LoungeOffers() {
  return <LoungeList lounges={lounges} title="Priority Pass Lounges (Taxi App View)" />;
}
