
Ext.define("BrianGhig.view.resume.career.JobList",{
    extend: "Ext.view.View",
    xtype: 'resume-career-joblist',
    controller: "resume-career-joblist",
    viewModel: {
        type: "resume-career-joblist"
    },
    
    glyph: 0xf085,
    
    title: 'Career',
    
    bind: {
    	store: '{jobs}'
    },
    
    itemSelector: 'div.job-item',
    itemTpl: [
        '<div class="job-item">',
        	'<div class="job-employer">{employer}</div>',
        	'<div class="job-dateRange">{dateRange}</div>',
        	'<div class="job-description">{description}</div>',
        '</div>'
    ].join('')
    
});
