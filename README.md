# Website Structure Diagram

```
professional-website/
├── index.html         # Home page (hero, intro, amenities, team)
├── about.html         # About page (info, room types, prices)
├── gallery.html       # Gallery page (6 images)
├── order.html         # Reservation form (different inputs in form)
├── style.css          # same stylesheet for all the pages
├── images/            # Imagens for the gallery or logo
│   ├── logo.png
│   ├── inn1.jpg
│   ├── inn2.jpg
│   ├── inn3.jpg
│   ├── inn4.jpg
│   ├── inn5.jpg
│   ├── inn6.jpg
│   └── logo.png
```

**Key layout elements:**
- All pages: `<header>`, `<nav>`, `<main class="content columns">`, `<footer>`
- Navigation menu: `.menu` (class selector)
- Main title: `#main-title` (ID selector)
- Content columns: `.main-column`, `.side-column`
- Gallery: `.image-block` (class selector)
- Room table: `.room-table` (class selector)
- Form: `.order-form`, `.two-column-form` (class selectors)

**CSS requirements demonstrated:**
- Class selector: `.menu`, `.main-column`, `.room-table`, etc.
- ID selector: `#main-title`
- Inheritance: `footer p { color: inherit; }` if this dosen't exist then the color must be defalut for the nav
- Cascade/importance: `#main-title { color: #fff !important; }` if this dosen't exist then the color must be #
