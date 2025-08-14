# ✳️ HTML Energy Webring ✳️

A retro webring connecting the [HTML Energy](https://html.energy) community.

> Built using [OnionRing.js](https://garlic.garden/onionring/).

## 🚧 Work in Progress

If you have ideas, thoughts, feedback, etc, please post a discussion in the [GitHub Discussions](https://github.com/gchartier/html-energy-webring/discussions).

All contributions (code, feature requests, etc) are welcome!

## 🔗 How to Join

1. Either make a new post in [🔗 Join Requests](https://github.com/gchartier/html-energy-webring/discussions/categories/join-requests) or email me at [gchartier@pm.me](mailto:gchartier@pm.me) with:

-   Your website URL that you will have the webring widget on
-   1 thing you love most about the web

2. One of the maintainers will add your url to the webring.
3. Add the webring widget to your site by adding the following code to the webpage at the url you provided:

```html
<!-- Put the stylesheet in the head of your website -->
<head>
    <link
        rel="stylesheet"
        href="https://www.gabriel-export.earth/html-energy-webring/onionring/styles.css"
    />
</head>

<!-- Put the widget anywhere on your website -->
<div id="html-energy-webring">
    <script
        type="text/javascript"
        src="https://www.gabriel-export.earth/html-energy-webring/onionring/variables.js"
    ></script>
    <script
        type="text/javascript"
        src="https://www.gabriel-export.earth/html-energy-webring/onionring/widget.js"
    ></script>
    <!-- 🔺 Order matters here! 🔺 -->
</div>
```

> [!IMPORTANT]  
> In order for the webring navigation experience to work well, it's important that you add the webring widget to the **same webpage url** that you provided. If you add the widget to a different url than the one provided, it will still work, but when someone lands on your page, they will not be able to continue surfing the webring.

> [!TIP]  
> You are free to submit multiple sites if you'd like!

> [!NOTE]  
> The webring index and member list are not hosted from this repository, however this repository is kept up to date with the latest changes. The webring index and member list are hosted on [www.gabriel-export.earth/html-energy-webring/](https://www.gabriel-export.earth/html-energy-webring/). The source code of the JS scripts is [here](https://github.com/gchartier/gchartier.github.io/tree/main/static/html-energy-webring/onionring) and the source code of the index page is [here](https://github.com/gchartier/gchartier.github.io/blob/main/src/routes/html-energy-webring/%2Bpage.svelte).

## 📜 License

This project is licensed under the [cooperative non-violent license (CNPL) v7+](https://thufie.lain.haus/NPL.html), which means, roughly, that anyone is allowed to download, change and share the files as long as you give credit, disclaim what changes you've made, and don't use them to violent, coercive or discriminatory ends.

---

Keep the HTML Energy alive! ✳️
