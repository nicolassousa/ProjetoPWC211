new Chart(document.getElementById("horizontalBar"), {
"type": "horizontalBar",
"data": {
"labels": ["Junho", "Maio", "Abril", "Março", "Fevereiro", "Janeiro"],
"datasets": [{
"label": "Total formulários Recebidos",
"data": [200, 190, 199, 201, 159, 210],
"fill": false,
"backgroundColor": ["rgba(26, 155, 82)", "rgba(28, 189, 98)",
"rgba(26, 155, 82)", "rgba(28, 189, 98)", "rgba(26, 155, 82)", "rgba(28, 189, 98)"
],
"borderColor": ["rgba(26, 155, 82)", "rgba(28, 189, 98)", "rgba(26, 155, 82)", "rgba(28, 189, 98)", "rgba(26, 155, 82)", "rgba(28, 189, 98)"
],
"borderWidth": 1
}]
},
"options": {
"scales": {
"xAxes": [{
"ticks": {
"beginAtZero": true
}
}]
}
}
});