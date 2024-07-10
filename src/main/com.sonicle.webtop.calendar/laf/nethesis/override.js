Ext.define('Nethesis.overrides.webtop.calendar.Service', {
	override: 'Sonicle.webtop.calendar.Service',
	
	constructor: function(cfg) {
		var me = this,
			set = function(cn, value) {
				Sonicle.Object.setProp(me.viewsDCfgMap, me.preNs(cn), value);
			};
		me.callParent(arguments);
		set('view.Event', {width: 820/*, height: 620*/});
		set('view.RecurrenceEditor', {width: 740/*, height: 480*/});
	},
	
	createToolCalendarCfg: function(cfg) {
		return Ext.apply(this.callParent(arguments), {
			width: 242,
			height: 274
		});
	},
	
	createSchedulerCfg: function(tagsStore, cfg) {
		return Ext.apply(this.callParent(arguments), {
			padding: '26 32 0 32',
			showWeekNumbers: true
		});
	}
});
Ext.define('Nethesis.overrides.webtop.calendar.view.Event', {
	override: 'Sonicle.webtop.calendar.view.Event',
	
	privates: {
		createTopToolbar2Cfg: function(items) {
			// No items are empty by default, so provide our elements!
			var me = this;
			return me.createTopToolbarXCfg([
				{
					xtype: 'checkbox',
					bind: '{isPrivate}',
					hideEmptyLabel: true,
					boxLabel: me.res('event.fld-private.lbl')
				}, {
					xtype: 'checkbox',
					bind: '{busy}',
					hideEmptyLabel: true,
					boxLabel: me.res('event.fld-busy.lbl')
				}
			]);
		}
	}
});