function incrementVisitCount() {

    if (localStorage.getItem('visitCount')) {
      let count = parseInt(localStorage.getItem('visitCount'));
      count++;
      localStorage.setItem('visitCount', count);
      document.getElementById('visitCount').textContent = count;
    } else {
      localStorage.setItem('visitCount', '1');
      document.getElementById('visitCount').textContent = '1';
    }
  }
  
  window.onload = incrementVisitCount;
  