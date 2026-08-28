document.querySelector("#current-year").textContent = new Date().getFullYear();

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.dataset.theme === "dark";

  if (isDarkMode) {
    delete document.body.dataset.theme;
    themeToggle.setAttribute("aria-label", "다크 모드로 전환");
    themeToggle.setAttribute("aria-pressed", "false");
    themeToggle.querySelector("span").textContent = "☾";
  } else {
    document.body.dataset.theme = "dark";
    themeToggle.setAttribute("aria-label", "밝은 모드로 전환");
    themeToggle.setAttribute("aria-pressed", "true");
    themeToggle.querySelector("span").textContent = "☀";
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "메뉴 열기");
  });
});

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const emptyMessage = document.querySelector(".empty-message");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => filterButton.classList.remove("is-active"));
    button.classList.add("is-active");

    projectCards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.category === filter;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    emptyMessage.hidden = visibleCount > 0;
  });
});

const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    formMessage.textContent = "이름, 이메일, 메시지를 모두 입력해 주세요.";
    contactForm.reportValidity();
    return;
  }

  formMessage.textContent = "메시지가 준비되었습니다. 현재는 실제 전송 기능을 연습 중입니다.";
  contactForm.reset();
});
