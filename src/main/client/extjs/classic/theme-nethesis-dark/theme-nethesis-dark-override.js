Ext.define('Ext.theme.nethesisdark.Component', {
    override: 'Ext.Component'
}, function() {
	Ext.namespace('Ext.theme.is').Neptune = true;
	Ext.namespace('Ext.theme.is').Triton = true;
	Ext.namespace('Ext.theme.is').NethesisDark = true;
	Ext.theme.name = 'NethesisDark';
	Ext.theme.hierarchy = ['NethesisDark', 'Triton', 'Neptune'];
	Ext.namespace('Ext.theme.ui.button').toolbar = 'default-toolbar';
	Ext.namespace('Ext.theme.ui.button').primary = 'default';
	Ext.namespace('Ext.theme.ui.button').secondary = 'button-secondary';
	Ext.namespace('Ext.theme.ui.button').segmented = 'button-segmented';
	Ext.namespace('Ext.theme.ui.button').tertiary = 'button-tertiary';
	Ext.namespace('Ext.theme.ui.button').taskbar = 'button-taskbar';
	Ext.namespace('Ext.theme.ui.panel').kanbancolumn = 'panel-kanbancolumn';
});