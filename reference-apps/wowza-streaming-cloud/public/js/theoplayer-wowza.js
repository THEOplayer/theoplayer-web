!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var r={registerPlayer:function(e){var t,n,r=null,a=null,o=!1,i=!1,l=!1,u=null,s=null,c=null;function d(){u({state:"unavailable",info:"The configured stream is currently unavailable."}),o=!0,function(){var e=p().querySelector(".stream-status");if(!e){(e=document.createElement("div")).className="stream-status";var t=b();if(t&&(e.style.background='url("'+t+'")',e.style.backgroundSize="cover"),r){var o=r.countdown_timestamp;if(o&&(o=new Date(1e3*parseInt(o))).getTime()>Date.now()){var i=document.createElement("div");i.className="stream-status-overlay";var l=o.toDateString(),u=o.toISOString().substr(11,5),s=r.title+"<br />"||!1;i.innerHTML=s+"Stream will start on:<br />"+l+" @ "+u,e.appendChild(i);var c=document.createElement("div");c.className="countdown",c.innerHTML="&nbsp;",i.appendChild(c),function(e){e=e.getTime();n=setInterval((function(){var t=(new Date).getTime(),r=e-t,a=Math.floor(r/864e5),o=Math.floor(r%864e5/36e5),i=Math.floor(r%36e5/6e4),l=Math.floor(r%6e4/1e3);p().querySelector(".countdown").innerHTML=a+"d "+o+"h "+i+"m "+l+"s ",r<0&&(clearInterval(n),p().querySelector(".countdown").innerHTML="Starting...")}),1e3)}(o)}}else e.textContent=a&&a.offlineText||"The stream is currently not available.",e.classList.add("no-data");p().appendChild(e)}}(),l||(l=!0,t=setInterval(g,f()))}function f(){return a&&a.retry||3e3}function v(){var e=p().querySelector(".stream-status");e&&e.parentNode.removeChild(e)}function m(){u({state:"available",info:"The configured stream is available."}),o=!1,v()}function p(){return e.element.parentNode.parentNode}function g(){for(var t=[e.source],n=0;n<t.length;n++){var r=t[n].sources[0].src,a=r,l=Math.round(1e12*Math.random());a=r.indexOf("?")>-1?r+"&rn="+l:r+"?rn="+l;var u=new XMLHttpRequest;u.onreadystatechange=function(){4==this.readyState&&200!=this.status&&i&&!o?d():4==this.readyState&&200==this.status&&o&&(m(),S(t[n]))},u.open("GET",a,!0),u.send()}}function y(){i=!0,l||(l=!0,t=setInterval(g,f()))}function h(t){if(t.url==e.src){var n=t.url.split("?");c=n.length>1?n[1]:null}else if(c){var r=t.url+"?"+c;t.redirect({url:r})}}function w(){i=!1}function b(){return r&&r.image||e.source.metadata&&e.source.metadata.wowza&&e.source.metadata.wowza.placeholderImageUrl}function S(t){e.autoplay=!0,e.source=t||e.source}return e.addEventListener("sourcechange",(function(c){if(e&&(r=null,a=null,o=!1,clearInterval(t),clearInterval(n),i=!1,l=!1,u=null,s=null,e.network.removeEventListener("offline",d),e.removeEventListener("error",d),e.network.removeEventListener("online",m),e.removeEventListener("waiting",y),e.removeEventListener("playing",w),e.network.addRequestInterceptor(h)),v(),a=c.source.metadata&&c.source.metadata.wowza){e&&(e.network.addEventListener("offline",d),e.addEventListener("error",d),e.network.addEventListener("online",m),e.addEventListener("waiting",y),e.addEventListener("playing",w),a&&a.queryParametersPassthrough&&e.network.addRequestInterceptor(h));var f=a.jsonUrl;f&&(p=f,(g=new XMLHttpRequest).onreadystatechange=function(){4==this.readyState&&200==this.status&&(r=JSON.parse(g.responseText),s({data:r,status:"available"}),e.poster=b())},g.open("GET",p,!0),g.send()),u=a.statechangeCallback,s=a.datachangeCallback}var p,g})),{getStreamData:function(){return r},getState:function(){return o?"offline":"online"}}}};window.theoplayerWowza=r}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwidGhlb3BsYXllcldvd3phIiwicmVnaXN0ZXJQbGF5ZXIiLCJwbGF5ZXIiLCJ3b3d6YVN0cmVhbUludGVydmFsIiwiY291bnRkb3duVGltZXJJbnRlcnZhbCIsIndvd3phRGF0YSIsIndvd3phU291cmNlIiwic3RyZWFtSXNVbmF2YWlsYWJsZSIsImlzV2FpdGluZyIsImhhc0ludGVydmFsIiwic3RhdGVjaGFuZ2VDYWxsYmFjayIsImRhdGFjaGFuZ2VDYWxsYmFjayIsInF1ZXJ5UGFyYW1ldGVyIiwiaGFuZGxlV293emFPZmZsaW5lIiwic3RhdGUiLCJpbmZvIiwic3RyZWFtU3RhdHVzRGl2IiwiZ2V0Q29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBvc3RlciIsImdldFBvc3RlciIsInN0eWxlIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiY291bnRkb3duIiwiRGF0ZSIsInBhcnNlSW50IiwiZ2V0VGltZSIsIm5vdyIsImNvdW50ZG93bkRpdiIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJoaG1tIiwidG9JU09TdHJpbmciLCJzdWJzdHIiLCJ0aXRsZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY291bnRkb3duVGltZXIiLCJjb3VudERvd25EYXRlIiwic2V0SW50ZXJ2YWwiLCJkaXN0YW5jZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY2xlYXJJbnRlcnZhbCIsInNldHVwQ291bnRkb3duIiwidGV4dENvbnRlbnQiLCJvZmZsaW5lVGV4dCIsImNsYXNzTGlzdCIsImFkZCIsImNyZWF0ZVN0cmVhbVN0YXR1c0RpdiIsInN0cmVhbUludGVydmFsIiwiZ2V0UmV0cnlUaW1lb3V0IiwicmV0cnkiLCJyZW1vdmVTdHJlYW1TdGF0dXNEaXYiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJoYW5kbGVXb3d6YU9ubGluZSIsImVsZW1lbnQiLCJzb3VyY2VzIiwic291cmNlIiwibGVuZ3RoIiwiY3VycmVudFNyYyIsInNyYyIsInRlc3RTcmMiLCJybiIsInJvdW5kIiwicmFuZG9tIiwiaW5kZXhPZiIsInhodHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJ0aGlzIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlbG9hZEN1cnJlbnRTdHJlYW0iLCJvcGVuIiwic2VuZCIsImNoZWNrU3RyZWFtU3RhdHVzIiwicmVxdWVzdEludGVyY2VwdG9yIiwicmVxdWVzdCIsInVybCIsInVybFNwbGl0Iiwic3BsaXQiLCJuZXdVcmwiLCJyZWRpcmVjdCIsInNldFBsYXlpbmciLCJpbWFnZSIsIm1ldGFkYXRhIiwid293emEiLCJwbGFjZWhvbGRlckltYWdlVXJsIiwiYXV0b3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm5ldHdvcmsiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkUmVxdWVzdEludGVyY2VwdG9yIiwicXVlcnlQYXJhbWV0ZXJzUGFzc3Rocm91Z2giLCJ3b3d6YUpzb24iLCJqc29uVXJsIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiZGF0YSIsImdldFN0cmVhbURhdGEiLCJnZXRTdGF0ZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFzQkEsR0FBU0EsRUFBTUcsV0FBWSxPQUFPSCxFQUNoRixJQUFJSSxFQUFLWCxPQUFPWSxPQUFPLE1BR3ZCLEdBRkExQixFQUFvQmtCLEVBQUVPLEdBQ3RCWCxPQUFPQyxlQUFlVSxFQUFJLFVBQVcsQ0FBRVQsWUFBWSxFQUFNSyxNQUFPQSxJQUN0RCxFQUFQRSxHQUE0Qixp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QVBHaUIsR0FRcEI3QixFQUFRLElBQUlDLGdCQUNaQyxtQkFBcUIsV0FDQSxHQUFuQkMsS0FBS0MsWUFBbUMsS0FBZkQsS0FBS0UsU0FDOUI1RSxFQUFZc0csS0FBS0MsTUFBTWhDLEVBQU1pQyxjQUM3QmxHLEVBQW1CLENBQUNtRyxLQUFNekcsRUFBVzRFLE9BQVEsY0FDN0MvRSxFQUFPb0IsT0FBU0MsTUFHeEJxRCxFQUFNTyxLQUFLLE1BQU9LLEdBQUssR0FDdkJaLEVBQU1RLFFBZkYxRSxFQUFzQkosRUFBWUksb0JBQ2xDQyxFQUFxQkwsRUFBWUssbUJBSXpDLElBQTJCNkUsRUFDakJaLEtBK0JILENBQ0htQyxjQVhKLFdBQ0ksT0FBTzFHLEdBV1AyRyxTQVJKLFdBQ0ksT0FBUXpHLEVBQXNCLFVBQVksYUFXdEQwRyxPQUFPakgsZ0JBQWtCQSIsImZpbGUiOiJ0aGVvcGxheWVyLXdvd3phLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwidmFyIHRoZW9wbGF5ZXJXb3d6YSA9IHtcbiAgICByZWdpc3RlclBsYXllcjogZnVuY3Rpb24ocGxheWVyKSB7XG5cbiAgICAgICAgbGV0IHdvd3phRGF0YSA9IG51bGw7XG4gICAgICAgIGxldCB3b3d6YVNvdXJjZSA9IG51bGw7XG4gICAgICAgIGxldCBzdHJlYW1Jc1VuYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgIGxldCB3b3d6YVN0cmVhbUludGVydmFsO1xuICAgICAgICBsZXQgY291bnRkb3duVGltZXJJbnRlcnZhbDtcbiAgICAgICAgbGV0IGlzV2FpdGluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgaGFzSW50ZXJ2YWwgPSBmYWxzZTtcbiAgICAgICAgbGV0IHN0YXRlY2hhbmdlQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICBsZXQgZGF0YWNoYW5nZUNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1ldGVyID0gbnVsbDtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVXb3d6YU9mZmxpbmUoKSB7XG4gICAgICAgICAgICBzdGF0ZWNoYW5nZUNhbGxiYWNrKHtzdGF0ZTogXCJ1bmF2YWlsYWJsZVwiLCBpbmZvOiBcIlRoZSBjb25maWd1cmVkIHN0cmVhbSBpcyBjdXJyZW50bHkgdW5hdmFpbGFibGUuXCJ9KTtcbiAgICAgICAgICAgIHN0cmVhbUlzVW5hdmFpbGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgY3JlYXRlU3RyZWFtU3RhdHVzRGl2KCk7XG4gICAgICAgICAgICBpZiAoIWhhc0ludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgaGFzSW50ZXJ2YWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdvd3phU3RyZWFtSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChzdHJlYW1JbnRlcnZhbCwgZ2V0UmV0cnlUaW1lb3V0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0UmV0cnlUaW1lb3V0KCkge1xuICAgICAgICAgICAgcmV0dXJuICgod293emFTb3VyY2UgJiYgd293emFTb3VyY2UucmV0cnkpIHx8IDMwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0T2ZmbGluZVRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gKCh3b3d6YVNvdXJjZSAmJiB3b3d6YVNvdXJjZS5vZmZsaW5lVGV4dCkgfHwgXCJUaGUgc3RyZWFtIGlzIGN1cnJlbnRseSBub3QgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwQ291bnRkb3duKGNvdW50RG93bkRhdGUpIHtcbiAgICAgICAgICAgIHZhciBjb3VudERvd25EYXRlID0gY291bnREb3duRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb3VudGRvd25UaW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICAgICAgICAgIGdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGRvd24nKS5pbm5lckhUTUwgPSBkYXlzICsgXCJkIFwiICsgaG91cnMgKyBcImggXCJcbiAgICAgICAgICAgICAgICAgICAgKyBtaW51dGVzICsgXCJtIFwiICsgc2Vjb25kcyArIFwicyBcIjtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duVGltZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGRvd24nKS5pbm5lckhUTUwgPSBcIlN0YXJ0aW5nLi4uXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdHJlYW1TdGF0dXNEaXYoKSB7XG4gICAgICAgICAgICBsZXQgc3RyZWFtU3RhdHVzRGl2ID0gZ2V0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvcignLnN0cmVhbS1zdGF0dXMnKTtcbiAgICAgICAgICAgIGlmICghc3RyZWFtU3RhdHVzRGl2KSB7XG4gICAgICAgICAgICAgICAgc3RyZWFtU3RhdHVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3RyZWFtU3RhdHVzRGl2LmNsYXNzTmFtZSA9ICdzdHJlYW0tc3RhdHVzJztcbiAgICAgICAgICAgICAgICBsZXQgcG9zdGVyID0gZ2V0UG9zdGVyKCk7XG4gICAgICAgICAgICAgICAgaWYgKHBvc3Rlcikge1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW1TdGF0dXNEaXYuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoXCInICsgcG9zdGVyICsgJ1wiKSc7XG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbVN0YXR1c0Rpdi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHdvd3phRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnRkb3duID0gd293emFEYXRhWydjb3VudGRvd25fdGltZXN0YW1wJ107XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZG93biA9IG5ldyBEYXRlKChwYXJzZUludChjb3VudGRvd24pKjEwMDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudGRvd24uZ2V0VGltZSgpID4gRGF0ZS5ub3coKSkgeyAvLyBpbiB0aGUgZnV0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ZG93bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZG93bkRpdi5jbGFzc05hbWUgPSBcInN0cmVhbS1zdGF0dXMtb3ZlcmxheVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRlID0gY291bnRkb3duLnRvRGF0ZVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaG1tID0gY291bnRkb3duLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDExLCA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSB3b3d6YURhdGFbJ3RpdGxlJ10gKyBcIjxiciAvPlwiIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRkb3duRGl2LmlubmVySFRNTCA9IHRpdGxlICsgXCJTdHJlYW0gd2lsbCBzdGFydCBvbjo8YnIgLz5cIiArIGRhdGUgKyBcIiBAIFwiICsgaGhtbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW1TdGF0dXNEaXYuYXBwZW5kQ2hpbGQoY291bnRkb3duRGl2KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudGRvd25UaW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZG93blRpbWVyLmNsYXNzTmFtZSA9ICdjb3VudGRvd24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZG93blRpbWVyLmlubmVySFRNTCA9IFwiJm5ic3A7XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRkb3duRGl2LmFwcGVuZENoaWxkKGNvdW50ZG93blRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR1cENvdW50ZG93bihjb3VudGRvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW1TdGF0dXNEaXYudGV4dENvbnRlbnQgPSBnZXRPZmZsaW5lVGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW1TdGF0dXNEaXYuY2xhc3NMaXN0LmFkZChcIm5vLWRhdGFcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoc3RyZWFtU3RhdHVzRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVTdHJlYW1TdGF0dXNEaXYoKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJlYW1TdGF0dXNEaXYgPSBnZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuc3RyZWFtLXN0YXR1cycpO1xuICAgICAgICAgICAgaWYgKHN0cmVhbVN0YXR1c0Rpdikge1xuICAgICAgICAgICAgICAgIHN0cmVhbVN0YXR1c0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0cmVhbVN0YXR1c0Rpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlV293emFPbmxpbmUoKSB7XG4gICAgICAgICAgICBzdGF0ZWNoYW5nZUNhbGxiYWNrKHtzdGF0ZTogXCJhdmFpbGFibGVcIiwgaW5mbzogXCJUaGUgY29uZmlndXJlZCBzdHJlYW0gaXMgYXZhaWxhYmxlLlwifSlcbiAgICAgICAgICAgIHN0cmVhbUlzVW5hdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlbW92ZVN0cmVhbVN0YXR1c0RpdigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllci5lbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFNyYyhzb3VyY2VEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZURlc2NyaXB0aW9uLnNvdXJjZXNbMF0uc3JjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFzcyBhbG9uZyBiYWNrLXVwcyBzdHJlYW1zIHRvIG90aGVyIHNvdXJjZWRlc2NyaXB0aW9uc1xuICAgICAgICAvLyBmdW5jdGlvbiBnZXRCYWNrdXBTdHJlYW1zKHNvdXJjZURlc2NyaXB0aW9uKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gc291cmNlRGVzY3JpcHRpb24ubWV0YWRhdGEud293emEgJiYgc291cmNlRGVzY3JpcHRpb24ubWV0YWRhdGEud293emEuYmFja3VwU3RyZWFtcztcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0cmVhbUludGVydmFsKCkge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlcyA9IFtwbGF5ZXIuc291cmNlXTtcbiAgICAgICAgICAgIC8vIGlmICh3b3d6YVNvdXJjZS5iYWNrdXBTdHJlYW1zICYmIHdvd3phU291cmNlLmJhY2t1cFN0cmVhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd293emFTb3VyY2UuYmFja3VwU3RyZWFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICBzb3VyY2VzLnB1c2god293emFTb3VyY2UuYmFja3VwU3RyZWFtc1tpXSk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNyYyA9IGdldFNyYyhzb3VyY2VzW2ldKTtcbiAgICAgICAgICAgICAgICBsZXQgdGVzdFNyYyA9IGN1cnJlbnRTcmM7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm4gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwMDAwKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNyYy5pbmRleE9mKFwiP1wiKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3RTcmMgPSBjdXJyZW50U3JjICsgXCImcm49XCIgKyBybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0U3JjID0gY3VycmVudFNyYyArIFwiP3JuPVwiICsgcm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgKHRoaXMuc3RhdHVzICE9IDIwMCkgJiYgaXNXYWl0aW5nICYmICFzdHJlYW1Jc1VuYXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVXb3d6YU9mZmxpbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiAodGhpcy5zdGF0dXMgPT0gMjAwKSAmJiBzdHJlYW1Jc1VuYXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVXb3d6YU9ubGluZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2FkQ3VycmVudFN0cmVhbShzb3VyY2VzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeGh0dHAub3BlbihcIkdFVFwiLCB0ZXN0U3JjLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHR0cC5zZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja1N0cmVhbVN0YXR1cygpIHtcbiAgICAgICAgICAgIGlzV2FpdGluZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIWhhc0ludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgaGFzSW50ZXJ2YWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdvd3phU3RyZWFtSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChzdHJlYW1JbnRlcnZhbCwgZ2V0UmV0cnlUaW1lb3V0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVxdWVzdEludGVyY2VwdG9yKHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnVybCA9PSBwbGF5ZXIuc3JjKSB7IC8vIGNoZWNrIG1hc3RlciBwbGF5bGlzdFxuICAgICAgICAgICAgICAgIGNvbnN0IHVybFNwbGl0ID0gcmVxdWVzdC51cmwuc3BsaXQoXCI/XCIpO1xuICAgICAgICAgICAgICAgIGlmICh1cmxTcGxpdC5sZW5ndGggPiAxKSB7IC8vIGNoZWNrIGlmIG1hc3RlciBwbGF5bGlzdCBoYXMgcXVlcnkgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyID0gdXJsU3BsaXRbMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXIgPSBudWxsOyAvLyByZXNldCBpZiBubyBxdWVyeSBwYXJhbXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5UGFyYW1ldGVyKSB7IC8vIGlmIG5vIG1hc3RlciBwbGF5bGlzdCBhbmQgYWN0aXZlIHNldCBvZiBxdWVyeSBwYXJhbXNcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdVcmwgPSByZXF1ZXN0LnVybCArIFwiP1wiICsgcXVlcnlQYXJhbWV0ZXI7IC8vIGFwcGVuZCBxdWVyeSBwYXJhbXNcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnJlZGlyZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBuZXdVcmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldFBsYXlpbmcoKSB7XG4gICAgICAgICAgICBpc1dhaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlZ2lzdGVyV293emFFdmVudHMoKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLm5ldHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGhhbmRsZVdvd3phT2ZmbGluZSk7XG4gICAgICAgICAgICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgaGFuZGxlV293emFPZmZsaW5lKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubmV0d29yay5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBoYW5kbGVXb3d6YU9ubGluZSk7XG4gICAgICAgICAgICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3dhaXRpbmcnLCBjaGVja1N0cmVhbVN0YXR1cyk7XG4gICAgICAgICAgICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCBzZXRQbGF5aW5nKTtcbiAgICAgICAgICAgICAgICBpZiAod293emFTb3VyY2UgJiYgd293emFTb3VyY2UucXVlcnlQYXJhbWV0ZXJzUGFzc3Rocm91Z2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm5ldHdvcmsuYWRkUmVxdWVzdEludGVyY2VwdG9yKHJlcXVlc3RJbnRlcmNlcHRvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdW5yZWdpc3Rlcldvd3phRXZlbnRzKCkge1xuICAgICAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgICAgIHdvd3phRGF0YSA9IG51bGw7XG4gICAgICAgICAgICAgICAgd293emFTb3VyY2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIHN0cmVhbUlzVW5hdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHdvd3phU3RyZWFtSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duVGltZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgaXNXYWl0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaGFzSW50ZXJ2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdGF0ZWNoYW5nZUNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICBkYXRhY2hhbmdlQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIHBsYXllci5uZXR3b3JrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBoYW5kbGVXb3d6YU9mZmxpbmUpO1xuICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGhhbmRsZVdvd3phT2ZmbGluZSk7XG4gICAgICAgICAgICAgICAgcGxheWVyLm5ldHdvcmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25saW5lJywgaGFuZGxlV293emFPbmxpbmUpO1xuICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd3YWl0aW5nJywgY2hlY2tTdHJlYW1TdGF0dXMpO1xuICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgc2V0UGxheWluZylcbiAgICAgICAgICAgICAgICBwbGF5ZXIubmV0d29yay5hZGRSZXF1ZXN0SW50ZXJjZXB0b3IocmVxdWVzdEludGVyY2VwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFBvc3RlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoKHdvd3phRGF0YSAmJiB3b3d6YURhdGEuaW1hZ2UpIHx8IHBsYXllci5zb3VyY2UubWV0YWRhdGEgJiYgcGxheWVyLnNvdXJjZS5tZXRhZGF0YS53b3d6YSAmJiBwbGF5ZXIuc291cmNlLm1ldGFkYXRhLndvd3phLnBsYWNlaG9sZGVySW1hZ2VVcmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc291cmNlSGFuZGxlcihlKSB7XG4gICAgICAgICAgICB1bnJlZ2lzdGVyV293emFFdmVudHMoKTtcbiAgICAgICAgICAgIHJlbW92ZVN0cmVhbVN0YXR1c0RpdigpO1xuICAgICAgICAgICAgd293emFTb3VyY2UgPSBlLnNvdXJjZS5tZXRhZGF0YSAmJiBlLnNvdXJjZS5tZXRhZGF0YS53b3d6YTtcbiAgICAgICAgICAgIGlmICh3b3d6YVNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyV293emFFdmVudHMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3b3d6YUpzb24gPSB3b3d6YVNvdXJjZS5qc29uVXJsO1xuICAgICAgICAgICAgICAgIGlmICh3b3d6YUpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJXb3d6YURhdGEod293emFKc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhdGVjaGFuZ2VDYWxsYmFjayA9IHdvd3phU291cmNlLnN0YXRlY2hhbmdlQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgZGF0YWNoYW5nZUNhbGxiYWNrID0gd293emFTb3VyY2UuZGF0YWNoYW5nZUNhbGxiYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVnaXN0ZXJXb3d6YURhdGEodXJsKSB7XG4gICAgICAgICAgICBjb25zdCB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmICh0aGlzLnN0YXR1cyA9PSAyMDApKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvd3phRGF0YSA9IEpTT04ucGFyc2UoeGh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YWNoYW5nZUNhbGxiYWNrKHtkYXRhOiB3b3d6YURhdGEsIHN0YXR1czogXCJhdmFpbGFibGVcIn0pO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucG9zdGVyID0gZ2V0UG9zdGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHhodHRwLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIHhodHRwLnNlbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbG9hZEN1cnJlbnRTdHJlYW0oc291cmNlKSB7XG4gICAgICAgICAgICBwbGF5ZXIuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHBsYXllci5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllci5zb3VyY2UgPSBwbGF5ZXIuc291cmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0V293emFEYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdvd3phRGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIChzdHJlYW1Jc1VuYXZhaWxhYmxlID8gXCJvZmZsaW5lXCIgOiBcIm9ubGluZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdzb3VyY2VjaGFuZ2UnLCBzb3VyY2VIYW5kbGVyKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0U3RyZWFtRGF0YTogZ2V0V293emFEYXRhLFxuICAgICAgICAgICAgZ2V0U3RhdGU6IGdldFN0YXRlXG4gICAgICAgIH07XG4gICAgfVxufVxud2luZG93LnRoZW9wbGF5ZXJXb3d6YSA9IHRoZW9wbGF5ZXJXb3d6YTsiXSwic291cmNlUm9vdCI6IiJ9