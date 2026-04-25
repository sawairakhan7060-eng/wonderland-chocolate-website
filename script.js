// The Wonderland of Chocolate — interactions
document.getElementById('year').textContent = new Date().getFullYear();

// Order buttons → WhatsApp redirect with cake name
document.querySelectorAll('.order-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const cake = btn.dataset.cake || 'a cake';
    const msg = encodeURIComponent(`Hi! I'd like to order: ${cake}. Could you share availability and delivery details?`);
    window.open(`https://wa.me/923001234567?text=${msg}`, '_blank');
  });
});

// Hero "Order Now" — smooth scroll already handled by CSS, add subtle feedback
const orderBtn = document.getElementById('orderBtn');
if (orderBtn) {
  orderBtn.addEventListener('click', () => {
    orderBtn.style.transform = 'translateY(2px)';
    setTimeout(() => (orderBtn.style.transform = ''), 200);
  });
}

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.15 }
);
document.querySelectorAll('.cake-card, .section-title, .contact-card').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .8s ease, transform .8s ease';
  io.observe(el);
});

const style = document.createElement('style');
style.textContent = `.visible{opacity:1!important;transform:translateY(0)!important}`;
document.head.appendChild(style);
