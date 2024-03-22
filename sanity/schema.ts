import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about'
import introduction from './schemas/introduction'
import personalProjects from './schemas/personalProjects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, introduction, personalProjects],
}
