# Professional Website — Dragonfly Inn

This repository contains the website for the Dragonfly Inn.

## Repository contents

```
professional-website/
├── index.html         # Home page (hero, intro, amenities)
├── about.html         # About page (hotel info, room types, prices)
├── gallery.html       # Gallery page (hotel images)
├── order.html         # Reservation form
├── style.css          # Shared stylesheet for all pages
├── images/            # Image assets (logo and photos)
│   ├── logo.png
│   ├── inn1.jpg
│   ├── inn2.jpg
│   ├── inn3.jpg
│   ├── inn4.jpg
│   ├── inn5.jpg
│   └── inn6.jpg
└── README.md          # This file: explanation and structure diagram
```

## HTML structure diagram (explanation)

Each HTML page follows a simple, semantic base template. The outline below describes the purpose of each section:

- Document
		- `<body>`
			- `<header>`
				- `.header-bar` with logo (imgagen that you can return to home page) and site name (Dragon Fly Inn`).
				- `<nav>` with a menu for primary navigation.
			- `<main>` — page-specific content
				- `<section class="main-column">` — main block (text, table, form, gallery)
				- `<aside class="side-column">` — secondary information (contact, address)
			- `<footer>` — copyright, legal links, contact

### Quick mental map
All the pages follow the next mental map: 

- Header (logo + nav)
- Main
	- Main column (per-page content)
	- Aside (secondary content)
- Footer 

## Per-page notes
Each page contains different types of information. Below is a summary of what each HTML file provides:

- `index.html`:
    - Two columns 
	    - Hero with image and welcome text.
	    - List of features/amenities in a list.

- `about.html`:
    - Two colummns.
	    - Description of the inn + reasons to stay in a list.
        - Contact info + localitation in a list
	- Table with room types and pricing.

- `gallery.html`:
	- Am imagen block with 6 imagenes.

- `order.html`:
	- Reservation form with proper labels and basic HTML validation
        It use differents label:
        - Email
        - Number 
        - Date
        - Text
        - Select

