(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/wMF":function(e,t,a){"use strict";a("PN9k");var r=a("q1tI"),c=a("YwZP"),i=a("+ZDr"),n=a.n(i),l=(a("41RD"),a("LnO1"),a("3eMz"),a("dtAy"),a("DB+v"),a("BXKi"),a("WKVI")),o=a.n(l),s=function(e){var t=e.title,a=e.items,c=e.location,i=e.onHeaderClick,n=e.listClassName,l=e.titleClassName,s=e.subSectionComponent,d=e.itemComponent,m=e.titleComponent;return r.createElement(r.Fragment,{key:t},r.createElement(m,{className:l,onClick:i,title:t}),r.createElement("ul",{className:"list-unstyled "+n+" "+o.a.menuList},a.map((function(e){return e.items?r.createElement(s,Object.assign({},e,{key:e.title,itemComponent:d,location:c})):r.createElement(d,Object.assign({},e,{key:e.title}))}))))};s.defaultProps={onHeaderClick:function(){},listClassName:"",titleClassName:""};var d=s,m=a("3WRX"),p=a.n(m);var h=function(e){var t=e.title,a=function(e,t){if(null==e)return{};var a,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["title"]);return r.createElement("h6",a,t)},u=function(e){return r.createElement(d,Object.assign({},e,{titleComponent:h,listClassName:p.a.list,titleClassName:p.a.title}))},g=a("P9gp"),f=a.n(g);function v(e,t){if(null==e)return{};var a,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}var y=function(e){var t=e.title,a=v(e,["title"]);return r.createElement("h3",a,t)},E=function(e){var t=e.items,a=e.path,c=e.location,i=v(e,["items","path","location"]),n=!function e(t,a,r){return t?t.some((function(t){var a=t.items,c=t.path;return e(a,c,r)})):r.pathname.endsWith(a)}(t,a,c),l=r.useState(n),o=l[0],s=l[1],m=f.a.title+" "+(o?f.a.collapsed:""),p=f.a.list+" "+(o?f.a.collapsed:"");return r.createElement(d,Object.assign({},i,{items:t,location:c,onHeaderClick:function(){return s(!o)},titleClassName:m,listClassName:p,subSectionComponent:u,titleComponent:y}))},C=a("FKj8"),S=a.n(C),b=function(e){e.collapsible;return r.createElement(c.Location,null,(function(t){var a=t.location;return r.createElement(A,Object.assign({},e,{location:a,sectionComponent:E}))}))},q=function(e){var t=e.path,a=e.title;return r.createElement("li",{key:t,className:S.a.item},r.createElement(n.a,{activeClassName:S.a.activeLink,to:t},a))},w=function(e){return r.createElement("ul",{className:"list-unstyled "+S.a.singleItem},r.createElement(q,e))},A=function(e){var t=e.sectionComponent,a=e.items,c=e.menuAddon,i=e.location;return r.createElement("div",{className:S.a.leftMenu},c,a.map((function(e){return r.createElement(r.Fragment,{key:e.title},e.items?r.createElement(t,Object.assign({},e,{itemComponent:q,location:i})):r.createElement(w,e),r.createElement("hr",null))})))};b.defaultProps={menuAddon:null};t.a=b},"41RD":function(e,t,a){"use strict";a("Bu8c"),a("T7D0");var r=a("q1tI"),c=a("htE9"),i=a.n(c);t.a=function(e){var t=e.technologyName,a=e.sectionName;return r.useEffect((function(){if("demos"!==a){var e=t.split("/"),r=e[0];e[1];docsearch({apiKey:"4cd7a76d4bc286ae69fe26182a8d4b18",indexName:"devextreme_reactive",inputSelector:"#docsearch",algoliaOptions:{facetFilters:["techno:"+r]},debug:!0})}})),r.createElement("input",{id:"docsearch",className:i.a.search+" form-control",placeholder:"Search..."})}},"6hyP":function(e,t,a){"use strict";a("4oWw"),a("nruA"),a("p+GS"),a("XjK0"),a("SCO9"),a("PN9k"),a("LnO1"),a("3eMz"),a("dtAy"),a("DB+v"),a("Yyzt");var r=a("q1tI"),c=a("R+GN"),i=a("/wMF"),n=(a("zeT8"),a("Rq7c")),l=a.n(n);var o=function(e){var t=e.children,a=function(e,t){if(null==e)return{};var a,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["children"]);return r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-9 col-md-8 order-md-2"},r.createElement("div",{className:l.a.content},t)),r.createElement("div",{className:"col-lg-3 col-md-4 order-md-1"},r.createElement("div",{className:l.a.sidebar},r.createElement(i.a,a))))},s=a("41RD"),d=a("X+uD");function m(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p={"react/grid":"Grid","react/chart":"Chart","react/scheduler":"Scheduler","react/common":"Common Concepts","react/core":"Core"},h=function(e){return e[0]===e[0].toUpperCase()},u=function(e){var t,a=e.children,i=e.sectionName,n=e.technologyName;return r.createElement(c.a,{sectionName:"docs"},r.createElement(o,{items:(t=i,[{title:"OVERVIEW",path:"/"+t+"/"}].concat(m(Object.keys(d).reduce((function(e,a){return d[a][t]&&e.push({title:p[a],items:d[a][t].reduce((function(e,r){var c,i,n,l,o=r;return 1===d[a][t].length?o.items:("API Reference"===o.title&&(o=Object.assign({},r,{items:(c=r.items,i=c.filter((function(e){var t=e.title;return h(t)})),n=c.filter((function(e){var t=e.title;return!h(t)})),l=function(e){return e.sort((function(e,t){return e.title.localeCompare(t.title)}))},[].concat(m(l(i)),m(l(n))))})),[].concat(m(e),[o]))}),[])}),e}),[])))),menuAddon:r.createElement(s.a,{technologyName:n,sectionName:i})},a))};u.defaultProps={children:void 0,technologyName:"react"};t.a=u},"9xjJ":function(e,t,a){"use strict";a.r(t);a("PN9k");var r=a("q1tI"),c=a("6hyP"),i=(a("zJkP"),a("+ZDr"),a("rHFK")),n=a("iqjM"),l=a.n(n),o=function(e){var t=e.title,a=e.path,c=e.imageComponent;return r.createElement(i.a,{path:a},r.createElement("div",{className:l.a.alignWrapper},r.createElement(c,{className:l.a.image}),r.createElement("h3",{className:l.a.title},t)))},s=a("yNJN"),d=a.n(s),m=function(e){var t=e.path,a=e.title,c=e.description;return r.createElement(i.a,{path:t,variant:"dense"},r.createElement("h6",{className:d.a.title},a),r.createElement("span",{className:d.a.description},c))},p=a("ys7v"),h=a.n(p),u=a("sj5t"),g=a.n(u),f=a("XS/L"),v=a.n(f),y=[{title:"Fundamentals",path:"/react/core/docs/guides/fundamentals/",description:"Learn the principles of our plugin-based architecture."},{title:"Localization",path:"/react/common/docs/guides/localization/",description:"Translate messages and format numbers and dates in DevExtreme Reactive components."},{title:"Custom Themes",path:"/react/common/docs/guides/custom-theme/",description:"Integrate DevExtreme Reactive components with a third-party UI framework."},{title:"Performance",path:"/react/common/docs/guides/performance-optimization/",description:"Apply tips and tricks for higher performance."}];t.default=function(){return r.createElement(c.a,{sectionName:"docs"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("h1",null,"Documentation"))),r.createElement("div",{className:"row my-3"},r.createElement(o,{path:"/react/grid/docs/",title:"Grid",imageComponent:h.a}),r.createElement(o,{path:"/react/scheduler/docs/",title:"Scheduler",imageComponent:v.a}),r.createElement(o,{path:"/react/chart/docs/",title:"Chart",imageComponent:g.a})),r.createElement("div",{className:"row my-2"},r.createElement("div",{className:"col-12"},r.createElement("h2",null,"Common Concepts"))),r.createElement("div",{className:"row"},y.map((function(e){return r.createElement(m,Object.assign({},e,{key:e.title}))})))))}},"R+GN":function(e,t,a){"use strict";var r=a("q1tI"),c=(a("+ZDr"),a("8pZI")),i=a("Rb52"),n=(a("/wMF"),a("TlT6")),l=a("Wbzz"),o=a("RMIM"),s=a.n(o),d=function(){return r.createElement(l.StaticQuery,{query:"2104210733",render:function(e){return r.createElement("a",{href:"https://github.com/DevExpress/devextreme-reactive/tree/master/CHANGELOG.md#"+e.site.siteMetadata.version,target:"_blank",rel:"noopener noreferrer",className:s.a.versionLink},r.createElement("span",{className:s.a.version},"Version"," ",e.site.siteMetadata.version))},data:n})},m=a("Q0CA"),p=a("zeT8");a("lF4X");var h=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=(e.technologyName,e.sectionName),a=e.children,n="docs"===t;return r.createElement(c.a,null,r.createElement(i.a,{links:r.createElement(r.Fragment,null,n?r.createElement(d,null):null,r.createElement(m.a,null))}),r.createElement(p.a,null,a))},n}(r.PureComponent);h.defaultProps={children:void 0,technologyName:"react"};t.a=h},TlT6:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"version":"2.3.0"}}}}')},"X+uD":function(e){e.exports=JSON.parse('{"react/grid":{"demos":[{"title":"Demos","items":[{"title":"Integrated Data Shaping","path":"/react/grid/demos/featured/integrated-data-shaping/"},{"title":"Data Editing","path":"/react/grid/demos/featured/data-editing/"},{"title":"Virtual Scrolling","path":"/react/grid/demos/featured/virtual-scrolling/"},{"title":"Redux Integration","path":"/react/grid/demos/featured/redux-integration/"},{"title":"Remote Data","path":"/react/grid/demos/featured/remote-data/"},{"title":"Tree Data","path":"/react/grid/demos/featured/tree-data/"},{"title":"Chart Integration","path":"/react/grid/demos/featured/chart-integration/"}]}],"docs":[{"title":"Guides","items":[{"title":"Getting Started","path":"/react/grid/docs/guides/getting-started/"},{"title":"Plugin Overview","path":"/react/grid/docs/guides/plugin-overview/"},{"title":"Fundamentals","path":"/react/grid/docs/guides/fundamentals/"},{"title":"Controlled and Uncontrolled Modes","path":"/react/grid/docs/guides/controlled-and-uncontrolled-modes/"},{"title":"Data Accessors","path":"/react/grid/docs/guides/data-accessors/"},{"title":"Data Formatting","path":"/react/grid/docs/guides/data-formatting/"},{"title":"Sorting","path":"/react/grid/docs/guides/sorting/"},{"title":"Paging","path":"/react/grid/docs/guides/paging/"},{"title":"Filtering","path":"/react/grid/docs/guides/filtering/"},{"title":"Searching","path":"/react/grid/docs/guides/searching/"},{"title":"Grouping","path":"/react/grid/docs/guides/grouping/"},{"title":"Selection","path":"/react/grid/docs/guides/selection/"},{"title":"Editing","path":"/react/grid/docs/guides/editing/"},{"title":"Detail Row","path":"/react/grid/docs/guides/detail-row/"},{"title":"Column Reordering","path":"/react/grid/docs/guides/column-reordering/"},{"title":"Column Resizing","path":"/react/grid/docs/guides/column-resizing/"},{"title":"Column Visibility","path":"/react/grid/docs/guides/column-visibility/"},{"title":"Banded Columns","path":"/react/grid/docs/guides/banded-columns/"},{"title":"Fixed Columns","path":"/react/grid/docs/guides/fixed-columns/"},{"title":"Virtual Scrolling","path":"/react/grid/docs/guides/virtual-scrolling/"},{"title":"Lazy Loading","path":"/react/grid/docs/guides/lazy-loading/"},{"title":"Tree Data","path":"/react/grid/docs/guides/tree-data/"},{"title":"Summary Row","path":"/react/grid/docs/guides/summary-row/"},{"title":"Localization","path":"/react/grid/docs/guides/localization/"},{"title":"TypeScript Support","path":"/react/grid/docs/guides/typescript/"},{"title":"Custom Plugin Development","path":"/react/grid/docs/guides/custom-plugin-development/"}]},{"title":"API Reference","items":[{"title":"Grid","path":"/react/grid/docs/reference/grid/"},{"title":"FilteringState","path":"/react/grid/docs/reference/filtering-state/"},{"title":"SortingState","path":"/react/grid/docs/reference/sorting-state/"},{"title":"GroupingState","path":"/react/grid/docs/reference/grouping-state/"},{"title":"PagingState","path":"/react/grid/docs/reference/paging-state/"},{"title":"SearchPanel","path":"/react/grid/docs/reference/search-panel/"},{"title":"SearchState","path":"/react/grid/docs/reference/search-state/"},{"title":"SelectionState","path":"/react/grid/docs/reference/selection-state/"},{"title":"EditingState","path":"/react/grid/docs/reference/editing-state/"},{"title":"RowDetailState","path":"/react/grid/docs/reference/row-detail-state/"},{"title":"TableColumnReordering","path":"/react/grid/docs/reference/table-column-reordering/"},{"title":"IntegratedFiltering","path":"/react/grid/docs/reference/integrated-filtering/"},{"title":"IntegratedSelection","path":"/react/grid/docs/reference/integrated-selection/"},{"title":"IntegratedSorting","path":"/react/grid/docs/reference/integrated-sorting/"},{"title":"IntegratedGrouping","path":"/react/grid/docs/reference/integrated-grouping/"},{"title":"CustomGrouping","path":"/react/grid/docs/reference/custom-grouping/"},{"title":"IntegratedPaging","path":"/react/grid/docs/reference/integrated-paging/"},{"title":"Table","path":"/react/grid/docs/reference/table/"},{"title":"VirtualTable","path":"/react/grid/docs/reference/virtual-table/"},{"title":"TableHeaderRow","path":"/react/grid/docs/reference/table-header-row/"},{"title":"TableSelection","path":"/react/grid/docs/reference/table-selection/"},{"title":"TableFilterRow","path":"/react/grid/docs/reference/table-filter-row/"},{"title":"TableRowDetail","path":"/react/grid/docs/reference/table-row-detail/"},{"title":"TableGroupRow","path":"/react/grid/docs/reference/table-group-row/"},{"title":"TableEditRow","path":"/react/grid/docs/reference/table-edit-row/"},{"title":"TableEditColumn","path":"/react/grid/docs/reference/table-edit-column/"},{"title":"TableBandHeader","path":"/react/grid/docs/reference/table-band-header/"},{"title":"TableColumnResizing","path":"/react/grid/docs/reference/table-column-resizing/"},{"title":"PagingPanel","path":"/react/grid/docs/reference/paging-panel/"},{"title":"GroupingPanel","path":"/react/grid/docs/reference/grouping-panel/"},{"title":"DragDropProvider","path":"/react/grid/docs/reference/drag-drop-provider/"},{"title":"DataTypeProvider","path":"/react/grid/docs/reference/data-type-provider/"},{"title":"ColumnChooser","path":"/react/grid/docs/reference/column-chooser/"},{"title":"TableColumnVisibility","path":"/react/grid/docs/reference/table-column-visibility/"},{"title":"Toolbar","path":"/react/grid/docs/reference/toolbar/"},{"title":"CustomPaging","path":"/react/grid/docs/reference/custom-paging/"},{"title":"TreeDataState","path":"/react/grid/docs/reference/tree-data-state/"},{"title":"CustomTreeData","path":"/react/grid/docs/reference/custom-tree-data/"},{"title":"TableTreeColumn","path":"/react/grid/docs/reference/table-tree-column/"},{"title":"TableFixedColumns","path":"/react/grid/docs/reference/table-fixed-columns/"},{"title":"SummaryState","path":"/react/grid/docs/reference/summary-state/"},{"title":"IntegratedSummary","path":"/react/grid/docs/reference/integrated-summary/"},{"title":"CustomSummary","path":"/react/grid/docs/reference/custom-summary/"},{"title":"TableSummaryRow","path":"/react/grid/docs/reference/table-summary-row/"},{"title":"VirtualTableState","path":"/react/grid/docs/reference/virtual-table-state/"},{"title":"createRowCache","path":"/react/grid/docs/reference/create-row-cache/"},{"title":"TableInlineCellEditing","path":"/react/grid/docs/reference/table-inline-cell-editing/"}]}]},"react/chart":{"demos":[{"title":"Demos","items":[{"title":"Overview","path":"/react/chart/demos/overview/multiple-axes/"}]},{"title":"Area Chart","items":[{"title":"Simple Area","path":"/react/chart/demos/area/simple-area/"},{"title":"Spline Area","path":"/react/chart/demos/area/spline-area/"},{"title":"Stacked Area","path":"/react/chart/demos/area/stacked-area/"},{"title":"Full-Stacked Area","path":"/react/chart/demos/area/fullstacked-area/"},{"title":"Step Area","path":"/react/chart/demos/area/step-area/"},{"title":"Streamgraph","path":"/react/chart/demos/area/streamgraph/"}]},{"title":"Bar Chart","items":[{"title":"Simple Bar","path":"/react/chart/demos/bar/simple-bar/"},{"title":"Side-By-Side Bars","path":"/react/chart/demos/bar/side-by-side/"},{"title":"Side-By-Side Stacked Bars","path":"/react/chart/demos/bar/side-by-side-stacked-bar/"},{"title":"Stacked Bar","path":"/react/chart/demos/bar/stacked-bar/"},{"title":"Full-Stacked Bar","path":"/react/chart/demos/bar/fullstacked-bar/"},{"title":"Component Customization","path":"/react/chart/demos/bar/component-customization/"},{"title":"Series Interaction","path":"/react/chart/demos/bar/series-interaction/"},{"title":"Rotated Bar","path":"/react/chart/demos/bar/rotated-bar/"}]},{"title":"Line Chart","items":[{"title":"Simple Line","path":"/react/chart/demos/line/line/"},{"title":"Spline","path":"/react/chart/demos/line/spline/"},{"title":"Step Line","path":"/react/chart/demos/line/step-line/"},{"title":"Step Line With Gaps","path":"/react/chart/demos/line/step-line-with-gaps/"},{"title":"Axes Type Customization","path":"/react/chart/demos/line/log-time-axes/"}]},{"title":"Point Chart","items":[{"title":"Scatter Series","path":"/react/chart/demos/point/scatter/"}]},{"title":"Pie Chart","items":[{"title":"Pie Chart","path":"/react/chart/demos/pie/pie/"},{"title":"Doughnut Chart","path":"/react/chart/demos/pie/doughnut/"}]},{"title":"Combination","items":[{"title":"Multiple Axes","path":"/react/chart/demos/combination/multiple-axes/"}]},{"title":"More Features","items":[{"title":"Export","path":"/react/chart/demos/export/demo/"},{"title":"Zoom and Pan","path":"/react/chart/demos/more_features/zoom-and-pan/"}]}],"docs":[{"title":"Guides","items":[{"title":"Getting Started","path":"/react/chart/docs/guides/getting-started/"},{"title":"Plugin Overview","path":"/react/chart/docs/guides/plugin-overview/"},{"title":"Series","path":"/react/chart/docs/guides/series/"},{"title":"Axes","path":"/react/chart/docs/guides/axes/"},{"title":"Legend and Title","path":"/react/chart/docs/guides/legend_title/"},{"title":"Stacked Series","path":"/react/chart/docs/guides/stacked-series/"},{"title":"Palette","path":"/react/chart/docs/guides/palette/"},{"title":"Animation","path":"/react/chart/docs/guides/animation/"},{"title":"Hover and Selection","path":"/react/chart/docs/guides/hover-and-selection/"},{"title":"Tooltip","path":"/react/chart/docs/guides/tooltip/"},{"title":"Zoom and Pan","path":"/react/chart/docs/guides/zoom-and-pan/"},{"title":"Rotated","path":"/react/chart/docs/guides/rotated/"},{"title":"TypeScript Support","path":"/react/chart/docs/guides/typescript/"}]},{"title":"API Reference","items":[{"title":"Animation","path":"/react/chart/docs/reference/animation/"},{"title":"AreaSeries","path":"/react/chart/docs/reference/area-series/"},{"title":"ArgumentAxis","path":"/react/chart/docs/reference/argument-axis/"},{"title":"ArgumentScale","path":"/react/chart/docs/reference/argument-scale/"},{"title":"BarSeries","path":"/react/chart/docs/reference/bar-series/"},{"title":"Chart","path":"/react/chart/docs/reference/chart/"},{"title":"EventTracker","path":"/react/chart/docs/reference/event-tracker/"},{"title":"HoverState","path":"/react/chart/docs/reference/hover-state/"},{"title":"Legend","path":"/react/chart/docs/reference/legend/"},{"title":"LineSeries","path":"/react/chart/docs/reference/line-series/"},{"title":"Palette","path":"/react/chart/docs/reference/palette/"},{"title":"PieSeries","path":"/react/chart/docs/reference/pie-series/"},{"title":"ScatterSeries","path":"/react/chart/docs/reference/scatter-series/"},{"title":"SelectionState","path":"/react/chart/docs/reference/selection-state/"},{"title":"SplineSeries","path":"/react/chart/docs/reference/spline-series/"},{"title":"Stack","path":"/react/chart/docs/reference/stack/"},{"title":"Title","path":"/react/chart/docs/reference/title/"},{"title":"Tooltip","path":"/react/chart/docs/reference/tooltip/"},{"title":"ValueAxis","path":"/react/chart/docs/reference/value-axis/"},{"title":"ValueScale","path":"/react/chart/docs/reference/value-scale/"},{"title":"ZoomAndPan","path":"/react/chart/docs/reference/zoom-and-pan/"}]}]},"react/scheduler":{"demos":[{"title":"Demos","items":[{"title":"Overview","path":"/react/scheduler/demos/featured/overview/"},{"title":"Integrated Data Shaping","path":"/react/scheduler/demos/featured/integrated-data-shaping/"},{"title":"Data Editing","path":"/react/scheduler/demos/featured/data-editing/"},{"title":"Appearance Customization","path":"/react/scheduler/demos/featured/appearance-customization/"},{"title":"Remote Data","path":"/react/scheduler/demos/featured/remote-data/"},{"title":"Redux Integration","path":"/react/scheduler/demos/featured/redux-integration/"}]}],"docs":[{"title":"Guides","items":[{"title":"Getting Started","path":"/react/scheduler/docs/guides/getting-started/"},{"title":"Fundamentals","path":"/react/scheduler/docs/guides/fundamentals/"},{"title":"Views","path":"/react/scheduler/docs/guides/views/"},{"title":"Appointments","path":"/react/scheduler/docs/guides/appointments/"},{"title":"View Switching","path":"/react/scheduler/docs/guides/view-switching/"},{"title":"Date Navigation","path":"/react/scheduler/docs/guides/date-navigation/"},{"title":"Appointment Tooltip","path":"/react/scheduler/docs/guides/appointment-tooltip/"},{"title":"Editing","path":"/react/scheduler/docs/guides/editing/"},{"title":"Resources","path":"/react/scheduler/docs/guides/resources/"},{"title":"Current Time Indication","path":"/react/scheduler/docs/guides/current-time-indication/"},{"title":"Localization","path":"/react/scheduler/docs/guides/localization/"},{"title":"TypeScript Support","path":"/react/scheduler/docs/guides/typescript/"}]},{"title":"API Reference","items":[{"title":"Scheduler","path":"/react/scheduler/docs/reference/scheduler/"},{"title":"ViewState","path":"/react/scheduler/docs/reference/view-state/"},{"title":"DayView","path":"/react/scheduler/docs/reference/day-view/"},{"title":"WeekView","path":"/react/scheduler/docs/reference/week-view/"},{"title":"MonthView","path":"/react/scheduler/docs/reference/month-view/"},{"title":"Appointments","path":"/react/scheduler/docs/reference/appointments/"},{"title":"AppointmentForm","path":"/react/scheduler/docs/reference/appointment-form/"},{"title":"AppointmentTooltip","path":"/react/scheduler/docs/reference/appointment-tooltip/"},{"title":"EditingState","path":"/react/scheduler/docs/reference/editing-state/"},{"title":"DragDropProvider","path":"/react/scheduler/docs/reference/drag-drop-provider/"},{"title":"EditRecurrenceMenu","path":"/react/scheduler/docs/reference/edit-recurrence-menu/"},{"title":"IntegratedEditing","path":"/react/scheduler/docs/reference/integrated-editing/"},{"title":"TodayButton","path":"/react/scheduler/docs/reference/today-button/"},{"title":"Toolbar","path":"/react/scheduler/docs/reference/toolbar/"},{"title":"AllDayPanel","path":"/react/scheduler/docs/reference/all-day-panel/"},{"title":"DateNavigator","path":"/react/scheduler/docs/reference/date-navigator/"},{"title":"ViewSwitcher","path":"/react/scheduler/docs/reference/view-switcher/"},{"title":"ConfirmationDialog","path":"/react/scheduler/docs/reference/confirmation-dialog/"},{"title":"Resources","path":"/react/scheduler/docs/reference/resources/"},{"title":"CurrentTimeIndicator","path":"/react/scheduler/docs/reference/current-time-indicator/"}]}]},"react/common":{"docs":[{"title":"Common Concepts","items":[{"title":"Optimize performance","path":"/react/common/docs/guides/performance-optimization/"},{"title":"Create a Custom Theme","path":"/react/common/docs/guides/custom-theme/"},{"title":"Localization","path":"/react/common/docs/guides/localization/"}]}]},"react/core":{"docs":[{"title":"Guides","items":[{"title":"Fundamentals","path":"/react/core/docs/guides/fundamentals/"},{"title":"Render Markup","path":"/react/core/docs/guides/rendering-markup/"},{"title":"Provide Values","path":"/react/core/docs/guides/providing-values/"},{"title":"Provide Actions","path":"/react/core/docs/guides/providing-actions/"}]},{"title":"API Reference","items":[{"title":"PluginHost","path":"/react/core/docs/reference/plugin-host/"},{"title":"Plugin","path":"/react/core/docs/reference/plugin/"},{"title":"Action","path":"/react/core/docs/reference/action/"},{"title":"Getter","path":"/react/core/docs/reference/getter/"},{"title":"Template","path":"/react/core/docs/reference/template/"},{"title":"TemplatePlaceholder","path":"/react/core/docs/reference/template-placeholder/"},{"title":"TemplateConnector","path":"/react/core/docs/reference/template-connector/"},{"title":"connectProps","path":"/react/core/docs/reference/connect-props/"}]}]}}')},"XS/L":function(e,t,a){var r=a("q1tI");function c(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"React Scheduler"),r.createElement("path",{d:"M65.05,11.26q-.62-.21-1.25-.39.1-.42.19-.85c.95-4.56.33-8.23-1.79-9.44s-5.35,0-8.71,2.94q-.5.43-1,.88l-.65-.59C48.37.72,44.84-.59,42.73.63S40.1,5.24,41,9.56q.13.64.29,1.28c-.5.14-1,.29-1.44.45-4.12,1.42-6.75,3.65-6.75,6s2.83,4.79,7.12,6.24l1.05.33q-.17.68-.31,1.38c-.81,4.25-.18,7.62,1.84,8.77s5.6,0,9-3q.41-.35.81-.74.51.49,1.05,1c3.31,2.82,6.58,4,8.6,2.8s2.77-4.82,1.89-9.23q-.1-.5-.23-1l.72-.22C69.07,22,72,19.68,72,17.26S69.25,12.69,65.05,11.26ZM54.59,4.76C57.46,2.28,60.15,1.3,61.37,2s1.81,3.75,1,7.68q-.08.38-.17.77A40.15,40.15,0,0,0,57,9.64a38.78,38.78,0,0,0-3.29-4.07Q54.13,5.15,54.59,4.76Zm-10,14.47q.53,1,1.1,2t1.22,2a35.79,35.79,0,0,1-3.59-.57C43.62,21.54,44,20.39,44.54,19.23Zm0-3.87c-.48-1.14-.9-2.26-1.24-3.34,1.11-.25,2.3-.45,3.53-.6q-.62,1-1.19,1.94T44.54,15.36Zm.88,1.94q.77-1.58,1.66-3.11h0q.89-1.52,1.89-3c1.16-.09,2.34-.13,3.54-.13s2.39,0,3.55.13q1,1.45,1.88,3t1.68,3.09q-.78,1.59-1.67,3.12h0q-.88,1.52-1.87,3c-1.15.08-2.35.12-3.57.12s-2.39,0-3.52-.11q-1-1.46-1.9-3T45.42,17.3Zm14,3.92q.59-1,1.13-2a34.74,34.74,0,0,1,1.31,3.39,35.69,35.69,0,0,1-3.63.61Q58.8,22.21,59.38,21.22Zm1.11-5.86q-.54-1-1.12-2t-1.18-1.93c1.24.16,2.43.36,3.55.61A34.85,34.85,0,0,1,60.49,15.36Zm-8-8.61a35.31,35.31,0,0,1,2.29,2.74q-2.3-.11-4.6,0C51,8.5,51.75,7.58,52.53,6.75Zm-9-4.7c1.3-.75,4.18.32,7.22,3l.58.53A39.49,39.49,0,0,0,48,9.64a41,41,0,0,0-5.19.8q-.15-.59-.27-1.19C41.85,5.55,42.34,2.75,43.56,2.05Zm-1.9,20.18-1-.3a14.14,14.14,0,0,1-4.54-2.39,3.4,3.4,0,0,1-1.45-2.29c0-1.4,2.11-3.19,5.64-4.41q.66-.23,1.34-.42a39.24,39.24,0,0,0,1.9,4.87A39.89,39.89,0,0,0,41.66,22.23Zm9,7.51a14.11,14.11,0,0,1-4.36,2.7,3.47,3.47,0,0,1-2.73.1c-1.23-.7-1.74-3.41-1-7q.12-.64.28-1.28a39.45,39.45,0,0,0,5.25.75,40.15,40.15,0,0,0,3.34,4.09Q51.05,29.41,50.67,29.74Zm1.9-1.86C51.78,27,51,26.11,50.23,25.1q1.12,0,2.28,0t2.35-.05A35,35,0,0,1,52.57,27.88Zm10.1,2.29a3.4,3.4,0,0,1-1.27,2.39c-1.23.7-3.85-.21-6.68-2.62q-.49-.41-1-.88A38.78,38.78,0,0,0,57,25a39.19,39.19,0,0,0,5.27-.8q.12.48.21.93A13.82,13.82,0,0,1,62.67,30.17Zm1.41-8.23h0l-.65.2a38.44,38.44,0,0,0-2-4.88,38.37,38.37,0,0,0,1.89-4.81c.4.11.78.23,1.16.36,3.6,1.23,5.8,3,5.8,4.44S67.94,20.68,64.08,21.95Z",style:{fill:"#fff"},key:1}),r.createElement("ellipse",{cx:"52.51",cy:"17.26",rx:"3.48",ry:"3.44",style:{fill:"#fff"},key:2}),r.createElement("path",{d:"M12,17h1c.74-.11,2-1.26,2-2V7a2.75,2.75,0,0,0-2-2H12a2.75,2.75,0,0,0-2,2v8C10,15.74,11.27,16.89,12,17Z",style:{fill:"#fff",fillRule:"evenodd"},key:3}),r.createElement("path",{d:"M56,37.1v21a3,3,0,0,1-3,3H5.9A3,3,0,0,1,3,58.1V25a3.09,3.09,0,0,1,3-3H30.74a7.2,7.2,0,0,1-2.36-5c0-2.18,1.23-4.21,3.37-6H16v6c0,.74-.26,1-1,1H10c-.74,0-1-.26-1-1V11H3a2.92,2.92,0,0,0-3,2.85V61a3,3,0,0,0,3,3H56a3,3,0,0,0,3-3V38.1A13.11,13.11,0,0,1,56,37.1Z",style:{fill:"#fff",fillRule:"evenodd"},key:4}),r.createElement("path",{d:"M42.72,38.78a6.2,6.2,0,0,1-3-.8c-2.4-1.39-3.61-4.4-3.66-8.28a13.47,13.47,0,1,0,6.68,9.08ZM37,42a1,1,0,0,1-1,1H29a1,1,0,0,1-1-1V33a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1v7h5a1,1,0,0,1,1,1Z",style:{fill:"#fff",fillRule:"evenodd"},key:5})])}c.defaultProps={id:"Layer_1","data-name":"Layer 1",width:"72",height:"64",viewBox:"0 0 72 64"},e.exports=c,c.default=c},rHFK:function(e,t,a){"use strict";a("0rpg");var r=a("q1tI"),c=a("+ZDr"),i=a.n(c),n=a("Qpm3"),l=a.n(n),o=function(e){var t=e.path,a=e.children,c=e.variant,n=e.className;return r.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12 my-2 "+n},r.createElement(i.a,{to:t,className:l.a.link},r.createElement("div",{className:l.a.container+" "+l.a[c]},a)))};o.defaultProps={variant:"normal",className:""},t.a=o},sj5t:function(e,t,a){var r=a("q1tI");function c(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"React Chart"),r.createElement("path",{d:"M65.05,11.26q-.62-.21-1.25-.39.1-.42.19-.85c.95-4.56.33-8.23-1.79-9.44s-5.35,0-8.71,2.94q-.5.43-1,.88l-.65-.59C48.37.72,44.84-.59,42.73.63S40.1,5.24,41,9.56q.13.64.29,1.28c-.5.14-1,.29-1.44.45-4.12,1.42-6.75,3.65-6.75,6s2.83,4.79,7.12,6.24l1.05.33q-.17.68-.31,1.38c-.81,4.25-.18,7.62,1.84,8.77s5.6,0,9-3q.41-.35.81-.74.51.49,1.05,1c3.31,2.82,6.58,4,8.6,2.8s2.77-4.82,1.89-9.23q-.1-.5-.23-1l.72-.22C69.07,22,72,19.68,72,17.26S69.25,12.69,65.05,11.26ZM54.59,4.76C57.46,2.28,60.15,1.3,61.37,2s1.81,3.75,1,7.68q-.08.38-.17.77A40.15,40.15,0,0,0,57,9.64a38.78,38.78,0,0,0-3.29-4.07Q54.13,5.15,54.59,4.76Zm-10,14.47q.53,1,1.1,2t1.22,2a35.79,35.79,0,0,1-3.59-.57C43.62,21.54,44,20.39,44.54,19.23Zm0-3.87c-.48-1.14-.9-2.26-1.24-3.34,1.11-.25,2.3-.45,3.53-.6q-.62,1-1.19,1.94T44.54,15.36Zm.88,1.94q.77-1.58,1.66-3.11h0q.89-1.52,1.89-3c1.16-.09,2.34-.13,3.54-.13s2.39,0,3.55.13q1,1.45,1.88,3t1.68,3.09q-.78,1.59-1.67,3.12h0q-.88,1.52-1.87,3c-1.15.08-2.35.12-3.57.12s-2.39,0-3.52-.11q-1-1.46-1.9-3T45.42,17.3Zm14,3.92q.59-1,1.13-2a34.74,34.74,0,0,1,1.31,3.39,35.69,35.69,0,0,1-3.63.61Q58.8,22.21,59.38,21.22Zm1.11-5.86q-.54-1-1.12-2t-1.18-1.93c1.24.16,2.43.36,3.55.61A34.85,34.85,0,0,1,60.49,15.36Zm-8-8.61a35.31,35.31,0,0,1,2.29,2.74q-2.3-.11-4.6,0C51,8.5,51.75,7.58,52.53,6.75Zm-9-4.7c1.3-.75,4.18.32,7.22,3l.58.53A39.49,39.49,0,0,0,48,9.64a41,41,0,0,0-5.19.8q-.15-.59-.27-1.19C41.85,5.55,42.34,2.75,43.56,2.05Zm-1.9,20.18-1-.3a14.14,14.14,0,0,1-4.54-2.39,3.4,3.4,0,0,1-1.45-2.29c0-1.4,2.11-3.19,5.64-4.41q.66-.23,1.34-.42a39.24,39.24,0,0,0,1.9,4.87A39.89,39.89,0,0,0,41.66,22.23Zm9,7.51a14.11,14.11,0,0,1-4.36,2.7,3.47,3.47,0,0,1-2.73.1c-1.23-.7-1.74-3.41-1-7q.12-.64.28-1.28a39.45,39.45,0,0,0,5.25.75,40.15,40.15,0,0,0,3.34,4.09Q51.05,29.41,50.67,29.74Zm1.9-1.86C51.78,27,51,26.11,50.23,25.1q1.12,0,2.28,0t2.35-.05A35,35,0,0,1,52.57,27.88Zm10.1,2.29a3.4,3.4,0,0,1-1.27,2.39c-1.23.7-3.85-.21-6.68-2.62q-.49-.41-1-.88A38.78,38.78,0,0,0,57,25a39.19,39.19,0,0,0,5.27-.8q.12.48.21.93A13.82,13.82,0,0,1,62.67,30.17Zm1.41-8.23h0l-.65.2a38.44,38.44,0,0,0-2-4.88,38.37,38.37,0,0,0,1.89-4.81c.4.11.78.23,1.16.36,3.6,1.23,5.8,3,5.8,4.44S67.94,20.68,64.08,21.95Z",style:{fill:"#fff"},key:1}),r.createElement("ellipse",{cx:"52.51",cy:"17.26",rx:"3.48",ry:"3.44",style:{fill:"#fff"},key:2}),r.createElement("path",{d:"M15,64H26V30H15ZM0,64H12V40.08H0ZM51.48,37.3A16.51,16.51,0,0,1,44,40.85V64H56V40A20.68,20.68,0,0,1,51.48,37.3ZM36.32,28.55c-3.32-1.38-5.86-3.19-7.2-5.27V64H41V40.66a5.76,5.76,0,0,1-1.26-.53C36.7,38.38,35.6,34,36.32,28.55Z",style:{fill:"#fff",fillRule:"evenodd"},key:3})])}c.defaultProps={id:"Layer_1","data-name":"Layer 1",width:"72",height:"64",viewBox:"0 0 72 64"},e.exports=c,c.default=c},ys7v:function(e,t,a){var r=a("q1tI");function c(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"React Grid"),r.createElement("rect",{x:"6",y:"47",width:"14",height:"11",style:{fill:"#fff"},key:1}),r.createElement("rect",{x:"6",y:"12",width:"14",height:"11",style:{fill:"#fff"},key:2}),r.createElement("rect",{x:"22",y:"47",width:"15",height:"11",style:{fill:"#fff"},key:3}),r.createElement("rect",{x:"39",y:"47",width:"14",height:"11",style:{fill:"#fff"},key:4}),r.createElement("path",{d:"M56,60a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V10A1,1,0,0,1,4,9H36.38l.87-.38A24.13,24.13,0,0,1,37.06,6h-35A2.12,2.12,0,0,0,0,8.11V61.89A2.12,2.12,0,0,0,2.11,64H56.89A2.12,2.12,0,0,0,59,61.89V38.49a14.23,14.23,0,0,1-3-1.15Z",style:{fill:"#fff"},key:5}),r.createElement("path",{d:"M65.05,11.26q-.62-.21-1.25-.39.1-.42.19-.85c.95-4.56.33-8.23-1.79-9.44s-5.35,0-8.71,2.94q-.5.43-1,.88l-.65-.59C48.37.72,44.84-.59,42.73.63S40.1,5.24,41,9.56q.13.64.29,1.28c-.5.14-1,.29-1.44.45-4.12,1.42-6.75,3.65-6.75,6s2.83,4.79,7.12,6.24l1.05.33q-.17.68-.31,1.38c-.81,4.25-.18,7.62,1.84,8.77s5.6,0,9-3q.41-.35.81-.74.51.49,1.05,1c3.31,2.82,6.58,4,8.6,2.8s2.77-4.82,1.89-9.23q-.1-.5-.23-1l.72-.22C69.07,22,72,19.68,72,17.26S69.25,12.69,65.05,11.26ZM54.59,4.76C57.46,2.28,60.15,1.3,61.37,2s1.81,3.75,1,7.68q-.08.38-.17.77A40.15,40.15,0,0,0,57,9.64a38.78,38.78,0,0,0-3.29-4.07Q54.13,5.15,54.59,4.76Zm-10,14.47q.53,1,1.1,2t1.22,2a35.79,35.79,0,0,1-3.59-.57C43.62,21.54,44,20.39,44.54,19.23Zm0-3.87c-.48-1.14-.9-2.26-1.24-3.34,1.11-.25,2.3-.45,3.53-.6q-.62,1-1.19,1.94T44.54,15.36Zm.88,1.94q.77-1.58,1.66-3.11h0q.89-1.52,1.89-3c1.16-.09,2.34-.13,3.54-.13s2.39,0,3.55.13q1,1.45,1.88,3t1.68,3.09q-.78,1.59-1.67,3.12h0q-.88,1.52-1.87,3c-1.15.08-2.35.12-3.57.12s-2.39,0-3.52-.11q-1-1.46-1.9-3T45.42,17.3Zm14,3.92q.59-1,1.13-2a34.74,34.74,0,0,1,1.31,3.39,35.69,35.69,0,0,1-3.63.61Q58.8,22.21,59.38,21.22Zm1.11-5.86q-.54-1-1.12-2t-1.18-1.93c1.24.16,2.43.36,3.55.61A34.85,34.85,0,0,1,60.49,15.36Zm-8-8.61a35.31,35.31,0,0,1,2.29,2.74q-2.3-.11-4.6,0C51,8.5,51.75,7.58,52.53,6.75Zm-9-4.7c1.3-.75,4.18.32,7.22,3l.58.53A39.49,39.49,0,0,0,48,9.64a41,41,0,0,0-5.19.8q-.15-.59-.27-1.19C41.85,5.55,42.34,2.75,43.56,2.05Zm-1.9,20.18-1-.3a14.14,14.14,0,0,1-4.54-2.39,3.4,3.4,0,0,1-1.45-2.29c0-1.4,2.11-3.19,5.64-4.41q.66-.23,1.34-.42a39.24,39.24,0,0,0,1.9,4.87A39.89,39.89,0,0,0,41.66,22.23Zm9,7.51a14.11,14.11,0,0,1-4.36,2.7,3.47,3.47,0,0,1-2.73.1c-1.23-.7-1.74-3.41-1-7q.12-.64.28-1.28a39.45,39.45,0,0,0,5.25.75,40.15,40.15,0,0,0,3.34,4.09Q51.05,29.41,50.67,29.74Zm1.9-1.86C51.78,27,51,26.11,50.23,25.1q1.12,0,2.28,0t2.35-.05A35,35,0,0,1,52.57,27.88Zm10.1,2.29a3.4,3.4,0,0,1-1.27,2.39c-1.23.7-3.85-.21-6.68-2.62q-.49-.41-1-.88A38.78,38.78,0,0,0,57,25a39.19,39.19,0,0,0,5.27-.8q.12.48.21.93A13.82,13.82,0,0,1,62.67,30.17Zm1.41-8.23h0l-.65.2a38.44,38.44,0,0,0-2-4.88,38.37,38.37,0,0,0,1.89-4.81c.4.11.78.23,1.16.36,3.6,1.23,5.8,3,5.8,4.44S67.94,20.68,64.08,21.95Z",style:{fill:"#fff"},key:6}),r.createElement("path",{d:"M28.88,17.45A7.48,7.48,0,0,1,31.67,12H22V23h9.77A7.55,7.55,0,0,1,28.88,17.45Z",style:{fill:"#fff"},key:7}),r.createElement("ellipse",{cx:"52.51",cy:"17.26",rx:"3.48",ry:"3.44",style:{fill:"#fff"},key:8}),r.createElement("path",{d:"M20,23v5H6v2H20v4H6v2H20v4H6v2H20v5h2V42H37v5h2V42H53V40H39V36.68A6.85,6.85,0,0,1,37,34H22V30H36.06a18.36,18.36,0,0,1,0-2H22V23ZM37,36v4H22V36Z",style:{fill:"#fff"},key:9})])}c.defaultProps={id:"Layer_1","data-name":"Layer 1",width:"72",height:"64",viewBox:"0 0 72 64"},e.exports=c,c.default=c},zJkP:function(e,t,a){"use strict";var r=a("q1tI"),c=a("fRXT"),i=a.n(c);t.a=function(e){var t=e.text,a=e.iconComponent;return r.createElement("div",{className:"row mx-0"},r.createElement("div",{className:"col-md-12"},r.createElement(a,{className:i.a.icon}),r.createElement("h1",{className:i.a.title},t)))}},zeT8:function(e,t,a){"use strict";var r=a("q1tI"),c=a("YL5U"),i=a.n(c);t.a=function(e){var t=e.children;return r.createElement("div",{className:i.a.contentContainer},r.createElement("div",{className:"container"},t))}}}]);
//# sourceMappingURL=component---src-pages-docs-jsx-3e256489514c71422946.js.map