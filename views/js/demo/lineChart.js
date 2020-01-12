//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
datasets: [{
label: "Jogos do ano 2019",
data: [100, 108, 130, 140, 144, 139, 200, 230, 220, 280, 201, 209],
backgroundColor: [
'rgba(26, 155, 82)',
],
borderColor: [
'rgba(15, 85, 45)',
],
borderWidth: 2
},

]
},
options: {
responsive: true
}
});