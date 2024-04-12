import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about'
import introduction from './schemas/introduction'
import personalProjects from './schemas/personalProjects'
import footer from './schemas/footer'
import contact from './schemas/contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, introduction, personalProjects, footer, contact],
}
