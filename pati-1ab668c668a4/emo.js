/* Emoji -> profesyonel Lucide ikonları */
(function(){
  var M={'🌐':'globe','🐶':'dog','🐕':'dog','🐾':'paw-print','📊':'bar-chart-3','🧾':'receipt','🗓':'calendar-days','📅':'calendar-days','👥':'users','💰':'wallet','🛍':'shopping-bag','🛒':'shopping-cart','✉':'mail','📩':'mail','🏨':'hotel','🎾':'trees','🎓':'graduation-cap','🛁':'bath','🛏':'bed-double','👑':'crown','💳':'credit-card','💬':'message-circle','🤖':'bot','🔔':'bell','🔒':'lock','✅':'check-circle-2','✔':'check','⏳':'loader','⚠':'alert-triangle','💉':'syringe','🔍':'search','🦴':'bone','🥣':'package','🦮':'dog','🧴':'spray-can','🍖':'drumstick','🎒':'backpack','🎁':'gift','🍂':'leaf','⭐':'star','📞':'phone','🚀':'rocket','💎':'gem','📦':'package','🌙':'moon','❓':'help-circle','📝':'file-text','💸':'banknote','📍':'map-pin','✨':'sparkles','👋':'hand','📈':'trending-up','⚖':'scale'};
  var keys=Object.keys(M).map(function(k){return k+'️?'}).join('|'),re=new RegExp(keys,'g');
  window.emo=function(s){return s.replace(re,function(m){return '<i data-lucide="'+M[m.replace('️','')]+'" class="ei"></i>'})};
  window.icons=function(){if(window.lucide)lucide.createIcons()};
  window.iconize=function(el){el.innerHTML=emo(el.innerHTML);icons()};
})();
