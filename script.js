// Global behaviors: theme switch, floating paper touch effects, project track pause on hover
(function(){
  const root = document.getElementById('app');
  const themeSwitch = document.getElementById('themeSwitch');
  themeSwitch.addEventListener('change', ()=>{
    root.classList.toggle('theme-light', themeSwitch.checked);
  });

  // cute pebble click effect
  document.addEventListener('click', (e)=>{
    const dot = document.createElement('div');
    dot.className = 'pebble';
    dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px';
    document.body.appendChild(dot);
    setTimeout(()=>dot.remove(),900);
  });

  // pebble styles
  const style = document.createElement('style');
  style.innerHTML = `
    .pebble{position:fixed;width:14px;height:14px;background:radial-gradient(circle,#fff,#fff3);border-radius:50%;pointer-events:none;transform:translate(-50%,-50%);opacity:.9;animation:peb 0.9s ease-out}
    @keyframes peb{0%{transform:translate(-50%,-50%) scale(1);opacity:1}100%{transform:translate(-50%,-50%) scale(3);opacity:0}}
  `;document.head.appendChild(style);

  // project track pause on hover
  const track = document.getElementById('projectTrack');
  track.addEventListener('mouseenter', ()=>track.style.animationPlayState='paused');
  track.addEventListener('mouseleave', ()=>track.style.animationPlayState='running');

  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
})();
