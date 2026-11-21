# Azam's Aesthetic Avenue

Static connect page (plain HTML, CSS and JavaScript). No build step, no dependencies.
Built mobile-first: buttons are stacked one under the other and the page scrolls normally on phones.

## Structure
```
index.html                  page markup (add your link URLs here)
css/style.css               all styles
js/main.js                  image fallback + "Link not added yet" notice
assets/logo.png             AA monogram (from the poster)
assets/azams.png            "Azam's" script text (smaller line)
assets/aesthetic-avenue.png "Aesthetic Avenue" script text (main line)
assets/veins.svg            gold marble veins used in the background
.nojekyll                   tells GitHub Pages to serve files as-is
```

## Add your links
Open `index.html` and search for `EDIT THE href`.
Replace each `href="#"` with your URL, in this order:
Instagram, WhatsApp Channel, Google Review, Google Directions, Call Us.

- Phone button: `tel:+91XXXXXXXXXX`
While a button still has `href="#"`, clicking it shows a small "Link not added yet" notice.

## Make "Azam's" bigger or smaller
In `css/style.css`, change the width of `.name-top`.

## Run locally
Open `index.html` in a browser, or in VS Code use Live Server, or run `python3 -m http.server`.
