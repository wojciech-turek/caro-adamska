export default {
    name: 'personalProjects',
    type: 'document',
    title: 'Personal Projects Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
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
    ]
}