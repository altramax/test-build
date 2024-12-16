// Initialize Line Chart for Patient Arrival
const ctx1 = document.getElementById('lineChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Patient In',
        data: [300, 400, 350, 400, 350, 500],
        borderColor: '#2ecc71',
        fill: false,
      },
      {
        label: 'Patient Out',
        data: [200, 150, 170, 180, 211, 190],
        borderColor: '#f39c12',
        fill: false,
      }
    ]
  }
});

// Initialize Bar Chart for Financial Flow
const ctx2 = document.getElementById('barChart').getContext('2d');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Approved Claims', 'Pending Claims'],
    datasets: [
      {
        label: 'Revenue',
        data: [45123, 17470],
        backgroundColor: ['#3498db', '#f1c40f']
      }
    ]
  }
});
