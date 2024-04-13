document.addEventListener("DOMContentLoaded", function() {
    draw();
    place();
    clock();
  
    
    document.querySelector("h1").addEventListener("click", function() {
      this.classList.toggle("off");
    });
  });
  
  function draw() {
    for (let i = 0; i < 60; i++) {
      const D = (i < 10) ? '0' + i : i;
      document.getElementById('s').innerHTML += '<li data-item=' + D + '>' + D + '</li>';
      document.getElementById('m').innerHTML += '<li data-item=' + D + '>' + D + '</li>';
    }
    for (let i = 0; i < 24; i++) {
      const D = (i < 10) ? '0' + i : i;
      document.getElementById('h').innerHTML += '<li data-item=' + D + '>' + D + '</li>';
    }
  }
  
  function place() {
    const hdeg = 15;
    const msdeg = 6;
    document.querySelectorAll('#s li').forEach(function(li, index) {
      li.style.transform = 'rotateZ(' + msdeg * index + 'deg) translateX(' + parseInt(200) + 'px)';
    });
    document.querySelectorAll('#m li').forEach(function(li, index) {
      li.style.transform = 'rotateZ(' + msdeg * index + 'deg) translateX(' + parseInt(170) + 'px)';
    });
    document.querySelectorAll('#h li').forEach(function(li, index) {
      li.style.transform = 'rotateZ(' + hdeg * index + 'deg) translateX(' + parseInt(140) + 'px)';
    });
  }
  
  function sec(ts) {
    const TS = ts % 60;
    const deg = 360 / 60 * ts;
    const sElements = document.querySelectorAll('#s li');
    sElements.forEach(function(li, index) {
      li.classList.remove('active');
      if (index === TS) {
        li.classList.add('active');
      }
    });
    document.getElementById('s').style.transform = 'rotateZ(-' + deg + 'deg)';
  }
  
  function min(tm) {
    const TM = tm % 60;
    const deg = 360 / 60 * tm;
    const mElements = document.querySelectorAll('#m li');
    mElements.forEach(function(li, index) {
      li.classList.remove('active');
      if (index === TM) {
        li.classList.add('active');
      }
    });
    document.getElementById('m').style.transform = 'rotateZ(-' + deg + 'deg)';
  }
  
  function hour(th) {
    const TH = th % 24;
    const deg = 360 / 24 * th;
    const hElements = document.querySelectorAll('#h li');
    hElements.forEach(function(li, index) {
      li.classList.remove('active');
      if (index === TH) {
        li.classList.add('active');
      }
    });
    document.getElementById('h').style.transform = 'rotateZ(-' + deg + 'deg)';
  }
  
  function clock() {
    const d = new Date();
    const H = d.getHours();
    const M = d.getMinutes();
    const S = d.getSeconds();
    hour(H);
    min(M);
    sec(S);
    setTimeout(clock, 1000);
  }
  