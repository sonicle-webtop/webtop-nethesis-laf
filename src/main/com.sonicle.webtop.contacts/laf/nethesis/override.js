Ext.define('Nethesis.overrides.webtop.contacts.ux.panel.ContactPreview', {
	override: 'Sonicle.webtop.contacts.ux.panel.ContactPreview',
	
	privates: {
		createMailTileListCfg: function(cfg) {
			return Ext.apply(this.callParent(arguments), {
				maxWidth: 230
			});
		},
		
		createTelTileListCfg: function(cfg) {
			return Ext.apply(this.callParent(arguments), {
				maxWidth: 180
			});
		},
		
		createMoreTileListCfg: function(cfg) {
			return Ext.apply(this.callParent(arguments), {
				maxWidth: 230
			});
		},
		
		createNoteFieldCfg: function(cfg) {
			var ret = this.callParent(arguments);
			delete ret.minHeight;
			delete ret.flex;
			return Ext.apply(ret, {
				height: 150
			});
		}
	}
});
Ext.define('Nethesis.overrides.webtop.contacts.view.Category', {
	override: 'Sonicle.webtop.contacts.view.Category',
	
	constructor: function(cfg) {
		var me = this;
		cfg = WTA.sdk.UIView.overrideDockableConfig(cfg, {autoScale: false, width: 550});
		me.callParent([cfg]);
	}
});
Ext.define('Nethesis.overrides.webtop.contacts.view.Contact', {
	override: 'Sonicle.webtop.contacts.view.Contact',
	
	constructor: function(cfg) {
		var me = this;
		cfg = WTA.sdk.UIView.overrideDockableConfig(cfg, {autoScale: false, width: 820/*, height: 620*/});
		me.callParent([cfg]);
	},
	
	/**
	 * Override original {@link WTA.sdk.ModelView#initTBar}
	 * - Add tags field in last position
	 * - Add bottom divider
	 */
	initTBar: function() {
		var me = this,
			SoU = Sonicle.Utils;
		
		me.dockedItems = SoU.mergeDockedItems(me.dockedItems, 'top', [
			me.createTopToolbar1Cfg(me.prepareTopToolbarItems()),
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
		
		createNotesFieldCfg: function(cfg) {
			var ret = this.callParent(arguments);
			delete ret.minHeight;
			return ret;
		},
		
		createPicSectionMoreItemsCfg: function() {
			var me = this;
			return [
				{
					xtype: 'sohspacer'
				}, {
					xtype: 'button',
					ui: '{secondary|toolbar}',
					text: me.res('contact.fld-picture.upload.lbl'),
					//tooltip: this.res('contact.fld-picture.upload.tip'),
					iconCls: 'fas fa-circle-up',
					handler: function() {
						me.lref('fldpic').uploader.browse();
					}
				}
			];
		}
	}
});
Ext.define('Nethesis.overrides.webtop.contacts.view.ContactsList', {
	override: 'Sonicle.webtop.contacts.view.ContactsList',
	
	constructor: function(cfg) {
		var me = this;
		cfg = WTA.sdk.UIView.overrideDockableConfig(cfg, {autoScale: false, width: 820/*, height: 620*/});
		me.callParent([cfg]);
	},
	
	/**
	 * Override original {@link WTA.sdk.ModelView#initTBar}
	 * - Add tags field in last position
	 * - Add bottom divider
	 */
	initTBar: function() {
		var me = this,
			SoU = Sonicle.Utils;
		
		me.dockedItems = SoU.mergeDockedItems(me.dockedItems, 'top', [
			me.createTopToolbar1Cfg(me.prepareTopToolbarItems()),
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
		}
	}
});
Ext.define('Nethesis.overrides.webtop.contacts.ux.grid.column.Contact', {
	override: 'Sonicle.webtop.contacts.ux.grid.column.Contact',
	
	tagIconCls: 'fas fa-tag',
	dlistIconCls: 'fas fa-rectangle-list',
	emailIconCls: 'fas fa-envelope',
	mobileIconCls: 'fas fa-phone',
	telephoneIconCls: 'fas fa-phone'
});

