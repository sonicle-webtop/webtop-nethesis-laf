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
/*
Ext.define('Nethesis.override.webtop.core.viewport.private.Default', {
	override: 'Sonicle.webtop.core.viewport.private.Default',
	
	getNewButtons: function() {
		var card = this.getToolRegion(),
			buttons = [];
		card.items.each(function(item) {
			buttons.push(item.getDockedItems()[0].lookupReference('newbtn'));
		});
		return buttons;
	},
	
	getViewConstrainRegion: function() {
		return this.centerContentCmp().getConstrainRegion();
	},
	
	getViewMaximizeInsets: Ext.emptyFn,
	
	returnBottomDockCfg: function() {
		var me = this;
		return {
			xtype: 'container',
			layout: 'hbox',
			cls: 'wt-viewport-bottombar',
			items: [
				me.applyMoreCfg(me.createTaskBarCfg(), {
					height: '100%',
					flex: 1,
					listeners: {
						add: function(s) {
							me.bottomDockCmp().setHidden(false);
						},
						remove: function(s) {
							me.bottomDockCmp().setHidden(s.items.getCount() === 0);
						}
					}
				})
			],
			height: me.bottombarHeight(),
			hidden: true
		};
	},
	
	privates: {
		navbarItemsScale: function() {
			return 'large';
		},
		
		topbarHeight: function() {
			return 64;
		},
		
		bottombarHeight: function() {
			return 46;
		},
		
		toolHeaderHeight: function() {
			return 80;
		},
		
		toolHeaderSeparatorHeight: function() {
			return 0;
		},
		
		toolSplitterMinWidth: function() {
			return 320;
		},
		
		viewPrimaryButtonPosition: function() {
			return 'tr';
		},
		
		createViewportTopbarItemsCfg: function() {
			var items = this.callParent(arguments);
			// Base impl. carries newButton (only one) in topbar: here we have a newButton in each tool panel.
			// So, begin removing the default one from returned items!
			return items.slice(1);
		},
		
		createToolRegionItemTopDockCfg: function(desc, moreHdItems, toolboxItems) {
			// Do NOT pass moreHdItems in original method: newbtn MUST be the last!
			var cfg = this.callParent([desc, [], toolboxItems]);
			// Now add the separator...
			Ext.Array.push(cfg.items, [
				{
					xtype: 'soformseparator',
					cls: 'wt-tool-hd-separator',
					margin: '10 6 16 6'
				}
			]);
			return cfg;
		},
		
		createToolRegionItemBaseHdToolbarItems: function(name, toolboxItems) {
			return [
				{
					xtype: 'button',
					ui: 'button-icon',
					reference: 'toolboxbtn',
					iconCls: 'fas fa-ellipsis-vertical',
					arrowVisible: false,
					menu: toolboxItems
				}, {
					xtype: 'tbtext',
					html: Sonicle.String.htmlEncode(name),
					style: 'padding-left:0px;user-select:none;',
					cls: 'wt-tool-hd-title'
				}, '->', {
					xtype: 'splitbutton',
					ui: 'button-secondary',
					reference: 'newbtn',
					text: WT.res('new.btn-new.lbl'),
					menu: [],
					handler: 'onNewActionButtonClick'
				}
			];
		},
		
		createNavbarItemsCfg: function() {
			var items = [
				{
					xtype: 'tbimage',
					scale: 'medium',
					cls: 'wt-viewport-navbar-logo'
				}
			];
			Ext.Array.push(items, this.callParent(arguments));
			return items;
		},
		
		createAvatarButtonCfg: function() {
			return Ext.apply(this.callParent(arguments), {
				scale: 'large',
				arrowVisible: false
			});
		}
	}
});
*/

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