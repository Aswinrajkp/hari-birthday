const wishBtn = document.getElementById('wishBtn');
const wishText = document.getElementById('wishText');

wishBtn.addEventListener('click', () => {
  wishText.classList.remove('hidden');
  wishBtn.textContent = 'Birthday wish opened';
  wishBtn.disabled = true;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
