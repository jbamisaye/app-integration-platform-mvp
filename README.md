# App Integration MVP

## Overview

This repository contains the architectural documentation and a solution prototype for integrating a **Priority Pass app** with a **Global taxi service** to enhance the airport journey experience for travelers.

It includes:

- Architecture artifacts following the C4 model, including Context, Container, and Component diagrams.
- A front-end prototype built with React and Tailwind CSS, simulating key user workflows such as flight selection, taxi booking, and trip summary display.
- Raw draw.io files and detailed design descriptions to communicate system structure, responsibilities, and interactions.
- Documentation explaining technical decisions, trade-offs, and alignment between the prototype and the proposed architecture.

The overall system enables smooth airport journeys by exposing a central middleware layer that:

- Aggregates lounge and taxi availability
- Recommends optimal departure times based on flight status
- Coordinates ride bookings and user notifications

---

## Architecture Overview

### Context Diagram : [`/c4-diagrams/context/readme`](./c4-diagrams/context/README.md)  

### Container Diagram : [`/c4-diagrams/container/readme`](./c4-diagrams/container/README.md) 

### Component Diagram - Booking Orchestrator : [`/c4-diagrams/component/readme`](./c4-diagrams/component/README.md)  

### Omissions & Trade-offs : [`/docs/actual/readme`](./docs/actual/README.md)  

### Sample API Endpoints by Service : [`/docs/actual/readme-api`](./docs/actual/README-API.md)  

---

## Prototype Architecture & Overview

### Overview : [`/frontend-prototype/readme`](./frontend-prototype/README.md)

### Prototype Source : [`/frontend-prototype/`](./frontend-prototype/)  

---

## Use of AI Tools 

During this design, I used **ChatGPT** strategically to accelerate tasks without compromising design control. Click for more specific information on use of AI tool:
### Use of AI : [`/docs/actual/readme-ai`](./docs/actual/README-AI.md)  