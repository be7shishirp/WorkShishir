// Expand/collapse family cards with cute bubble effect
document.querySelectorAll('.family-card .open-detail').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const card = btn.closest('.family-card');
    card.classList.toggle('expanded');
  })
});
