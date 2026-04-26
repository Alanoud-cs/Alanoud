// ============================================================
// scripts.js — HW4: Adding Interactivity with JavaScript
// Linked to: index.html, cv.html, projects.html, contact.html
// ============================================================


// ------ Requirement 2: Form Validation (Contact Page) ------
function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    if (name.value === "" || email.value === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
}


// ------ Requirement 3: DOM Manipulation — Toggle Description (Projects Page) ------
function toggleDescription(descId) {
    var desc = document.getElementById(descId);

    if (desc.style.display === "none") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}


// ------ Requirement 4: Event Handling — Blockquote Hover (CV Page) ------
var quote = document.getElementById("mainQuote");

if (quote) {
    quote.addEventListener("mouseover", function () {
        quote.style.backgroundColor = "#d4edda";
        quote.style.fontStyle = "normal";
        quote.style.color = "#155724";
    });

    quote.addEventListener("mouseout", function () {
        quote.style.backgroundColor = "";
        quote.style.fontStyle = "";
        quote.style.color = "";
    });
}


// ------ Requirement 5: Adding New Elements — onload (Homepage) ------
window.onload = function () {
    var currentDate = new Date();
    var newParagraph = document.createElement("p");
    var textNode = document.createTextNode("Page loaded on: " + currentDate.toString());
    newParagraph.appendChild(textNode);

    var footer = document.querySelector("footer");
    if (footer) {
        footer.appendChild(newParagraph);
    }
};
