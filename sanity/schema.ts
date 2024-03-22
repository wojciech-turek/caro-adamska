import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about],
}
