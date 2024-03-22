export default {
    name: 'about',
    type: 'document',
    title: 'About',
    fields: [
        {
            name: 'aboutTitle',
            type: 'string',
            title: 'About title'
        },
        {
            name: 'aboutImage',
            type: 'image',
            title: 'About Image'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ]
}