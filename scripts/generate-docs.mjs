import * as OpenAPI from 'fumadocs-openapi'
import { rimrafSync } from 'rimraf'

const out = './content/docs/(api)'

// clean generated files
rimrafSync(out, {
  filter(v) {
    return !v.endsWith('index.mdx') && !v.endsWith('meta.json')
  },
})

void OpenAPI.generateFiles({
  groupBy: 'tag',
  // input files
  input: ['./openapi.json'],
  output: out,
})
