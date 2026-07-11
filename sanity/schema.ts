export const schema = {
  types: [
    {
      name: 'siteSettings', title: 'Site Settings', type: 'document',
      fields: [
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
      ]
    },
    {
      name: 'service', title: 'Service', type: 'document',
      fields: [
        { name: 'order', title: 'Order', type: 'number' },
        { name: 'number', title: 'Number (01, 02...)', type: 'string' },
        { name: 'nameFr', title: 'Name (FR)', type: 'string' },
        { name: 'nameEn', title: 'Name (EN)', type: 'string' },
        { name: 'tag', title: 'Tag', type: 'string' },
        { name: 'heroTextFr', title: 'Hero text (FR)', type: 'text' },
        { name: 'heroTextEn', title: 'Hero text (EN)', type: 'text' },
        { name: 'bodyFr', title: 'Body (FR)', type: 'text' },
        { name: 'bodyEn', title: 'Body (EN)', type: 'text' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      ]
    },
    {
      name: 'property', title: 'Property', type: 'document',
      fields: [
        { name: 'order', title: 'Order', type: 'number' },
        { name: 'number', title: 'Number (01, 02...)', type: 'string' },
        { name: 'nameFr', title: 'Name (FR)', type: 'string' },
        { name: 'nameEn', title: 'Name (EN)', type: 'string' },
        { name: 'location', title: 'Location', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' },
        { name: 'descFr', title: 'Description (FR)', type: 'text' },
        { name: 'descEn', title: 'Description (EN)', type: 'text' },
        { name: 'tags', title: 'Features/Tags', type: 'array', of: [{ type: 'string' }] },
        { name: 'status', title: 'Status', type: 'string', options: { list: ['available', 'soon'] } },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'longitude', title: 'Longitude', type: 'number' },
        { name: 'latitude', title: 'Latitude', type: 'number' },
      ]
    },
    {
      name: 'about', title: 'About Page', type: 'document',
      fields: [
        { name: 'bodyFr', title: 'Body paragraph 1 (FR)', type: 'text' },
        { name: 'body2Fr', title: 'Body paragraph 2 (FR)', type: 'text' },
        { name: 'bodyEn', title: 'Body paragraph 1 (EN)', type: 'text' },
        { name: 'body2En', title: 'Body paragraph 2 (EN)', type: 'text' },
        { name: 'quoteFr', title: 'Quote (FR)', type: 'text' },
        { name: 'quoteEn', title: 'Quote (EN)', type: 'text' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      ]
    },
  ]
}
