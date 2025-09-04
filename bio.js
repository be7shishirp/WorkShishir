// Live age counter and one-word rotator
(function(){
  // One word rotator
  const words = ['Curious','Friendly','Auditor','Explorer','Learner','Optimist'];
  const rotator = document.querySelector('.one-word-rotator');
  let wi = 0;
  function showWord(){
    rotator.innerHTML = `<span class="word">${words[wi]}</span>`;
    wi = (wi+1) % words.length;
  }
  showWord();
  setInterval(showWord,2700);

  // Live age counter from AD birth datetime given by user (2004-10-23 23:17)
  const birth = new Date('2004-10-23T23:17:00');
  function updateAge(){
    const now = new Date();
    let diff = Math.max(0, now - birth);
    // total seconds
    const totalSeconds = Math.floor(diff/1000);
    const totalMinutes = Math.floor(totalSeconds/60);
    const totalHours = Math.floor(totalMinutes/60);
    const totalDays = Math.floor(totalHours/24);

    // compute years/months/days/h/m/s using simple algorithm
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    let hours = now.getHours() - birth.getHours();
    let minutes = now.getMinutes() - birth.getMinutes();
    let seconds = now.getSeconds() - birth.getSeconds();

    if(seconds < 0){seconds += 60; minutes -=1}
    if(minutes < 0){minutes += 60; hours -=1}
    if(hours < 0){hours += 24; days -=1}
    if(days < 0){
      // get days in previous month
      const prev = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prev; months -=1;
    }
    if(months < 0){months +=12; years -=1}

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    document.getElementById('total-seconds').textContent = totalSeconds.toLocaleString();
    document.getElementById('total-minutes').textContent = totalMinutes.toLocaleString();
    document.getElementById('total-hours').textContent = totalHours.toLocaleString();
    document.getElementById('total-days').textContent = totalDays.toLocaleString();
  }
  updateAge();
  setInterval(updateAge,1000);
})();
