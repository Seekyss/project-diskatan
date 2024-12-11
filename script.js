// manggil button
const backToTopButton = document.getElementById('backToTop');

// triger/show button setelah scroll kebawah 200px 
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

//  ketika di click yang terjadi
backToTopButton.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
