(this.webpackJsonpstreamlit_lightweight_charts=this.webpackJsonpstreamlit_lightweight_charts||[]).push([[0],{26:function(e,t,i){e.exports=i(36)},36:function(e,t,i){"use strict";i.r(t);var a=i(10),r=i.n(a),n=i(23),c=i.n(n),o=i(16),s=i(5),l=i(9),u=i(25),f=function(){var e=Object(o.useRenderData)().args.charts,t=Object(a.useRef)(null),i=Array(e.length).fill(Object(a.useRef)(null)),n=Object(a.useRef)([]);return Object(a.useEffect)((function(){if(!i.find((function(e){return!e.current}))){i.forEach((function(t,a){var r=n.current[a]=Object(u.a)(t.current,Object(l.a)({height:300,width:i[a].current.clientWidth},e[a].chart));r.timeScale().fitContent();var c,o=Object(s.a)(e[a].series);try{for(o.s();!(c=o.n()).done;){var f=c.value,d=void 0;switch(f.type){case"Area":d=r.addAreaSeries(f.options);break;case"Bar":d=r.addBarSeries(f.options);break;case"Baseline":d=r.addBaselineSeries(f.options);break;case"Candlestick":d=r.addCandlestickSeries(f.options);break;case"Histogram":d=r.addHistogramSeries(f.options);break;case"Line":d=r.addLineSeries(f.options);break;default:return}f.priceScale&&r.priceScale(f.options.priceScaleId||"").applyOptions(f.priceScale),d.setData(f.data)}}catch(h){o.e(h)}finally{o.f()}}));var t=n.current.map((function(e){return e}));return e.length>1&&t.forEach((function(e){e&&(e.timeScale().subscribeVisibleTimeRangeChange((function(i){t.filter((function(t){return t!==e})).forEach((function(t){t.timeScale().applyOptions({rightOffset:e.timeScale().scrollPosition()})}))})),e.timeScale().subscribeVisibleLogicalRangeChange((function(i){i&&t.filter((function(t){return t!==e})).forEach((function(e){e.timeScale().setVisibleLogicalRange({from:null===i||void 0===i?void 0:i.from,to:null===i||void 0===i?void 0:i.to})}))})))})),function(){t.forEach((function(e){e.remove()}))}}}),[e,i,n]),r.a.createElement("div",{ref:t},i.map((function(e,t){return r.a.createElement("div",{ref:e,id:"lightweight-charts-".concat(t),key:"lightweight-charts-".concat(t)})})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.StreamlitProvider,null,r.a.createElement(f,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.bfba137a.chunk.js.map