(() => {
  const prev = document.getElementById('sc-prev');
  const next = document.getElementById('sc-next');
  const pager = document.getElementById('sc-pagination');

  function emit(name){
    const ev = new CustomEvent(name, { bubbles: true });
    document.dispatchEvent(ev);
    // also call global helper if app exposes it
    try {
      const fn = window[`__APP_${name.toUpperCase().replace(':','_')}__`];
      if (typeof fn === 'function') fn();
    } catch(e){}
  }

  function onPrev(){
    emit('app:prev');
    // fallback: history.back
    try { history.back(); } catch(e){}
  }
  function onNext(){
    emit('app:next');
    // fallback: history.forward
    try { history.forward(); } catch(e){}
  }

  prev?.addEventListener('click', onPrev);
  next?.addEventListener('click', onNext);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  });

  // Touch swipe support
  let touchStartX = null;
  window.addEventListener('touchstart', (e)=>{ touchStartX = e.changedTouches[0].screenX }, {passive:true});
  window.addEventListener('touchend', (e)=>{
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50){ if (dx > 0) onPrev(); else onNext(); }
    touchStartX = null;
  }, {passive:true});

  // Optional: update pagination text if app exposes total/position
  function setPager(text){ if (pager) pager.textContent = text }

  // Try to read a global state that some SPA might set
  function updateFromApp(){
    try{
      if (window.__APP_PAGE_INFO__){
        const info = window.__APP_PAGE_INFO__();
        setPager(info.label || (`${info.index||''} / ${info.total||''}`));
      }
    }catch(e){}
  }

  // Poll a few times after load to pick up SPA initialization
  let attempts = 0;
  const interval = setInterval(()=>{
    updateFromApp();
    attempts++;
    if (attempts > 20) clearInterval(interval);
  }, 300);

  // expose helpers
  window.__STATIC_CONTROLS__ = { onNext, onPrev, setPager };
})();
