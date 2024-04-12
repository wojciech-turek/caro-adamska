export default {
    name: 'footer',
    type: 'document',
    title: 'Page Footer',
    fields: [
        {
            name: 'name',
            title: 'Name',
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
            name: 'whatsAppURL',
            title: 'WhatsApp URL',
            type: 'url'
        },
        {
            name: 'messangerURL',
            title: 'Messanger URL',
            type: 'url'
        }
    ]
}