Ext.define('Nethesis.overrides.webtop.vfs.Service', {
	override: 'Sonicle.webtop.vfs.Service',
	
	privates: {
		createFilesGridCfg: function(cfg) {
			var cfg = this.callParent(arguments);
			cfg.cls = Sonicle.String.join(' ', cfg.cls, 'x-grid-rounded');
			cfg.selModel.headerWidth = 50;
			return cfg;
		},
		
		createUploadBarCfg: function(filesGridId, cfg) {
			return Ext.apply(this.callParent(arguments), {
				buttonUI: '{primary}'
			});
		}
	}
});
Ext.define('Nethesis.overrides.webtop.vfs.Service', {
	override: 'Sonicle.webtop.vfs.view.SharingLinks',
	
	constructor: function(cfg) {
		var me = this;
		cfg = WTA.sdk.UIView.overrideDockableConfig(cfg, {maximized: true});
		me.callParent([cfg]);
	}
});
Ext.define('Nethesis.overrides.webtop.vfs.view-public.DownloadLink', {
	override: 'Sonicle.webtop.vfs.view-public.DownloadLink',
	
	privates: {
		createGridCfg: function(store, cfg) {
			var me = this,
				cfg = me.callParent(arguments);
			cfg.cls = Sonicle.String.join(' ', cfg.cls, 'x-grid-rounded');
			return cfg;
		}
	}
});
Ext.define('Nethesis.overrides.webtop.vfs.view-public.UploadLink', {
	override: 'Sonicle.webtop.vfs.view-public.UploadLink',
	
	privates: {
		createGridCfg: function(store, cfg) {
			var me = this,
				cfg = me.callParent(arguments);
			cfg.cls = Sonicle.String.join(' ', cfg.cls, 'x-grid-rounded');
			return cfg;
		}
	}
});