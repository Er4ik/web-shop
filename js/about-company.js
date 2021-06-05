'use strict';

//about-company-page

const aboutCompany = {
  head: ['About EAshop'],
  text: [
    `In this section, I will talk about how, as a child, 
    it hit me in the head and I wanted to open my own electronics
    store, maybe because I was hit with a phone, but not
    the point. All my life I went to the goal: I studied
    well, worked hard, developed. And only after entering
    KPI I was able to fulfill my dream and open my own
    online store of electronic equipment. For this I
    am grateful, of course, not to the university, but
    to my environment, into which I found myself when
    I came to study. These are the people who have always
    supported me, helped me in everything. At this stage, 
    I understand that all the changes that take place in
    life are for the better, and falls help you learn to
    get up and move on to your dream. The experience gained
    is the most important thing! Thank you for reading up to
    this point, I started to write it as a joke to fill this
    page, but by the end I was so drawn in that I wanted to 
    write something from the heart, enjoy the site :)`,
  ],
};

const headText = document.querySelector('.headText');
const text = document.querySelector('.text');

headText.innerHTML = aboutCompany.head;
text.innerHTML = aboutCompany.text;
