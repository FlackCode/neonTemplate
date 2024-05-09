import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { migrate } from 'drizzle-orm/neon-http/migrator'
import { config } from 'dotenv'

config({
    path: '.dev.vars'
})

const sql = neon(process.env.DB_URL!)

const db = drizzle(sql)

const main = async () => {
    try {
        await migrate(db, {
            migrationsFolder: 'drizzle'
        })
        console.log('Migration successful')
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

main()