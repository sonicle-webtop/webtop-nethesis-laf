Ext.define('Nethesis.overrides.webtop.mail.view.MessageEditor', {
	override: 'Sonicle.webtop.mail.view.MessageEditor',
	
	createTopToolbarCfg: function(cfg) {
		return Ext.apply(this.callParent(arguments), {
			padding: '24 0 24 24'
		});
	}
});
Ext.define('Nethesis.overrides.webtop.mail.ux.grid.column.Message', {
	override: 'Sonicle.webtop.mail.ux.grid.column.Message',
	
	collapseToolPosition: 'right',
	flagIconsPosition: 'head',
	collapseToolOpenIconCls: 'fas fa-chevron-circle-down',
	collapseToolCloseIconCls: 'fas fa-chevron-circle-up'
});

Ext.define('Nethesis.overrides.webtop.mail.view.AdvancedSearchDialog', {
	override: 'Sonicle.webtop.mail.view.AdvancedSearchDialog',
	
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