 // Load header and footer dynamically
 document.addEventListener("DOMContentLoaded", function () {
    const loadHTML = (selector, file) => {
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Could not fetch ${file}`);
                return response.text();
            })
            .then(html => document.querySelector(selector).innerHTML = html)
            .catch(error => console.error(error));
    };

    loadHTML("header", "header.html");
    loadHTML("footer", "footer.html");
});