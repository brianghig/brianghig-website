
Ext.define("BrianGhig.view.resume.education.College",{
    extend: "Ext.panel.Panel",
    xtype: 'resume-education-college',
    controller: "resume-education-college",
    viewModel: {
        type: "resume-education-college"
    },
    
    glyph: 0xf19c,
    title: 'Education',
    
    bind: {
    	html: [
    	    '<div class="college-item">',
	    	    '<div class="college-major">',
			    	'{major.type} in {major.focus}',
			    '</div>',
			    '<div class="college-location">',
		    	    '<div class="college-name">{name}</div>',
		    	    '<div class="college-dates">{dateRange}</div>',
		    	'</div>',
    	    '</div>'
    	].join('')
    }
    
});
