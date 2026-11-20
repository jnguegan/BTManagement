// Informational notice: the site sets no tracking or advertising cookies. Dismissal kept in local storage.
(function(){var K='bt_cookie_notice';try{if(localStorage.getItem(K))return;}catch(e){}
var fr=(document.documentElement.lang||'fr').slice(0,2)!=='en';
var t=fr?['Ce site n’utilise aucun cookie de suivi ni de publicité.','Politique de cookies','OK','/legal/fr/cookies.html']:['This website uses no tracking or advertising cookies.','Cookie policy','OK','/legal/en/cookies.html'];
var d=document.createElement('div');d.className='cookiebar';d.setAttribute('role','region');d.setAttribute('aria-label',t[1]);
d.innerHTML='<p>'+t[0]+' <a href="'+t[3]+'">'+t[1]+'</a></p><button type="button">'+t[2]+'</button>';
d.querySelector('button').addEventListener('click',function(){try{localStorage.setItem(K,'1');}catch(e){}d.remove();});
document.body.appendChild(d);})();
