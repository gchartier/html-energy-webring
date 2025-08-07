// onionring.js is made up of four files - onionring-widget.js, onionring-index.js (this one!), onionring-variables.js, and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-INDEX ===
//this file builds the list of sites in the ring for displaying on your index page

// Helper function to extract hostname from URL
function getHostname(url) {
    try {
        let hostname = new URL(url).hostname;
        // Remove www. prefix if present
        return hostname.replace(/^www\./, "");
    } catch {
        // Fallback for malformed URLs - extract hostname manually
        const urlWithoutProtocol = url.replace(/^https?:\/\//, "");
        const hostname = urlWithoutProtocol.split("/")[0].split("?")[0].split("#")[0];
        return hostname.replace(/^www\./, "");
    }
}

var tag = document.getElementById("index");

list = "";
for (i = 0; i < sites.length; i++) {
    const hostname = getHostname(sites[i]);
    const displayName = sites[i] === indexPage ? "Home" : hostname;
    list += `<li><a href='${sites[i]}' target='_blank'>${displayName}</a></li>`;
}

tag.insertAdjacentHTML(
    "afterbegin",
    `
<ul>
${list}
</ul>
`
);
