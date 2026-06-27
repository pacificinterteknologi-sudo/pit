// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
  const headerWrapper = document.getElementById('headerWrapper');
  const backToTop = document.getElementById('backToTop');
  
  if (window.scrollY > 50) {
    headerWrapper.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    headerWrapper.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
});

// Initialize header state on page load
window.addEventListener('load', function() {
  const headerWrapper = document.getElementById('headerWrapper');
  const backToTop = document.getElementById('backToTop');
  
  if (window.scrollY > 50) {
    headerWrapper.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    headerWrapper.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', function() {
  navMenu.classList.toggle('active');
  const icon = this.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const icon = mobileMenuToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  });
});

// Back to Top
document.getElementById('backToTop').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Active Navigation State Management
function updateActiveNavigation() {
  const currentSection = getCurrentSection();
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

function getCurrentSection() {
  const sections = ['home', 'value-prop', 'services', 'trust', 'contact'];
  const scrollPosition = window.scrollY + 100;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        return sections[i];
      }
    }
  }
  
  return 'home';
}

// Smooth scroll dengan active state update
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offset = 80;
      const targetPosition = targetSection.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// Update active navigation on scroll
window.addEventListener('scroll', updateActiveNavigation);

// Initialize active navigation on load
updateActiveNavigation();

// Contact Form Handler - WhatsApp Integration
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };
  
  const loadingMessage = document.createElement('div');
  loadingMessage.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--secondary-color);
    color: white;
    padding: 15px 25px;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    animation: slideInRight 0.5s ease-out;
  `;
  loadingMessage.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Membuka WhatsApp...';
  document.body.appendChild(loadingMessage);
  
  setTimeout(() => {
    if (document.body.contains(loadingMessage)) {
      document.body.removeChild(loadingMessage);
    }
    
    const whatsappMessage = encodeURIComponent(
      `🌟 *PACIFIC INTER TEKNOLOGI - CONTACT FORM* 🌟\n\n` +
      `📋 *Detail Pengirim:*\n` +
      `👤 Nama: ${formData.name}\n` +
      `📧 Email: ${formData.email}\n` +
      `📋 Subjek: ${formData.subject}\n\n` +
      `💬 *Pesan:*\n${formData.message}\n\n` +
      `📅 Tanggal: ${new Date().toLocaleString('id-ID')}\n` +
      `🌐 Website: pacificinterteknologi.com\n\n` +
      `🔔 *Mohon segera ditindak lanjuti ya!*`
    );
    
    const whatsappNumber = '6287899449489';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    console.log('WhatsApp Link:', whatsappLink);
    console.log('Form Data:', formData);
    
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #25D366;
      color: white;
      padding: 20px 25px;
      border-radius: var(--radius);
      box-shadow: var(--shadow-lg);
      z-index: 10000;
      max-width: 450px;
      animation: slideInRight 0.5s ease-out;
    `;
    successMessage.innerHTML = `
      <div style="margin-bottom: 10px;">
        <i class="fab fa-whatsapp"></i> <strong>Pesan Siap Dikirim via WhatsApp!</strong>
      </div>
      <div style="font-size: 14px; line-height: 1.4; margin-bottom: 15px;">
        Pesan Anda telah disiapkan. Klik tombol di bawah untuk mengirim langsung via WhatsApp:
      </div>
      <div style="margin-bottom: 15px; font-size: 12px; background: rgba(255,255,255,0.1); padding: 10px; border-radius: 5px;">
        <strong>📝 Pesan akan dikirim ke:</strong><br>
        WhatsApp: +62 878-9944-9489<br>
        <strong>Dari:</strong> ${formData.name} (${formData.email})<br>
        <strong>Subjek:</strong> ${formData.subject}
      </div>
      <div style="text-align: center;">
        <button onclick="window.open('${whatsappLink}', '_blank')" style="
          background: white;
          color: #25D366;
          border: none;
          padding: 12px 25px;
          border-radius: var(--radius);
          cursor: pointer;
          font-weight: 600;
          margin-right: 10px;
          font-size: 14px;
          box-shadow: var(--shadow);
        ">
          <i class="fab fa-whatsapp"></i> Kirim via WhatsApp
        </button>
        <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
          background: transparent;
          color: white;
          border: 1px solid white;
          padding: 12px 25px;
          border-radius: var(--radius);
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
        ">
          Tutup
        </button>
      </div>
      <div style="margin-top: 15px; font-size: 11px; text-align: center; opacity: 0.8;">
        ⚡ WhatsApp akan langsung terkirim dan diterima oleh tim Pacific Inter Teknologi
      </div>
    `;
    document.body.appendChild(successMessage);
    
    document.getElementById('contactForm').reset();
    
    setTimeout(() => {
      if (document.body.contains(successMessage)) {
        successMessage.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
          if (document.body.contains(successMessage)) {
            document.body.removeChild(successMessage);
          }
        }, 500);
      }
    }, 45000);
    
  }, 1000);
});

// WhatsApp Floating Button
document.getElementById('floatingWhatsapp').addEventListener('click', function() {
  window.open('https://wa.me/6287899449489', '_blank');
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);
