function showPopUp(descId, element) {
    var popUp = document.getElementById("myPopUp");
    var desc = document.getElementById(descId).textContent;
    var popupDesc = document.getElementById("popup-desc");
    popupDesc.textContent = desc;

    // Get the position of the clicked testimonial
    var rect = element.getBoundingClientRect();
    var scrollTop = window.screenY || document.documentElement.scrollTop;
    var scrollLeft = window.screenX|| document.documentElement.scrollLeft;

    // Set position beside the clicked testimonial
    popUp.style.top = (rect.top + scrollTop) + "px";
    popUp.style.left = (rect.right + scrollLeft + 5) + "px"; // Adjust the position as needed

    popUp.style.display = "block";
}

function hidePopUp() {
    var popUp = document.getElementById("myPopUp");
    popUp.style.display = "none";
}

// Close the popup when clicking outside of it
window.onclick = function(event) {
    var popUp = document.getElementById("myPopUp");
    if (event.target == popUp) {
        popUp.style.display = "none";
    }
}
