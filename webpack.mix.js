const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.js("js/app.js", "dist/js")
    .sass("sass/app.scss", "dist/css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")],
    });