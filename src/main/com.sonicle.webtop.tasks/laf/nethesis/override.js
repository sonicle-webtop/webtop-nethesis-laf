Ext.define('Nethesis.overrides.webtop.tasks.Service', {
	override: 'Sonicle.webtop.tasks.Service',
	
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
Ext.define('Nethesis.overrides.webtop.tasks.ux.panel.TaskPreview', {
	override: 'Sonicle.webtop.tasks.ux.panel.TaskPreview',
	
	privates: {
		createDescriptionFieldCfg: function(cfg) {
			var ret = this.callParent(arguments);
			delete ret.minHeight;
			delete ret.flex;
			return Ext.apply(ret, {
				height: 150
			});
		}
	}
});
Ext.define('Nethesis.overrides.webtop.tasks.view.Category', {
	override: 'Sonicle.webtop.tasks.view.Category',
	
	constructor: function(cfg) {
		var me = this;
		cfg = WTA.sdk.UIView.overrideDockableConfig(cfg, {autoScale: false, width: 550});
		me.callParent([cfg]);
	}
});
Ext.define('Nethesis.overrides.webtop.tasks.view.Task', {
	override: 'Sonicle.webtop.tasks.view.Task',
	
	constructor: function(cfg) {
		var me = this;
		cfg = WTA.sdk.UIView.overrideDockableConfig(cfg, {autoScale: false, width: 820/*, height: 620*/});
		me.callParent([cfg]);
	},
	
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
		},
		
		createDescriptionFieldCfg: function(cfg) {
			var ret = this.callParent(arguments);
			delete ret.minHeight;
			return ret;
		}
	}
});