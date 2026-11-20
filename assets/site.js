(function(){
  document.querySelectorAll('.yr').forEach(function(e){e.textContent=new Date().getFullYear();});
  var m=document.querySelector('.menu'),l=document.getElementById('links');
  if(m&&l){m.addEventListener('click',function(){var o=l.classList.toggle('open');m.setAttribute('aria-expanded',o);});
    l.addEventListener('click',function(e){if(e.target.tagName==='A'){l.classList.remove('open');m.setAttribute('aria-expanded','false');}});}
  var f=document.querySelector('form[name=contact]');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();var b=f.querySelector('button[type=submit]');b.disabled=true;
    fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(f)).toString()})
    .then(function(r){if(!r.ok)throw new Error(r.status);location.href=f.getAttribute('action');})
    .catch(function(){b.disabled=false;alert(f.getAttribute('data-fail'));});});
})();
