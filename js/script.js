// init AOS (Animation on Scroll)
AOS.init({ duration: 800, once: true });

// Timeline Filter
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            timelineItems.forEach(item => {
                const type = item.getAttribute('data-type');
                item.style.display = (type === filter) ? 'flex' : 'none';
            });
        });
    });

    // Initial filter
    const initialFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'education';
    timelineItems.forEach(item => {
        const type = item.getAttribute('data-type');
        item.style.display = (type === initialFilter) ? 'flex' : 'none';
    });
});

// NDA Badge Pulse
function highlightNDABadge(event) {
    event.preventDefault();
    const ndaBadge = document.getElementById("nda-badge");
    ndaBadge.classList.add("pulse-once");
    ndaBadge.addEventListener("animationend", () => {
        ndaBadge.classList.remove("pulse-once");
    }, { once: true });
}

// Toggle More Projects
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-projects");
    const more = document.getElementById("more-projects");

    if (toggleBtn && more) {
        toggleBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const expanded = !more.classList.contains("hidden");
            more.classList.toggle("hidden");
            this.textContent = expanded ? "View All Projects" : "Show Less";
        });
    }
});

// EmailJS contact form
document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("OKBnAQIL9-FkteU4P");

    const form = document.getElementById('contact-form');
    const button = document.getElementById('send-button');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            button.disabled = true;
            button.textContent = "Sending...";

            emailjs.sendForm('service_2fssewl', 'template_5zyj87j', this)
                .then(() => {
                    status.textContent = "✅ Message sent successfully!";
                    form.reset();
                    button.disabled = false;
                    button.textContent = "Send Message";
                    setTimeout(() => status.textContent = "", 5000);
                }, (error) => {
                    status.textContent = "❌ Failed to send message.";
                    console.error(error);
                    button.disabled = false;
                    button.textContent = "Send Message";
                });
        });
    }
});
