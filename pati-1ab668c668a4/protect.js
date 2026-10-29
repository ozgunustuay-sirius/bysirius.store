/* Kopyalama caydırıcıları (istemci tarafı; kararlı kişileri %100 durdurmaz, sıradan kopyalamayı engeller) */
(function(){
  var V = window.VENDOR;  var css = document.createElement('style');
  css.textContent =
   'html,body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}'+
   'input,textarea,select{-webkit-user-select:text;user-select:text}'+
   'img,svg{-webkit-user-drag:none;user-drag:none}'+
   '@media print{html{display:none!important}}'+
   '#wm{position:fixed;inset:0;z-index:9990;pointer-events:none;opacity:.07;overflow:hidden}'+
   '#wm div{position:absolute;inset:-50%;display:flex;flex-wrap:wrap;gap:60px 90px;transform:rotate(-24deg);align-content:flex-start;font:700 16px system-ui;color:#000}'+
   '#vbar{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#111c;backdrop-filter:blur(8px);color:#fff;font:13px system-ui;display:flex;gap:14px;justify-content:center;align-items:center;padding:7px 12px;flex-wrap:wrap}'+
   '#vbar a{color:#ffd166;text-decoration:none;font-weight:700}#vbar a:hover{text-decoration:underline}'+
   'body{padding-bottom:40px}';
  document.head.appendChild(css);
  function ready(f){document.readyState!='loading'?f():document.addEventListener('DOMContentLoaded',f)}
  ready(function(){
    var wm=document.createElement('div');wm.id='wm';
    var inner='<div>';for(var i=0;i<160;i++)inner+='<span>'+V.name+' • '+V.phone+'</span>';
    wm.innerHTML=inner+'</div>';document.body.appendChild(wm);
    var bar=document.createElement('div');bar.id='vbar';
    bar.innerHTML='<span>© Kopyalanamaz • Demo • Tasarım &amp; Yazılım:</span><a href="https://wa.me/'+V.phoneRaw+'" target="_blank" rel="noopener">'+V.name+'</a>'+
      '<a href="tel:+'+V.phoneRaw+'">'+V.phone+'</a><a href="https://'+V.web+'" target="_blank" rel="noopener">'+V.web+'</a>';
    document.body.appendChild(bar);
  });
  var okTarget=function(e){var t=e.target;return t&&/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)};
  ['contextmenu','copy','cut','dragstart','selectstart'].forEach(function(ev){
    document.addEventListener(ev,function(e){if(!okTarget(e))e.preventDefault()});
  });
  document.addEventListener('keydown',function(e){
    var k=(e.key||'').toLowerCase(),c=e.ctrlKey||e.metaKey;
    if(k==='f12'||k==='printscreen'||(c&&e.shiftKey&&['i','j','c','s'].indexOf(k)>-1)||(c&&['u','s','p','a','c','x'].indexOf(k)>-1&&!okTarget(e))){
      e.preventDefault();e.stopPropagation();
      if(k==='printscreen'&&navigator.clipboard)navigator.clipboard.writeText('').catch(function(){});
      return false;
    }
  },true);
})();
