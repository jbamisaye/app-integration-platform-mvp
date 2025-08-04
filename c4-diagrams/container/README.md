## 🧭 Containers in the App Integration Platform

The App Integration Platform is composed of the following modular containers, each with a clearly defined responsibility. This separation of concerns improves scalability, maintainability, and observability.

---

## 📦 Container

![Container Diagram](./container-diagram.png)

---

### 1. 🛡️ Authentication Service
**Purpose**:  
Manages user and system authentication and authorization.  
**Responsibilities**:
- Validates tokens for incoming API requests
- Integrates with external identity providers (e.g., Priority Pass SSO)
- Issues tokens for internal service-to-service communication if needed

---

### 2. 🛋️ Lounge Inventory Service
**Purpose**:  
Syncs Priority Pass lounge content to the integration platform.  
**Responsibilities**:
- Periodically pulls lounge data, descriptions, access rules, and availability
- Caches and updates lounge metadata in the internal data store
- Enables content sharing with the Taxi App for cross-promotional features

---

### 3. 🛫 Flight ETA Recommender Service
**Purpose**:  
Calculates optimal departure times based on flight schedules.  
**Responsibilities**:
- Pulls real-time flight data from third-party providers (e.g., FlightAware)
- Computes estimated departure recommendations for travelers
- Updates cached ETA results in the internal data store

---

### 4. 🚖 Taxi Inventory Sync Service
**Purpose**:  
Keeps the taxi availability and pricing up-to-date from the Global Taxi App.  
**Responsibilities**:
- Periodically syncs available vehicles, types, and ETA info
- Caches taxi data to support search, availability, and price estimation
- Feeds Booking Orchestrator with live data for decision-making

---

### 5. 📋 Booking Orchestrator Service
**Purpose**:  
Handles end-to-end booking workflow initiated via the Priority Pass App.  
**Responsibilities**:
- Validates user context and booking rules
- Orchestrates booking calls to the Global Taxi API
- Writes booking state to internal store
- Triggers user notifications and logs actions

---

### 6. 📣 Notification Service
**Purpose**:  
Delivers real-time alerts and updates to users.  
**Responsibilities**:
- Sends SMS or push notifications using external services (e.g., Twilio, Firebase)
- Subscribed to events from Booking Orchestrator and ETA services
- Logs delivery status and errors to data store for audit and retry

---

### 7. 🗃️ Internal Data Store
**Purpose**:  
Central shared store for all synchronized and operational data.  
**Responsibilities**:
- Stores bookings, lounge and taxi inventory, ETA results, and user preferences
- Serves as a single source of truth across services
- Designed for read/write performance and durability

---

### 8. 🧑‍💼 Admin & Dashboard Service
**Purpose**:  
Provides operations and support visibility into the integration platform.  
**Responsibilities**:
- Displays sync logs, booking statuses, and error rates
- Allows manual trigger of syncs or booking retries (admin only)
- Enables support teams to query user bookings or system health
- Optional authentication integration for admin role access

---

## 🔗 Document Navigation
- Next: [Component Diagram (Booking Orchestrator) →](../component/README.md)
- Previous: [← Context Diagram](../context/README.md) 
