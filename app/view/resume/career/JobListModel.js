Ext.define('BrianGhig.view.resume.career.JobListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.resume-career-joblist',
    
    stores: {
        jobs: {
            fields: [
                'employer',
                { name: 'start', type: 'date', dateFormat: 'Y-m' },
                { name: 'end', type: 'date', dateFormat: 'Y-m' },
                'description',
                {
                	name: 'dateRange',
                	convert: function(v, r) {
                		var start = r.get('start'),
                			end = r.get('end');
                		
                		var outputFormat = 'm/Y';
                		
                		var startDisplay = Ext.Date.format(start, outputFormat);
                		var endDisplay = Ext.isEmpty(end) ?
                				'Current' :
                				Ext.Date.format(end, outputFormat);
                		
                		return startDisplay + ' - ' + endDisplay;
                	}
                }
            ],
            data: [
				{
					employer: 'High Performance Technologies Inc.',
					start: '2007-09',
					end: '2010-10',
					description: [
					    
						'<div class="job-role">Software Engineer, Small Business Innovative Research Program</div>',
						'<div class="job-client">Sponsor: Department of Homeland Security</div>',
						'<div class="job-role-description">',
							'<ul>',
								'<li>One of two developers on a model simulation engine for customizable resource transfer and impact prediction technology</li>',
								'<li>Created user interface and REST services with GIS integration for managing resources in Ptolemy, a system dynamics framework</li>',
								'<li>Technologies: Apache Tomcat 6, OpenLayers 2.6 with Geoserver 2, ExtJS 3.2, J2EE 6 with Spring MVC 3.0, Ptolemy 8, MS SQL 2008, SVN</li>',
							'</ul>',
						'</div>',
					    
					    '<div class="job-role">Technical Lead, Developer, Sentinel Case Management System 6/2008 – 4/2010</div>',
					    '<div class="job-client">Client: Federal Bureau of Investigation; Prime: Lockheed Martin</div>',
					    '<div class="job-role-description">',
					    	'<ul>',
					    		'<li>Applied technical and soft skills as forms developer, increment Tech Lead, and lead UI developer for the largest delivery of the program</li>',
					    		'<li>Learned Java web application development and ExtJS on-the-job with quick turnaround to fill program need of re-engineering the entire user interface</li>',
					    	    '<li>Assumed position of Deputy Manager for team of 32 upon client\'s request</li>',
					    	    '<li>Educated team on revamped UI framework, successfully leading them through an on-schedule installation of the first of three pilot deliveries into production</li>',
					    	    '<li>Recognized by LM senior management as central point of system knowledge, both within UI codebase and among other architectural components</li>',
					    	    '<li>Received Mission Enhancement Award from an FBI Field Office Supervisor for unwavering dedication and commitment to delivering a quality system for the Bureau and Lockheed</li>',
					    	    '<li>Technologies: Adobe LiveCycle Suite, J2EE stack with Spring MVC 2.5, ExtJS 2.2, IBM WebSphere 6, Apache Tomcat 5, Oracle 10g, EMC Documentum 5, ClearCase</li>',
					    	'</ul>',
					    '</div>',
					    
					    '<div class="job-role">Consultant, Integrated Trusted Registration Application 9/2007 – 6/2008</div>',
					    '<div class="job-client">Client: Department of Treasury, Financial Management Service</div>',
					    '<div class="job-role-description">',
						    '<ul>',
						    	'<li>Provided technical support to FMS staff related to PKI provisioning and management</li>',
						    	'<li>Represented client at inter-bureau meetings (HSPD-12 and PKI Technical Working Group) to promote knowledge sharing and ensure Treasury-wide adaption of PKI technologies</li>',
						    	'<li>Created and distributed lab journal for PIV credential issuance and management</li>',
						    	'<li>Developed CM strategy for new Business Architecture Group</li>',
						    	'<li>Technologies: InstallShield, Java 5, ANT, Perl</li>.',
						    '</ul>',
					    '</div>'
					].join('')
				},
				{
					employer: 'Armedia LLC',
					start: '2010-10',
					end: '2013-10',
					description: [
					    '<p>Armedia was a subcontractor to Lockheed Martin on the FBI\'s Sentinel program, a revolutionary case management system for the bureau.</p>',
					    '<p>As one of a small team of developers on Sentinel, I contributed heavily to coding both the rich UI and server sides of the application. I kept an eye on our agile development practices as the acting scrum master, and managed our build tools wherever possible to ensure that our deliverables continuously match the high quality that our users have come to expect.</p>'
					].join('')
				},
				{
					employer: 'Orbis Technologies Inc.',
					start: '2013-10',
					end: null,
					description: [
					    '<ul>',
					        '<li>Designs and develops scalable solutions for tactical cloud-to-cloud synchronization of data across disconnected, intermittent, and limited (DIL) networks</li>',
					        '<li>Manages virtualized cloud infrastructure supporting the integration of analytic tools for entity-rich reports, threat modeling, course of action, and video surveillance</li>',
					        '<li>Enhances UI and cloud processing services of Cloud Text Analytics application</li>',
					        '<li>Technologies include Hadoop, Accumulo, Storm, Kafka, ExtJS, D3, CentOS, XenServer, PostgreSQL, Git, Jira</li>',
					    '</ul>'
					].join(''),
					technologies: [
					    { name: 'Hadoop', glyph: 0xf },
					    { name: 'Accumulo', glyph: 0xf },
					    { name: 'Storm', glyph: 0xf },
					    { name: 'Kafka', glyph: 0xf },
					    { name: 'ExtJS', glyph: 0xf },
					    { name: 'D3', glyph: 0xf },
					    { name: 'CentOS', glyph: 0xf },
					    { name: 'XenServer', glyph: 0xf },
					    { name: 'PostgreSQL', glyph: 0xf },
					    { name: 'Git', glyph: 0xf },
					    { name: 'Jira', glyph: 0xf }
					]
				}
            ],
            sorters: [{
            	property: 'start',
            	direction: 'DESC'
            }]
        }
    }

});
