<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# myportofolio.github.io
# MyPortofolio.github.io

.htacces
<IfModule mod_rewrite.c>
RewriteRule (.*)index\.html$ /$1 [R=301,L]

# remove and redirect from .html to no extension

RewriteCond %{THE_REQUEST} /([^.]+)\.html [NC]
RewriteRule ^ /%1 [NC,L,R]
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^ %{REQUEST_URI}.html [NC,L]
</IfModule>
=======
# portfolio-second
Portfolio Second Fendyra
>>>>>>> b39ed1c22693d1827d219e7f99607e4b8b37bcdb
