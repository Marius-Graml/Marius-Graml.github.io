["header", "about", "education", "projects", "experience", "awards", "contact", "footer"]
    .forEach(id => {
        fetch(`sections/${id}.html`)
            .then(res => res.text())
            .then(html => document.getElementById(id).innerHTML = html);
    });
