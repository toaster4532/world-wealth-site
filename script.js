document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts based on the current page
    if (document.getElementById('wealthDistributionChart')) {
        createWealthDistributionChart();
    }
    if (document.getElementById('regionalWealthChart')) {
        createRegionalWealthChart();
    }
});

function createWealthDistributionChart() {
    const ctx = document.getElementById('wealthDistributionChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Top 1%', 'Next 9%', 'Middle 40%', 'Bottom 50%'],
            datasets: [{
                data: [38.2, 44.3, 16.5, 1],
                backgroundColor: [
                    '#f72585',
                    '#4cc9f0',
                    '#4895ef',
                    '#3f37c9'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Global Wealth Distribution by Percentile'
                }
            }
        }
    });
}

function createRegionalWealthChart() {
    const ctx = document.getElementById('regionalWealthChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['North America', 'Europe', 'Asia Pacific', 'China', 'Latin America', 'Africa'],
            datasets: [{
                label: 'Wealth in Trillion USD',
                data: [140.2, 103.1, 75.3, 85.1, 11.4, 4.7],
                backgroundColor: [
                    '#f72585',
                    '#4cc9f0',
                    '#4895ef',
                    '#3f37c9',
                    '#7209b7',
                    '#560bad'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Trillion USD'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Regional Wealth Distribution'
                }
            }
        }
    });
}