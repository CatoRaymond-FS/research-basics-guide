// Show the button when scrolled down 200px
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
};

// Scroll to top when clicked
document.getElementById("back-to-top").onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};