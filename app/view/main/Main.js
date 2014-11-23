/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 */
Ext.define('BrianGhig.view.main.Main', {

	extend: 'Ext.tab.Panel',
	xtype: 'app-main',
	
	requires: [
        'BrianGhig.view.main.MainController',
        'BrianGhig.view.main.MainModel'
    ],
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },
	
    plugins: 'responsive',
    
    responsiveConfig: {
        wide: {
            tabPosition: 'top'
        },
        tall: {
            tabPosition: 'left'
        }
    },
    
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
    
    defaults: {
    	padding: 20,
    	autoScroll: true
    },
    items: [
        {
        	xtype: 'resume-career-joblist'
        },
        {
    		xtype: 'resume-education-college'
        },
        {
        	title: 'Personal',
        	glyph: 0xf007,
        	html: 'About me...'
        },
        {
        	title: 'Contact',
        	glyph: 0xf003,
        	html: 'brianghig@gmail.com'
        },
        {
        	title: 'Source',
        	glyph: 0xf1cb,
        	html: 'See source at <a target="_blank" href="https://github.com/brianghig/brianghig-website">GitHub</a>'
        }
    ]
    
});
