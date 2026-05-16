# 🍽️ QuioscoApp — Restaurant Self-Order Kiosk

> A modern self-order kiosk system for restaurants and cafeterias, built with Next.js 15, Prisma ORM, and PostgreSQL. Customers can browse the menu by category, build their order, and complete payment — all from a clean, responsive interface.

---

## 📌 Overview

QuioscoApp is a full-stack web application that simulates a self-service ordering kiosk for a restaurant or cafeteria environment. It demonstrates real-world patterns including server-side rendering, direct database access via ORM, state management for a shopping cart, and order processing with payment integration.

This project is part of my professional portfolio and showcases my ability to build production-ready applications using modern JavaScript/TypeScript technologies.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Database** | PostgreSQL |
| **ORM** | Prisma ORM v7 |
| **Styling** | Tailwind CSS |
| **Runtime** | Node.js |
| **Driver Adapter** | @prisma/adapter-pg |

---

## ✨ Features

- 📂 **Menu by Category** — Browse food and beverage items organized by category with a persistent sidebar navigation
- 🛒 **Order Cart** — Add, remove, and adjust item quantities in a real-time shopping cart
- 💳 **Order & Payment** — Place orders and process payment through an integrated POS flow
- 🖥️ **Server Components** — Menu and categories are fetched directly from the database on the server for fast initial load
- 📱 **Responsive Design** — Fully functional on desktop kiosk screens and mobile devices
- 🗄️ **Database Seeding** — Pre-loaded categories and products via Prisma seed script

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home / Kiosk view
│   └── admin/               # Admin panel routes
├── components/
│   ├── ui/                  # Reusable UI components
│   └── OrderSidebar.tsx     # Category navigation sidebar
├── lib/
│   └── prisma.ts            # Prisma singleton client
└── generated/
    └── prisma/              # Auto-generated Prisma client

prisma/
├── schema.prisma            # Database schema
├── seed.ts                  # Database seeding script
├── migrations/              # Migration history
└── data/                    # Seed data (categories & products)
```

---

## 🗃️ Database Schema

```prisma
model Category {
  id       Int       @id @default(autoincrement())
  name     String
  slug     String    @unique
  products Product[]
}

model Product {
  id         Int      @id @default(autoincrement())
  name       String
  price      Float
  image      String
  categoryId Int
  category   Category @relation(fields: [categoryId], references: [id])
}
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/RefugioDiaz1/quiosco-app.git
cd quiosco-app

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env and set your DATABASE_URL

# 4. Run database migrations
npx prisma migrate dev

# 5. Seed the database
npx prisma db seed

# 6. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🌱 Environment Variables

Create a `.env` file in the root of the project:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

---

## 📸 Screenshots

> _Coming soon — screenshots of the kiosk menu, cart, and order flow._

---

## 🧠 Key Concepts Demonstrated

- **Next.js App Router** — File-based routing with nested layouts, Server Components, and `loading.tsx` / `not-found.tsx` conventions
- **Server Components** — Direct database queries from components without REST API layer
- **Prisma v7 with Driver Adapters** — Modern ORM setup using `@prisma/adapter-pg` for PostgreSQL
- **TypeScript throughout** — Fully typed data layer from database to UI
- **Separation of concerns** — Data fetching, UI, and business logic kept in separate layers

---

## 👨‍💻 Author

**Refugio De La O Díaz**
Full Stack Developer — Tabasco, México

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/refugio-de-la-o-d%C3%ADaz)
[![GitHub](https://img.shields.io/badge/GitHub-black?style=flat&logo=github)](https://github.com/RefugioDiaz1)

---

## 📄 License

MIT License — feel free to use this project as a reference or starting point.



********************************************
Anotaciones relevantes del proyecto y stack
********************************************

todos los archivos de next.js se ejecutan en el servidor pero igual tambien se permite ejecutar componentes en el cliente, se le conoce
como rendering

RENDERING

componentes del cliente y del servidor

Server components

se renderiza antes de la aplicacion, antes de crear el bundle en un ambiente separado
es de react

caracter. de next se le podia ejecutar codigo react en el servidor, SSR
todo el codigo de react se ejecutab en el servidor

en versiones anteriores el mismo codigo se ejecutaba primero en el servidior y despues en el cliente

desde next 13 en el app directory todos los componentes se ejecutan por default en el servidor

en caso de que sea necesario se puede añadir que un componente sea en el cliente con la directiva "use cliente"

cuando tenemos aplicaciones con componentes de servidior y cliente es importante que es el codigo es unidireccional

en el server se refiere a que por ejemplo al hacer console.log se ejecutara aqui y no en el amb desarrollador en la web

si se pone el use client, lo que declare abajo o renderice alguna otra pagina, lo tomare como cliente ya

CONSIDERACIONES 
server y client components

SERVER
CLIENTE
CLIENT

un componente de servidor puede mostrar un componente de cliente y varios

Server
Cliente
Server

asi no se puede, no se recomienda siempre

lo que se puede hacer

SERVER
CLIENTE
CLIENT


cuanod usar los server components

para obtener datos desde un orm y mostrar informacion

ejecutar funciones del servidior y acceder a recursos unicamente en el backend

autenticacion, api keys o tokens

CLIENT Ccomponents

cuando desees utilizar eventos o añadir interacciones a tusaplicaicones por medio de inclick, onsubmit, onchange, etc

si deseas utilizar los hooks de react como useState, useEffect, useReducer, etc

Utilizar librerias que no se ejecutan en el servidor como toast, zustand u otras que solo funcionan en el cliente

utilizar APIs del navegador como LocalStorage, notificaion API, geolocation api, etc

Consumir datos de una API externas en json


LOS LAYOUT TE Permite agrupar un diseño en rutas relacionadas




PRISMA
Es un ORM

open source se usa con javascript o typescript

consta de 3 herramientas
1.- Prisma Client  --> es el query buolder o herramienta que permite consultar la bd, soporte node.js y typescript
2.- Prisma Migrate --> puedes definir tus tablas y relaciones genera toda la base de datos por ti
3.- Prisma Studio --> no es open source pero puede utilizarse localmente y sirve para ver tus bd

MariaDB
Sql Server
MongoDB
Mysql
PostgreSQL
SQLite

como instalarlo

npm i -D prisma tsx            

npm install @prisma/client dotenv

npx prisma init      --->  aqui gnera algunos archivos de prisma

se uso neon para la bd de PostGreSql

npx prisma generate

una vez que se agregan los modelos en schema.prisma se tienen que sincronizar con la bd, asi como c#
se le pone nombre de la migration

npx prisma migrate dev

npx prisma studio     

esto es para ejecutar el seed generado 

npx prisma db seed


seed es el archivo adicional o los datos iniciales en la bd

para ejecutar ese db seed, fue de la version 6 ahora con la 7, cambio
se tiene que instalar un adaptador, 

npm install @prisma/adapter-pg pg
npm install --save-dev @types/pg

para que en cada vista no se tenga que usar el adaptador se agrega un archivo global para tomar la conexion directamente

el tsx es para ejecutar el archivoi seed desde la linea de comandos


DATA FETCHING

es una de las caracteristicas de next.js

obtener datos

se puede hacer de 4 formas diferentes

1.- en el servidoir con fetch()

2.- en el servidor con un ORM o consultas SQL

3.- En el cliente con route Handler y una peticion GET

4- en el cliente con react query, axios, SWR u otras opciones

los server components pueden ser asyncronos



ROUTING DINAMICO EN NEXT.JS

Es cuando la URL tiene un valor que cambia — un ID, un slug, un nombre. En lugar de crear un archivo por cada valor posible, creas uno solo con corchetes:
app/categoria/[slug]/page.tsx  ← Un archivo, infinitas URLs
Eso cubre:
/categoria/hamburguesas
/categoria/bebidas
/categoria/postres


SE INSTALA ZUSTAND PARA EL ESTADO GLOBAL DEL CARRITO

npm i zustand

solo funciona en cliente no en el server


se instalan algunas dependencias de icon

npm i @heroicons/react



SERVER ACTIONS

solo disponibles en App Router
en lo nuevo de next.js

son funciones asyncronas se ejecutan en el server, se utlizan con clientes de componentes y servidor

se utilizan para crear datos o mutarlos y estan muy unidos al CRUD

utilizan la directiva user server

los server actions, debe estar dentro del atributo action={} de un <form>

tambien pueden ser llamados dentro de useEffect o al presionar un boton

no son exclusivos de next.js

se agrega zod

npm i zod

instalar toastify

npm i react-toastify


LO IDEAL ES USAR ZOD CON RHF, AQUI NO SE USO, SOLO ZOD, PERO LO ANOTO PARA CULQUIER CAMBIO A FUTURO

zodResolver viene de esta librería:
@hookform/resolvers

npm install @hookform/resolvers

EJ. 

const {
   register,
   handleSubmit,
   formState: { errors }
} = useForm({
   resolver: zodResolver(ProductSchema)
})



para las imagenes se recomienda cloudinary

npm i next-cloudinary

libreria para iconos

npm i react-icons


SWR

es una herramienta desarrollada por los creadores de next.js y vercel 
bastante similar a react query

solo funciona en el cliente, y requiere endpoint de una api

npm i swr

