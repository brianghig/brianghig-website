Ext.define('BrianGhig.store.User', {
    extend: 'Ext.data.Store',
    model: 'BrianGhig.model.User',
    data : [
     {firstName: 'Seth',    age: '34'},
     {firstName: 'Scott', age: '72'},
     {firstName: 'Gary', age: '19'},
     {firstName: 'Capybara', age: '208'}
    ]
});