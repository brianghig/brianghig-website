/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 */
Ext.define('BrianGhig.view.main.Main', {
    //extend: 'Ext.container.Container',
//    extend: 'Ext.tab.Panel',
    requires: [
        'BrianGhig.view.main.MainController',
        'BrianGhig.view.main.MainModel'
    ],

//    xtype: 'app-main',
//
//    ui: 'navigation',
//    tabBarHeaderPosition: 1,
//    titleRotation: 0,
//    tabRotation: 0,
//    
    header: {
        layout: {
            align: 'stretchmax'
        },
        bind: {
        	title: {
        		text: '{name}',
        		flex: 0
        	}
        }
    },
//    
//    tabBar: {
//        flex: 1,
//        layout: {
//            align: 'stretch',
//            overflowHandler: 'none'
//        }
//    },
    
//    responsiveConfig: {
//        tall: {
//            headerPosition: 'top'
//        },
//        wide: {
//            headerPosition: 'left'
//        }
//    },
//    
//    defaults: {
//        bodyPadding: 20,
//        tabConfig: {
//            plugins: 'responsive',
//            responsiveConfig: {
//                wide: {
//                    iconAlign: 'left',
//                    textAlign: 'left'
//                },
//                tall: {
//                    iconAlign: 'top',
//                    textAlign: 'center',
//                    width: 120
//                }
//            }
//        }
//    },
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

//    layout: {
//        type: 'border'
//    },

//    items: [{
//        region: 'north',
//        xtype: 'component',
//        cls: 'appBanner',
//        padding: 10,
//        height: 40,
//        html: 'My Company - My Company Motto'
//    },{
//        xtype: 'panel',
//        glyph: 72,
//        bind: {
//            title: 'Navigation',
//        },
//        region: 'west',
//        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>'
//        width: 250,
//        split: true,
//        collapsible: true,
//        tbar: [{
//            text: 'Button',
//            handler: 'onClickButton'
//        }]
//    },{
//        region: 'center',
//        xtype: 'tabpanel',
//    	title: 'Home',
//    	glyph: 72,
//    	html: 'Content appropriate for the current navigation'
//        items:[{
//            title: 'Home',
//            html: '<h2>Content appropriate for the current navigation.</h2>'
//        },{
//        	title: 'Data'
//        }]
//    }]
    
	extend: 'Ext.tab.Panel',
	xtye: 'app-main',
    plugins: 'responsive',
    responsiveConfig: {
        wide: {
            tabPosition: 'top'
        },
        tall: {
            tabPosition: 'left'
        }
    },
    defaults: {
    	padding: 20,
    	autoScroll: true
    },
    items: [
        {
        	title: 'Personal',
        	glyph: 0xf007,
        	html: 'About me...'
        },
        {
        	xtype: 'resume-career-joblist'
        },
        {
    		xtype: 'resume-education-college'
        },
        {
        	title: 'Contact',
        	glyph: 0xf003,
        	html: 'brianghig@gmail.com'
        }
    ]

});
