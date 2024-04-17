import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about'
import introduction from './schemas/introduction'
import personalProjects from './schemas/personalProjects'
import footer from './schemas/footer'
import contact from './schemas/contact'
import reviews from './schemas/reviews'
import publications from './schemas/publications'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, introduction, personalProjects, footer, contact, reviews, publications],
}
