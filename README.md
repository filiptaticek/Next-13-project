Important scripts and steps:

1. Install Prisma 
2. Create a prisma folder, and in it schema.prisma with schema of your tables
3. Go to Railway.com where you generate your DB and save its link to .env, so that it connects from schema.prisma file
4. Install Prisma client
5. In prisma folder, create and client.js file with some default content
6. Push your table to Railway, using command ,,npx prisma migrate dev" 
7. Starting with auth. We're gonna use next auth => npm install next auth
8. Create a auth folder in pages/api, create a [...nextAuth].js file
9. npm install next-auth @prisma/client @next-auth/prisma-adapter
10. For queries, we will use tanstack library, install with npm i @tanstack/react-query
11. Now we wrap our app with its component