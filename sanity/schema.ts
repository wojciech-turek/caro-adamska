import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about'
import introduction from './schemas/introduction'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, introduction],
}
