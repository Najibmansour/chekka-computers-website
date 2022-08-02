    export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
            hotspot: true,
        }
        },
        { 
        name: 'name',
        title: 'Name',
        type: 'string',
        },
        { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 90,
        }
        },
        { 
        name: 'price',
        title: 'Price',
        type: 'number',
        },
        { 
        name: 'details',
        title: 'Details',
        type: 'string',
        },
        {
        name: 'tags',
        title: 'Tags',
        type: 'tags',
        options: {
            //Locks menu from creating new tags (defaults to false)
            frozen: true,
            //Preset of tags (defaults to empty)
            preload: [
                {label: "Software", value:     "software"},
                {label: "Strorage/USB", value: "storage"},
                {label: "Laptops", value:      "laptop"},
                {label: "Monitors", value:     "monitor"},
                {label: "Printers/Ink", value: "printerink"},
                {label: "Speakers", value:     "speaker"},
                {label: "Phones", value:       "phone"},
                {label: "Cables", value:       "cable"},
                {label: "Headphones", value:   "headphone"},
                {label: "Other", value:        "other"},
            ],

            //Closes menu after tag selected (defaults to true)
            closeMenuOnSelect: true
        }
        }
    ]
    }