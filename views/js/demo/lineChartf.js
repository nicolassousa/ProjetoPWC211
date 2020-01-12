//line
var ctxL = document.getElementById("lineChartf").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
datasets: [{
label: "Faturação Patrocinadores 1º semestre",
data: [300, 340, 304, 290, 270, 340],
backgroundColor: [
'rgba(255, 255, 255)',
],
borderColor: [
'rgba(62, 171, 109)',
],
borderWidth: 2
},

]
},
options: {
responsive: true
}
});

//line
var ctxL = document.getElementById("lineChartpar").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
datasets: [{
label: "Faturação Parceiros 1º semestre",
data: [232, 240, 290, 300, 280, 320],
backgroundColor: [
    'rgba(255, 255, 255)',
    ],
borderColor: [
'rgba(62, 171, 109)',
],
borderWidth: 2
},

]
},
options: {
responsive: true
}
});

//line
var ctxL = document.getElementById("lineChartu").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
datasets: [{
label: "Faturação Utilizadores 1º semestre",
data: [400, 420, 399, 451, 409, 430],
backgroundColor: [
    'rgba(255, 255, 255)',
    ],
borderColor: [
'rgba(62, 171, 109)',
],
borderWidth: 2
},

]
},
options: {
responsive: true
}
});


//line
var ctxL = document.getElementById("lineChartt").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
datasets: [{
label: "Faturação Total 1º semestre",
data: [1000, 1100, 1030, 1077, 1069, 1101],
backgroundColor: [
    'rgba(255, 255, 255)',
    ],
borderColor: [
'rgba(62, 171, 109)',
],
borderWidth: 2
},

]
},
options: {
responsive: true
}
});