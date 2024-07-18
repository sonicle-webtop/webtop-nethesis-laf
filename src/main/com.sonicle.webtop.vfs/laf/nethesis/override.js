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