Ext.define('Lab5App.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {

        
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to the Lab 5 SPA'
                },

                html: [
                    "This is the SPA for Lab 5."
                ].join("")
            },
            {
                title: 'More Info',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'More Information'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            },
            {
                title: 'Credits',
                iconCls: 'action',

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Credits'
                },

                     html: [
                        "Jaiden Lester - made with Sencha Touch and Sencha Cmd."
                    ].join("")
            },
            
        ]


    
    }
});
