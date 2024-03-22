Ext.define('Nethesis.override.window.MessageBox', {
	override: 'Ext.window.MessageBox',
	requires: [
		'Sonicle.overrides.window.MessageBox'
	],
	
	/* Swap buttons, separate Cancel and customize pseudo-UI */
	reverseButtons: true,
	splitCancelButton: true,
	buttonPseudoUi: {
		ok: '{primary}',
		yes: '{primary}',
		no: '{tertiary}',
		cancel: '{tertiary}'
	},
	
	/**
	 * Override original {@link Ext.window.MessageBox#reconfigure}
	 * - Force icon in header (instead that next to body message)
	 */
	reconfigure: function(cfg) {
		var me = this;
		cfg.iconCls = cfg.icon;
		me.callParent(arguments);
	},
	
	/**
	 * Override original {@link Ext.window.MessageBox#setIcon}
	 * - Do NOT use the icon next to the message (iconCls in header is used instead)
	 */
	setIcon: function(icon, width, height) {
		var me = this,
			iconCmp = me.iconComponent;
		if (iconCmp) iconCmp.hide();
		return me;
	}
});
Ext.define('Nethesis.override.webtop.core.ux.app.taskbar.Bar', {
	override: 'Sonicle.webtop.core.ux.app.taskbar.Bar',
	defaults: {
		width: 160
	}
});
Ext.define('Nethesis.override.webtop.core.sdk.BaseView', {
	override: 'Sonicle.webtop.core.sdk.BaseView',
	bodyBorder: false
});
Ext.define('Nethesis.override.webtop.mail.view.MessageEditor', {
	override: 'Sonicle.webtop.mail.view.MessageEditor',
	
	createTopToolbarCfg: function(cfg) {
		return Ext.apply(this.callParent(arguments), {
			padding: '24 0 24 24'
		});
	}
});
Ext.define('Nethesis.override.webtop.mail.ux.grid.column.Message', {
	override: 'Sonicle.webtop.mail.ux.grid.column.Message',
	
	collapseToolPosition: 'right',
	flagIconsPosition: 'head',
	collapseToolOpenIconCls: 'fas fa-chevron-circle-down',
	collapseToolCloseIconCls: 'fas fa-chevron-circle-up'
});
Ext.define('Nethesis.override.menu.Menu', {
	override: 'Ext.menu.Menu',
	
	defaultMinWidth: 200
});
Ext.define('Nethesis.override.webtop.calendar.Service', {
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
			showWeekNumbers: true
		});
	}
});
Ext.define('Nethesis.override.webtop.calendar.view.EventNew', {
	override: 'Sonicle.webtop.calendar.view.EventNew',
	
	privates: {
		createTopToolbar2Cfg: function() {
			var me = this;
			return {
				xtype: 'toolbar',
				cls: 'wt-modelview-toolbar',
				items: [
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
				]
			};
		}
	}
});