export default {
    name: 'publications',
    type: 'document',
    title: 'Publications',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name'}
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'gallery',
            type: 'array',
            of: [
                { type: 'image' }
            ],
            options: {
                layout: 'grid'
            }
        },
        { 
            name: 'url',
            title: 'Url',
            type: 'url'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ]
}