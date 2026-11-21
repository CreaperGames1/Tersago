(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menuBtn");

  if (nav && menuBtn) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }
})();
