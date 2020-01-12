// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart1");
var myPieChart = new Chart(ctx, {
type: 'bar',
data: {
labels: ["Janeiro", "Fevereiro", "Março"],
datasets: [{
label: 'Nº Campos Alugados',
data: [70, 75, 85],
backgroundColor: [
'rgba(12, 71, 38, 0.2)',
'rgba(2, 71, 38, 0.2)',
'rgba(2, 71, 38, 0.2)',

],
borderColor: [
'rgba(2, 71, 38,1)',
'rgba(2, 71, 38, 1)',
'rgba(2, 71, 38, 1)',

],
borderWidth: 1
}]
},
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});