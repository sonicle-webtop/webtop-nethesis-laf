Ext.define('Ext.theme.nethesis.Component', {
    override: 'Ext.Component'
}, function() {
	Ext.namespace('Ext.theme.is').Neptune = true;
	Ext.namespace('Ext.theme.is').Triton = true;
	Ext.namespace('Ext.theme.is').Nethesis = true;
	Ext.theme.name = 'Nethesis';
	Ext.theme.hierarchy = ['Nethesis', 'Triton', 'Neptune'];
	Ext.namespace('Ext.theme.ui.button').primary = 'default';
	Ext.namespace('Ext.theme.ui.button').secondary = 'button-secondary';
	Ext.namespace('Ext.theme.ui.button').tertiary = 'button-tertiary';
	Ext.namespace('Ext.theme.ui.button').toolbar = 'default-toolbar';
});
Ext.define('Nethesis.override.window.MessageBox', {
	override: 'Ext.window.MessageBox',
	requires: [
		'Sonicle.overrides.window.MessageBox'
	],
	
	/* Swap buttons, separate Cancel and customize pseudo-UI */
	reverseButtons: true,
	splitCancelButton: true,
	buttonPseudoUi: {
		ok: '{primary}',
		yes: '{primary}',
		no: '{tertiary}',
		cancel: '{tertiary}'
	},
	
	/**
	 * Override original {@link Ext.window.MessageBox#reconfigure}
	 * - Force icon in header (instead that next to body message)
	 */
	reconfigure: function(cfg) {
		var me = this;
		cfg.iconCls = cfg.icon;
		me.callParent(arguments);
	},
	
	/**
	 * Override original {@link Ext.window.MessageBox#setIcon}
	 * - Do NOT use the icon next to the message (iconCls in header is used instead)
	 */
	setIcon: function(icon, width, height) {
		var me = this,
			iconCmp = me.iconComponent;
		if (iconCmp) iconCmp.hide();
		return me;
	}
});
Ext.define('Nethesis.override.webtop.core.sdk.BaseView', {
	override: 'Sonicle.webtop.core.sdk.BaseView',
	
	bodyBorder: false
});
Ext.define('Nethesis.override.webtop.mail.view.MessageEditor', {
	override: 'Sonicle.webtop.mail.view.MessageEditor',
	
	createTopToolbarCfg: function(cfg) {
		return Ext.apply(this.callParent(arguments), {
			padding: '24 0 24 24'
		});
	}
});


