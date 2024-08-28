Ext.define('Nethesis.overrides.webtop.mail.Service', {
	override: 'Sonicle.webtop.mail.Service',
	
	constructor: function(cfg) {
		var me = this,
			set = function(cn, value) {
				Sonicle.Object.setProp(me.viewsDCfgMap, me.preNs(cn), value);
			};
		me.callParent(arguments);
		set('view.MessageEditor', {width: 900});
	}
});
Ext.define('Nethesis.overrides.webtop.mail.view.MessageEditor', {
	override: 'Sonicle.webtop.mail.view.MessageEditor',
	
	createTopToolbarCfg: function(cfg) {
		return Ext.apply(this.callParent(arguments), {
			padding: '24 0 24 24'
		});
	}
});
Ext.define('Nethesis.overrides.webtop.mail.view.UserOptions', {
	override: 'Sonicle.webtop.mail.view.UserOptions',
	
	//overridable properties to influence UI
	mainTodayRowColorWidth: 64,
	mainTodayRowColorHidden: true,
	editingFontSizeWidth: 64,
	editingFontColorWidth: 64,
	identitiesColumnFaxHidden: true,
	advancedRegisterMailtoPack: 'left'
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