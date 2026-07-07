/* ======================================================
   COLLABORATIVE PORTFOLIO PROJECT
   Main JavaScript File

   Instructor: Main Branch
   Students should NOT edit this file.
====================================================== */

"use strict";

/* ======================================================
   Helper Functions
====================================================== */

/**
 * Select a single element
 * @param {string} selector
 * @returns {Element|null}
 */
const $ = (selector) => document.querySelector(selector);

/**
 * Select multiple elements
 * @param {string} selector
 * @returns {NodeList}
 */
const $$ = (selector) => document.querySelectorAll(selector);


/* ======================================================
   Sticky Header
====================================================== */

const header = $("#header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


/* ======================================================
   Smooth Scroll for Navigation Links
====================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ======================================================
   Active Navigation Highlight
====================================================== */

const sections = $$("section");
const navLinks = $$("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* ======================================================
   Back to Top Button
====================================================== */

const backToTop = $("#backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ======================================================
   Current Year in Footer
====================================================== */

const year = $("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* ======================================================
   Initialization
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Collaborative Portfolio Loaded Successfully.");

});