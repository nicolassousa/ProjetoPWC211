Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

window.onload = function () {
    renderTotalJogos();
    renderFaturacao();
    renderAtividadesPlaneadas();
    renderAtividadesOcorridas();
    renderPercentagemFormsPatrocinadores();
    renderPercentagemFormsGestores();
    renderVisitasMes();
}

async function renderTotalJogos() {
    const jogosOcorridos = document.getElementById("jogosOcorridos");
    const response = await fetch('http://localhost:8080/atividades/');
    const jogos = await response.json();
    var jogosTotais = 0;

    try {
        if (isIterable(jogos)) {
            for (jogo of jogos) {
                jogosTotais++;
            }
        }
    }
    catch(err){
        throw err
    }
    jogosOcorridos.innerHTML = jogosTotais;
}

async function renderFaturacao() {
    const ValorFaturacao = document.getElementById("ValorFaturacao");
    const response1 = await fetch('http://localhost:8080/atividades/');
    const atividades = await response1.json();
    var valor = 0;

    try
    {
        if (isIterable(atividades)) {
            for (atividade of atividades) {
                const response2 = await fetch('http://localhost:8080/espacos/' + atividade.idEspaco);
                const espaco = await response2.json();
                valor += parseInt(espaco[0].Preco) * 0.20;
            }
        }
    }
    catch (err) {
        throw err
    }

    ValorFaturacao.innerHTML = valor;
}

async function renderAtividadesPlaneadas() {

    const response3 = await fetch('http://localhost:8080/atividades/');
    const atividades = await response3.json();
    const date = new Date();
    var dia1 = 0;
    var anulada1 = 0;
    var dia1a5 = 0;
    var anulada1a5 = 0;
    var dia6a10 = 0;
    var anulada6a10 = 0;
    var dia11a15 = 0;
    var anulada11a15 = 0;
    var dia16a20 = 0;
    var anulada16a20 = 0;
    var dia21a25 = 0;
    var anulada21a25 = 0;
    var dia26a30 = 0;
    var anulada26a30 = 0;
    var diafinal = "";

    try {
        if (isIterable(atividades)) {
            for (atividade of atividades) {
                var data = new Date(atividade.Data);

                if (data.getFullYear() == date.getFullYear() && data.getMonth() == date.getMonth()) {
                    if (data.getDate() == 1) {
                        if (atividae.Anulada.data[0] == 0) {
                            dia1++;
                        }
                        else {
                            anulada1++;
                        }
                    }
                    else if (data.getDate() <= 5) {
                        if (atividade.Anulada.data[0] == 0) {
                            dia1a5++;
                        }
                        else {
                            anulada1a5++;
                        }
                    }
                    else if (5 < data.getDate() && data.getDate() <= 10) {
                        if (atividade.Anulada.data[0] == 0) {
                            dia6a10++;
                        }
                        else {
                            anulada6a10++;
                        }
                    }
                    else if (10 < data.getDate() && data.getDate() <= 15) {
                        if (atividade.Anulada.data[0] == 0) {
                            dia11a15++;
                        }
                        else {
                            anulada11a15++;
                        }
                    }
                    else if (15 < data.getDate() && data.getDate() <= 20) {
                        if (atividade.Anulada.data[0] == 0) {
                            dia16a20++;
                        }
                        else {
                            anulada16a20++;
                        }
                    }
                    else if (20 < data.getDate() && data.getDate() <= 25) {
                        if (atividade.Anulada.data[0] == 0) {
                            dia21a25++;
                        }
                        else {
                            anulada21a25++;
                        }
                    }
                    else if (25 < data.getDate()) {
                        if (atividade.Anulada.data[0] == 0) {
                            dia26a30++;
                        }
                        else {
                            anulada26a30++;
                        }
                    }
                }
            }
        }

        switch (date.getMonth() + 1) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                diafinal = "Dia 31";
                break;
            case 2:
                diafinal = "Dia 28";
            default:
                diafinal = "Dia 30";
        }
    }
    catch (err) {
        throw err;
    }

    var ctx = document.getElementById("myAreaChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Dia 1", "Dia 5", "Dia 10", "Dia 15", "Dia 20", "Dia 25", diafinal],
            datasets: [{
                label: "Total de Jogos",
                lineTension: 0.3,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(26,155,82, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(26,155,82, 1)",
                pointBorderColor: "rgba(26,155,82, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(26,155,82, 1)",
                pointHoverBorderColor: "rgba(26,155,82, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: [dia1, dia1a5, dia6a10, dia11a15, dia16a20, dia21a25, dia26a30],
            },
            {
                label: "Jogos Anulados",
                lineTension: 0.3,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(139, 5, 3, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(139, 5, 3, 1)",
                pointBorderColor: "rgba(139, 5, 3, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(139, 5, 3, 1)",
                pointHoverBorderColor: "rgba(139, 5, 3, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: [anulada1, anulada1a5, anulada6a10, anulada11a15, anulada16a20, anulada21a25, anulada26a30],
            }
            ]
        },

        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 25,
                    top: 25,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    time: {
                        unit: 'date'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 7
                    }
                }],
                yAxes: [{
                    ticks: {
                        maxTicksLimit: 5,
                        padding: 10,
                        // Include a dollar sign in the ticks
                        callback: function (value, index, values) {
                            return '' + number_format(value);
                        }
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
            },
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem, chart) {
                        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                        return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
                    }
                }
            }
        }
    });
}

async function renderAtividadesOcorridas() {
    const response4 = await fetch('http://localhost:8080/atividades/');
    const atividades = await response4.json();
    const date = new Date();

    //Vari�veis para contagem do numero de atividades dos 3 meses
    var mesAtual = 0; //M�s atual
    var mesPassado = 0; //M�s Anterior
    var doisMesesAtras = 0; //Dois meses atr�s

    //Labels para legenda do gr�fico
    var lblMesAtual = ""; //M�s atual
    var lblMesAtras = ""; //M�s Anterior
    var lblDoisMesesAtras = ""; //Dois meses atr�s

    //Mes e Ano dos Meses
    var nMes = date.getMonth(); //M�s atual
    var nAno = date.getFullYear();  //M�s atual
    var nMesPassado = 0; //M�s Anterior
    var nAnoPassado = 0; //M�s Anterior
    var nDoisMesesAtras = 0; //Dois meses atr�s
    var nAnoDoisMesesAtras = 0; //Dois meses atr�s

    const monthNames = ["Janeiro", "Fevereiro", "Mar�o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    if (nMes == 0) //Janeiro
    {
        nMesPassado = 11; //Dezembro
        nAnoPassado = nAno - 1;
        nDoisMesesAtras = 10; //Novembro
        nAnoDoisMesesAtras = nAno - 1;
    }
    else if (nMes == 1) //Fevereiro
    {
        nMesPassado = 0; //Janeiro
        nAnoPassado = nAno;
        nDoisMesesAtras = 11; //Dezembro
        nAnoDoisMesesAtras = nAno - 1;
    }
    else {
        nMesPassado = nMes - 1;
        nAnoPassado = nAno;
        nDoisMesesAtras = nMes - 2;
        nAnoDoisMesesAtras = nAno;
    }

    lblMesAtual = monthNames[nMes];
    lblMesAtras = monthNames[nMesPassado];
    lblDoisMesesAtras = monthNames[nDoisMesesAtras];

    try {
        if (isIterable(atividades)) {
            for (atividade of atividades) {
                var data = new Date(atividade.Data);

                if (data.getFullYear() == nAno && data.getMonth() == nMes && atividade.Anulada.data[0] == 0 && data.getDate() < date.getDate()) {
                    mesAtual++;
                }
                else if (data.getFullYear() == nAnoPassado && data.getMonth() == nMesPassado && atividade.Anulada.data[0] == 0) {
                    mesPassado++;
                }
                else if (data.getFullYear() == nAnoDoisMesesAtras && data.getMonth() == nDoisMesesAtras && atividade.Anulada.data[0] == 0) {
                    doisMesesAtras++;
                }
            }
        }
    }
    catch (err) {
        throw err
    }

    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [lblDoisMesesAtras, lblMesAtras, lblMesAtual],
            datasets: [{
                label: 'N Atividades',
                data: [doisMesesAtras, mesPassado, mesAtual],
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
}

async function renderPercentagemFormsPatrocinadores() {
    const response5 = await fetch('http://localhost:8080/patrocinadores/');
    const patrocinadores = await response5.json();
    var bodyPercentagemPatrocinadores = document.getElementById("PercentagemPatrocinadoresAceites");
    const date = new Date();

    //Vari�veis para contagem do numero de formularios aceites dos 3 meses
    var mesAtual = 0; //M�s atual
    var mesAtualTotal = 0;
    var mesPassado = 0; //M�s Anterior
    var mesPassadoTotal = 0;
    var doisMesesAtras = 0; //Dois meses atr�s
    var doisMesesAtrasTotal = 0;

    //Labels para legenda do gr�fico
    var lblMesAtual = ""; //M�s atual
    var lblMesAtras = ""; //M�s Anterior
    var lblDoisMesesAtras = ""; //Dois meses atr�s

    //Mes e Ano dos Meses
    var nMes = date.getMonth(); //M�s atual
    var nAno = date.getFullYear();  //M�s atual
    var nMesPassado = 0; //M�s Anterior
    var nAnoPassado = 0; //M�s Anterior
    var nDoisMesesAtras = 0; //Dois meses atr�s
    var nAnoDoisMesesAtras = 0; //Dois meses atr�s

    //Vari�veis Percentagem
    var percentagemMesAtual = 0;
    var percentagemMesPassado = 0;
    var percentagemDoisMesesAtras = 0;

    const monthNames = ["Janeiro", "Fevereiro", "Mar�o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    if (nMes == 0) //Janeiro
    {
        nMesPassado = 11; //Dezembro
        nAnoPassado = nAno - 1;
        nDoisMesesAtras = 10; //Novembro
        nAnoDoisMesesAtras = nAno - 1;
    }
    else if (nMes == 1) //Fevereiro
    {
        nMesPassado = 0; //Janeiro
        nAnoPassado = nAno;
        nDoisMesesAtras = 11; //Dezembro
        nAnoDoisMesesAtras = nAno - 1;
    }
    else {
        nMesPassado = nMes - 1;
        nAnoPassado = nAno;
        nDoisMesesAtras = nMes - 2;
        nAnoDoisMesesAtras = nAno;
    }

    lblMesAtual = monthNames[nMes];
    lblMesAtras = monthNames[nMesPassado];
    lblDoisMesesAtras = monthNames[nDoisMesesAtras];

    try {
        if (isIterable(patrocinadores)) {
            for (patrocinador of patrocinadores) {
                var data = new Date(patrocinador.dataResultado);

                if (data.getFullYear() == nAno && data.getMonth() == nMes) {
                    if (patrocinador.Resultado == 1) {
                        mesAtual++;
                        mesAtualTotal++;
                    }
                    else {
                        mesAtualTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoPassado && data.getMonth() == nMesPassado) {
                    if (patrocinador.Resultado == 1) {
                        mesPassado++;
                        mesPassadoTotal++;
                    }
                    else {
                        mesPassadoTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoDoisMesesAtras && data.getMonth() == nDoisMesesAtras) {
                    if (patrocinador.Resultado == 1) {
                        doisMesesAtras++;
                        doisMesesAtrasTotal++;
                    }
                    else {
                        doisMesesAtrasTotal++;
                    }
                }
            }
        }
    }
    catch (err) {
        throw err
    }

    if (mesAtualTotal != 0) {
        percentagemMesAtual = Math.round((mesAtual / mesAtualTotal) * 100);
    }

    if (mesPassadoTotal != 0) {
        percentagemMesPassado = Math.round((mesPassado / mesPassadoTotal) * 100);
    }

    if (doisMesesAtrasTotal != 0) {
        percentagemDoisMesesAtras = Math.round((doisMesesAtras / doisMesesAtrasTotal) * 100)
    }

    bodyPercentagemPatrocinadores.innerHTML = '<h4 class="small font-weight-bold">'+ lblMesAtual  +'<span class="float-right">'+ percentagemMesAtual +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemMesAtual +'%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblMesAtras + '<span class="float-right">' + percentagemMesPassado +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar bg-warning" role="progressbar" style="width:' + percentagemMesPassado +'%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblDoisMesesAtras + '<span class="float-right">' + percentagemDoisMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemDoisMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>';
}

async function renderPercentagemFormsGestores() {
    const response5 = await fetch('http://localhost:8080/GestorAdmins/');
    const gestores = await response5.json();
    var bodyPercentagemPatrocinadores = document.getElementById("PercentagemGestoresAceites");
    const date = new Date();

    //Vari�veis para contagem do numero de formularios aceites dos 3 meses
    var mesAtual = 0; //M�s atual
    var mesAtualTotal = 0;
    var mesPassado = 0; //M�s Anterior
    var mesPassadoTotal = 0;
    var doisMesesAtras = 0; //Dois meses atr�s
    var doisMesesAtrasTotal = 0;

    //Labels para legenda do gr�fico
    var lblMesAtual = ""; //M�s atual
    var lblMesAtras = ""; //M�s Anterior
    var lblDoisMesesAtras = ""; //Dois meses atr�s

    //Mes e Ano dos Meses
    var nMes = date.getMonth(); //M�s atual
    var nAno = date.getFullYear();  //M�s atual
    var nMesPassado = 0; //M�s Anterior
    var nAnoPassado = 0; //M�s Anterior
    var nDoisMesesAtras = 0; //Dois meses atr�s
    var nAnoDoisMesesAtras = 0; //Dois meses atr�s

    //Vari�veis Percentagem
    var percentagemMesAtual = 0;
    var percentagemMesPassado = 0;
    var percentagemDoisMesesAtras = 0;

    const monthNames = ["Janeiro", "Fevereiro", "Mar�o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    if (nMes == 0) //Janeiro
    {
        nMesPassado = 11; //Dezembro
        nAnoPassado = nAno - 1;
        nDoisMesesAtras = 10; //Novembro
        nAnoDoisMesesAtras = nAno - 1;
    }
    else if (nMes == 1) //Fevereiro
    {
        nMesPassado = 0; //Janeiro
        nAnoPassado = nAno;
        nDoisMesesAtras = 11; //Dezembro
        nAnoDoisMesesAtras = nAno - 1;
    }
    else {
        nMesPassado = nMes - 1;
        nAnoPassado = nAno;
        nDoisMesesAtras = nMes - 2;
        nAnoDoisMesesAtras = nAno;
    }

    lblMesAtual = monthNames[nMes];
    lblMesAtras = monthNames[nMesPassado];
    lblDoisMesesAtras = monthNames[nDoisMesesAtras];

    try {
        if (isIterable(gestores)) {
            for (gestor of gestores) {
                var data = new Date(gestor.dataAplicacao);
                if (gestor.Tipo==2) {
                if (data.getFullYear() == nAno && data.getMonth() == nMes) {
                    if (gestor.Resultado == 1) {
                        mesAtual++;
                        mesAtualTotal++;
                    }
                    else {
                        mesAtualTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoPassado && data.getMonth() == nMesPassado) {
                    if (gestor.Resultado == 1) {
                        mesPassado++;
                        mesPassadoTotal++;
                    }
                    else {
                        mesPassadoTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoDoisMesesAtras && data.getMonth() == nDoisMesesAtras) {
                    if (gestor.Resultado == 1) {
                        doisMesesAtras++;
                        doisMesesAtrasTotal++;
                    }
                    else {
                        doisMesesAtrasTotal++;
                    }
                }
            }
            }
        }
    }
    catch (err) {
        throw err
    }

    if (mesAtualTotal != 0) {
        percentagemMesAtual = Math.round((mesAtual / mesAtualTotal) * 100);
    }

    if (mesPassadoTotal != 0) {
        percentagemMesPassado = Math.round((mesPassado / mesPassadoTotal) * 100);
    }

    if (doisMesesAtrasTotal != 0) {
        percentagemDoisMesesAtras = Math.round((doisMesesAtras / doisMesesAtrasTotal) * 100)
    }

    bodyPercentagemPatrocinadores.innerHTML = '<h4 class="small font-weight-bold">' + lblMesAtual + '<span class="float-right">' + percentagemMesAtual + '%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemMesAtual + '%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblMesAtras + '<span class="float-right">' + percentagemMesPassado + '%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar bg-warning" role="progressbar" style="width:' + percentagemMesPassado + '%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblDoisMesesAtras + '<span class="float-right">' + percentagemDoisMesesAtras + '%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemDoisMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>';
}

async function renderVisitasMes() {
    const response6 = await fetch('http://localhost:8080/visitas/all/');
    const visitas = await response6.json();
    const date = new Date();
    var dia1 = 0;
    var dia1a5 = 0;
    var dia6a10 = 0;
    var dia11a15 = 0;
    var dia16a20 = 0;
    var dia21a25 = 0;
    var dia26a30 = 0;
    var diafinal = "";

    try {
        if (isIterable(visitas)) {
            for (visita of visitas) {

                if (visita.ano == date.getFullYear() && (visita.mes - 1) == date.getMonth()) {
                    if (visita.dia == 1)
                    {
                        dia1++;
                    }
                    else if (visita.dia <= 5)
                    {
                        dia1a5++;
                    }
                    else if (5 < visita.dia && visita.dia <= 10)
                    {
                        dia6a10++;
                    }
                    else if (10 < visita.dia && visita.dia <= 15)
                    {
                        dia11a15++;
                    }
                    else if (15 < visita.dia && visita.dia <= 20)
                    {
                        dia16a20++;
                    }
                    else if (20 < visita.dia && visita.dia <= 25)
                    {
                        dia21a25++;
                    }
                    else if (25 < visita.dia)
                    {
                        dia26a30++;
                    }
                }
            }
        }

        switch (date.getMonth() + 1) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                diafinal = "Dia 31";
                break;
            case 2:
                diafinal = "Dia 28";
            default:
                diafinal = "Dia 30";
        }
    }
    catch (err) {
        throw err;
    }

    var ctx = document.getElementById("idvisitas");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Dia 1", "Dia 5", "Dia 10", "Dia 15", "Dia 20", "Dia 25", diafinal],
            datasets: [{
                label: "Visitas",
                lineTension: 0.3,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(26,155,82, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(26,155,82, 1)",
                pointBorderColor: "rgba(26,155,82, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(26,155,82, 1)",
                pointHoverBorderColor: "rgba(26,155,82, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: [dia1, dia1a5, dia6a10, dia11a15, dia16a20, dia21a25, dia26a30],
            }
            ]
        },

        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 25,
                    top: 25,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    time: {
                        unit: 'date'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 7
                    }
                }],
                yAxes: [{
                    ticks: {
                        maxTicksLimit: 5,
                        padding: 10,
                        // Include a dollar sign in the ticks
                        callback: function (value, index, values) {
                            return '' + number_format(value);
                        }
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
            },
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem, chart) {
                        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                        return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
                    }
                }
            }
        }
    });

}







//FUN��ES AUXILIARES
function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}