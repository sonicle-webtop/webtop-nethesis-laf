Ext.define('Nethesis.overrides.webtop.tasks.Service', {
	override: 'Sonicle.webtop.tasks.Service',
	
	constructor: function(cfg) {
		var me = this,
			set = function(cn, value) {
				Sonicle.Object.setProp(me.viewsDCfgMap, me.preNs(cn), value);
			};
		me.callParent(arguments);
		set('view.Category', {width: 550});
		set('view.Task', {width: 820/*, height: 620*/});
	},
	
	privates: {
		createGridCfg: function(tagsStore, nest, cfg) {
			var me = this,
				cfg = me.callParent(arguments);
			cfg.cls = Sonicle.String.join(' ', cfg.cls, 'x-grid-rounded');
			if (nest) {
				cfg.columns[5].forceCollapseTooltip = true;
				cfg.columns[5].collapseTooltip = me.res('gptasks.type.parent.tip');
				cfg.columns[5].hierarchyTooltip = me.res('gptasks.type.child.tip');
			}
			return cfg;
		}
	}
});
Ext.define('Nethesis.overrides.webtop.tasks.view.Task', {
	override: 'Sonicle.webtop.tasks.view.Task',
	
	/**
	 * Override original {@link WTA.sdk.ModelView#initTBar}
	 * - Add private field in 2nd position
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
					boxLabel: me.res('task.fld-private.lbl')
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
			return Ext.Array.slice(this.callParent(arguments), 0, -2);
		}
	}
});