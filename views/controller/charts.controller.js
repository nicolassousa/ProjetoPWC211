Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

window.onload = function () {
    renderAtividadesRealizadas();
    renderVisitas();
    renderFormsPatrocinadores();
    renderFormsGestores();
    renderFormsPatrocinadoresTotal();
    renderFormsGestoresTotal();
    renderFormsRegistos();
    
}

async function renderAtividadesRealizadas() {

    const response4 = await fetch('http://localhost:8080/atividades/');
    const atividades = await response4.json();
    const date = new Date();

    //Vari�veis para contagem do numero de atividades dos 3 meses
    var mesAtual = 0; //M�s atual
    var mesPassado = 0; //M�s Anterior
    var doisMesesAtras = 0; //Dois meses atr�s
    var tresMesesAtras = 0; //3 meses atr�s
    var quatroMesesAtras = 0; //4 meses atr�s
    var cincoMesesAtras = 0; //5 meses atr�s
    var seisMesesAtras = 0; //6 meses atr�s
    var seteMesesAtras = 0; //7 meses atr�s
    var oitoMesesAtras = 0; //8 meses atr�s
    var noveMesesAtras = 0; //9 meses atr�s
    var dezMesesAtras = 0; //10 meses atr�s
    var onzeMesesAtras = 0; //11 meses atr�s


    //Labels para legenda do gr�fico
    var lblMesAtual = ""; //M�s atual
    var lblMesAtras = ""; //M�s Anterior
    var lblDoisMesesAtras = ""; //Dois meses atr�s
    var lblTresMesesAtras = ""; //3 meses atr�s
    var lblQuatroMesesAtras = ""; //4 meses atr�s
    var lblCincoMesesAtras = ""; //5 meses atr�s
    var lblSeisMesesAtras = ""; //6 meses atr�s
    var lblSeteMesesAtras = ""; //7 meses atr�s
    var lblOitoMesesAtras = ""; //8 meses atr�s
    var lblNoveMesesAtras = ""; //9 meses atr�s
    var lblDezMesesAtras = ""; //10 meses atr�s
    var lblOnzeMesesAtras = ""; //11 meses atr�s

    //Mes e Ano dos Meses
    var nMes = date.getMonth(); //M�s atual
    var nAno = date.getFullYear();  //M�s atual
    var nMesPassado = 0; //M�s Anterior
    var nAnoPassado = 0; //M�s Anterior
    var nDoisMesesAtras = 0; //Dois meses atr�s
    var nAnoDoisMesesAtras = 0; //Dois meses atr�s
    var nTresMesesAtras = 0; //3 meses atr�s
    var nAnoTresMesesAtras = 0; //3 meses atr�s
    var nQuatroMesesAtras = 0; //4 meses atr�s
    var nAnoQuatroMesesAtras = 0; //4 meses atr�s
    var nCincoMesesAtras = 0; //5 meses atr�s
    var nAnoCincoMesesAtras = 0; //5 meses atr�s
    var nSeisMesesAtras = 0; //6 meses atr�s
    var nAnoSeisMesesAtras = 0; //6 meses atr�s
    var nSeteMesesAtras = 0; //7 meses atr�s
    var nAnoSeteMesesAtras = 0; //7 meses atr�s
    var nOitoMesesAtras = 0; //8 meses atr�s
    var nAnoOitoMesesAtras = 0; //8 meses atr�s
    var nNoveMesesAtras = 0; //9 meses atr�s
    var nAnoNoveMesesAtras = 0; //9 meses atr�s
    var nDezMesesAtras = 0; //10 meses atr�s
    var nAnoDezMesesAtras = 0; //10 meses atr�s
    var nOnzeMesesAtras = 0; //11 meses atr�s
    var nAnoOnzeMesesAtras = 0; //11 meses atr�s

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    if (nMes == 0) //Janeiro
    {
        nMesPassado = 11; //Dezembro
        nAnoPassado = nAno - 1;
        nDoisMesesAtras = 10; //Novembro
        nAnoDoisMesesAtras = nAno - 1;
        nTresMesesAtras = 9; //Outubro
        nAnoTresMesesAtras = nAno - 1;
        nQuatroMesesAtras = 8; //Setembro
        nAnoQuatroMesesAtras = nAno - 1;
        nCincoMesesAtras = 7; //Agosto
        nAnoCincoMesesAtras = nAno - 1;
        nSeisMesesAtras = 6; //Julho
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 5; //Junho
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 4; //Maio
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 3; //Abril
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 2; //Março
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 1; //Fevereiro
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 1) //Fevereiro
    {
        nMesPassado = 0; //Janeiro
        nAnoPassado = nAno;
        nDoisMesesAtras = 11; //Dezembro
        nAnoDoisMesesAtras = nAno - 1;
        nTresMesesAtras = 10; //Novembro
        nAnoTresMesesAtras = nAno - 1;
        nQuatroMesesAtras = 9; //Outubro
        nAnoQuatroMesesAtras = nAno - 1;
        nCincoMesesAtras = 8; //Setembro
        nAnoCincoMesesAtras = nAno - 1;
        nSeisMesesAtras = 7; //Agosto
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 6; //Julho
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 5; //Junho
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 4; //Maio
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 3; //Abril
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 2; //Março
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 2) //Março
    {
        nMesPassado = 1; //Fevereiro
        nAnoPassado = nAno;
        nDoisMesesAtras = 0; //Janeiro
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 11; //Dezembro
        nAnoTresMesesAtras = nAno - 1;
        nQuatroMesesAtras = 10; //Novembro
        nAnoQuatroMesesAtras = nAno - 1;
        nCincoMesesAtras = 9; //Outubro
        nAnoCincoMesesAtras = nAno - 1;
        nSeisMesesAtras = 8; //Setembro
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 7; //Agosto
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 6; //Julho
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 5; //Junho
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 4; //Maio
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 3; //Abril
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 3) //Abril
    {
        nMesPassado = 2; //Março
        nAnoPassado = nAno;
        nDoisMesesAtras = 1; //Fevereiro
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 0; //Janeiro
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 11; //Dezembro
        nAnoQuatroMesesAtras = nAno - 1;
        nCincoMesesAtras = 10; //Noembro
        nAnoCincoMesesAtras = nAno - 1;
        nSeisMesesAtras = 9; //Outubro
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 8; //Setembro
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 7; //Agosto
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 6; //Julho
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 5; //Junho
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 4; //Maio
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 4) //Maio
    {
        nMesPassado = 3; //Abril
        nAnoPassado = nAno;
        nDoisMesesAtras = 2; //Março
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 1; //Fevereiro
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 0; //Janeiro
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 11; //Dezembro
        nAnoCincoMesesAtras = nAno - 1;
        nSeisMesesAtras = 10; //Novembro
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 9; //Outubro
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 8; //Setembro
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 7; //Agosto
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 6; //Julho
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 5; //Junho
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 5) //Junho
    {
        nMesPassado = 4; //Maio
        nAnoPassado = nAno;
        nDoisMesesAtras = 3; //Abril
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 2; //Março
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 1; //Fevereiro
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 0; //Janeiro
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 11; //Dezembro
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 10; //Novembro
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 9; //Outubro
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 8; //Setembro
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 7; //Agosto
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 6; //Julho
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 6) //Julho
    {
        nMesPassado = 5; //Junho
        nAnoPassado = nAno;
        nDoisMesesAtras = 4; //Maio
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 3; //Abril
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 2; //Março
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 1; //Fevereiro
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 0; //Janeiro
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 11; //Dezembro
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 10; //Novembro
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 9; //Outubro
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 8; //Setembro
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 7; //Agosto
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 7) //Agosto
    {
        nMesPassado = 6; //Julho
        nAnoPassado = nAno;
        nDoisMesesAtras = 5; //Junho
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 4; //Maio
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 3; //Abril
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 2; //Março
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 1; //Fevereiro
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 0; //Janeiro
        nAnoSeteMesesAtras = nAno;
        nOitoMesesAtras = 11; //Dezembro
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 10; //Novembro
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 9; //Outubro
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 8; //Setembro
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 8) //Setembro
    {
        nMesPassado = 7; //Agosto
        nAnoPassado = nAno;
        nDoisMesesAtras = 6; //Julho
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 5; //Junho
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 4; //Maio
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 3; //Abril
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 2; //Março
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 1; //Fevereiro
        nAnoSeteMesesAtras = nAno;
        nOitoMesesAtras = 0; //Janeiro
        nAnoOitoMesesAtras = nAno;
        nNoveMesesAtras = 11; //Dezembro
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 10; //Novembro
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 9; //Outubro
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 9) //Outubro
    {
        nMesPassado = 8; //Setembro
        nAnoPassado = nAno;
        nDoisMesesAtras = 7; //Agosto
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 6; //Julho
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 5; //Junho
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 4; //Maio
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 3; //Abril
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 2; //Março
        nAnoSeteMesesAtras = nAno;
        nOitoMesesAtras = 1; //Fevereiro
        nAnoOitoMesesAtras = nAno;
        nNoveMesesAtras = 0; //Janeiro
        nAnoNoveMesesAtras = nAno;
        nDezMesesAtras = 11; //Dezembro
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 10; //Novembro
        nAnoOnzeMesesAtras = nAno - 1;
    }

    else if (nMes == 10) //Novembro
    {
        nMesPassado = 9; //Outubro
        nAnoPassado = nAno;
        nDoisMesesAtras = 8; //Setembro
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 7; //Agosto
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 6; //Julho
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 5; //Junho
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 4; //Maio
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 3; //Abril
        nAnoSeteMesesAtras = nAno;
        nOitoMesesAtras = 2; //Março
        nAnoOitoMesesAtras = nAno;
        nNoveMesesAtras = 1; //Fevereiro
        nAnoNoveMesesAtras = nAno;
        nDezMesesAtras = 0; //Janeiro
        nAnoDezMesesAtras = nAno;
        nOnzeMesesAtras = 11; //Dezembro
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 11) //Dezembro
    {
        nMesPassado = 10; //Novembro
        nAnoPassado = nAno;
        nDoisMesesAtras = 9; //Outubro
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 8; //Setebro
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 7; //Agosto
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 6; //Julho
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 5; //Junho
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 4; //Maio
        nAnoSeteMesesAtras = nAno;
        nOitoMesesAtras = 3; //Abril
        nAnoOitoMesesAtras = nAno;
        nNoveMesesAtras = 2; //Março
        nAnoNoveMesesAtras = nAno;
        nDezMesesAtras = 1; //Fevereiro
        nAnoDezMesesAtras = nAno;
        nOnzeMesesAtras = 0; //Janeiro
        nAnoOnzeMesesAtras = nAno;
    }

    lblMesAtual = monthNames[nMes];
    lblMesAtras = monthNames[nMesPassado];
    lblDoisMesesAtras = monthNames[nDoisMesesAtras];
    lblTresMesesAtras = monthNames[nTresMesesAtras];
    lblQuatroMesesAtras = monthNames[nQuatroMesesAtras];
    lblCincoMesesAtras = monthNames[nCincoMesesAtras];
    lblSeisMesesAtras = monthNames[nSeisMesesAtras];
    lblSeteMesesAtras = monthNames[nSeteMesesAtras];
    lblOitoMesesAtras = monthNames[nOitoMesesAtras];
    lblNoveMesesAtras = monthNames[nNoveMesesAtras];
    lblDezMesesAtras = monthNames[nDezMesesAtras];
    lblOnzeMesesAtras = monthNames[nOnzeMesesAtras];

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
                else if (data.getFullYear() == nAnoTresMesesAtras && data.getMonth() == nTresMesesAtras && atividade.Anulada.data[0] == 0) {
                    tresMesesAtras++;
                }
                else if (data.getFullYear() == nAnoQuatroMesesAtras && data.getMonth() == nQuatroMesesAtras && atividade.Anulada.data[0] == 0) {
                    quatroMesesAtras++;
                }
                else if (data.getFullYear() == nAnoCincoMesesAtras && data.getMonth() == nCincoMesesAtras && atividade.Anulada.data[0] == 0) {
                    cincoMesesAtras++;
                }
                else if (data.getFullYear() == nAnoSeisMesesAtras && data.getMonth() == nSeisMesesAtras && atividade.Anulada.data[0] == 0) {
                    seisMesesAtras++;
                }
                else if (data.getFullYear() == nAnoSeteMesesAtras && data.getMonth() == nSeteMesesAtras && atividade.Anulada.data[0] == 0) {
                    seteMesesAtras++;
                }
                else if (data.getFullYear() == nAnoOitoMesesAtras && data.getMonth() == nOitoMesesAtras && atividade.Anulada.data[0] == 0) {
                    oitoMesesAtras++;
                }
                else if (data.getFullYear() == nAnoNoveMesesAtras && data.getMonth() == nNoveMesesAtras && atividade.Anulada.data[0] == 0) {
                    noveMesesAtras++;
                }
                else if (data.getFullYear() == nAnoDezMesesAtras && data.getMonth() == nDezMesesAtras && atividade.Anulada.data[0] == 0) {
                    dezMesesAtras++;
                }
                else if (data.getFullYear() == nAnoOnzeMesesAtras && data.getMonth() == nOnzeMesesAtras && atividade.Anulada.data[0] == 0) {
                    onzeMesesAtras++;
                }
            }
        }
    }
    catch (err) {
        throw err
    }

    var ctx = document.getElementById("AtividadesR");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [lblOnzeMesesAtras, lblDezMesesAtras, lblNoveMesesAtras, lblOitoMesesAtras, lblSeteMesesAtras, lblSeisMesesAtras, lblCincoMesesAtras, lblQuatroMesesAtras, lblTresMesesAtras, lblDoisMesesAtras, lblMesAtras, lblMesAtual],
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
                data: [onzeMesesAtras, dezMesesAtras, noveMesesAtras, oitoMesesAtras, seteMesesAtras, seisMesesAtras, cincoMesesAtras, quatroMesesAtras, tresMesesAtras, doisMesesAtras, mesPassado, mesAtual],
            },
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


async function renderVisitas() {

    const response6 = await fetch('http://localhost:8080/visitas/all/');
    const visitas = await response6.json();
    const date = new Date();

    //Vari�veis para contagem do numero de atividades dos 3 meses
    var mesAtual = 0; //M�s atual
    var mesPassado = 0; //M�s Anterior
    var doisMesesAtras = 0; //Dois meses atr�s
    var tresMesesAtras = 0; //3 meses atr�s
    var quatroMesesAtras = 0; //4 meses atr�s
    var cincoMesesAtras = 0; //5 meses atr�s
    var seisMesesAtras = 0; //6 meses atr�s
    var seteMesesAtras = 0; //7 meses atr�s
    var oitoMesesAtras = 0; //8 meses atr�s
    var noveMesesAtras = 0; //9 meses atr�s
    var dezMesesAtras = 0; //10 meses atr�s
    var onzeMesesAtras = 0; //11 meses atr�s


    //Labels para legenda do gr�fico
    var lblMesAtual = ""; //M�s atual
    var lblMesAtras = ""; //M�s Anterior
    var lblDoisMesesAtras = ""; //Dois meses atr�s
    var lblTresMesesAtras = ""; //3 meses atr�s
    var lblQuatroMesesAtras = ""; //4 meses atr�s
    var lblCincoMesesAtras = ""; //5 meses atr�s
    var lblSeisMesesAtras = ""; //6 meses atr�s
    var lblSeteMesesAtras = ""; //7 meses atr�s
    var lblOitoMesesAtras = ""; //8 meses atr�s
    var lblNoveMesesAtras = ""; //9 meses atr�s
    var lblDezMesesAtras = ""; //10 meses atr�s
    var lblOnzeMesesAtras = ""; //11 meses atr�s

    //Mes e Ano dos Meses
    var nMes = date.getMonth(); //M�s atual
    var nAno = date.getFullYear();  //M�s atual
    var nMesPassado = 0; //M�s Anterior
    var nAnoPassado = 0; //M�s Anterior
    var nDoisMesesAtras = 0; //Dois meses atr�s
    var nAnoDoisMesesAtras = 0; //Dois meses atr�s
    var nTresMesesAtras = 0; //3 meses atr�s
    var nAnoTresMesesAtras = 0; //3 meses atr�s
    var nQuatroMesesAtras = 0; //4 meses atr�s
    var nAnoQuatroMesesAtras = 0; //4 meses atr�s
    var nCincoMesesAtras = 0; //5 meses atr�s
    var nAnoCincoMesesAtras = 0; //5 meses atr�s
    var nSeisMesesAtras = 0; //6 meses atr�s
    var nAnoSeisMesesAtras = 0; //6 meses atr�s
    var nSeteMesesAtras = 0; //7 meses atr�s
    var nAnoSeteMesesAtras = 0; //7 meses atr�s
    var nOitoMesesAtras = 0; //8 meses atr�s
    var nAnoOitoMesesAtras = 0; //8 meses atr�s
    var nNoveMesesAtras = 0; //9 meses atr�s
    var nAnoNoveMesesAtras = 0; //9 meses atr�s
    var nDezMesesAtras = 0; //10 meses atr�s
    var nAnoDezMesesAtras = 0; //10 meses atr�s
    var nOnzeMesesAtras = 0; //11 meses atr�s
    var nAnoOnzeMesesAtras = 0; //11 meses atr�s

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    if (nMes == 0) //Janeiro
    {
        nMesPassado = 11; //Dezembro
        nAnoPassado = nAno - 1;
        nDoisMesesAtras = 10; //Novembro
        nAnoDoisMesesAtras = nAno - 1;
        nTresMesesAtras = 9; //Outubro
        nAnoTresMesesAtras = nAno - 1;
        nQuatroMesesAtras = 8; //Setembro
        nAnoQuatroMesesAtras = nAno - 1;
        nCincoMesesAtras = 7; //Agosto
        nAnoCincoMesesAtras = nAno - 1;
        nSeisMesesAtras = 6; //Julho
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 5; //Junho
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 4; //Maio
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 3; //Abril
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 2; //Março
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 1; //Fevereiro
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 1) //Fevereiro
    {
        nMesPassado = 0; //Janeiro
        nAnoPassado = nAno;
        nDoisMesesAtras = 11; //Dezembro
        nAnoDoisMesesAtras = nAno - 1;
        nTresMesesAtras = 10; //Novembro
        nAnoTresMesesAtras = nAno - 1;
        nQuatroMesesAtras = 9; //Outubro
        nAnoQuatroMesesAtras = nAno - 1;
        nCincoMesesAtras = 8; //Setembro
        nAnoCincoMesesAtras = nAno - 1;
        nSeisMesesAtras = 7; //Agosto
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 6; //Julho
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 5; //Junho
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 4; //Maio
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 3; //Abril
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 2; //Março
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 2) //Março
    {
        nMesPassado = 1; //Fevereiro
        nAnoPassado = nAno;
        nDoisMesesAtras = 0; //Janeiro
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 11; //Dezembro
        nAnoTresMesesAtras = nAno - 1;
        nQuatroMesesAtras = 10; //Novembro
        nAnoQuatroMesesAtras = nAno - 1;
        nCincoMesesAtras = 9; //Outubro
        nAnoCincoMesesAtras = nAno - 1;
        nSeisMesesAtras = 8; //Setembro
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 7; //Agosto
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 6; //Julho
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 5; //Junho
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 4; //Maio
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 3; //Abril
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 3) //Abril
    {
        nMesPassado = 2; //Março
        nAnoPassado = nAno;
        nDoisMesesAtras = 1; //Fevereiro
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 0; //Janeiro
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 11; //Dezembro
        nAnoQuatroMesesAtras = nAno - 1;
        nCincoMesesAtras = 10; //Noembro
        nAnoCincoMesesAtras = nAno - 1;
        nSeisMesesAtras = 9; //Outubro
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 8; //Setembro
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 7; //Agosto
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 6; //Julho
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 5; //Junho
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 4; //Maio
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 4) //Maio
    {
        nMesPassado = 3; //Abril
        nAnoPassado = nAno;
        nDoisMesesAtras = 2; //Março
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 1; //Fevereiro
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 0; //Janeiro
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 11; //Dezembro
        nAnoCincoMesesAtras = nAno - 1;
        nSeisMesesAtras = 10; //Novembro
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 9; //Outubro
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 8; //Setembro
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 7; //Agosto
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 6; //Julho
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 5; //Junho
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 5) //Junho
    {
        nMesPassado = 4; //Maio
        nAnoPassado = nAno;
        nDoisMesesAtras = 3; //Abril
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 2; //Março
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 1; //Fevereiro
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 0; //Janeiro
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 11; //Dezembro
        nAnoSeisMesesAtras = nAno - 1;
        nSeteMesesAtras = 10; //Novembro
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 9; //Outubro
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 8; //Setembro
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 7; //Agosto
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 6; //Julho
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 6) //Julho
    {
        nMesPassado = 5; //Junho
        nAnoPassado = nAno;
        nDoisMesesAtras = 4; //Maio
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 3; //Abril
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 2; //Março
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 1; //Fevereiro
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 0; //Janeiro
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 11; //Dezembro
        nAnoSeteMesesAtras = nAno - 1;
        nOitoMesesAtras = 10; //Novembro
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 9; //Outubro
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 8; //Setembro
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 7; //Agosto
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 7) //Agosto
    {
        nMesPassado = 6; //Julho
        nAnoPassado = nAno;
        nDoisMesesAtras = 5; //Junho
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 4; //Maio
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 3; //Abril
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 2; //Março
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 1; //Fevereiro
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 0; //Janeiro
        nAnoSeteMesesAtras = nAno;
        nOitoMesesAtras = 11; //Dezembro
        nAnoOitoMesesAtras = nAno - 1;
        nNoveMesesAtras = 10; //Novembro
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 9; //Outubro
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 8; //Setembro
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 8) //Setembro
    {
        nMesPassado = 7; //Agosto
        nAnoPassado = nAno;
        nDoisMesesAtras = 6; //Julho
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 5; //Junho
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 4; //Maio
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 3; //Abril
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 2; //Março
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 1; //Fevereiro
        nAnoSeteMesesAtras = nAno;
        nOitoMesesAtras = 0; //Janeiro
        nAnoOitoMesesAtras = nAno;
        nNoveMesesAtras = 11; //Dezembro
        nAnoNoveMesesAtras = nAno - 1;
        nDezMesesAtras = 10; //Novembro
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 9; //Outubro
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 9) //Outubro
    {
        nMesPassado = 8; //Setembro
        nAnoPassado = nAno;
        nDoisMesesAtras = 7; //Agosto
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 6; //Julho
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 5; //Junho
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 4; //Maio
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 3; //Abril
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 2; //Março
        nAnoSeteMesesAtras = nAno;
        nOitoMesesAtras = 1; //Fevereiro
        nAnoOitoMesesAtras = nAno;
        nNoveMesesAtras = 0; //Janeiro
        nAnoNoveMesesAtras = nAno;
        nDezMesesAtras = 11; //Dezembro
        nAnoDezMesesAtras = nAno - 1;
        nOnzeMesesAtras = 10; //Novembro
        nAnoOnzeMesesAtras = nAno - 1;
    }

    else if (nMes == 10) //Novembro
    {
        nMesPassado = 9; //Outubro
        nAnoPassado = nAno;
        nDoisMesesAtras = 8; //Setembro
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 7; //Agosto
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 6; //Julho
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 5; //Junho
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 4; //Maio
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 3; //Abril
        nAnoSeteMesesAtras = nAno;
        nOitoMesesAtras = 2; //Março
        nAnoOitoMesesAtras = nAno;
        nNoveMesesAtras = 1; //Fevereiro
        nAnoNoveMesesAtras = nAno;
        nDezMesesAtras = 0; //Janeiro
        nAnoDezMesesAtras = nAno;
        nOnzeMesesAtras = 11; //Dezembro
        nAnoOnzeMesesAtras = nAno - 1;
    }
    else if (nMes == 11) //Dezembro
    {
        nMesPassado = 10; //Novembro
        nAnoPassado = nAno;
        nDoisMesesAtras = 9; //Outubro
        nAnoDoisMesesAtras = nAno;
        nTresMesesAtras = 8; //Setebro
        nAnoTresMesesAtras = nAno;
        nQuatroMesesAtras = 7; //Agosto
        nAnoQuatroMesesAtras = nAno;
        nCincoMesesAtras = 6; //Julho
        nAnoCincoMesesAtras = nAno;
        nSeisMesesAtras = 5; //Junho
        nAnoSeisMesesAtras = nAno;
        nSeteMesesAtras = 4; //Maio
        nAnoSeteMesesAtras = nAno;
        nOitoMesesAtras = 3; //Abril
        nAnoOitoMesesAtras = nAno;
        nNoveMesesAtras = 2; //Março
        nAnoNoveMesesAtras = nAno;
        nDezMesesAtras = 1; //Fevereiro
        nAnoDezMesesAtras = nAno;
        nOnzeMesesAtras = 0; //Janeiro
        nAnoOnzeMesesAtras = nAno;
    }

    lblMesAtual = monthNames[nMes];
    lblMesAtras = monthNames[nMesPassado];
    lblDoisMesesAtras = monthNames[nDoisMesesAtras];
    lblTresMesesAtras = monthNames[nTresMesesAtras];
    lblQuatroMesesAtras = monthNames[nQuatroMesesAtras];
    lblCincoMesesAtras = monthNames[nCincoMesesAtras];
    lblSeisMesesAtras = monthNames[nSeisMesesAtras];
    lblSeteMesesAtras = monthNames[nSeteMesesAtras];
    lblOitoMesesAtras = monthNames[nOitoMesesAtras];
    lblNoveMesesAtras = monthNames[nNoveMesesAtras];
    lblDezMesesAtras = monthNames[nDezMesesAtras];
    lblOnzeMesesAtras = monthNames[nOnzeMesesAtras];

    try {
        if (isIterable(visitas)) {
            for (visita of visitas) {
              

                if (visita.ano == date.getFullYear() && (visita.mes - 1) == date.getMonth()) {
                 
                        mesAtual++;
                    }

                    if (visita.ano == nAnoPassado && (visita.mes - 1) == nMesPassado) {
                 
                        mesPassado++;
                    }
                    if (visita.ano == nAnoDoisMesesAtras && (visita.mes - 1) == nDoisMesesAtras) {
                 
                        doisMesesAtras++;
                    }
                    if (visita.ano == nAnoTresMesesAtras&& (visita.mes - 1) == nTresMesesAtras) {
                 
                        tresMesesAtras++;
                    }
                    if (visita.ano == nAnoQuatroMesesAtras && (visita.mes - 1) == nQuatroMesesAtras) {
                 
                        quatroMesesAtras++;
                    }
                    if (visita.ano == nAnoCincoMesesAtras && (visita.mes - 1) == nCincoMesesAtras) {
                 
                        cincoMesesAtras++;
                    }
                    if (visita.ano == nAnoSeisMesesAtras && (visita.mes - 1) == nSeisMesesAtras) {
                 
                        seisMesesAtras++;
                    }
                    if (visita.ano == nAnoSeteMesesAtras && (visita.mes - 1) == nSeteMesesAtras) {
                 
                        seteMesesAtras++;
                    }
                    if (visita.ano == nAnoOitoMesesAtras && (visita.mes - 1) == nOitoMesesAtras) {
                 
                        oitoMesesAtras++;
                    }
                    if (visita.ano == nAnoNoveMesesAtras && (visita.mes - 1) == nNoveMesesAtras) {
                 
                        noveMesesAtras++;
                    }
                    if (visita.ano == nAnoDezMesesAtras && (visita.mes - 1) == nDezMesesAtras) {
                 
                        dezMesesAtras++;
                    }
                    if (visita.ano == nAnoOnzeMesesAtras && (visita.mes - 1) == nOnzeMesesAtras) {
                 
                        onzeMesesAtras++;
                    }
                    
                

                
                
                
            }
        }
    }
    catch (err) {
        throw err
    }

    var ctx = document.getElementById("idvisitas");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [lblOnzeMesesAtras, lblDezMesesAtras, lblNoveMesesAtras, lblOitoMesesAtras, lblSeteMesesAtras, lblSeisMesesAtras, lblCincoMesesAtras, lblQuatroMesesAtras, lblTresMesesAtras, lblDoisMesesAtras, lblMesAtras, lblMesAtual],
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
                data: [onzeMesesAtras, dezMesesAtras, noveMesesAtras, oitoMesesAtras, seteMesesAtras, seisMesesAtras, cincoMesesAtras, quatroMesesAtras, tresMesesAtras, doisMesesAtras, mesPassado, mesAtual],
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

async function renderFormsPatrocinadores() {
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
    var tresMesesAtras = 0; 
    var tresMesesAtrasTotal = 0;
    var quatroMesesAtras = 0; 
    var quatroMesesAtrasTotal = 0;
    var cincoMesesAtras = 0; 
    var cincoMesesAtrasTotal = 0;
    var seisMesesAtras = 0; 
    var seisMesesAtrasTotal = 0;
    var seteMesesAtras = 0; 
    var seteMesesAtrasTotal = 0;
    var oitoMesesAtras = 0; 
    var oitoMesesAtrasTotal = 0;
    var noveMesesAtras = 0; 
    var noveMesesAtrasTotal = 0;
    var dezMesesAtras = 0; 
    var dezMesesAtrasTotal = 0;
    var onzeMesesAtras = 0; 
    var onzeMesesAtrasTotal = 0;

    //Labels para legenda do gr�fico
    var lblMesAtual = ""; //M�s atual
    var lblMesAtras = ""; //M�s Anterior
    var lblDoisMesesAtras = ""; //Dois meses atr�s
    var lblTresMesesAtras = ""; //3 meses atr�s
    var lblQuatroMesesAtras = ""; //4 meses atr�s
    var lblCincoMesesAtras = ""; //5 meses atr�s
    var lblSeisMesesAtras = ""; //6 meses atr�s
    var lblSeteMesesAtras = ""; //7 meses atr�s
    var lblOitoMesesAtras = ""; //8 meses atr�s
    var lblNoveMesesAtras = ""; //9 meses atr�s
    var lblDezMesesAtras = ""; //10 meses atr�s
    var lblOnzeMesesAtras = ""; //11 meses atr�s

    //Mes e Ano dos Meses
    var nMes = date.getMonth(); //M�s atual
    var nAno = date.getFullYear();  //M�s atual
    var nMesPassado = 0; //M�s Anterior
    var nAnoPassado = 0; //M�s Anterior
    var nDoisMesesAtras = 0; //Dois meses atr�s
    var nAnoDoisMesesAtras = 0; //Dois meses atr�s
    var nTresMesesAtras = 0; //3 meses atr�s
    var nAnoTresMesesAtras = 0; //3 meses atr�s
    var nQuatroMesesAtras = 0; //4 meses atr�s
    var nAnoQuatroMesesAtras = 0; //4 meses atr�s
    var nCincoMesesAtras = 0; //5 meses atr�s
    var nAnoCincoMesesAtras = 0; //5 meses atr�s
    var nSeisMesesAtras = 0; //6 meses atr�s
    var nAnoSeisMesesAtras = 0; //6 meses atr�s
    var nSeteMesesAtras = 0; //7 meses atr�s
    var nAnoSeteMesesAtras = 0; //7 meses atr�s
    var nOitoMesesAtras = 0; //8 meses atr�s
    var nAnoOitoMesesAtras = 0; //8 meses atr�s
    var nNoveMesesAtras = 0; //9 meses atr�s
    var nAnoNoveMesesAtras = 0; //9 meses atr�s
    var nDezMesesAtras = 0; //10 meses atr�s
    var nAnoDezMesesAtras = 0; //10 meses atr�s
    var nOnzeMesesAtras = 0; //11 meses atr�s
    var nAnoOnzeMesesAtras = 0; //11 meses atr�s

     //Vari�veis Percentagem
     var percentagemMesAtual = 0;
     var percentagemMesPassado = 0;
     var percentagemDoisMesesAtras = 0;
     var percentagemTresMesesAtras = 0;
     var percentagemQuatroMesesAtras = 0;
     var percentagemCincoMesesAtras = 0;
     var percentagemSeisMesesAtras = 0;
     var percentagemSeteMesesAtras = 0;
     var percentagemOitoMesesAtras = 0;
     var percentagemNoveMesesAtras = 0;
     var percentagemDezMesesAtras = 0;
     var percentagemOnzeMesesAtras = 0;

 const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

 if (nMes == 0) //Janeiro
 {
     nMesPassado = 11; //Dezembro
     nAnoPassado = nAno - 1;
     nDoisMesesAtras = 10; //Novembro
     nAnoDoisMesesAtras = nAno - 1;
     nTresMesesAtras = 9; //Outubro
     nAnoTresMesesAtras = nAno - 1;
     nQuatroMesesAtras = 8; //Setembro
     nAnoQuatroMesesAtras = nAno - 1;
     nCincoMesesAtras = 7; //Agosto
     nAnoCincoMesesAtras = nAno - 1;
     nSeisMesesAtras = 6; //Julho
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 5; //Junho
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 4; //Maio
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 3; //Abril
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 2; //Março
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 1; //Fevereiro
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 1) //Fevereiro
 {
     nMesPassado = 0; //Janeiro
     nAnoPassado = nAno;
     nDoisMesesAtras = 11; //Dezembro
     nAnoDoisMesesAtras = nAno - 1;
     nTresMesesAtras = 10; //Novembro
     nAnoTresMesesAtras = nAno - 1;
     nQuatroMesesAtras = 9; //Outubro
     nAnoQuatroMesesAtras = nAno - 1;
     nCincoMesesAtras = 8; //Setembro
     nAnoCincoMesesAtras = nAno - 1;
     nSeisMesesAtras = 7; //Agosto
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 6; //Julho
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 5; //Junho
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 4; //Maio
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 3; //Abril
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 2; //Março
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 2) //Março
 {
     nMesPassado = 1; //Fevereiro
     nAnoPassado = nAno;
     nDoisMesesAtras = 0; //Janeiro
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 11; //Dezembro
     nAnoTresMesesAtras = nAno - 1;
     nQuatroMesesAtras = 10; //Novembro
     nAnoQuatroMesesAtras = nAno - 1;
     nCincoMesesAtras = 9; //Outubro
     nAnoCincoMesesAtras = nAno - 1;
     nSeisMesesAtras = 8; //Setembro
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 7; //Agosto
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 6; //Julho
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 5; //Junho
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 4; //Maio
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 3; //Abril
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 3) //Abril
 {
     nMesPassado = 2; //Março
     nAnoPassado = nAno;
     nDoisMesesAtras = 1; //Fevereiro
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 0; //Janeiro
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 11; //Dezembro
     nAnoQuatroMesesAtras = nAno - 1;
     nCincoMesesAtras = 10; //Noembro
     nAnoCincoMesesAtras = nAno - 1;
     nSeisMesesAtras = 9; //Outubro
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 8; //Setembro
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 7; //Agosto
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 6; //Julho
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 5; //Junho
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 4; //Maio
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 4) //Maio
 {
     nMesPassado = 3; //Abril
     nAnoPassado = nAno;
     nDoisMesesAtras = 2; //Março
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 1; //Fevereiro
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 0; //Janeiro
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 11; //Dezembro
     nAnoCincoMesesAtras = nAno - 1;
     nSeisMesesAtras = 10; //Novembro
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 9; //Outubro
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 8; //Setembro
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 7; //Agosto
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 6; //Julho
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 5; //Junho
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 5) //Junho
 {
     nMesPassado = 4; //Maio
     nAnoPassado = nAno;
     nDoisMesesAtras = 3; //Abril
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 2; //Março
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 1; //Fevereiro
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 0; //Janeiro
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 11; //Dezembro
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 10; //Novembro
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 9; //Outubro
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 8; //Setembro
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 7; //Agosto
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 6; //Julho
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 6) //Julho
 {
     nMesPassado = 5; //Junho
     nAnoPassado = nAno;
     nDoisMesesAtras = 4; //Maio
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 3; //Abril
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 2; //Março
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 1; //Fevereiro
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 0; //Janeiro
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 11; //Dezembro
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 10; //Novembro
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 9; //Outubro
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 8; //Setembro
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 7; //Agosto
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 7) //Agosto
 {
     nMesPassado = 6; //Julho
     nAnoPassado = nAno;
     nDoisMesesAtras = 5; //Junho
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 4; //Maio
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 3; //Abril
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 2; //Março
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 1; //Fevereiro
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 0; //Janeiro
     nAnoSeteMesesAtras = nAno;
     nOitoMesesAtras = 11; //Dezembro
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 10; //Novembro
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 9; //Outubro
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 8; //Setembro
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 8) //Setembro
 {
     nMesPassado = 7; //Agosto
     nAnoPassado = nAno;
     nDoisMesesAtras = 6; //Julho
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 5; //Junho
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 4; //Maio
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 3; //Abril
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 2; //Março
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 1; //Fevereiro
     nAnoSeteMesesAtras = nAno;
     nOitoMesesAtras = 0; //Janeiro
     nAnoOitoMesesAtras = nAno;
     nNoveMesesAtras = 11; //Dezembro
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 10; //Novembro
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 9; //Outubro
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 9) //Outubro
 {
     nMesPassado = 8; //Setembro
     nAnoPassado = nAno;
     nDoisMesesAtras = 7; //Agosto
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 6; //Julho
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 5; //Junho
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 4; //Maio
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 3; //Abril
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 2; //Março
     nAnoSeteMesesAtras = nAno;
     nOitoMesesAtras = 1; //Fevereiro
     nAnoOitoMesesAtras = nAno;
     nNoveMesesAtras = 0; //Janeiro
     nAnoNoveMesesAtras = nAno;
     nDezMesesAtras = 11; //Dezembro
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 10; //Novembro
     nAnoOnzeMesesAtras = nAno - 1;
 }

 else if (nMes == 10) //Novembro
 {
     nMesPassado = 9; //Outubro
     nAnoPassado = nAno;
     nDoisMesesAtras = 8; //Setembro
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 7; //Agosto
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 6; //Julho
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 5; //Junho
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 4; //Maio
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 3; //Abril
     nAnoSeteMesesAtras = nAno;
     nOitoMesesAtras = 2; //Março
     nAnoOitoMesesAtras = nAno;
     nNoveMesesAtras = 1; //Fevereiro
     nAnoNoveMesesAtras = nAno;
     nDezMesesAtras = 0; //Janeiro
     nAnoDezMesesAtras = nAno;
     nOnzeMesesAtras = 11; //Dezembro
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 11) //Dezembro
 {
     nMesPassado = 10; //Novembro
     nAnoPassado = nAno;
     nDoisMesesAtras = 9; //Outubro
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 8; //Setebro
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 7; //Agosto
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 6; //Julho
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 5; //Junho
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 4; //Maio
     nAnoSeteMesesAtras = nAno;
     nOitoMesesAtras = 3; //Abril
     nAnoOitoMesesAtras = nAno;
     nNoveMesesAtras = 2; //Março
     nAnoNoveMesesAtras = nAno;
     nDezMesesAtras = 1; //Fevereiro
     nAnoDezMesesAtras = nAno;
     nOnzeMesesAtras = 0; //Janeiro
     nAnoOnzeMesesAtras = nAno;
 }

    lblMesAtual = monthNames[nMes];
    lblMesAtras = monthNames[nMesPassado];
    lblDoisMesesAtras = monthNames[nDoisMesesAtras];
    lblTresMesesAtras = monthNames[nTresMesesAtras];
    lblQuatroMesesAtras = monthNames[nQuatroMesesAtras];
    lblCincoMesesAtras = monthNames[nCincoMesesAtras];
    lblSeisMesesAtras = monthNames[nSeisMesesAtras];
    lblSeteMesesAtras = monthNames[nSeteMesesAtras];
    lblOitoMesesAtras = monthNames[nOitoMesesAtras];
    lblNoveMesesAtras = monthNames[nNoveMesesAtras];
    lblDezMesesAtras = monthNames[nDezMesesAtras];
    lblOnzeMesesAtras = monthNames[nOnzeMesesAtras];

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
                else if (data.getFullYear() == nAnoTresMesesAtras && data.getMonth() == nTresMesesAtras) {
                    if (patrocinador.Resultado == 1) {
                        tresMesesAtras++;
                        tresMesesAtrasTotal++;
                    }
                    else {
                        tresMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoQuatroMesesAtras && data.getMonth() == nQuatroMesesAtras) {
                    if (patrocinador.Resultado == 1) {
                        quatroMesesAtras++;
                        quatroMesesAtrasTotal++;
                    }
                    else {
                        quatroMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoCincoMesesAtras && data.getMonth() == nCincoMesesAtras) {
                    if (patrocinador.Resultado == 1) {
                        cincoMesesAtras++;
                        cincoMesesAtrasTotal++;
                    }
                    else {
                        cincoMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoSeisMesesAtras && data.getMonth() == nSeisMesesAtras) {
                    if (patrocinador.Resultado == 1) {
                        seisMesesAtras++;
                        seisMesesAtrasTotal++;
                    }
                    else {
                        seisMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoSeteMesesAtras && data.getMonth() == nSeteMesesAtras) {
                    if (patrocinador.Resultado == 1) {
                        seteMesesAtras++;
                        seteMesesAtrasTotal++;
                    }
                    else {
                        seteMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoOitoMesesAtras && data.getMonth() == nOitoMesesAtras) {
                    if (patrocinador.Resultado == 1) {
                        oitoMesesAtras++;
                        oitoMesesAtrasTotal++;
                    }
                    else {
                        oitoMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoNoveMesesAtras && data.getMonth() == nNoveMesesAtras) {
                    if (patrocinador.Resultado == 1) {
                        noveMesesAtras++;
                        noveMesesAtrasTotal++;
                    }
                    else {
                        noveMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoDezMesesAtras && data.getMonth() == nDezMesesAtras) {
                    if (patrocinador.Resultado == 1) {
                        dezMesesAtras++;
                        dezMesesAtrasTotal++;
                    }
                    else {
                        dezMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoOnzeMesesAtras && data.getMonth() == nOnzeMesesAtras) {
                    if (patrocinador.Resultado == 1) {
                        onzeMesesAtras++;
                        onzeMesesAtrasTotal++;
                    }
                    else {
                        onzeMesesAtrasTotal++;
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
    if (tresMesesAtrasTotal != 0) {
        percentagemTresMesesAtras = Math.round((tresMesesAtras / tresMesesAtrasTotal) * 100)
    }
    if (quatroMesesAtrasTotal != 0) {
        percentagemQuatroMesesAtras = Math.round((quatroMesesAtras / quatroMesesAtrasTotal) * 100)
    }
    if (cincoMesesAtrasTotal != 0) {
        percentagemCincoMesesAtras = Math.round((cincoMesesAtras / cincoMesesAtrasTotal) * 100)
    }
    if (seisMesesAtrasTotal != 0) {
        percentagemSeisMesesAtras = Math.round((seisMesesAtras / seisMesesAtrasTotal) * 100)
    }
    if (seteMesesAtrasTotal != 0) {
        percentagemSeteMesesAtras = Math.round((seteMesesAtras / seteMesesAtrasTotal) * 100)
    }
    if (oitoMesesAtrasTotal != 0) {
        percentagemOitoMesesAtras = Math.round((oitoMesesAtras / oitoMesesAtrasTotal) * 100)
    }
    if (noveMesesAtrasTotal != 0) {
        percentagemNoveMesesAtras = Math.round((noveMesesAtras / noveMesesAtrasTotal) * 100)
    }
    if (dezMesesAtrasTotal != 0) {
        percentagemDezMesesAtras = Math.round((dezMesesAtras / dezMesesAtrasTotal) * 100)
    }
    if (onzeMesesAtrasTotal != 0) {
        percentagemOnzeMesesAtras = Math.round((onzeMesesAtras / onzeMesesAtrasTotal) * 100)
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
        '<div class="progress-bar" bg-warning role="progressbar" style="width:' + percentagemDoisMesesAtras + '%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblTresMesesAtras + '<span class="float-right">' + percentagemTresMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemTresMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblQuatroMesesAtras + '<span class="float-right">' + percentagemQuatroMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemQuatroMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblCincoMesesAtras + '<span class="float-right">' + percentagemCincoMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemCincoMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblSeisMesesAtras + '<span class="float-right">' + percentagemSeisMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemSeisMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblSeteMesesAtras + '<span class="float-right">' + percentagemSeteMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemSeteMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblOitoMesesAtras + '<span class="float-right">' + percentagemOitoMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemOitoMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblNoveMesesAtras + '<span class="float-right">' + percentagemNoveMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemNoveMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblDezMesesAtras + '<span class="float-right">' + percentagemDezMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemDezMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblOnzeMesesAtras + '<span class="float-right">' + percentagemOnzeMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemOnzeMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>';
}

async function renderFormsGestores() {
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
    var tresMesesAtras = 0; 
    var tresMesesAtrasTotal = 0;
    var quatroMesesAtras = 0; 
    var quatroMesesAtrasTotal = 0;
    var cincoMesesAtras = 0; 
    var cincoMesesAtrasTotal = 0;
    var seisMesesAtras = 0; 
    var seisMesesAtrasTotal = 0;
    var seteMesesAtras = 0; 
    var seteMesesAtrasTotal = 0;
    var oitoMesesAtras = 0; 
    var oitoMesesAtrasTotal = 0;
    var noveMesesAtras = 0; 
    var noveMesesAtrasTotal = 0;
    var dezMesesAtras = 0; 
    var dezMesesAtrasTotal = 0;
    var onzeMesesAtras = 0; 
    var onzeMesesAtrasTotal = 0;

    //Labels para legenda do gr�fico
    var lblMesAtual = ""; //M�s atual
    var lblMesAtras = ""; //M�s Anterior
    var lblDoisMesesAtras = ""; //Dois meses atr�s
    var lblTresMesesAtras = ""; //3 meses atr�s
    var lblQuatroMesesAtras = ""; //4 meses atr�s
    var lblCincoMesesAtras = ""; //5 meses atr�s
    var lblSeisMesesAtras = ""; //6 meses atr�s
    var lblSeteMesesAtras = ""; //7 meses atr�s
    var lblOitoMesesAtras = ""; //8 meses atr�s
    var lblNoveMesesAtras = ""; //9 meses atr�s
    var lblDezMesesAtras = ""; //10 meses atr�s
    var lblOnzeMesesAtras = ""; //11 meses atr�s

    //Mes e Ano dos Meses
    var nMes = date.getMonth(); //M�s atual
    var nAno = date.getFullYear();  //M�s atual
    var nMesPassado = 0; //M�s Anterior
    var nAnoPassado = 0; //M�s Anterior
    var nDoisMesesAtras = 0; //Dois meses atr�s
    var nAnoDoisMesesAtras = 0; //Dois meses atr�s
    var nTresMesesAtras = 0; //3 meses atr�s
    var nAnoTresMesesAtras = 0; //3 meses atr�s
    var nQuatroMesesAtras = 0; //4 meses atr�s
    var nAnoQuatroMesesAtras = 0; //4 meses atr�s
    var nCincoMesesAtras = 0; //5 meses atr�s
    var nAnoCincoMesesAtras = 0; //5 meses atr�s
    var nSeisMesesAtras = 0; //6 meses atr�s
    var nAnoSeisMesesAtras = 0; //6 meses atr�s
    var nSeteMesesAtras = 0; //7 meses atr�s
    var nAnoSeteMesesAtras = 0; //7 meses atr�s
    var nOitoMesesAtras = 0; //8 meses atr�s
    var nAnoOitoMesesAtras = 0; //8 meses atr�s
    var nNoveMesesAtras = 0; //9 meses atr�s
    var nAnoNoveMesesAtras = 0; //9 meses atr�s
    var nDezMesesAtras = 0; //10 meses atr�s
    var nAnoDezMesesAtras = 0; //10 meses atr�s
    var nOnzeMesesAtras = 0; //11 meses atr�s
    var nAnoOnzeMesesAtras = 0; //11 meses atr�s

     //Vari�veis Percentagem
     var percentagemMesAtual = 0;
     var percentagemMesPassado = 0;
     var percentagemDoisMesesAtras = 0;
     var percentagemTresMesesAtras = 0;
     var percentagemQuatroMesesAtras = 0;
     var percentagemCincoMesesAtras = 0;
     var percentagemSeisMesesAtras = 0;
     var percentagemSeteMesesAtras = 0;
     var percentagemOitoMesesAtras = 0;
     var percentagemNoveMesesAtras = 0;
     var percentagemDezMesesAtras = 0;
     var percentagemOnzeMesesAtras = 0;

 const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

 if (nMes == 0) //Janeiro
 {
     nMesPassado = 11; //Dezembro
     nAnoPassado = nAno - 1;
     nDoisMesesAtras = 10; //Novembro
     nAnoDoisMesesAtras = nAno - 1;
     nTresMesesAtras = 9; //Outubro
     nAnoTresMesesAtras = nAno - 1;
     nQuatroMesesAtras = 8; //Setembro
     nAnoQuatroMesesAtras = nAno - 1;
     nCincoMesesAtras = 7; //Agosto
     nAnoCincoMesesAtras = nAno - 1;
     nSeisMesesAtras = 6; //Julho
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 5; //Junho
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 4; //Maio
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 3; //Abril
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 2; //Março
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 1; //Fevereiro
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 1) //Fevereiro
 {
     nMesPassado = 0; //Janeiro
     nAnoPassado = nAno;
     nDoisMesesAtras = 11; //Dezembro
     nAnoDoisMesesAtras = nAno - 1;
     nTresMesesAtras = 10; //Novembro
     nAnoTresMesesAtras = nAno - 1;
     nQuatroMesesAtras = 9; //Outubro
     nAnoQuatroMesesAtras = nAno - 1;
     nCincoMesesAtras = 8; //Setembro
     nAnoCincoMesesAtras = nAno - 1;
     nSeisMesesAtras = 7; //Agosto
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 6; //Julho
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 5; //Junho
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 4; //Maio
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 3; //Abril
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 2; //Março
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 2) //Março
 {
     nMesPassado = 1; //Fevereiro
     nAnoPassado = nAno;
     nDoisMesesAtras = 0; //Janeiro
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 11; //Dezembro
     nAnoTresMesesAtras = nAno - 1;
     nQuatroMesesAtras = 10; //Novembro
     nAnoQuatroMesesAtras = nAno - 1;
     nCincoMesesAtras = 9; //Outubro
     nAnoCincoMesesAtras = nAno - 1;
     nSeisMesesAtras = 8; //Setembro
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 7; //Agosto
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 6; //Julho
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 5; //Junho
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 4; //Maio
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 3; //Abril
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 3) //Abril
 {
     nMesPassado = 2; //Março
     nAnoPassado = nAno;
     nDoisMesesAtras = 1; //Fevereiro
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 0; //Janeiro
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 11; //Dezembro
     nAnoQuatroMesesAtras = nAno - 1;
     nCincoMesesAtras = 10; //Noembro
     nAnoCincoMesesAtras = nAno - 1;
     nSeisMesesAtras = 9; //Outubro
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 8; //Setembro
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 7; //Agosto
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 6; //Julho
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 5; //Junho
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 4; //Maio
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 4) //Maio
 {
     nMesPassado = 3; //Abril
     nAnoPassado = nAno;
     nDoisMesesAtras = 2; //Março
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 1; //Fevereiro
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 0; //Janeiro
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 11; //Dezembro
     nAnoCincoMesesAtras = nAno - 1;
     nSeisMesesAtras = 10; //Novembro
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 9; //Outubro
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 8; //Setembro
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 7; //Agosto
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 6; //Julho
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 5; //Junho
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 5) //Junho
 {
     nMesPassado = 4; //Maio
     nAnoPassado = nAno;
     nDoisMesesAtras = 3; //Abril
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 2; //Março
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 1; //Fevereiro
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 0; //Janeiro
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 11; //Dezembro
     nAnoSeisMesesAtras = nAno - 1;
     nSeteMesesAtras = 10; //Novembro
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 9; //Outubro
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 8; //Setembro
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 7; //Agosto
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 6; //Julho
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 6) //Julho
 {
     nMesPassado = 5; //Junho
     nAnoPassado = nAno;
     nDoisMesesAtras = 4; //Maio
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 3; //Abril
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 2; //Março
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 1; //Fevereiro
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 0; //Janeiro
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 11; //Dezembro
     nAnoSeteMesesAtras = nAno - 1;
     nOitoMesesAtras = 10; //Novembro
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 9; //Outubro
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 8; //Setembro
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 7; //Agosto
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 7) //Agosto
 {
     nMesPassado = 6; //Julho
     nAnoPassado = nAno;
     nDoisMesesAtras = 5; //Junho
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 4; //Maio
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 3; //Abril
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 2; //Março
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 1; //Fevereiro
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 0; //Janeiro
     nAnoSeteMesesAtras = nAno;
     nOitoMesesAtras = 11; //Dezembro
     nAnoOitoMesesAtras = nAno - 1;
     nNoveMesesAtras = 10; //Novembro
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 9; //Outubro
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 8; //Setembro
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 8) //Setembro
 {
     nMesPassado = 7; //Agosto
     nAnoPassado = nAno;
     nDoisMesesAtras = 6; //Julho
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 5; //Junho
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 4; //Maio
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 3; //Abril
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 2; //Março
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 1; //Fevereiro
     nAnoSeteMesesAtras = nAno;
     nOitoMesesAtras = 0; //Janeiro
     nAnoOitoMesesAtras = nAno;
     nNoveMesesAtras = 11; //Dezembro
     nAnoNoveMesesAtras = nAno - 1;
     nDezMesesAtras = 10; //Novembro
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 9; //Outubro
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 9) //Outubro
 {
     nMesPassado = 8; //Setembro
     nAnoPassado = nAno;
     nDoisMesesAtras = 7; //Agosto
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 6; //Julho
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 5; //Junho
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 4; //Maio
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 3; //Abril
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 2; //Março
     nAnoSeteMesesAtras = nAno;
     nOitoMesesAtras = 1; //Fevereiro
     nAnoOitoMesesAtras = nAno;
     nNoveMesesAtras = 0; //Janeiro
     nAnoNoveMesesAtras = nAno;
     nDezMesesAtras = 11; //Dezembro
     nAnoDezMesesAtras = nAno - 1;
     nOnzeMesesAtras = 10; //Novembro
     nAnoOnzeMesesAtras = nAno - 1;
 }

 else if (nMes == 10) //Novembro
 {
     nMesPassado = 9; //Outubro
     nAnoPassado = nAno;
     nDoisMesesAtras = 8; //Setembro
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 7; //Agosto
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 6; //Julho
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 5; //Junho
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 4; //Maio
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 3; //Abril
     nAnoSeteMesesAtras = nAno;
     nOitoMesesAtras = 2; //Março
     nAnoOitoMesesAtras = nAno;
     nNoveMesesAtras = 1; //Fevereiro
     nAnoNoveMesesAtras = nAno;
     nDezMesesAtras = 0; //Janeiro
     nAnoDezMesesAtras = nAno;
     nOnzeMesesAtras = 11; //Dezembro
     nAnoOnzeMesesAtras = nAno - 1;
 }
 else if (nMes == 11) //Dezembro
 {
     nMesPassado = 10; //Novembro
     nAnoPassado = nAno;
     nDoisMesesAtras = 9; //Outubro
     nAnoDoisMesesAtras = nAno;
     nTresMesesAtras = 8; //Setebro
     nAnoTresMesesAtras = nAno;
     nQuatroMesesAtras = 7; //Agosto
     nAnoQuatroMesesAtras = nAno;
     nCincoMesesAtras = 6; //Julho
     nAnoCincoMesesAtras = nAno;
     nSeisMesesAtras = 5; //Junho
     nAnoSeisMesesAtras = nAno;
     nSeteMesesAtras = 4; //Maio
     nAnoSeteMesesAtras = nAno;
     nOitoMesesAtras = 3; //Abril
     nAnoOitoMesesAtras = nAno;
     nNoveMesesAtras = 2; //Março
     nAnoNoveMesesAtras = nAno;
     nDezMesesAtras = 1; //Fevereiro
     nAnoDezMesesAtras = nAno;
     nOnzeMesesAtras = 0; //Janeiro
     nAnoOnzeMesesAtras = nAno;
 }

    lblMesAtual = monthNames[nMes];
    lblMesAtras = monthNames[nMesPassado];
    lblDoisMesesAtras = monthNames[nDoisMesesAtras];
    lblTresMesesAtras = monthNames[nTresMesesAtras];
    lblQuatroMesesAtras = monthNames[nQuatroMesesAtras];
    lblCincoMesesAtras = monthNames[nCincoMesesAtras];
    lblSeisMesesAtras = monthNames[nSeisMesesAtras];
    lblSeteMesesAtras = monthNames[nSeteMesesAtras];
    lblOitoMesesAtras = monthNames[nOitoMesesAtras];
    lblNoveMesesAtras = monthNames[nNoveMesesAtras];
    lblDezMesesAtras = monthNames[nDezMesesAtras];
    lblOnzeMesesAtras = monthNames[nOnzeMesesAtras];

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
                else if (data.getFullYear() == nAnoTresMesesAtras && data.getMonth() == nTresMesesAtras) {
                    if (gestor.Resultado == 1) {
                        tresMesesAtras++;
                        tresMesesAtrasTotal++;
                    }
                    else {
                        tresMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoQuatroMesesAtras && data.getMonth() == nQuatroMesesAtras) {
                    if (gestor.Resultado == 1) {
                        quatroMesesAtras++;
                        quatroMesesAtrasTotal++;
                    }
                    else {
                        quatroMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoCincoMesesAtras && data.getMonth() == nCincoMesesAtras) {
                    if (gestor.Resultado == 1) {
                        cincoMesesAtras++;
                        cincoMesesAtrasTotal++;
                    }
                    else {
                        cincoMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoSeisMesesAtras && data.getMonth() == nSeisMesesAtras) {
                    if (gestor.Resultado == 1) {
                        seisMesesAtras++;
                        seisMesesAtrasTotal++;
                    }
                    else {
                        seisMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoSeteMesesAtras && data.getMonth() == nSeteMesesAtras) {
                    if (gestor.Resultado == 1) {
                        seteMesesAtras++;
                        seteMesesAtrasTotal++;
                    }
                    else {
                        seteMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoOitoMesesAtras && data.getMonth() == nOitoMesesAtras) {
                    if (gestor.Resultado == 1) {
                        oitoMesesAtras++;
                        oitoMesesAtrasTotal++;
                    }
                    else {
                        oitoMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoNoveMesesAtras && data.getMonth() == nNoveMesesAtras) {
                    if (gestor.Resultado == 1) {
                        noveMesesAtras++;
                        noveMesesAtrasTotal++;
                    }
                    else {
                        noveMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoDezMesesAtras && data.getMonth() == nDezMesesAtras) {
                    if (gestor.Resultado == 1) {
                        dezMesesAtras++;
                        dezMesesAtrasTotal++;
                    }
                    else {
                        dezMesesAtrasTotal++;
                    }
                }
                else if (data.getFullYear() == nAnoOnzeMesesAtras && data.getMonth() == nOnzeMesesAtras) {
                    if (gestor.Resultado == 1) {
                        onzeMesesAtras++;
                        onzeMesesAtrasTotal++;
                    }
                    else {
                        onzeMesesAtrasTotal++;
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
    if (tresMesesAtrasTotal != 0) {
        percentagemTresMesesAtras = Math.round((tresMesesAtras / tresMesesAtrasTotal) * 100)
    }
    if (quatroMesesAtrasTotal != 0) {
        percentagemQuatroMesesAtras = Math.round((quatroMesesAtras / quatroMesesAtrasTotal) * 100)
    }
    if (cincoMesesAtrasTotal != 0) {
        percentagemCincoMesesAtras = Math.round((cincoMesesAtras / cincoMesesAtrasTotal) * 100)
    }
    if (seisMesesAtrasTotal != 0) {
        percentagemSeisMesesAtras = Math.round((seisMesesAtras / seisMesesAtrasTotal) * 100)
    }
    if (seteMesesAtrasTotal != 0) {
        percentagemSeteMesesAtras = Math.round((seteMesesAtras / seteMesesAtrasTotal) * 100)
    }
    if (oitoMesesAtrasTotal != 0) {
        percentagemOitoMesesAtras = Math.round((oitoMesesAtras / oitoMesesAtrasTotal) * 100)
    }
    if (noveMesesAtrasTotal != 0) {
        percentagemNoveMesesAtras = Math.round((noveMesesAtras / noveMesesAtrasTotal) * 100)
    }
    if (dezMesesAtrasTotal != 0) {
        percentagemDezMesesAtras = Math.round((dezMesesAtras / dezMesesAtrasTotal) * 100)
    }
    if (onzeMesesAtrasTotal != 0) {
        percentagemOnzeMesesAtras = Math.round((onzeMesesAtras / onzeMesesAtrasTotal) * 100)
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
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblTresMesesAtras + '<span class="float-right">' + percentagemTresMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemTresMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblQuatroMesesAtras + '<span class="float-right">' + percentagemQuatroMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemQuatroMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblCincoMesesAtras + '<span class="float-right">' + percentagemCincoMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemCincoMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblSeisMesesAtras + '<span class="float-right">' + percentagemSeisMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemSeisMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblSeteMesesAtras + '<span class="float-right">' + percentagemSeteMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemSeteMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblOitoMesesAtras + '<span class="float-right">' + percentagemOitoMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemOitoMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblNoveMesesAtras + '<span class="float-right">' + percentagemNoveMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemNoveMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblDezMesesAtras + '<span class="float-right">' + percentagemDezMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemDezMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>' +
        '<h4 class="small font-weight-bold">' + lblOnzeMesesAtras + '<span class="float-right">' + percentagemOnzeMesesAtras +'%</span></h4>' +
        '<div class="progress mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width:' + percentagemOnzeMesesAtras + '%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '</div>';
}


async function renderFormsPatrocinadoresTotal() {
    const response5 = await fetch('http://localhost:8080/patrocinadores/');
    const patrocinadores = await response5.json();
    const date = new Date();

     //Vari�veis para contagem do numero de formularios dos 12 meses
     var mesAtual = 0; //M�s atual
    
     var mesPassado = 0; //M�s Anterior
    
     var doisMesesAtras = 0; //Dois meses atr�s

     var tresMesesAtras = 0; 
 
     var quatroMesesAtras = 0; 
 
     var cincoMesesAtras = 0; 

     var seisMesesAtras = 0; 

     var seteMesesAtras = 0; 

     var oitoMesesAtras = 0; 

     var noveMesesAtras = 0; 

     var dezMesesAtras = 0; 
    
     var onzeMesesAtras = 0; 
    

 
     //Labels para legenda do gr�fico
     var lblMesAtual = ""; //M�s atual
     var lblMesAtras = ""; //M�s Anterior
     var lblDoisMesesAtras = ""; //Dois meses atr�s
     var lblTresMesesAtras = ""; //3 meses atr�s
     var lblQuatroMesesAtras = ""; //4 meses atr�s
     var lblCincoMesesAtras = ""; //5 meses atr�s
     var lblSeisMesesAtras = ""; //6 meses atr�s
     var lblSeteMesesAtras = ""; //7 meses atr�s
     var lblOitoMesesAtras = ""; //8 meses atr�s
     var lblNoveMesesAtras = ""; //9 meses atr�s
     var lblDezMesesAtras = ""; //10 meses atr�s
     var lblOnzeMesesAtras = ""; //11 meses atr�s
 
     //Mes e Ano dos Meses
     var nMes = date.getMonth(); //M�s atual
     var nAno = date.getFullYear();  //M�s atual
     var nMesPassado = 0; //M�s Anterior
     var nAnoPassado = 0; //M�s Anterior
     var nDoisMesesAtras = 0; //Dois meses atr�s
     var nAnoDoisMesesAtras = 0; //Dois meses atr�s
     var nTresMesesAtras = 0; //3 meses atr�s
     var nAnoTresMesesAtras = 0; //3 meses atr�s
     var nQuatroMesesAtras = 0; //4 meses atr�s
     var nAnoQuatroMesesAtras = 0; //4 meses atr�s
     var nCincoMesesAtras = 0; //5 meses atr�s
     var nAnoCincoMesesAtras = 0; //5 meses atr�s
     var nSeisMesesAtras = 0; //6 meses atr�s
     var nAnoSeisMesesAtras = 0; //6 meses atr�s
     var nSeteMesesAtras = 0; //7 meses atr�s
     var nAnoSeteMesesAtras = 0; //7 meses atr�s
     var nOitoMesesAtras = 0; //8 meses atr�s
     var nAnoOitoMesesAtras = 0; //8 meses atr�s
     var nNoveMesesAtras = 0; //9 meses atr�s
     var nAnoNoveMesesAtras = 0; //9 meses atr�s
     var nDezMesesAtras = 0; //10 meses atr�s
     var nAnoDezMesesAtras = 0; //10 meses atr�s
     var nOnzeMesesAtras = 0; //11 meses atr�s
     var nAnoOnzeMesesAtras = 0; //11 meses atr�s
 
 
  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
 
  if (nMes == 0) //Janeiro
  {
      nMesPassado = 11; //Dezembro
      nAnoPassado = nAno - 1;
      nDoisMesesAtras = 10; //Novembro
      nAnoDoisMesesAtras = nAno - 1;
      nTresMesesAtras = 9; //Outubro
      nAnoTresMesesAtras = nAno - 1;
      nQuatroMesesAtras = 8; //Setembro
      nAnoQuatroMesesAtras = nAno - 1;
      nCincoMesesAtras = 7; //Agosto
      nAnoCincoMesesAtras = nAno - 1;
      nSeisMesesAtras = 6; //Julho
      nAnoSeisMesesAtras = nAno - 1;
      nSeteMesesAtras = 5; //Junho
      nAnoSeteMesesAtras = nAno - 1;
      nOitoMesesAtras = 4; //Maio
      nAnoOitoMesesAtras = nAno - 1;
      nNoveMesesAtras = 3; //Abril
      nAnoNoveMesesAtras = nAno - 1;
      nDezMesesAtras = 2; //Março
      nAnoDezMesesAtras = nAno - 1;
      nOnzeMesesAtras = 1; //Fevereiro
      nAnoOnzeMesesAtras = nAno - 1;
  }
  else if (nMes == 1) //Fevereiro
  {
      nMesPassado = 0; //Janeiro
      nAnoPassado = nAno;
      nDoisMesesAtras = 11; //Dezembro
      nAnoDoisMesesAtras = nAno - 1;
      nTresMesesAtras = 10; //Novembro
      nAnoTresMesesAtras = nAno - 1;
      nQuatroMesesAtras = 9; //Outubro
      nAnoQuatroMesesAtras = nAno - 1;
      nCincoMesesAtras = 8; //Setembro
      nAnoCincoMesesAtras = nAno - 1;
      nSeisMesesAtras = 7; //Agosto
      nAnoSeisMesesAtras = nAno - 1;
      nSeteMesesAtras = 6; //Julho
      nAnoSeteMesesAtras = nAno - 1;
      nOitoMesesAtras = 5; //Junho
      nAnoOitoMesesAtras = nAno - 1;
      nNoveMesesAtras = 4; //Maio
      nAnoNoveMesesAtras = nAno - 1;
      nDezMesesAtras = 3; //Abril
      nAnoDezMesesAtras = nAno - 1;
      nOnzeMesesAtras = 2; //Março
      nAnoOnzeMesesAtras = nAno - 1;
  }
  else if (nMes == 2) //Março
  {
      nMesPassado = 1; //Fevereiro
      nAnoPassado = nAno;
      nDoisMesesAtras = 0; //Janeiro
      nAnoDoisMesesAtras = nAno;
      nTresMesesAtras = 11; //Dezembro
      nAnoTresMesesAtras = nAno - 1;
      nQuatroMesesAtras = 10; //Novembro
      nAnoQuatroMesesAtras = nAno - 1;
      nCincoMesesAtras = 9; //Outubro
      nAnoCincoMesesAtras = nAno - 1;
      nSeisMesesAtras = 8; //Setembro
      nAnoSeisMesesAtras = nAno - 1;
      nSeteMesesAtras = 7; //Agosto
      nAnoSeteMesesAtras = nAno - 1;
      nOitoMesesAtras = 6; //Julho
      nAnoOitoMesesAtras = nAno - 1;
      nNoveMesesAtras = 5; //Junho
      nAnoNoveMesesAtras = nAno - 1;
      nDezMesesAtras = 4; //Maio
      nAnoDezMesesAtras = nAno - 1;
      nOnzeMesesAtras = 3; //Abril
      nAnoOnzeMesesAtras = nAno - 1;
  }
  else if (nMes == 3) //Abril
  {
      nMesPassado = 2; //Março
      nAnoPassado = nAno;
      nDoisMesesAtras = 1; //Fevereiro
      nAnoDoisMesesAtras = nAno;
      nTresMesesAtras = 0; //Janeiro
      nAnoTresMesesAtras = nAno;
      nQuatroMesesAtras = 11; //Dezembro
      nAnoQuatroMesesAtras = nAno - 1;
      nCincoMesesAtras = 10; //Noembro
      nAnoCincoMesesAtras = nAno - 1;
      nSeisMesesAtras = 9; //Outubro
      nAnoSeisMesesAtras = nAno - 1;
      nSeteMesesAtras = 8; //Setembro
      nAnoSeteMesesAtras = nAno - 1;
      nOitoMesesAtras = 7; //Agosto
      nAnoOitoMesesAtras = nAno - 1;
      nNoveMesesAtras = 6; //Julho
      nAnoNoveMesesAtras = nAno - 1;
      nDezMesesAtras = 5; //Junho
      nAnoDezMesesAtras = nAno - 1;
      nOnzeMesesAtras = 4; //Maio
      nAnoOnzeMesesAtras = nAno - 1;
  }
  else if (nMes == 4) //Maio
  {
      nMesPassado = 3; //Abril
      nAnoPassado = nAno;
      nDoisMesesAtras = 2; //Março
      nAnoDoisMesesAtras = nAno;
      nTresMesesAtras = 1; //Fevereiro
      nAnoTresMesesAtras = nAno;
      nQuatroMesesAtras = 0; //Janeiro
      nAnoQuatroMesesAtras = nAno;
      nCincoMesesAtras = 11; //Dezembro
      nAnoCincoMesesAtras = nAno - 1;
      nSeisMesesAtras = 10; //Novembro
      nAnoSeisMesesAtras = nAno - 1;
      nSeteMesesAtras = 9; //Outubro
      nAnoSeteMesesAtras = nAno - 1;
      nOitoMesesAtras = 8; //Setembro
      nAnoOitoMesesAtras = nAno - 1;
      nNoveMesesAtras = 7; //Agosto
      nAnoNoveMesesAtras = nAno - 1;
      nDezMesesAtras = 6; //Julho
      nAnoDezMesesAtras = nAno - 1;
      nOnzeMesesAtras = 5; //Junho
      nAnoOnzeMesesAtras = nAno - 1;
  }
  else if (nMes == 5) //Junho
  {
      nMesPassado = 4; //Maio
      nAnoPassado = nAno;
      nDoisMesesAtras = 3; //Abril
      nAnoDoisMesesAtras = nAno;
      nTresMesesAtras = 2; //Março
      nAnoTresMesesAtras = nAno;
      nQuatroMesesAtras = 1; //Fevereiro
      nAnoQuatroMesesAtras = nAno;
      nCincoMesesAtras = 0; //Janeiro
      nAnoCincoMesesAtras = nAno;
      nSeisMesesAtras = 11; //Dezembro
      nAnoSeisMesesAtras = nAno - 1;
      nSeteMesesAtras = 10; //Novembro
      nAnoSeteMesesAtras = nAno - 1;
      nOitoMesesAtras = 9; //Outubro
      nAnoOitoMesesAtras = nAno - 1;
      nNoveMesesAtras = 8; //Setembro
      nAnoNoveMesesAtras = nAno - 1;
      nDezMesesAtras = 7; //Agosto
      nAnoDezMesesAtras = nAno - 1;
      nOnzeMesesAtras = 6; //Julho
      nAnoOnzeMesesAtras = nAno - 1;
  }
  else if (nMes == 6) //Julho
  {
      nMesPassado = 5; //Junho
      nAnoPassado = nAno;
      nDoisMesesAtras = 4; //Maio
      nAnoDoisMesesAtras = nAno;
      nTresMesesAtras = 3; //Abril
      nAnoTresMesesAtras = nAno;
      nQuatroMesesAtras = 2; //Março
      nAnoQuatroMesesAtras = nAno;
      nCincoMesesAtras = 1; //Fevereiro
      nAnoCincoMesesAtras = nAno;
      nSeisMesesAtras = 0; //Janeiro
      nAnoSeisMesesAtras = nAno;
      nSeteMesesAtras = 11; //Dezembro
      nAnoSeteMesesAtras = nAno - 1;
      nOitoMesesAtras = 10; //Novembro
      nAnoOitoMesesAtras = nAno - 1;
      nNoveMesesAtras = 9; //Outubro
      nAnoNoveMesesAtras = nAno - 1;
      nDezMesesAtras = 8; //Setembro
      nAnoDezMesesAtras = nAno - 1;
      nOnzeMesesAtras = 7; //Agosto
      nAnoOnzeMesesAtras = nAno - 1;
  }
  else if (nMes == 7) //Agosto
  {
      nMesPassado = 6; //Julho
      nAnoPassado = nAno;
      nDoisMesesAtras = 5; //Junho
      nAnoDoisMesesAtras = nAno;
      nTresMesesAtras = 4; //Maio
      nAnoTresMesesAtras = nAno;
      nQuatroMesesAtras = 3; //Abril
      nAnoQuatroMesesAtras = nAno;
      nCincoMesesAtras = 2; //Março
      nAnoCincoMesesAtras = nAno;
      nSeisMesesAtras = 1; //Fevereiro
      nAnoSeisMesesAtras = nAno;
      nSeteMesesAtras = 0; //Janeiro
      nAnoSeteMesesAtras = nAno;
      nOitoMesesAtras = 11; //Dezembro
      nAnoOitoMesesAtras = nAno - 1;
      nNoveMesesAtras = 10; //Novembro
      nAnoNoveMesesAtras = nAno - 1;
      nDezMesesAtras = 9; //Outubro
      nAnoDezMesesAtras = nAno - 1;
      nOnzeMesesAtras = 8; //Setembro
      nAnoOnzeMesesAtras = nAno - 1;
  }
  else if (nMes == 8) //Setembro
  {
      nMesPassado = 7; //Agosto
      nAnoPassado = nAno;
      nDoisMesesAtras = 6; //Julho
      nAnoDoisMesesAtras = nAno;
      nTresMesesAtras = 5; //Junho
      nAnoTresMesesAtras = nAno;
      nQuatroMesesAtras = 4; //Maio
      nAnoQuatroMesesAtras = nAno;
      nCincoMesesAtras = 3; //Abril
      nAnoCincoMesesAtras = nAno;
      nSeisMesesAtras = 2; //Março
      nAnoSeisMesesAtras = nAno;
      nSeteMesesAtras = 1; //Fevereiro
      nAnoSeteMesesAtras = nAno;
      nOitoMesesAtras = 0; //Janeiro
      nAnoOitoMesesAtras = nAno;
      nNoveMesesAtras = 11; //Dezembro
      nAnoNoveMesesAtras = nAno - 1;
      nDezMesesAtras = 10; //Novembro
      nAnoDezMesesAtras = nAno - 1;
      nOnzeMesesAtras = 9; //Outubro
      nAnoOnzeMesesAtras = nAno - 1;
  }
  else if (nMes == 9) //Outubro
  {
      nMesPassado = 8; //Setembro
      nAnoPassado = nAno;
      nDoisMesesAtras = 7; //Agosto
      nAnoDoisMesesAtras = nAno;
      nTresMesesAtras = 6; //Julho
      nAnoTresMesesAtras = nAno;
      nQuatroMesesAtras = 5; //Junho
      nAnoQuatroMesesAtras = nAno;
      nCincoMesesAtras = 4; //Maio
      nAnoCincoMesesAtras = nAno;
      nSeisMesesAtras = 3; //Abril
      nAnoSeisMesesAtras = nAno;
      nSeteMesesAtras = 2; //Março
      nAnoSeteMesesAtras = nAno;
      nOitoMesesAtras = 1; //Fevereiro
      nAnoOitoMesesAtras = nAno;
      nNoveMesesAtras = 0; //Janeiro
      nAnoNoveMesesAtras = nAno;
      nDezMesesAtras = 11; //Dezembro
      nAnoDezMesesAtras = nAno - 1;
      nOnzeMesesAtras = 10; //Novembro
      nAnoOnzeMesesAtras = nAno - 1;
  }
 
  else if (nMes == 10) //Novembro
  {
      nMesPassado = 9; //Outubro
      nAnoPassado = nAno;
      nDoisMesesAtras = 8; //Setembro
      nAnoDoisMesesAtras = nAno;
      nTresMesesAtras = 7; //Agosto
      nAnoTresMesesAtras = nAno;
      nQuatroMesesAtras = 6; //Julho
      nAnoQuatroMesesAtras = nAno;
      nCincoMesesAtras = 5; //Junho
      nAnoCincoMesesAtras = nAno;
      nSeisMesesAtras = 4; //Maio
      nAnoSeisMesesAtras = nAno;
      nSeteMesesAtras = 3; //Abril
      nAnoSeteMesesAtras = nAno;
      nOitoMesesAtras = 2; //Março
      nAnoOitoMesesAtras = nAno;
      nNoveMesesAtras = 1; //Fevereiro
      nAnoNoveMesesAtras = nAno;
      nDezMesesAtras = 0; //Janeiro
      nAnoDezMesesAtras = nAno;
      nOnzeMesesAtras = 11; //Dezembro
      nAnoOnzeMesesAtras = nAno - 1;
  }
  else if (nMes == 11) //Dezembro
  {
      nMesPassado = 10; //Novembro
      nAnoPassado = nAno;
      nDoisMesesAtras = 9; //Outubro
      nAnoDoisMesesAtras = nAno;
      nTresMesesAtras = 8; //Setebro
      nAnoTresMesesAtras = nAno;
      nQuatroMesesAtras = 7; //Agosto
      nAnoQuatroMesesAtras = nAno;
      nCincoMesesAtras = 6; //Julho
      nAnoCincoMesesAtras = nAno;
      nSeisMesesAtras = 5; //Junho
      nAnoSeisMesesAtras = nAno;
      nSeteMesesAtras = 4; //Maio
      nAnoSeteMesesAtras = nAno;
      nOitoMesesAtras = 3; //Abril
      nAnoOitoMesesAtras = nAno;
      nNoveMesesAtras = 2; //Março
      nAnoNoveMesesAtras = nAno;
      nDezMesesAtras = 1; //Fevereiro
      nAnoDezMesesAtras = nAno;
      nOnzeMesesAtras = 0; //Janeiro
      nAnoOnzeMesesAtras = nAno;
  }
 
     lblMesAtual = monthNames[nMes];
     lblMesAtras = monthNames[nMesPassado];
     lblDoisMesesAtras = monthNames[nDoisMesesAtras];
     lblTresMesesAtras = monthNames[nTresMesesAtras];
     lblQuatroMesesAtras = monthNames[nQuatroMesesAtras];
     lblCincoMesesAtras = monthNames[nCincoMesesAtras];
     lblSeisMesesAtras = monthNames[nSeisMesesAtras];
     lblSeteMesesAtras = monthNames[nSeteMesesAtras];
     lblOitoMesesAtras = monthNames[nOitoMesesAtras];
     lblNoveMesesAtras = monthNames[nNoveMesesAtras];
     lblDezMesesAtras = monthNames[nDezMesesAtras];
     lblOnzeMesesAtras = monthNames[nOnzeMesesAtras];

     try {
        if (isIterable(patrocinadores)) {
            for (patrocinador of patrocinadores) {
                var data = new Date(patrocinador.dataAplicacao);

                if (data.getFullYear() == nAno && data.getMonth() == nMes) {
                  
                        mesAtual++;
                 
                    
                  
                }
                else if (data.getFullYear() == nAnoPassado && data.getMonth() == nMesPassado) {
                   
                        mesPassado++;
              
                    
                  
                }
                else if (data.getFullYear() == nAnoDoisMesesAtras && data.getMonth() == nDoisMesesAtras) {
                  
                        doisMesesAtras++;
                       
                    
                 
                }
                else if (data.getFullYear() == nAnoTresMesesAtras && data.getMonth() == nTresMesesAtras) {
                 
                        tresMesesAtras++;
                      
                    
                  
                }
                else if (data.getFullYear() == nAnoQuatroMesesAtras && data.getMonth() == nQuatroMesesAtras) {
                  
                        quatroMesesAtras++;
                     
                    
                
                
                }
                else if (data.getFullYear() == nAnoCincoMesesAtras && data.getMonth() == nCincoMesesAtras) {
                 
                        cincoMesesAtras++;
                      
                    
                 
                }
                else if (data.getFullYear() == nAnoSeisMesesAtras && data.getMonth() == nSeisMesesAtras) {
                
                        seisMesesAtras++;
                
                    
                  
                }
                else if (data.getFullYear() == nAnoSeteMesesAtras && data.getMonth() == nSeteMesesAtras) {
               
                        seteMesesAtras++;
                       
                    
                  
                }
                else if (data.getFullYear() == nAnoOitoMesesAtras && data.getMonth() == nOitoMesesAtras) {
                   
                        oitoMesesAtras++;
                        
                    
                  
                }
                else if (data.getFullYear() == nAnoNoveMesesAtras && data.getMonth() == nNoveMesesAtras) {
                   
                        noveMesesAtras++;
                       
                    
               
                }
                else if (data.getFullYear() == nAnoDezMesesAtras && data.getMonth() == nDezMesesAtras) {
                   
                        dezMesesAtras++;
                        
                    
                 
                }
                else if (data.getFullYear() == nAnoOnzeMesesAtras && data.getMonth() == nOnzeMesesAtras) {
                    
                        onzeMesesAtras++;
                     
                    
                
                }
            }
        }
    }
    catch (err) {
        throw err
    }
    var ctx = document.getElementById("myPieChart1");
    var myPieChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:  [lblOnzeMesesAtras, lblDezMesesAtras, lblNoveMesesAtras, lblOitoMesesAtras, lblSeteMesesAtras, lblSeisMesesAtras, lblCincoMesesAtras, lblQuatroMesesAtras, lblTresMesesAtras, lblDoisMesesAtras, lblMesAtras, lblMesAtual],
            datasets: [{
                label: 'N Formulários',
                data: [onzeMesesAtras, dezMesesAtras, noveMesesAtras, oitoMesesAtras, seteMesesAtras, seisMesesAtras, cincoMesesAtras, quatroMesesAtras, tresMesesAtras, doisMesesAtras, mesPassado, mesAtual],
                backgroundColor: [
                    'rgba(12, 71, 38, 0.2)',
                    'rgba(2, 71, 38, 0.2)',
                    'rgba(2, 71, 38, 0.2)',
                    'rgba(2, 71, 38, 0.2)',
                    'rgba(2, 71, 38, 0.2)',
                    'rgba(2, 71, 38, 0.2)',
                    'rgba(2, 71, 38, 0.2)',
                    'rgba(2, 71, 38, 0.2)',
                    'rgba(2, 71, 38, 0.2)',
                    'rgba(2, 71, 38, 0.2)',
                    'rgba(2, 71, 38, 0.2)',
                    'rgba(2, 71, 38, 0.2)',

                ],
                borderColor: [
                    'rgba(2, 71, 38,1)',
                    'rgba(2, 71, 38, 1)',
                    'rgba(2, 71, 38, 1)',
                    'rgba(2, 71, 38, 1)',
                    'rgba(2, 71, 38, 1)',
                    'rgba(2, 71, 38, 1)',
                    'rgba(2, 71, 38, 1)',
                    'rgba(2, 71, 38, 1)',
                    'rgba(2, 71, 38, 1)',
                    'rgba(2, 71, 38, 1)',
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
                caretPadding: 1,
       
            },
            legend: {
                display: false
            },
            cutoutPercentage: 80,
        },
    });
}

async function renderFormsGestoresTotal() {
const response5 = await fetch('http://localhost:8080/GestorAdmins/');
const gestores = await response5.json();
const date = new Date();

  //Vari�veis para contagem do numero de formularios dos 12 meses
  var mesAtual = 0; //M�s atual
    
  var mesPassado = 0; //M�s Anterior
 
  var doisMesesAtras = 0; //Dois meses atr�s

  var tresMesesAtras = 0; 

  var quatroMesesAtras = 0; 

  var cincoMesesAtras = 0; 

  var seisMesesAtras = 0; 

  var seteMesesAtras = 0; 

  var oitoMesesAtras = 0; 

  var noveMesesAtras = 0; 

  var dezMesesAtras = 0; 
 
  var onzeMesesAtras = 0; 
 


  //Labels para legenda do gr�fico
  var lblMesAtual = ""; //M�s atual
  var lblMesAtras = ""; //M�s Anterior
  var lblDoisMesesAtras = ""; //Dois meses atr�s
  var lblTresMesesAtras = ""; //3 meses atr�s
  var lblQuatroMesesAtras = ""; //4 meses atr�s
  var lblCincoMesesAtras = ""; //5 meses atr�s
  var lblSeisMesesAtras = ""; //6 meses atr�s
  var lblSeteMesesAtras = ""; //7 meses atr�s
  var lblOitoMesesAtras = ""; //8 meses atr�s
  var lblNoveMesesAtras = ""; //9 meses atr�s
  var lblDezMesesAtras = ""; //10 meses atr�s
  var lblOnzeMesesAtras = ""; //11 meses atr�s

  //Mes e Ano dos Meses
  var nMes = date.getMonth(); //M�s atual
  var nAno = date.getFullYear();  //M�s atual
  var nMesPassado = 0; //M�s Anterior
  var nAnoPassado = 0; //M�s Anterior
  var nDoisMesesAtras = 0; //Dois meses atr�s
  var nAnoDoisMesesAtras = 0; //Dois meses atr�s
  var nTresMesesAtras = 0; //3 meses atr�s
  var nAnoTresMesesAtras = 0; //3 meses atr�s
  var nQuatroMesesAtras = 0; //4 meses atr�s
  var nAnoQuatroMesesAtras = 0; //4 meses atr�s
  var nCincoMesesAtras = 0; //5 meses atr�s
  var nAnoCincoMesesAtras = 0; //5 meses atr�s
  var nSeisMesesAtras = 0; //6 meses atr�s
  var nAnoSeisMesesAtras = 0; //6 meses atr�s
  var nSeteMesesAtras = 0; //7 meses atr�s
  var nAnoSeteMesesAtras = 0; //7 meses atr�s
  var nOitoMesesAtras = 0; //8 meses atr�s
  var nAnoOitoMesesAtras = 0; //8 meses atr�s
  var nNoveMesesAtras = 0; //9 meses atr�s
  var nAnoNoveMesesAtras = 0; //9 meses atr�s
  var nDezMesesAtras = 0; //10 meses atr�s
  var nAnoDezMesesAtras = 0; //10 meses atr�s
  var nOnzeMesesAtras = 0; //11 meses atr�s
  var nAnoOnzeMesesAtras = 0; //11 meses atr�s


const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

if (nMes == 0) //Janeiro
{
   nMesPassado = 11; //Dezembro
   nAnoPassado = nAno - 1;
   nDoisMesesAtras = 10; //Novembro
   nAnoDoisMesesAtras = nAno - 1;
   nTresMesesAtras = 9; //Outubro
   nAnoTresMesesAtras = nAno - 1;
   nQuatroMesesAtras = 8; //Setembro
   nAnoQuatroMesesAtras = nAno - 1;
   nCincoMesesAtras = 7; //Agosto
   nAnoCincoMesesAtras = nAno - 1;
   nSeisMesesAtras = 6; //Julho
   nAnoSeisMesesAtras = nAno - 1;
   nSeteMesesAtras = 5; //Junho
   nAnoSeteMesesAtras = nAno - 1;
   nOitoMesesAtras = 4; //Maio
   nAnoOitoMesesAtras = nAno - 1;
   nNoveMesesAtras = 3; //Abril
   nAnoNoveMesesAtras = nAno - 1;
   nDezMesesAtras = 2; //Março
   nAnoDezMesesAtras = nAno - 1;
   nOnzeMesesAtras = 1; //Fevereiro
   nAnoOnzeMesesAtras = nAno - 1;
}
else if (nMes == 1) //Fevereiro
{
   nMesPassado = 0; //Janeiro
   nAnoPassado = nAno;
   nDoisMesesAtras = 11; //Dezembro
   nAnoDoisMesesAtras = nAno - 1;
   nTresMesesAtras = 10; //Novembro
   nAnoTresMesesAtras = nAno - 1;
   nQuatroMesesAtras = 9; //Outubro
   nAnoQuatroMesesAtras = nAno - 1;
   nCincoMesesAtras = 8; //Setembro
   nAnoCincoMesesAtras = nAno - 1;
   nSeisMesesAtras = 7; //Agosto
   nAnoSeisMesesAtras = nAno - 1;
   nSeteMesesAtras = 6; //Julho
   nAnoSeteMesesAtras = nAno - 1;
   nOitoMesesAtras = 5; //Junho
   nAnoOitoMesesAtras = nAno - 1;
   nNoveMesesAtras = 4; //Maio
   nAnoNoveMesesAtras = nAno - 1;
   nDezMesesAtras = 3; //Abril
   nAnoDezMesesAtras = nAno - 1;
   nOnzeMesesAtras = 2; //Março
   nAnoOnzeMesesAtras = nAno - 1;
}
else if (nMes == 2) //Março
{
   nMesPassado = 1; //Fevereiro
   nAnoPassado = nAno;
   nDoisMesesAtras = 0; //Janeiro
   nAnoDoisMesesAtras = nAno;
   nTresMesesAtras = 11; //Dezembro
   nAnoTresMesesAtras = nAno - 1;
   nQuatroMesesAtras = 10; //Novembro
   nAnoQuatroMesesAtras = nAno - 1;
   nCincoMesesAtras = 9; //Outubro
   nAnoCincoMesesAtras = nAno - 1;
   nSeisMesesAtras = 8; //Setembro
   nAnoSeisMesesAtras = nAno - 1;
   nSeteMesesAtras = 7; //Agosto
   nAnoSeteMesesAtras = nAno - 1;
   nOitoMesesAtras = 6; //Julho
   nAnoOitoMesesAtras = nAno - 1;
   nNoveMesesAtras = 5; //Junho
   nAnoNoveMesesAtras = nAno - 1;
   nDezMesesAtras = 4; //Maio
   nAnoDezMesesAtras = nAno - 1;
   nOnzeMesesAtras = 3; //Abril
   nAnoOnzeMesesAtras = nAno - 1;
}
else if (nMes == 3) //Abril
{
   nMesPassado = 2; //Março
   nAnoPassado = nAno;
   nDoisMesesAtras = 1; //Fevereiro
   nAnoDoisMesesAtras = nAno;
   nTresMesesAtras = 0; //Janeiro
   nAnoTresMesesAtras = nAno;
   nQuatroMesesAtras = 11; //Dezembro
   nAnoQuatroMesesAtras = nAno - 1;
   nCincoMesesAtras = 10; //Noembro
   nAnoCincoMesesAtras = nAno - 1;
   nSeisMesesAtras = 9; //Outubro
   nAnoSeisMesesAtras = nAno - 1;
   nSeteMesesAtras = 8; //Setembro
   nAnoSeteMesesAtras = nAno - 1;
   nOitoMesesAtras = 7; //Agosto
   nAnoOitoMesesAtras = nAno - 1;
   nNoveMesesAtras = 6; //Julho
   nAnoNoveMesesAtras = nAno - 1;
   nDezMesesAtras = 5; //Junho
   nAnoDezMesesAtras = nAno - 1;
   nOnzeMesesAtras = 4; //Maio
   nAnoOnzeMesesAtras = nAno - 1;
}
else if (nMes == 4) //Maio
{
   nMesPassado = 3; //Abril
   nAnoPassado = nAno;
   nDoisMesesAtras = 2; //Março
   nAnoDoisMesesAtras = nAno;
   nTresMesesAtras = 1; //Fevereiro
   nAnoTresMesesAtras = nAno;
   nQuatroMesesAtras = 0; //Janeiro
   nAnoQuatroMesesAtras = nAno;
   nCincoMesesAtras = 11; //Dezembro
   nAnoCincoMesesAtras = nAno - 1;
   nSeisMesesAtras = 10; //Novembro
   nAnoSeisMesesAtras = nAno - 1;
   nSeteMesesAtras = 9; //Outubro
   nAnoSeteMesesAtras = nAno - 1;
   nOitoMesesAtras = 8; //Setembro
   nAnoOitoMesesAtras = nAno - 1;
   nNoveMesesAtras = 7; //Agosto
   nAnoNoveMesesAtras = nAno - 1;
   nDezMesesAtras = 6; //Julho
   nAnoDezMesesAtras = nAno - 1;
   nOnzeMesesAtras = 5; //Junho
   nAnoOnzeMesesAtras = nAno - 1;
}
else if (nMes == 5) //Junho
{
   nMesPassado = 4; //Maio
   nAnoPassado = nAno;
   nDoisMesesAtras = 3; //Abril
   nAnoDoisMesesAtras = nAno;
   nTresMesesAtras = 2; //Março
   nAnoTresMesesAtras = nAno;
   nQuatroMesesAtras = 1; //Fevereiro
   nAnoQuatroMesesAtras = nAno;
   nCincoMesesAtras = 0; //Janeiro
   nAnoCincoMesesAtras = nAno;
   nSeisMesesAtras = 11; //Dezembro
   nAnoSeisMesesAtras = nAno - 1;
   nSeteMesesAtras = 10; //Novembro
   nAnoSeteMesesAtras = nAno - 1;
   nOitoMesesAtras = 9; //Outubro
   nAnoOitoMesesAtras = nAno - 1;
   nNoveMesesAtras = 8; //Setembro
   nAnoNoveMesesAtras = nAno - 1;
   nDezMesesAtras = 7; //Agosto
   nAnoDezMesesAtras = nAno - 1;
   nOnzeMesesAtras = 6; //Julho
   nAnoOnzeMesesAtras = nAno - 1;
}
else if (nMes == 6) //Julho
{
   nMesPassado = 5; //Junho
   nAnoPassado = nAno;
   nDoisMesesAtras = 4; //Maio
   nAnoDoisMesesAtras = nAno;
   nTresMesesAtras = 3; //Abril
   nAnoTresMesesAtras = nAno;
   nQuatroMesesAtras = 2; //Março
   nAnoQuatroMesesAtras = nAno;
   nCincoMesesAtras = 1; //Fevereiro
   nAnoCincoMesesAtras = nAno;
   nSeisMesesAtras = 0; //Janeiro
   nAnoSeisMesesAtras = nAno;
   nSeteMesesAtras = 11; //Dezembro
   nAnoSeteMesesAtras = nAno - 1;
   nOitoMesesAtras = 10; //Novembro
   nAnoOitoMesesAtras = nAno - 1;
   nNoveMesesAtras = 9; //Outubro
   nAnoNoveMesesAtras = nAno - 1;
   nDezMesesAtras = 8; //Setembro
   nAnoDezMesesAtras = nAno - 1;
   nOnzeMesesAtras = 7; //Agosto
   nAnoOnzeMesesAtras = nAno - 1;
}
else if (nMes == 7) //Agosto
{
   nMesPassado = 6; //Julho
   nAnoPassado = nAno;
   nDoisMesesAtras = 5; //Junho
   nAnoDoisMesesAtras = nAno;
   nTresMesesAtras = 4; //Maio
   nAnoTresMesesAtras = nAno;
   nQuatroMesesAtras = 3; //Abril
   nAnoQuatroMesesAtras = nAno;
   nCincoMesesAtras = 2; //Março
   nAnoCincoMesesAtras = nAno;
   nSeisMesesAtras = 1; //Fevereiro
   nAnoSeisMesesAtras = nAno;
   nSeteMesesAtras = 0; //Janeiro
   nAnoSeteMesesAtras = nAno;
   nOitoMesesAtras = 11; //Dezembro
   nAnoOitoMesesAtras = nAno - 1;
   nNoveMesesAtras = 10; //Novembro
   nAnoNoveMesesAtras = nAno - 1;
   nDezMesesAtras = 9; //Outubro
   nAnoDezMesesAtras = nAno - 1;
   nOnzeMesesAtras = 8; //Setembro
   nAnoOnzeMesesAtras = nAno - 1;
}
else if (nMes == 8) //Setembro
{
   nMesPassado = 7; //Agosto
   nAnoPassado = nAno;
   nDoisMesesAtras = 6; //Julho
   nAnoDoisMesesAtras = nAno;
   nTresMesesAtras = 5; //Junho
   nAnoTresMesesAtras = nAno;
   nQuatroMesesAtras = 4; //Maio
   nAnoQuatroMesesAtras = nAno;
   nCincoMesesAtras = 3; //Abril
   nAnoCincoMesesAtras = nAno;
   nSeisMesesAtras = 2; //Março
   nAnoSeisMesesAtras = nAno;
   nSeteMesesAtras = 1; //Fevereiro
   nAnoSeteMesesAtras = nAno;
   nOitoMesesAtras = 0; //Janeiro
   nAnoOitoMesesAtras = nAno;
   nNoveMesesAtras = 11; //Dezembro
   nAnoNoveMesesAtras = nAno - 1;
   nDezMesesAtras = 10; //Novembro
   nAnoDezMesesAtras = nAno - 1;
   nOnzeMesesAtras = 9; //Outubro
   nAnoOnzeMesesAtras = nAno - 1;
}
else if (nMes == 9) //Outubro
{
   nMesPassado = 8; //Setembro
   nAnoPassado = nAno;
   nDoisMesesAtras = 7; //Agosto
   nAnoDoisMesesAtras = nAno;
   nTresMesesAtras = 6; //Julho
   nAnoTresMesesAtras = nAno;
   nQuatroMesesAtras = 5; //Junho
   nAnoQuatroMesesAtras = nAno;
   nCincoMesesAtras = 4; //Maio
   nAnoCincoMesesAtras = nAno;
   nSeisMesesAtras = 3; //Abril
   nAnoSeisMesesAtras = nAno;
   nSeteMesesAtras = 2; //Março
   nAnoSeteMesesAtras = nAno;
   nOitoMesesAtras = 1; //Fevereiro
   nAnoOitoMesesAtras = nAno;
   nNoveMesesAtras = 0; //Janeiro
   nAnoNoveMesesAtras = nAno;
   nDezMesesAtras = 11; //Dezembro
   nAnoDezMesesAtras = nAno - 1;
   nOnzeMesesAtras = 10; //Novembro
   nAnoOnzeMesesAtras = nAno - 1;
}

else if (nMes == 10) //Novembro
{
   nMesPassado = 9; //Outubro
   nAnoPassado = nAno;
   nDoisMesesAtras = 8; //Setembro
   nAnoDoisMesesAtras = nAno;
   nTresMesesAtras = 7; //Agosto
   nAnoTresMesesAtras = nAno;
   nQuatroMesesAtras = 6; //Julho
   nAnoQuatroMesesAtras = nAno;
   nCincoMesesAtras = 5; //Junho
   nAnoCincoMesesAtras = nAno;
   nSeisMesesAtras = 4; //Maio
   nAnoSeisMesesAtras = nAno;
   nSeteMesesAtras = 3; //Abril
   nAnoSeteMesesAtras = nAno;
   nOitoMesesAtras = 2; //Março
   nAnoOitoMesesAtras = nAno;
   nNoveMesesAtras = 1; //Fevereiro
   nAnoNoveMesesAtras = nAno;
   nDezMesesAtras = 0; //Janeiro
   nAnoDezMesesAtras = nAno;
   nOnzeMesesAtras = 11; //Dezembro
   nAnoOnzeMesesAtras = nAno - 1;
}
else if (nMes == 11) //Dezembro
{
   nMesPassado = 10; //Novembro
   nAnoPassado = nAno;
   nDoisMesesAtras = 9; //Outubro
   nAnoDoisMesesAtras = nAno;
   nTresMesesAtras = 8; //Setebro
   nAnoTresMesesAtras = nAno;
   nQuatroMesesAtras = 7; //Agosto
   nAnoQuatroMesesAtras = nAno;
   nCincoMesesAtras = 6; //Julho
   nAnoCincoMesesAtras = nAno;
   nSeisMesesAtras = 5; //Junho
   nAnoSeisMesesAtras = nAno;
   nSeteMesesAtras = 4; //Maio
   nAnoSeteMesesAtras = nAno;
   nOitoMesesAtras = 3; //Abril
   nAnoOitoMesesAtras = nAno;
   nNoveMesesAtras = 2; //Março
   nAnoNoveMesesAtras = nAno;
   nDezMesesAtras = 1; //Fevereiro
   nAnoDezMesesAtras = nAno;
   nOnzeMesesAtras = 0; //Janeiro
   nAnoOnzeMesesAtras = nAno;
}

  lblMesAtual = monthNames[nMes];
  lblMesAtras = monthNames[nMesPassado];
  lblDoisMesesAtras = monthNames[nDoisMesesAtras];
  lblTresMesesAtras = monthNames[nTresMesesAtras];
  lblQuatroMesesAtras = monthNames[nQuatroMesesAtras];
  lblCincoMesesAtras = monthNames[nCincoMesesAtras];
  lblSeisMesesAtras = monthNames[nSeisMesesAtras];
  lblSeteMesesAtras = monthNames[nSeteMesesAtras];
  lblOitoMesesAtras = monthNames[nOitoMesesAtras];
  lblNoveMesesAtras = monthNames[nNoveMesesAtras];
  lblDezMesesAtras = monthNames[nDezMesesAtras];
  lblOnzeMesesAtras = monthNames[nOnzeMesesAtras];

  try {
    if (isIterable(gestores)) {
        for (gestor of gestores) {
            var data = new Date(gestor.dataAplicacao);
            if (gestor.Tipo==2) {
            if (data.getFullYear() == nAno && data.getMonth() == nMes) {
               
                    mesAtual++;
             
            }
            else if (data.getFullYear() == nAnoPassado && data.getMonth() == nMesPassado) {
               
                    mesPassado++;
              
            }
            else if (data.getFullYear() == nAnoDoisMesesAtras && data.getMonth() == nDoisMesesAtras) {
               
                    doisMesesAtras++;
            
            }
            else if (data.getFullYear() == nAnoTresMesesAtras && data.getMonth() == nTresMesesAtras) {
           
                    tresMesesAtras++;
             
            }
            else if (data.getFullYear() == nAnoQuatroMesesAtras && data.getMonth() == nQuatroMesesAtras) {
               
                    quatroMesesAtras++;
            
            }
            else if (data.getFullYear() == nAnoCincoMesesAtras && data.getMonth() == nCincoMesesAtras) {
  
                    cincoMesesAtras++;
            
            }
            else if (data.getFullYear() == nAnoSeisMesesAtras && data.getMonth() == nSeisMesesAtras) {
               
                    seisMesesAtras++;
           
            }
            else if (data.getFullYear() == nAnoSeteMesesAtras && data.getMonth() == nSeteMesesAtras) {
            
                    seteMesesAtras++;
            
            }
            else if (data.getFullYear() == nAnoOitoMesesAtras && data.getMonth() == nOitoMesesAtras) {
              
                    oitoMesesAtras++;
           
            }
            else if (data.getFullYear() == nAnoNoveMesesAtras && data.getMonth() == nNoveMesesAtras) {
                
                    noveMesesAtras++;
             
            }
            else if (data.getFullYear() == nAnoDezMesesAtras && data.getMonth() == nDezMesesAtras) {
               
                    dezMesesAtras++;
              
            }
            else if (data.getFullYear() == nAnoOnzeMesesAtras && data.getMonth() == nOnzeMesesAtras) {
                
                    onzeMesesAtras++;
               
            }
        }
        }
    }
}
catch (err) {
    throw err
}

var ctx = document.getElementById("myPieChart2");
var myPieChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  [lblOnzeMesesAtras, lblDezMesesAtras, lblNoveMesesAtras, lblOitoMesesAtras, lblSeteMesesAtras, lblSeisMesesAtras, lblCincoMesesAtras, lblQuatroMesesAtras, lblTresMesesAtras, lblDoisMesesAtras, lblMesAtras, lblMesAtual],
        datasets: [{
            label: 'N Formulários',
            data: [onzeMesesAtras, dezMesesAtras, noveMesesAtras, oitoMesesAtras, seteMesesAtras, seisMesesAtras, cincoMesesAtras, quatroMesesAtras, tresMesesAtras, doisMesesAtras, mesPassado, mesAtual],
            backgroundColor: [
                'rgba(12, 71, 38, 0.2)',
                'rgba(2, 71, 38, 0.2)',
                'rgba(2, 71, 38, 0.2)',
                'rgba(2, 71, 38, 0.2)',
                'rgba(2, 71, 38, 0.2)',
                'rgba(2, 71, 38, 0.2)',
                'rgba(2, 71, 38, 0.2)',
                'rgba(2, 71, 38, 0.2)',
                'rgba(2, 71, 38, 0.2)',
                'rgba(2, 71, 38, 0.2)',
                'rgba(2, 71, 38, 0.2)',
                'rgba(2, 71, 38, 0.2)',

            ],
            borderColor: [
                'rgba(2, 71, 38,1)',
                'rgba(2, 71, 38, 1)',
                'rgba(2, 71, 38, 1)',
                'rgba(2, 71, 38, 1)',
                'rgba(2, 71, 38, 1)',
                'rgba(2, 71, 38, 1)',
                'rgba(2, 71, 38, 1)',
                'rgba(2, 71, 38, 1)',
                'rgba(2, 71, 38, 1)',
                'rgba(2, 71, 38, 1)',
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


async function renderFormsRegistos() {

    const response4 = await fetch('http://localhost:8080/users/');
    const utilizadores = await response4.json();
    const date = new Date();

        //Vari�veis para contagem do numero de atividades dos 3 meses
        var mesAtual = 0; //M�s atual
        var mesPassado = 0; //M�s Anterior
        var doisMesesAtras = 0; //Dois meses atr�s
        var tresMesesAtras = 0; //3 meses atr�s
        var quatroMesesAtras = 0; //4 meses atr�s
        var cincoMesesAtras = 0; //5 meses atr�s
        var seisMesesAtras = 0; //6 meses atr�s
        var seteMesesAtras = 0; //7 meses atr�s
        var oitoMesesAtras = 0; //8 meses atr�s
        var noveMesesAtras = 0; //9 meses atr�s
        var dezMesesAtras = 0; //10 meses atr�s
        var onzeMesesAtras = 0; //11 meses atr�s
    
    
        //Labels para legenda do gr�fico
        var lblMesAtual = ""; //M�s atual
        var lblMesAtras = ""; //M�s Anterior
        var lblDoisMesesAtras = ""; //Dois meses atr�s
        var lblTresMesesAtras = ""; //3 meses atr�s
        var lblQuatroMesesAtras = ""; //4 meses atr�s
        var lblCincoMesesAtras = ""; //5 meses atr�s
        var lblSeisMesesAtras = ""; //6 meses atr�s
        var lblSeteMesesAtras = ""; //7 meses atr�s
        var lblOitoMesesAtras = ""; //8 meses atr�s
        var lblNoveMesesAtras = ""; //9 meses atr�s
        var lblDezMesesAtras = ""; //10 meses atr�s
        var lblOnzeMesesAtras = ""; //11 meses atr�s
    
        //Mes e Ano dos Meses
        var nMes = date.getMonth(); //M�s atual
        var nAno = date.getFullYear();  //M�s atual
        var nMesPassado = 0; //M�s Anterior
        var nAnoPassado = 0; //M�s Anterior
        var nDoisMesesAtras = 0; //Dois meses atr�s
        var nAnoDoisMesesAtras = 0; //Dois meses atr�s
        var nTresMesesAtras = 0; //3 meses atr�s
        var nAnoTresMesesAtras = 0; //3 meses atr�s
        var nQuatroMesesAtras = 0; //4 meses atr�s
        var nAnoQuatroMesesAtras = 0; //4 meses atr�s
        var nCincoMesesAtras = 0; //5 meses atr�s
        var nAnoCincoMesesAtras = 0; //5 meses atr�s
        var nSeisMesesAtras = 0; //6 meses atr�s
        var nAnoSeisMesesAtras = 0; //6 meses atr�s
        var nSeteMesesAtras = 0; //7 meses atr�s
        var nAnoSeteMesesAtras = 0; //7 meses atr�s
        var nOitoMesesAtras = 0; //8 meses atr�s
        var nAnoOitoMesesAtras = 0; //8 meses atr�s
        var nNoveMesesAtras = 0; //9 meses atr�s
        var nAnoNoveMesesAtras = 0; //9 meses atr�s
        var nDezMesesAtras = 0; //10 meses atr�s
        var nAnoDezMesesAtras = 0; //10 meses atr�s
        var nOnzeMesesAtras = 0; //11 meses atr�s
        var nAnoOnzeMesesAtras = 0; //11 meses atr�s
    
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
        if (nMes == 0) //Janeiro
        {
            nMesPassado = 11; //Dezembro
            nAnoPassado = nAno - 1;
            nDoisMesesAtras = 10; //Novembro
            nAnoDoisMesesAtras = nAno - 1;
            nTresMesesAtras = 9; //Outubro
            nAnoTresMesesAtras = nAno - 1;
            nQuatroMesesAtras = 8; //Setembro
            nAnoQuatroMesesAtras = nAno - 1;
            nCincoMesesAtras = 7; //Agosto
            nAnoCincoMesesAtras = nAno - 1;
            nSeisMesesAtras = 6; //Julho
            nAnoSeisMesesAtras = nAno - 1;
            nSeteMesesAtras = 5; //Junho
            nAnoSeteMesesAtras = nAno - 1;
            nOitoMesesAtras = 4; //Maio
            nAnoOitoMesesAtras = nAno - 1;
            nNoveMesesAtras = 3; //Abril
            nAnoNoveMesesAtras = nAno - 1;
            nDezMesesAtras = 2; //Março
            nAnoDezMesesAtras = nAno - 1;
            nOnzeMesesAtras = 1; //Fevereiro
            nAnoOnzeMesesAtras = nAno - 1;
        }
        else if (nMes == 1) //Fevereiro
        {
            nMesPassado = 0; //Janeiro
            nAnoPassado = nAno;
            nDoisMesesAtras = 11; //Dezembro
            nAnoDoisMesesAtras = nAno - 1;
            nTresMesesAtras = 10; //Novembro
            nAnoTresMesesAtras = nAno - 1;
            nQuatroMesesAtras = 9; //Outubro
            nAnoQuatroMesesAtras = nAno - 1;
            nCincoMesesAtras = 8; //Setembro
            nAnoCincoMesesAtras = nAno - 1;
            nSeisMesesAtras = 7; //Agosto
            nAnoSeisMesesAtras = nAno - 1;
            nSeteMesesAtras = 6; //Julho
            nAnoSeteMesesAtras = nAno - 1;
            nOitoMesesAtras = 5; //Junho
            nAnoOitoMesesAtras = nAno - 1;
            nNoveMesesAtras = 4; //Maio
            nAnoNoveMesesAtras = nAno - 1;
            nDezMesesAtras = 3; //Abril
            nAnoDezMesesAtras = nAno - 1;
            nOnzeMesesAtras = 2; //Março
            nAnoOnzeMesesAtras = nAno - 1;
        }
        else if (nMes == 2) //Março
        {
            nMesPassado = 1; //Fevereiro
            nAnoPassado = nAno;
            nDoisMesesAtras = 0; //Janeiro
            nAnoDoisMesesAtras = nAno;
            nTresMesesAtras = 11; //Dezembro
            nAnoTresMesesAtras = nAno - 1;
            nQuatroMesesAtras = 10; //Novembro
            nAnoQuatroMesesAtras = nAno - 1;
            nCincoMesesAtras = 9; //Outubro
            nAnoCincoMesesAtras = nAno - 1;
            nSeisMesesAtras = 8; //Setembro
            nAnoSeisMesesAtras = nAno - 1;
            nSeteMesesAtras = 7; //Agosto
            nAnoSeteMesesAtras = nAno - 1;
            nOitoMesesAtras = 6; //Julho
            nAnoOitoMesesAtras = nAno - 1;
            nNoveMesesAtras = 5; //Junho
            nAnoNoveMesesAtras = nAno - 1;
            nDezMesesAtras = 4; //Maio
            nAnoDezMesesAtras = nAno - 1;
            nOnzeMesesAtras = 3; //Abril
            nAnoOnzeMesesAtras = nAno - 1;
        }
        else if (nMes == 3) //Abril
        {
            nMesPassado = 2; //Março
            nAnoPassado = nAno;
            nDoisMesesAtras = 1; //Fevereiro
            nAnoDoisMesesAtras = nAno;
            nTresMesesAtras = 0; //Janeiro
            nAnoTresMesesAtras = nAno;
            nQuatroMesesAtras = 11; //Dezembro
            nAnoQuatroMesesAtras = nAno - 1;
            nCincoMesesAtras = 10; //Noembro
            nAnoCincoMesesAtras = nAno - 1;
            nSeisMesesAtras = 9; //Outubro
            nAnoSeisMesesAtras = nAno - 1;
            nSeteMesesAtras = 8; //Setembro
            nAnoSeteMesesAtras = nAno - 1;
            nOitoMesesAtras = 7; //Agosto
            nAnoOitoMesesAtras = nAno - 1;
            nNoveMesesAtras = 6; //Julho
            nAnoNoveMesesAtras = nAno - 1;
            nDezMesesAtras = 5; //Junho
            nAnoDezMesesAtras = nAno - 1;
            nOnzeMesesAtras = 4; //Maio
            nAnoOnzeMesesAtras = nAno - 1;
        }
        else if (nMes == 4) //Maio
        {
            nMesPassado = 3; //Abril
            nAnoPassado = nAno;
            nDoisMesesAtras = 2; //Março
            nAnoDoisMesesAtras = nAno;
            nTresMesesAtras = 1; //Fevereiro
            nAnoTresMesesAtras = nAno;
            nQuatroMesesAtras = 0; //Janeiro
            nAnoQuatroMesesAtras = nAno;
            nCincoMesesAtras = 11; //Dezembro
            nAnoCincoMesesAtras = nAno - 1;
            nSeisMesesAtras = 10; //Novembro
            nAnoSeisMesesAtras = nAno - 1;
            nSeteMesesAtras = 9; //Outubro
            nAnoSeteMesesAtras = nAno - 1;
            nOitoMesesAtras = 8; //Setembro
            nAnoOitoMesesAtras = nAno - 1;
            nNoveMesesAtras = 7; //Agosto
            nAnoNoveMesesAtras = nAno - 1;
            nDezMesesAtras = 6; //Julho
            nAnoDezMesesAtras = nAno - 1;
            nOnzeMesesAtras = 5; //Junho
            nAnoOnzeMesesAtras = nAno - 1;
        }
        else if (nMes == 5) //Junho
        {
            nMesPassado = 4; //Maio
            nAnoPassado = nAno;
            nDoisMesesAtras = 3; //Abril
            nAnoDoisMesesAtras = nAno;
            nTresMesesAtras = 2; //Março
            nAnoTresMesesAtras = nAno;
            nQuatroMesesAtras = 1; //Fevereiro
            nAnoQuatroMesesAtras = nAno;
            nCincoMesesAtras = 0; //Janeiro
            nAnoCincoMesesAtras = nAno;
            nSeisMesesAtras = 11; //Dezembro
            nAnoSeisMesesAtras = nAno - 1;
            nSeteMesesAtras = 10; //Novembro
            nAnoSeteMesesAtras = nAno - 1;
            nOitoMesesAtras = 9; //Outubro
            nAnoOitoMesesAtras = nAno - 1;
            nNoveMesesAtras = 8; //Setembro
            nAnoNoveMesesAtras = nAno - 1;
            nDezMesesAtras = 7; //Agosto
            nAnoDezMesesAtras = nAno - 1;
            nOnzeMesesAtras = 6; //Julho
            nAnoOnzeMesesAtras = nAno - 1;
        }
        else if (nMes == 6) //Julho
        {
            nMesPassado = 5; //Junho
            nAnoPassado = nAno;
            nDoisMesesAtras = 4; //Maio
            nAnoDoisMesesAtras = nAno;
            nTresMesesAtras = 3; //Abril
            nAnoTresMesesAtras = nAno;
            nQuatroMesesAtras = 2; //Março
            nAnoQuatroMesesAtras = nAno;
            nCincoMesesAtras = 1; //Fevereiro
            nAnoCincoMesesAtras = nAno;
            nSeisMesesAtras = 0; //Janeiro
            nAnoSeisMesesAtras = nAno;
            nSeteMesesAtras = 11; //Dezembro
            nAnoSeteMesesAtras = nAno - 1;
            nOitoMesesAtras = 10; //Novembro
            nAnoOitoMesesAtras = nAno - 1;
            nNoveMesesAtras = 9; //Outubro
            nAnoNoveMesesAtras = nAno - 1;
            nDezMesesAtras = 8; //Setembro
            nAnoDezMesesAtras = nAno - 1;
            nOnzeMesesAtras = 7; //Agosto
            nAnoOnzeMesesAtras = nAno - 1;
        }
        else if (nMes == 7) //Agosto
        {
            nMesPassado = 6; //Julho
            nAnoPassado = nAno;
            nDoisMesesAtras = 5; //Junho
            nAnoDoisMesesAtras = nAno;
            nTresMesesAtras = 4; //Maio
            nAnoTresMesesAtras = nAno;
            nQuatroMesesAtras = 3; //Abril
            nAnoQuatroMesesAtras = nAno;
            nCincoMesesAtras = 2; //Março
            nAnoCincoMesesAtras = nAno;
            nSeisMesesAtras = 1; //Fevereiro
            nAnoSeisMesesAtras = nAno;
            nSeteMesesAtras = 0; //Janeiro
            nAnoSeteMesesAtras = nAno;
            nOitoMesesAtras = 11; //Dezembro
            nAnoOitoMesesAtras = nAno - 1;
            nNoveMesesAtras = 10; //Novembro
            nAnoNoveMesesAtras = nAno - 1;
            nDezMesesAtras = 9; //Outubro
            nAnoDezMesesAtras = nAno - 1;
            nOnzeMesesAtras = 8; //Setembro
            nAnoOnzeMesesAtras = nAno - 1;
        }
        else if (nMes == 8) //Setembro
        {
            nMesPassado = 7; //Agosto
            nAnoPassado = nAno;
            nDoisMesesAtras = 6; //Julho
            nAnoDoisMesesAtras = nAno;
            nTresMesesAtras = 5; //Junho
            nAnoTresMesesAtras = nAno;
            nQuatroMesesAtras = 4; //Maio
            nAnoQuatroMesesAtras = nAno;
            nCincoMesesAtras = 3; //Abril
            nAnoCincoMesesAtras = nAno;
            nSeisMesesAtras = 2; //Março
            nAnoSeisMesesAtras = nAno;
            nSeteMesesAtras = 1; //Fevereiro
            nAnoSeteMesesAtras = nAno;
            nOitoMesesAtras = 0; //Janeiro
            nAnoOitoMesesAtras = nAno;
            nNoveMesesAtras = 11; //Dezembro
            nAnoNoveMesesAtras = nAno - 1;
            nDezMesesAtras = 10; //Novembro
            nAnoDezMesesAtras = nAno - 1;
            nOnzeMesesAtras = 9; //Outubro
            nAnoOnzeMesesAtras = nAno - 1;
        }
        else if (nMes == 9) //Outubro
        {
            nMesPassado = 8; //Setembro
            nAnoPassado = nAno;
            nDoisMesesAtras = 7; //Agosto
            nAnoDoisMesesAtras = nAno;
            nTresMesesAtras = 6; //Julho
            nAnoTresMesesAtras = nAno;
            nQuatroMesesAtras = 5; //Junho
            nAnoQuatroMesesAtras = nAno;
            nCincoMesesAtras = 4; //Maio
            nAnoCincoMesesAtras = nAno;
            nSeisMesesAtras = 3; //Abril
            nAnoSeisMesesAtras = nAno;
            nSeteMesesAtras = 2; //Março
            nAnoSeteMesesAtras = nAno;
            nOitoMesesAtras = 1; //Fevereiro
            nAnoOitoMesesAtras = nAno;
            nNoveMesesAtras = 0; //Janeiro
            nAnoNoveMesesAtras = nAno;
            nDezMesesAtras = 11; //Dezembro
            nAnoDezMesesAtras = nAno - 1;
            nOnzeMesesAtras = 10; //Novembro
            nAnoOnzeMesesAtras = nAno - 1;
        }
    
        else if (nMes == 10) //Novembro
        {
            nMesPassado = 9; //Outubro
            nAnoPassado = nAno;
            nDoisMesesAtras = 8; //Setembro
            nAnoDoisMesesAtras = nAno;
            nTresMesesAtras = 7; //Agosto
            nAnoTresMesesAtras = nAno;
            nQuatroMesesAtras = 6; //Julho
            nAnoQuatroMesesAtras = nAno;
            nCincoMesesAtras = 5; //Junho
            nAnoCincoMesesAtras = nAno;
            nSeisMesesAtras = 4; //Maio
            nAnoSeisMesesAtras = nAno;
            nSeteMesesAtras = 3; //Abril
            nAnoSeteMesesAtras = nAno;
            nOitoMesesAtras = 2; //Março
            nAnoOitoMesesAtras = nAno;
            nNoveMesesAtras = 1; //Fevereiro
            nAnoNoveMesesAtras = nAno;
            nDezMesesAtras = 0; //Janeiro
            nAnoDezMesesAtras = nAno;
            nOnzeMesesAtras = 11; //Dezembro
            nAnoOnzeMesesAtras = nAno - 1;
        }
        else if (nMes == 11) //Dezembro
        {
            nMesPassado = 10; //Novembro
            nAnoPassado = nAno;
            nDoisMesesAtras = 9; //Outubro
            nAnoDoisMesesAtras = nAno;
            nTresMesesAtras = 8; //Setebro
            nAnoTresMesesAtras = nAno;
            nQuatroMesesAtras = 7; //Agosto
            nAnoQuatroMesesAtras = nAno;
            nCincoMesesAtras = 6; //Julho
            nAnoCincoMesesAtras = nAno;
            nSeisMesesAtras = 5; //Junho
            nAnoSeisMesesAtras = nAno;
            nSeteMesesAtras = 4; //Maio
            nAnoSeteMesesAtras = nAno;
            nOitoMesesAtras = 3; //Abril
            nAnoOitoMesesAtras = nAno;
            nNoveMesesAtras = 2; //Março
            nAnoNoveMesesAtras = nAno;
            nDezMesesAtras = 1; //Fevereiro
            nAnoDezMesesAtras = nAno;
            nOnzeMesesAtras = 0; //Janeiro
            nAnoOnzeMesesAtras = nAno;
        }
    
        lblMesAtual = monthNames[nMes];
        lblMesAtras = monthNames[nMesPassado];
        lblDoisMesesAtras = monthNames[nDoisMesesAtras];
        lblTresMesesAtras = monthNames[nTresMesesAtras];
        lblQuatroMesesAtras = monthNames[nQuatroMesesAtras];
        lblCincoMesesAtras = monthNames[nCincoMesesAtras];
        lblSeisMesesAtras = monthNames[nSeisMesesAtras];
        lblSeteMesesAtras = monthNames[nSeteMesesAtras];
        lblOitoMesesAtras = monthNames[nOitoMesesAtras];
        lblNoveMesesAtras = monthNames[nNoveMesesAtras];
        lblDezMesesAtras = monthNames[nDezMesesAtras];
        lblOnzeMesesAtras = monthNames[nOnzeMesesAtras];

        try {
            if (isIterable(utilizadores)) {
                for (utilizador of utilizadores) {
                    var data = new Date(utilizador.data_conta_criada);
 
                    if (data.getFullYear() == nAno && data.getMonth() == nMes) {
                  
                        mesAtual++;
                 
                    
                  
                }
                else if (data.getFullYear() == nAnoPassado && data.getMonth() == nMesPassado) {
                   
                        mesPassado++;
              
                    
                  
                }
                else if (data.getFullYear() == nAnoDoisMesesAtras && data.getMonth() == nDoisMesesAtras) {
                  
                        doisMesesAtras++;
                       
                    
                 
                }
                else if (data.getFullYear() == nAnoTresMesesAtras && data.getMonth() == nTresMesesAtras) {
                 
                        tresMesesAtras++;
                      
                    
                  
                }
                else if (data.getFullYear() == nAnoQuatroMesesAtras && data.getMonth() == nQuatroMesesAtras) {
                  
                        quatroMesesAtras++;
                     
                    
                
                
                }
                else if (data.getFullYear() == nAnoCincoMesesAtras && data.getMonth() == nCincoMesesAtras) {
                 
                        cincoMesesAtras++;
                      
                    
                 
                }
                else if (data.getFullYear() == nAnoSeisMesesAtras && data.getMonth() == nSeisMesesAtras) {
                
                        seisMesesAtras++;
                
                    
                  
                }
                else if (data.getFullYear() == nAnoSeteMesesAtras && data.getMonth() == nSeteMesesAtras) {
               
                        seteMesesAtras++;
                       
                    
                  
                }
                else if (data.getFullYear() == nAnoOitoMesesAtras && data.getMonth() == nOitoMesesAtras) {
                   
                        oitoMesesAtras++;
                        
                    
                  
                }
                else if (data.getFullYear() == nAnoNoveMesesAtras && data.getMonth() == nNoveMesesAtras) {
                   
                        noveMesesAtras++;
                       
                    
               
                }
                else if (data.getFullYear() == nAnoDezMesesAtras && data.getMonth() == nDezMesesAtras) {
                   
                        dezMesesAtras++;
                        
                    
                 
                }
                else if (data.getFullYear() == nAnoOnzeMesesAtras && data.getMonth() == nOnzeMesesAtras) {
                    
                        onzeMesesAtras++;
                     
                    
                
                }
            }
        }
    }

    catch (err) {
        throw err
    }
  //line
  var ctx = document.getElementById("horizontalBar");
  var myPieChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels:  [lblOnzeMesesAtras, lblDezMesesAtras, lblNoveMesesAtras, lblOitoMesesAtras, lblSeteMesesAtras, lblSeisMesesAtras, lblCincoMesesAtras, lblQuatroMesesAtras, lblTresMesesAtras, lblDoisMesesAtras, lblMesAtras, lblMesAtual],
          datasets: [{
              label: 'Registos na App',
              data: [onzeMesesAtras, dezMesesAtras, noveMesesAtras, oitoMesesAtras, seteMesesAtras, seisMesesAtras, cincoMesesAtras, quatroMesesAtras, tresMesesAtras, doisMesesAtras, mesPassado, mesAtual],
              backgroundColor: [
                  'rgba(12, 71, 38, 0.2)',
                  'rgba(2, 71, 38, 0.2)',
                  'rgba(2, 71, 38, 0.2)',
                  'rgba(2, 71, 38, 0.2)',
                  'rgba(2, 71, 38, 0.2)',
                  'rgba(2, 71, 38, 0.2)',
                  'rgba(2, 71, 38, 0.2)',
                  'rgba(2, 71, 38, 0.2)',
                  'rgba(2, 71, 38, 0.2)',
                  'rgba(2, 71, 38, 0.2)',
                  'rgba(2, 71, 38, 0.2)',
                  'rgba(2, 71, 38, 0.2)',

              ],
              borderColor: [
                  'rgba(2, 71, 38,1)',
                  'rgba(2, 71, 38, 1)',
                  'rgba(2, 71, 38, 1)',
                  'rgba(2, 71, 38, 1)',
                  'rgba(2, 71, 38, 1)',
                  'rgba(2, 71, 38, 1)',
                  'rgba(2, 71, 38, 1)',
                  'rgba(2, 71, 38, 1)',
                  'rgba(2, 71, 38, 1)',
                  'rgba(2, 71, 38, 1)',
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
              caretPadding: 1,
     
          },
          legend: {
              display: false
          },
          cutoutPercentage: 80,
      },
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