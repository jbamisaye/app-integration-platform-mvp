## Prototype Architecture Overview

### Scope
This prototype demonstrates a simplified front-end simulation of the integration between Priority Pass and a global taxi platform. It showcases key user workflows such as flight selection, taxi booking, and trip summary. This is aligned with the backend architecture's intent, but without real backend services.

---

### Features

- Flight selection from multiple flights with detailed info.
- Taxi booking with multiple taxi options and ETA recommendations.
- Notifications for key actions (flight selection, taxi booking).
- Summary page consolidating flight and taxi details.
- Smooth navigation flow (flight → taxi → summary).
- All data sourced from static JSON for simplicity and clarity.

---

### Technical Stack
- React 19: Component-based UI framework.
- Tailwind CSS: Utility-first styling for fast and clean UI.
- React Router: Multi-page navigation flow simulation.
- React Context API: Manages state globally (selected flight, taxi, etc.).
- Static JSON files: Mock backend data for flights and taxis.

### Functional Mapping to Real Architecture
| Real Component                | Prototype Equivalent                                   |
|------------------------------|--------------------------------------------------------|
| Booking Orchestrator Service | React Context logic + route-based workflows           |
| Flight ETA Recommender       | Hardcoded logic using flight departure times           |
| Taxi Inventory Sync Service  | Static taxi JSON data                                  |
| Booking Validator            | Client-side validation when booking                    |
| Notification Service         | In-app notification banner                            |
| Booking Repository           | Temporarily stored in browser memory (React context)   |
| UI for Priority Pass App     | React pages: Home, Flight Info, Taxi Booking, Summary |

### Design Decisions
- All logic is simulated on the front-end to meet the prototype constraints.
- JSON as mock APIs ensures no external dependencies.
- Minimal navigation creates a natural flow: Flight → Taxi → Summary.
- Notification banners emulate event feedback to user.
- UI components designed to reflect expected backend flows and orchestration.

### Omissions & Trade-offs
- **Backend Services**: The backend microservices are simulated; no real API calls or databases are used.
- **Authentication**: User authentication is not implemented.
- **Dynamic Data**: No real-time updates; taxi and flight data are static.
- **Error Handling**: Basic validation exists, but comprehensive error handling is minimal.
- **Styling**: The UI is functional and minimal, Basic styling only; accessibility and mobile optimization are limited.
- **Scalability**: Designed as a prototype, not optimized for performance or multi-user scenarios.

### Suggested Future Enhancements
- Integrate with real APIs (e.g., flight schedules, ride booking).
- Use Redux or Zustand for scalable state.
- Add form validation libraries (e.g., Yup).
- Use Storybook for component documentation.
- Enable localStorage or backend sync for persistence.
- Add automated tests (unit + UI).
- Implement real-time notifications and booking confirmations.  
- Improve UI/UX with responsive design and accessibility.  
- Create admin dashboard for operational monitoring.
- Add user authentication and profile management.
- Allow users to book train options as an alternative to taxis.
- Support taxi bookings independently of flight selection.

---

## How to Run Prototype

1. Clone the repo  
2. Run `cd frontend-prototype`
2. Run `npm install`  
3. Run `npm start`  
4. Navigate through the app:  
   - Select a flight  
   - Book a taxi  
   - View trip summary  

---

## Supported Use Cases / Customer Journey

- User plans travel **before arriving at the airport** (e.g., from home).  
- Selects flight to get accurate departure and ETA recommendations.  
- Books taxi based on recommended leave time.  
- Receives booking confirmation and trip summary.  
- Optionally accesses lounge information.  

#### Prototype Source : [`/frontend-prototype/`](./)  
#### Repository Home : [`/Repository-Home/`](../README.md)  