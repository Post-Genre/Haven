//NAVBAR JAVASCRIPT

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) { // Adjust 100 to your desired scroll position
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const popup = document.querySelector('.popup');
  const exit = document.querySelector('.exit');

      burger.addEventListener('click', function(event) {
          if (popup.style.display === 'none' || !popup.style.display) {
          popup.style.display = 'block';
          }
          popup.classList.toggle('open');
          burger.style.display = "none";
          exit.style.display = "block";
          event.stopPropagation();
      });


      exit.addEventListener('click', function(event) {
          if (exit.contains(event.target)) {
          popup.classList.remove('open');
          exit.style.display = 'none';
          burger.style.display = 'block';
          setTimeout(() => {
              popup.style.display = 'none';
          }, 300);
          }
  });

  window.addEventListener('resize', function() {
      if(window.innerWidth > 678) {
          burger.style.display = 'none';
          exit.style.display = 'none';
          popup.classList.remove('open');
      }
      else {
          if (popup.classList.contains('open')){
              burger.style.display = 'none';
              exit.style.display = 'block';
          } else {
              burger.style.display = 'block';
              exit.style.display = 'none';
          }
      }
  });

 

});
