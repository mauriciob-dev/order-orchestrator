# Order Orchestrator

Backend service responsible for orchestrating the lifecycle of orders across
payments, inventory, and shipping domains.

## Tech Stack

- NestJS
- Prisma ORM
- MySQL
- TypeScript

## Architecture

- Modular monolith
- DDD-lite
- Repository pattern
- Prisma as infrastructure adapter

## Running locally

```bash
npm install
npx prisma migrate dev
npm run start:dev
```
