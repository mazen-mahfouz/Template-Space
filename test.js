var nav_bottom = document.getElementById("nav-bottom");

function side_bar() {
  if (nav_bottom.style.height > 0 || nav_bottom.style.height == 225 + "px") {
    document.getElementById("nav-hr").style.display = "none";
    nav_bottom.style.height = 0;
  } else {
    nav_bottom.style.height = 225 + "px";
    document.getElementById("nav-hr").style.display = "block";
  }
}

if (window.innerWidth < 1024) {
  window.onscroll = function () {
    dad();
  };
  setInterval(dad, 25);
  var x = 400;

  function dad() {
    for (let i = 0; i < document.getElementsByClassName("dad").length; i++) {
      var y = document.getElementsByClassName("dad")[i].innerHTML;
      if (document.documentElement.scrollTop > 4950 && y < 20000) {
        document.getElementsByClassName("dad")[i].innerHTML =
          parseInt(y) + parseInt(x);
      }
    }
  }
} else {
  window.onscroll = function () {
    dad();
  };
  setInterval(dad, 15);
  var x = 400;

  function dad() {
    for (let i = 0; i < document.getElementsByClassName("dad").length; i++) {
      var y = document.getElementsByClassName("dad")[i].innerHTML;
      if (document.documentElement.scrollTop > 2800 && y < 20000) {
        document.getElementsByClassName("dad")[i].innerHTML =
          parseInt(y) + parseInt(x);
      }
    }
  }
}