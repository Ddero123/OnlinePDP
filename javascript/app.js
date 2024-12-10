let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 200) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#8F8F8F ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

//   #03cc65
//  #d7d7d7

// Function to update the year
function updateYear() {
  // Get the current year
  var currentYear = new Date().getFullYear();

  // Update the content of the element with the current year
  document.getElementById("current-year").textContent = currentYear;
}

// Call the function when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  updateYear();
});