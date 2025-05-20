# Chuck & Code – Random Quote Web App

This is a small test app I developed as part of a technical task. It displays a random Chuck Norris quote from the "dev" category and counts the number of unique visitors to the site.

# Technologies used

- **Next.js**
- **Tailwind CSS**
- **Prisma ORM**
- **Chuck Norris API**

# Main functionality

- Get and display a random quote from the "dev" category
- Ability to update a quote by clicking a button
- Counting Visitors
- Responsive layout using Tailwind

# How to start a project

## Clone repository

git clone https://github.com/your-username/dev-quote-test.git
cd dev-quote-test

npm install

npx prisma generate
npx prisma migrate dev --name init

npm run dev

Open http://localhost:3000 in your browser.

## Open database

npx prisma studio

Open http://localhost:5555 in your browser.
