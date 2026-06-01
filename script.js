// Navigation active link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            updateActiveNav(this.getAttribute('href'));
        }
    });
});

// Update active navigation link
function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`a[href="${sectionId}"]`).classList.add('active');
}

// Handle scroll for navigation highlighting
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

// Initialize Charts
function initCharts() {
    // Cost Trend Chart
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
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5
                },
                {
                    label: 'Beverage Cost (Rp Millions)',
                    data: [8, 8.5, 9, 9.2, 9.5, 10],
                    borderColor: '#ffa500',
                    backgroundColor: 'rgba(255, 165, 0, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#2d5016',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 50,
                        ticks: {
                            callback: function(value) {
                                return 'Rp ' + value + 'M';
                            }
                        }
                    }
                }
            }
        });
    }

    // Cost Distribution Chart
    const costDistributionCtx = document.getElementById('costDistributionChart');
    if (costDistributionCtx) {
        new Chart(costDistributionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Proteins', 'Vegetables', 'Dry Goods', 'Beverages', 'Others'],
                datasets: [{
                    data: [35, 20, 15, 18, 12],
                    backgroundColor: [
                        '#2d5016',
                        '#3d6b1f',
                        '#ffa500',
                        '#10b981',
                        '#3b82f6'
                    ],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });
    }
}

// Button Actions
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('Download')) {
            alert('Downloading report...');
        } else if (this.textContent.includes('Add')) {
            alert('Add new item modal would open here');
        } else if (this.textContent.includes('Save')) {
            alert('Changes saved successfully!');
        }
    });
});

// Edit button actions
document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Edit item modal would open here');
    });
});

// Small button actions
document.querySelectorAll('.btn-small').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('Contact')) {
            alert('Contact supplier functionality');
        } else if (this.textContent.includes('Edit')) {
            alert('Edit supplier modal would open here');
        } else if (this.textContent.includes('Add')) {
            alert('Add user modal would open here');
        }
    });
});

// Initialize on page load
window.addEventListener('load', () => {
    initCharts();
});

console.log('F&B Cost Control Dashboard loaded successfully!');