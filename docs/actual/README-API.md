### Sample API Endpoints by Service

#### Authentication Service
- `POST /auth/login` – Authenticate user credentials  
- `GET /auth/validate` – Validate token and session  

#### Lounge Inventory Service
- `GET /lounges` – Get list of available lounges  
- `GET /lounges/{id}` – Get details of a specific lounge  

#### Flight ETA Recommender Service
- `POST /flights/recommendation` – Submit flight info, get ETA and leave time  

#### Taxi Inventory Sync Service
- `GET /taxis/available` – Retrieve list of nearby available taxis  
- `GET /taxis/pricing` – Fetch pricing based on route/airport  

#### Booking Orchestrator Service
- `POST /bookings/taxi` – Initiate taxi booking  
- `GET /bookings/{id}` – Get booking status  
- `POST /bookings/cancel` – Cancel a booking  

#### Notification Service
- `POST /notifications/send` – Push message to user  

#### Admin & Dashboard Service
- `GET /admin/metrics` – Platform health and statistics  
- `GET /admin/bookings` – Overview of booking logs  

---

#### Repository Home : [`/Repository-Home/`](../../README.md)  