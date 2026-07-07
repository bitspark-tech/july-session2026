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

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
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

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
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
      behavior: "smooth",
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
  const sectionMap = [
    { id: "p1-content", file: "your code/p1.html" },
    { id: "p2-content", file: "your code/p2.html" },
    { id: "p3-content", file: "your code/p3.html" },
    { id: "p4-content", file: "your code/p4.html" },
    { id: "p5-content", file: "your code/p5.html" },
    { id: "p6-content", file: "your code/p6.html" },
    { id: "p7-content", file: "your code/p7.html" },
    { id: "p8-content", file: "your code/p8.html" },
    { id: "p9-content", file: "your code/p9.html" },
    { id: "p10-content", file: "your code/p10.html" },
    { id: "p11-content", file: "your code/p11.html" },
  ];

  sectionMap.forEach(({ id, file }) => {
    const target = document.getElementById(id);

    if (!target) return;

    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not load ${file}`);
        }
        return response.text();
      })
      .then((html) => {
        target.innerHTML = html;
      })
      .catch((error) => {
        console.error(error);
        target.innerHTML = "<p>Content not loaded yet.</p>";
      });
  });

  console.log("Collaborative Portfolio Loaded Successfully.");
});
