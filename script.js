// Basic interactivity & small animations

document.addEventListener('DOMContentLoaded', function () {

  // Scrollspy highlight (Bootstrap handles this but ensure correct offset)
  const nav = document.querySelector('#mainNav');
  if(nav){
    // collapse on nav item click (mobile)
    nav.querySelectorAll('.nav-link').forEach(link=>{
      link.addEventListener('click', ()=> {
        const toggler = document.querySelector('.navbar-toggler');
        const collapseEl = document.querySelector('#navCollapse');
        if (getComputedStyle(toggler).display !== 'none'){
          // using bootstrap collapse via button click
          toggler.click();
        }
      });
    });
  }

  // Modal company details (generic)
  const companyModal = document.getElementById('modalCompany');
  if (companyModal) {
    companyModal.addEventListener('show.bs.modal', function (event) {
      const btn = event.relatedTarget;
      const company = btn.getAttribute('data-company') || 'Company';
      const title = companyModal.querySelector('#companyTitle');
      const body = companyModal.querySelector('#companyBody');

      title.textContent = company;
      // simple content — replace with richer details if needed
      const info = {
        'Starlink': 'Starlink (SpaceX) operates a large LEO constellation focusing on consumer broadband and global coverage.',
        'Jio': 'Reliance Jio is developing satellite strategies and partnerships to expand India-focused connectivity.',
        'OneWeb': 'OneWeb provides LEO satellite services, often partnering with governments and telcos.'
      };
      body.innerHTML = '<p class="small text-muted">' + (info[company] || 'Information coming soon.') + '</p>';
    });
  }

  // Simple contact form "send" behavior (no backend)
  const contactForm = document.getElementById('contactForm');
  if (contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! Message recorded locally (demo).');
      contactForm.reset();
    });
  }

  // Newsletter subscribe demo
  const subscribeBtn = document.getElementById('subscribeBtn');
  if(subscribeBtn){
    subscribeBtn.addEventListener('click', function(){
      const email = document.getElementById('newsletterEmail').value;
      const msg = document.getElementById('subscribeMsg');
      if(!email) {
        alert('Please enter your email');
        return;
      }
      msg.style.display = 'block';
      setTimeout(()=> msg.style.display='none', 3000);
      document.getElementById('newsletterEmail').value = '';
    });
  }

  // small reveal for hero
  const revealEl = document.querySelector('.reveal');
  if (revealEl) revealEl.classList.add('revealed');

});


