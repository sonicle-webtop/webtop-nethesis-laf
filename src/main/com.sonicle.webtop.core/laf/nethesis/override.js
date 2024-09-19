Ext.define('Nethesis.overrides.menu.Menu', {
	override: 'Ext.menu.Menu',
	
	defaultMinWidth: 200
});
Ext.define('Nethesis.overrides.grid.RowEditorButtons', {
	override: 'Ext.grid.RowEditorButtons',
	
	reverseButtons: true,
	updateButtonUI: '{primary}',
	cancelButtonUI: '{secondary}'
});
Ext.define('Nethesis.overrides.window.MessageBox', {
	override: 'Ext.window.MessageBox',
	
	/* Swap buttons, align them and customize pseudo-UI */
	reverseButtons: true,
	buttonsAlign: 'right',
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
		cfg.minWidth = 512;
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
Ext.define('Nethesis.form.field.Password', {
	override: 'Sonicle.form.field.Password',
	
	initComponent: function() {
		var me = this;
		me.callParent(arguments);
		me.addCls('wt-field-fix-fallingtrigger');
	}
});
Ext.define('Nethesis.webtop.core.ux.field.Meeting', {
	override: 'Sonicle.webtop.core.ux.field.Meeting',
	
	initComponent: function() {
		var me = this;
		me.callParent(arguments);
		me.addCls('wt-field-fix-fallingtrigger');
	}
});
Ext.define('Nethesis.form.field.InitialsAvatar', {
	override: 'Sonicle.form.field.InitialsAvatar',
	
	colors: ['#9CA3AF'] // Force single color: Gray/400
});
Ext.define('Nethesis.grid.column.Avatar', {
	override: 'Sonicle.grid.column.Avatar',
	
	colors: ['#9CA3AF'] // Force single color: Gray/400
});
Ext.define('Nethesis.grid.column.Nest', {
	override: 'Sonicle.grid.column.Nest',
	
	statics: {
		hierarchySvg: function(color, beginColor, endColor) {
			var ME = Sonicle.grid.column.Nest;
			return !Ext.isEmpty(beginColor) ? ME.hierarchySvgTplParent : ME.hierarchySvgTplChild;
		},
		
		hierarchySvgTplParent: '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">' +
			'<path fill="currentcolor" fill-rule="evenodd" d="m0 5c0-1.1 0.9-2 2-2h20c1.1 0 2 0.9 2 2v3c0 1.1-0.9 2-2 2h-14v7h4v-1c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v3c0 1.1-0.9 2-2 2h-8c-1.1 0-2-0.9-2-2h-5c-0.6 0-1-0.4-1-1v-8h-4c-1.1 0-2-0.9-2-2zm22 11h-8v3h8z"/>' +
			'</svg>',
		
		hierarchySvgTplChild: '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">' +
			'<path fill="currentcolor" fill-rule="evenodd" d="m22 3c1.1 0 2 0.9 2 2v3c0 1.1-0.9 2-2 2h-14v7h4v-1c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v3c0 1.1-0.9 2-2 2h-8c-1.1 0-2-0.9-2-2h-5c-0.6 0-1-0.4-1-1v-8h-4c-1.1 0-2-0.9-2-2v-3c0-1.1 0.9-2 2-2zm0 2h-20v3h20z"/>' +
			'</svg>'
	}
});
Ext.define('Nethesis.webtop.core.ux.app.taskbar.Bar', {
	override: 'Sonicle.webtop.core.ux.app.taskbar.Bar',
	
	defaults: {
		width: 180 // Taskbar buttons MUST have a fixed-width
	}
});
Ext.define('Nethesis.webtop.core.viewport.private.Default', {
	override: 'Sonicle.webtop.core.viewport.private.Default',

	/*
	 * Added CSS classes:
	 * wt-viewport-navbar-logo
	 * wt-tool-hd-separator
	 */
	
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
		
		createToolRegionItemBottomDockCfg: function(desc) {
			return {
				xtype: 'toolbar',
				border: false,
				cls: 'wt-tool-foo wt-tool-bg',
				items: [
					'->',
					this.createToolRegionItemCollapseButton()
				]
			};
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
				},
				'->',
				{
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
Ext.define('Nethesis.overrides.webtop.core.sdk.BaseView', {
	override: 'Sonicle.webtop.core.sdk.BaseView',
	bodyBorder: false
});
Ext.define('Nethesis.overrides.webtop.core.sdk.ModelView', {
	override: 'Sonicle.webtop.core.sdk.ModelView',
	
	constructor: function(cfg) {
		var me = this;
		cfg = WTA.sdk.UIView.overrideDockableConfig(cfg, {dockPosition: 'side'});
		me.callParent([cfg]);
	}
});
Ext.define('Nethesis.overrides.webtop.core.view.WizardView', {
	override: 'Sonicle.webtop.core.view.WizardView',
	
	privates: {
		createCancelButtonCfg: function(cfg) {
			return Ext.apply(this.callParent(arguments), {
				ui: '{tertiary}'
			});
		},
		
		createBackButtonCfg: function(cfg) {
			return Ext.apply(this.callParent(arguments), {
				ui: '{tertiary}'
			});
		}
	}
});
Ext.define('Nethesis.overrides.webtop.core.viewport.private.ViewController', {
	override: 'Sonicle.webtop.core.viewport.private.ViewController',
	
	viewsScaleFactor: {width: 1.3, height: 1.3}
});
Ext.define('Nethesis.overrides.webtop.core.ux.panel.Fields', {
	override: 'Sonicle.webtop.core.ux.panel.Fields',
	
	paddingTop: false,
	paddingBottom: false,
	paddingSides: false
});
Ext.define('Nethesis.overrides.webtop.core.ux.app.taskbar.Bar', {
	override: 'Sonicle.webtop.core.ux.app.taskbar.Bar',
	defaults: {
		width: 160
	}
});
Ext.define('Nethesis.overrides.webtop.core.view.Reminder', {
	override: 'Sonicle.webtop.core.view.Reminder',
	
	constructor: function(cfg) {
		var me = this,
			icfg = Sonicle.Utils.getConstructorConfigs(me, cfg, [
				{dockableConfig: true}
			]);
		
		cfg.dockableConfig = Ext.apply(icfg.dockableConfig || {}, {
			dockPosition: 'center'
		});
		me.callParent([cfg]);
	}
});
Ext.define('Nethesis.overrides.webtop.core.sdk.OptionTabSection', {
	override: 'Sonicle.webtop.core.sdk.OptionTabSection',
	
	bodyPadding: 24,
	
	defaults: {
		labelAlign: 'top',
		labelStyle: 'font-weight: 500'
	}
});
Ext.define('Nethesis.overrides.webtop.core.view.Options', {
	override: 'Sonicle.webtop.core.view.Options',
	
	constructor: function(cfg) {
		var me = this,
			icfg = Sonicle.Utils.getConstructorConfigs(me, cfg, [
				{dockableConfig: true}
			]);
		
		cfg.dockableConfig = Ext.apply(icfg.dockableConfig || {}, {
			maximized: false //true
		});
		me.callParent([cfg]);
	}
	
});

Ext.define('Nethesis.overrides.webtop.core.sdk.UserOptionsView', {
	override: 'Sonicle.webtop.core.sdk.UserOptionsView',
	

	privates: {
		createGridCfg: function(cfg) {
			var me = this,
				cfg = me.callParent(arguments);
			cfg.cls = Sonicle.String.join(' ', cfg.cls, 'x-grid-rounded');
			return cfg;
		}
	}
});
	
Ext.define('Nethesis.overrides.webtop.core.view.UserOptions', {
	override: 'Sonicle.webtop.core.view.UserOptions',
	
	//overridable properties to influence UI
	mainPasswordButtonPack: 'left',
	
	privates: {
		createSyncGridCfg: function(cfg) {
			var cfg = this.callParent(arguments);
			cfg.cls = Sonicle.String.join(' ', cfg.cls, 'x-grid-rounded');
			return cfg;
		}
	}
});