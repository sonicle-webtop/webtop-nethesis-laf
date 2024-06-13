Ext.define('Nethesis.overrides.webtop.tasks.Service', {
	override: 'Sonicle.webtop.tasks.Service',
	
	constructor: function(cfg) {
		var me = this,
			set = function(cn, value) {
				Sonicle.Object.setProp(me.viewsDCfgMap, me.preNs(cn), value);
			};
		me.callParent(arguments);
		set('view.Task', {width: 800/*, height: 620*/});
	}
});