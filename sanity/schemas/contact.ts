export default {
    name: 'contact',
    type: 'document',
    title: 'Contact component',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone'
        },
        {
            name: 'instagramURL',
            title: 'Instagram URL',
            type: 'url'
        },
        {
            name: 'messangerURL',
            title: 'Messanger URL',
            type: 'url'
        }
    ]
}