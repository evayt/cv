const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameField = contactForm.querySelector('input[name="name"]');
    const name = nameField && nameField.value.trim() ? nameField.value.trim() : '访客';
    alert(`感谢 ${name}，我已收到您的留言。`);
    contactForm.reset();
  });
}

const copyEmail = document.getElementById('copyEmail');
if (copyEmail) {
  copyEmail.addEventListener('click', async () => {
    const email = 'heyuting2026@163.com';
    try {
      await navigator.clipboard.writeText(email);
      const original = copyEmail.textContent;
      copyEmail.textContent = '已复制';
      setTimeout(() => {
        copyEmail.textContent = original;
      }, 1200);
    } catch (error) {
      copyEmail.textContent = '复制失败';
      setTimeout(() => {
        copyEmail.textContent = '复制邮箱';
      }, 1200);
    }
  });
}
