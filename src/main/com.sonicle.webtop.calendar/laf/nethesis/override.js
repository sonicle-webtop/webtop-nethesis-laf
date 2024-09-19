Ext.define('Nethesis.overrides.webtop.calendar.Service', {
	override: 'Sonicle.webtop.calendar.Service',
	
	createToolCalendarCfg: function(cfg) {
		return Ext.apply(this.callParent(arguments), {
			width: 242,
			height: 274
		});
	},
	
	createSchedulerCfg: function(tagsStore, cfg) {
		return Ext.apply(this.callParent(arguments), {
			padding: '26 32 0 32',
			showWeekNumbers: true,
			viewButtonsPosition: 'right'
		});
	}
});
Ext.define('Nethesis.overrides.webtop.calendar.view.Calendar', {
	override: 'Sonicle.webtop.calendar.view.Calendar',
	
	constructor: function(cfg) {
		var me = this;
		cfg = WTA.sdk.UIView.overrideDockableConfig(cfg, {autoScale: false, width: 550});
		me.callParent([cfg]);
	}
});
Ext.define('Nethesis.overrides.webtop.calendar.view.Event', {
	override: 'Sonicle.webtop.calendar.view.Event',
	
	constructor: function(cfg) {
		var me = this;
		cfg = WTA.sdk.UIView.overrideDockableConfig(cfg, {autoScale: false, width: 820/*, height: 620*/});
		me.callParent([cfg]);
		me.getVM().set('hidden.flddescription', true);
	},
	
	/**
	 * Override original {@link WTA.sdk.ModelView#initTBar}
	 * - Add private and busy fields in 2nd position
	 * - Add tags field in 3rd position
	 * - Add bottom divider
	 */
	initTBar: function() {
		var me = this,
			SoU = Sonicle.Utils;
		
		me.dockedItems = SoU.mergeDockedItems(me.dockedItems, 'top', [
			me.createTopToolbar1Cfg(me.prepareTopToolbarItems()),
			me.createTopToolbarXCfg([
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
			]),
			me.createTopToolbarXCfg([
				me.createTagsFieldCfg()
			], 'last'),
			me.createTopToolbarsDividerCfg()
		]);
		me.dockedItems = SoU.mergeDockedItems(me.dockedItems, 'bottom', [
			me.createStatusbarCfg()
		]);
	},
	
	privates: {
		/**
		 * Override original {@link Sonicle.webtop.calendar.view.Event#prepareMainFields}
		 * - Remove tags field from returned items: it's the 1st field added by createTagsFieldCfg() in original impl.
		 */
		prepareMainFields: function() {
			return Ext.Array.slice(this.callParent(arguments), 1);
		},
		
		/**
		 * Override original {@link Sonicle.webtop.calendar.view.Event#prepareTopToolbarItems}
		 * - Remove busy and private fields: they are the last 3 items must be removed from the original impl.
		 */
		prepareTopToolbarItems: function() {
			return Ext.Array.slice(this.callParent(arguments), 0, -3);
		},
		
		/**
		 * Override original {@link Sonicle.webtop.calendar.view.Event#initHiddenFields}
		 * - Show/Hide description field according to its value
		 */
		initHiddenFields: function() {
			var me = this;
			me.callParent(arguments);
			me.getVM().set('hidden.flddescription', me.getModel().isFieldEmpty('description'));
		},
		
		createDescriptionFieldCfg: function(cfg) {
			var ret = this.callParent(arguments);
			delete ret.minHeight;
			return ret;
		}
	}
});
Ext.define('Nethesis.overrides.webtop.calendar.view.RecurrenceEditor', {
	override: 'Sonicle.webtop.calendar.view.RecurrenceEditor',
	
	constructor: function(cfg) {
		var me = this;
		cfg = WTA.sdk.UIView.overrideDockableConfig(cfg, {autoScale: false, width: 740/*, height: 480*/});
		me.callParent([cfg]);
	}
});