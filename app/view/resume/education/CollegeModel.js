Ext.define('BrianGhig.view.resume.education.CollegeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.resume-education-college',
    data: {
        name: 'The Pennsylvania State University',
        start: '2003-09',
        end: '2007-05',
        major: {
        	type: 'Bachelor of Science',
        	focus: 'Computer Engineering'
        }
        //gpa: 3.5
    },
    
    formulas: {
    	dateRange: function(get) {
    		var inputFormat = 'Y-m',
    			outputFormat = 'm/Y';
    		var start = get('start'),
    			end = get('end');
    		var startDate = Ext.Date.parse(start, inputFormat),
    			endDate = Ext.Date.parse(end, inputFormat);
    		
    		var startOut = Ext.Date.format(startDate, outputFormat),
    			endOut = Ext.Date.format(endDate, outputFormat);
    		
    		/*
    		 * TODO Add conditional formatting for:
    		 * 1. no end date
    		 * 2. same start + end date
    		 */
    		return startOut + ' - ' + endOut;
    	}
    }

});
