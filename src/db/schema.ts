import { pgTable, serial, text, doublePrecision, uuid } from "drizzle-orm/pg-core"

export const example = pgTable('exampleTable', {
    id: serial('id').primaryKey(),
    name: text('name'),
    something: doublePrecision('something')
})