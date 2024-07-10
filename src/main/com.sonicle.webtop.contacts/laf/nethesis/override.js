Ext.define('Nethesis.overrides.webtop.contacts.Service', {
	override: 'Sonicle.webtop.contacts.Service',
	
	constructor: function(cfg) {
		var me = this,
			set = function(cn, value) {
				Sonicle.Object.setProp(me.viewsDCfgMap, me.preNs(cn), value);
			};
		me.callParent(arguments);
		set('view.Contact', {width: 820/*, height: 620*/});
		set('view.ContactsList', {width: 820/*, height: 620*/});
	}
});
Ext.define('Nethesis.overrides.webtop.contacts.view.Contact', {
	override: 'Sonicle.webtop.contacts.view.Contact',
	
	privates: {
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
Ext.define('Nethesis.overrides.webtop.contacts.ux.grid.column.Contact', {
	override: 'Sonicle.webtop.contacts.ux.grid.column.Contact',
	
	tagIconCls: 'fas fa-tag',
	dlistIconCls: 'fas fa-rectangle-list',
	emailIconCls: 'fas fa-envelope',
	mobileIconCls: 'fas fa-phone',
	telephoneIconCls: 'fas fa-phone'
});

