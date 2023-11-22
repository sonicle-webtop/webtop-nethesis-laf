Ext.define('Ext.theme.nethesis.Component', {
    override: 'Ext.Component'
}, function() {
	Ext.namespace('Ext.theme.is').Neptune = true;
	Ext.namespace('Ext.theme.is').Triton = true;
	Ext.namespace('Ext.theme.is').Nethesis = true;
	Ext.theme.name = 'Nethesis';
	Ext.theme.hierarchy = ['Nethesis', 'Triton', 'Neptune'];
	Ext.namespace('Ext.theme.ui.button').toolbar = 'default-toolbar';
	Ext.namespace('Ext.theme.ui.button').primary = 'default';
	Ext.namespace('Ext.theme.ui.button').secondary = 'button-secondary';
	Ext.namespace('Ext.theme.ui.button').tertiary = 'button-tertiary';
	Ext.namespace('Ext.theme.ui.button').taskbar = 'button-taskbar';
});