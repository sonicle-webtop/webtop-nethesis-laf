Ext.define('Nethesis.overrides.menu.Menu', {
	override: 'Ext.menu.Menu',
	
	defaultMinWidth: 200
});
Ext.define('Nethesis.overrides.window.MessageBox', {
	override: 'Ext.window.MessageBox',
	
	/* Swap buttons, align them and customize pseudo-UI */
	reverseButtons: true,
	buttonsAlign: 'right',
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
Ext.define('Nethesis.form.field.InitialsAvatar', {
	override: 'Sonicle.form.field.InitialsAvatar',
	
	colors: ['#9CA3AF'] // Force single color: Gray/400
});
Ext.define('Nethesis.grid.column.Avatar', {
	override: 'Sonicle.grid.column.Avatar',
	
	colors: ['#9CA3AF'] // Force single color: Gray/400
});
Ext.define('Nethesis.grid.column.Nest', {
	override: 'Sonicle.grid.column.Nest',
	
	statics: {
		hierarchySvg: function(color, beginColor, endColor) {
			var ME = Sonicle.grid.column.Nest;
			return !Ext.isEmpty(beginColor) ? ME.hierarchySvgTplParent : ME.hierarchySvgTplChild;
		},
		
		hierarchySvgTplParent: '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">' +
			'<path fill="currentcolor" fill-rule="evenodd" d="m0 5c0-1.1 0.9-2 2-2h20c1.1 0 2 0.9 2 2v3c0 1.1-0.9 2-2 2h-14v7h4v-1c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v3c0 1.1-0.9 2-2 2h-8c-1.1 0-2-0.9-2-2h-5c-0.6 0-1-0.4-1-1v-8h-4c-1.1 0-2-0.9-2-2zm22 11h-8v3h8z"/>' +
			'</svg>',
		
		hierarchySvgTplChild: '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">' +
			'<path fill="currentcolor" fill-rule="evenodd" d="m22 3c1.1 0 2 0.9 2 2v3c0 1.1-0.9 2-2 2h-14v7h4v-1c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v3c0 1.1-0.9 2-2 2h-8c-1.1 0-2-0.9-2-2h-5c-0.6 0-1-0.4-1-1v-8h-4c-1.1 0-2-0.9-2-2v-3c0-1.1 0.9-2 2-2zm0 2h-20v3h20z"/>' +
			'</svg>'
	}
});
Ext.define('Nethesis.overrides.webtop.core.sdk.BaseView', {
	override: 'Sonicle.webtop.core.sdk.BaseView',
	bodyBorder: false
});
Ext.define('Nethesis.overrides.webtop.core.sdk.ModelView', {
	override: 'Sonicle.webtop.core.sdk.ModelView',
	
	constructor: function(cfg) {
		var me = this,
			icfg = Sonicle.Utils.getConstructorConfigs(me, cfg, [
				{dockableConfig: true}
			]);
		
		cfg.dockableConfig = Ext.apply(icfg.dockableConfig || {}, {
			dockPosition: 'side'
		});
		me.callParent([cfg]);
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
Ext.define('Nethesis.overrides.webtop.core.view.Reminder', {
	override: 'Sonicle.webtop.core.view.Reminder',
	
	constructor: function(cfg) {
		var me = this,
			icfg = Sonicle.Utils.getConstructorConfigs(me, cfg, [
				{dockableConfig: true}
			]);
		
		cfg.dockableConfig = Ext.apply(icfg.dockableConfig || {}, {
			dockPosition: 'center'
		});
		me.callParent([cfg]);
	}
});