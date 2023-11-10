const ctx1 = document.getElementById('site-statistic-graph_');

new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['', 'Feb','','Mar', '', 'Apr','', 'May','','Jun'],
        datasets: [
            {
                label: 'Sales',
                data: [0, 550,100, 300, 120, 100 ,130,250,170,350,800],
                backgroundColor: 'rgba(255, 200, 118, 0.5)',
                borderWidth: 0,
                fill:true,
                tension: 0.5,
                pointRadius: 0
            },
            {
                label: 'users',
                data: [0, 400, 100, 320, 125, 180, 130, 110, 150, 350],
                backgroundColor: 'rgba(52, 197, 189, 0.7)',
                borderWidth: 0,
                fill: true,
                tension: 0.5,
                pointRadius: 0
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        },

        plugins: {
            legend: {

            }
        }
    }
});


const ctx2 = document.getElementById('sales-graph_');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['2014', '','','', '', '2015',''],
        datasets: [
            {
                data: [0,20,20,30,40,20,50],
                pointRadius: 3,
                pointStyle: 'circle',
                borderColor:"#f1f7ea",
                borderWidth: 3,
            },
        ]
    },
    options: {
        scales: {
            x: {
                ticks:{
                    color: "#f1f7ea"
                },
                grid:
                    {
                        display: false
                    }
            },

            y: {
                beginAtZero: true,
                ticks:{
                    color: "#f1f7ea"

                },
            }
        },

        plugins: {
            legend: {
                display:false,
                color:"#f1f7ea"
            }
        }
    }
});


const ctx3 = document.getElementById('data-graph-main-chart_');
new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['', '','','', '', '',''],
        datasets: [
            {
                data: [10,20,10,30,22,8,25],
                pointRadius: 4,
                borderColor: "#f1f7ea",
                pointBackgroundColor: '#f1f7ea',

            },
        ]
    },
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        }
    }
});


const ctx4 = document.getElementById('small-chart_');
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['', '','','', '', '',''],
        datasets: [
            {
                data: [10, 20, 10, 30, 22, 8, 25],
                backgroundColor: '#9972b5',
            },
        ]
    },
    options: {
        scales: {
            x: {
                display: false, // Приховати ось X
            },
            y: {
                display: false, // Приховати ось Y
            }
        },
        plugins: {
            legend: {
                display: false, // Приховати легенду
            }
        }
    }
});


