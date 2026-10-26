Thomas Chatagnon — Personal Research Website
===============================================

Personal academic website showcasing research on crowd dynamics and
biomechanics in crowds. Published with GitHub Pages at
https://thochat.github.io/Chatagnon_Crowd_Research/

Plain HTML, CSS and a little JavaScript; no build step and no external
services apart from Formspree for the contact form.

  index.html              all page content
  assets/css/main.css     styles (colours and sizes are set at the top)
  assets/js/main.js       active nav link + in-page contact form submission
  assets/fonts/           Inter font, self-hosted (SIL Open Font License)
  images/                 portrait (portrait-720.webp is the version shown)
  images/publications/    publication thumbnails
  favicon.png             browser tab icon (made from images/avatar_walk.png)

Editing
  - New publication: copy a <li class="pub"> block in index.html and add the
    thumbnail to images/publications/ (comments in index.html explain the rest).
  - New icon: see the comment at the top of <body> in index.html.

To view locally, open index.html in a browser, or run
  python3 -m http.server
in this folder and visit http://localhost:8000 (closest to GitHub Pages).
