Ext.define('Nethesis.overrides.webtop.tasks.Service', {
	override: 'Sonicle.webtop.tasks.Service',
	
	constructor: function(cfg) {
		var me = this,
			set = function(cn, value) {
				Sonicle.Object.setProp(me.viewsDCfgMap, me.preNs(cn), value);
			};
		me.callParent(arguments);
		set('view.Task', {width: 820/*, height: 620*/});
	},
	
	privates: {
		createGridConfig: function(tagsStore, nest, cfg) {
			return Ext.apply(this.callParent(arguments), {
				componentCls: 'wttasks-main-grid',
				cls: 'x-grid-rounded'
			});
		}
	}
});
Ext.define('Nethesis.overrides.webtop.tasks.view.TaskNew', {
	override: 'Sonicle.webtop.tasks.view.TaskNew',
	
	privates: {
		createTopToolbar2Cfg: function(items) {
			// No items are empty by default, so provide our elements!
			var me = this;
			return me.createTopToolbarXCfg([
				{
					xtype: 'checkbox',
					bind: '{isPrivate}',
					hideEmptyLabel: true,
					boxLabel: me.res('task.fld-private.lbl')
				}
			]);
		}
	}
});