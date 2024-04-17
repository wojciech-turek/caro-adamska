import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about'
import introduction from './schemas/introduction'
import footer from './schemas/footer'
import contact from './schemas/contact'
import reviews from './schemas/reviews'
import publications from './schemas/publications'
import personalProjects from './schemas/personalProjects'
import collabs from './schemas/collabs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, introduction, footer, contact, reviews, publications, personalProjects, collabs],
}
