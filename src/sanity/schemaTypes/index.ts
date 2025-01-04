import { type SchemaTypeDefinition } from 'sanity'
import blog from '../blog'
import header from '../header'
import footer from '../footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,header,footer],
}
