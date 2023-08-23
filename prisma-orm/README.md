READ THIS

1. install your prisma
2. run `npx prisma init`
3. setting your db connection in `.env`
4. setting your `schema.prisma` in `/prisma`

MY COMMAND

-   `db:push` this will reset and sync with your `.prisma/schema.prisma`
-   `db:seed` this will add seeder but you must configure seeder data in `./prisma/seed/your-seed.js` and setup in `.utils/run-seeder.js` for processing your seeder
-   `db:push:seed` this will execute two command before sequentialy. (tips, this command very usefull for updating schema and seed)
