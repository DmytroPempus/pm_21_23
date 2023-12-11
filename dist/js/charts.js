$.ajax({
    url: 'https://raw.githubusercontent.com/DmytroPempus/pm_21_23/72dc7a9f7cb1ea5213c18077a64036a2d9a22f09/data.json',
    type: 'GET',
    dataType: 'json',
    success: function(data_) {
        function getLabels(dataObj) {
            return dataObj.labels || Array(dataObj.data[0].length).fill('');
        }

        const ctx1 = document.getElementById('site-statistic-graph_');
        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: getLabels(data_.siteStatisticGraph),
                datasets: [
                    {
                        label: 'Sales',
                        data: data_.siteStatisticGraph.data[0],
                        backgroundColor: 'rgba(255, 200, 118, 0.5)',
                        borderWidth: 0,
                        fill:true,
                        tension: 0.5,
                        pointRadius: 0
                    },
                    {
                        label: 'users',
                        data: data_.siteStatisticGraph.data[1],
                        backgroundColor: 'rgba(52, 197, 189, 0.7)',
                        borderWidth: 0,
                        fill: true,
                        tension: 0.5,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,

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
                labels: getLabels(data_.salesGraph),
                datasets: [
                    {
                        data: data_.salesGraph.data[0],
                        pointRadius: 3,
                        pointStyle: 'circle',
                        borderColor:"#f1f7ea",
                        borderWidth: 3,
                    },
                ]
            },
            options: {
                maintainAspectRatio: false,

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
                labels: getLabels(data_.dataGraphMainChart),
                datasets: [
                    {
                        data: data_.dataGraphMainChart.data[0],
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
                labels: getLabels(data_.smallChart),
                datasets: [
                    {
                        data: data_.smallChart.data[0],
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
    },
    error: function(error) {
        console.error('Помилка отримання даних:', error);
    }
});




