Ext.define('Nethesis.overrides.menu.Menu', {
	override: 'Ext.menu.Menu',
	
	defaultMinWidth: 200
});
Ext.define('Nethesis.overrides.window.MessageBox', {
	override: 'Ext.window.MessageBox',
	
	/* Swap buttons, separate Cancel and customize pseudo-UI */
	reverseButtons: true,
	splitCancelButton: false,
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

Ext.define('Nethesis.overrides.webtop.core.viewport.private.ViewController', {
	override: 'Sonicle.webtop.core.viewport.private.ViewController',
	
	constructor: function(cfg) {
		this.callParent([cfg]);
		// Override static view scale-factor to give better sizes to any view non explicitly revamped by new UI improvements!
		this.viewsScaleFactor = {width: 1.3, height: 1.3};
	}
});
Ext.define('Nethesis.overrides.webtop.core.ux.panel.Fields', {
	override: 'Sonicle.webtop.core.ux.panel.Fields',
	
	paddingTop: false,
	paddingBottom: false,
	paddingSides: false
});
Ext.define('Nethesis.overrides.webtop.core.ux.app.taskbar.Bar', {
	override: 'Sonicle.webtop.core.ux.app.taskbar.Bar',
	defaults: {
		width: 160
	}
});
Ext.define('Nethesis.overrides.webtop.core.sdk.BaseView', {
	override: 'Sonicle.webtop.core.sdk.BaseView',
	bodyBorder: false
});