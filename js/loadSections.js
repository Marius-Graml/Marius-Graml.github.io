["header", "about", "education", "projects", "experience", "awards", "contact", "footer"]
    .forEach(id => {
        fetch(`sections/${id}.html`)
            .then(res => res.text())
            .then(html => {
                document.getElementById(id).innerHTML = html;

                // Nur bei education aktivieren
                if (id === "education") {
                    activateTimelineFilter();
                }

                // Nur bei projects aktivieren
                if (id === "projects") {
                    setupProjectToggle();
                }
            });
    });

// Timeline Filter
function activateTimelineFilter() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const timelineItems = document.querySelectorAll(".timeline-item");

    function applyFilter(filter) {
        timelineItems.forEach(item => {
            item.style.display = (item.dataset.type === filter) ? "flex" : "none";
        });
    }

    const defaultFilter = document.querySelector(".filter-btn.active")?.dataset.filter || "education";
    applyFilter(defaultFilter);

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            applyFilter(button.dataset.filter);
        });
    });
}

// 🔁 View More Projects Toggle
function setupProjectToggle() {
    const toggleBtn = document.getElementById('toggle-projects');
    const moreProjects = document.getElementById('more-projects');

    if (!toggleBtn || !moreProjects) return;

    toggleBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const isHidden = moreProjects.classList.contains('hidden');

        moreProjects.classList.toggle('hidden');

        // Optional: Trigger animation
        moreProjects.classList.remove("fade-in");
        void moreProjects.offsetWidth;
        moreProjects.classList.add("fade-in");

        toggleBtn.textContent = isHidden
            ? 'Show Less'
            : 'View More Projects';
    });
}
