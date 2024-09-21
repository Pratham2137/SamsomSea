const navLinks = document.querySelectorAll(".navLinks");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove the 'active' class from all navlinks
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add the 'active' class to the clicked link
    link.classList.add("active");
  });
});

