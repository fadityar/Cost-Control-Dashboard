document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            updateActiveNav(this.getAttribute('href'));
        }
    });
});

function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => { link.classList.remove('active'); });
    const activeLink = document.querySelector(`a[href="${sectionId}"]`);
    if (activeLink) activeLink.classList.add('active');
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const sectionId = '#' + section.id;
            if (document.querySelector(`a[href="${sectionId}"]`)) {
                updateActiveNav(sectionId);
            }
        }
    });
});

function initCharts() {
    const costTrendCtx = document.getElementById('costTrendChart');
    if (costTrendCtx) {
        new Chart(costTrendCtx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Food Cost (Rp Millions)',
                    data: [35, 38, 40, 42, 43, 45.2],
                    borderColor: '#2d5016',
                    backgroundColor: 'rgba(45, 80, 22, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#ffa500',
                    pointRadius: 5
                }]
            },
            options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { display: true, position: 'top' } } }
        });
    }

    const costDistributionCtx = document.getElementById('costDistributionChart');
    if (costDistributionCtx) {
        new Chart(costDistributionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Proteins', 'Vegetables', 'Dry Goods', 'Beverages', 'Others'],
                datasets: [{
                    data: [35, 20, 15, 18, 12],
                    backgroundColor: ['#2d5016', '#3d6b1f', '#ffa500', '#10b981', '#3b82f6'],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { display: true, position: 'bottom' } } }
        });
    }
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('Download')) alert('Downloading report...');
        else if (this.textContent.includes('Save')) alert('Changes saved successfully!');
    });
});

window.addEventListener('load', () => { initCharts(); });
console.log('F&B Cost Control Dashboard loaded!');