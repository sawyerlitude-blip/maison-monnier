import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

export const queries = {
  homepage: `*[_type == "homepage"][0]`,
  services: `*[_type == "service"] | order(order asc)`,
  properties: `*[_type == "property"] | order(order asc)`,
  about: `*[_type == "about"][0]`,
  contact: `*[_type == "contactPage"][0]`,
  settings: `*[_type == "siteSettings"][0]`,
}
