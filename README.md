# neonTemplate
Simple template for personal usage to generate all files required to work on backend using Hono, Drizzle and Neon

# Getting started:
Only requirements are Node and Git installed.
```
git clone https://github.com/FlackCode/neonTemplate
cd neonTemplate
npm install -D tsx typescript drizzle-kit vitest wrangler @cloudflare/workers-types @cloudflare/vitest-pool-workers
npm install hono dotenv drizzle-orm @neondatabase/serverless
```
Bun verson:
```
git clone https://github.com/FlackCode/neonTemplate
cd neonTemplate
bun i -D tsx typescript drizzle-kit vitest wrangler @cloudflare/workers-types @cloudflare/vitest-pool-workers
bun i hono dotenv drizzle-orm @neondatabase/serverless
```
<p>
  add .dev.vars in root folder and enter your DB_URL.
</p>

<p>After setting up schema to your liking, run </p>

```bun run db:generate```

<p>and</p>

```bun run db:migrate```

<p>Then, edit the index.ts to your liking, log in using </p>

```bunx wrangler login```

<p>and deploy using</p>

```bun run deploy```

<p>In cloudflare, set integrations to your neon database. That's it!</p>
