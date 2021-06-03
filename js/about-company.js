"use strict";

const aboutCompany = require("./data");
//about-company-page

const headText = document.querySelector(".headText");
const text = document.querySelector(".text");

headText.innerHTML = aboutCompany.head;
text.innerHTML = aboutCompany.text;
