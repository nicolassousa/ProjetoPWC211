Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

window.onload = function () {
    renderFaturacaoP();
    render3anos();
    
}


async function renderFaturacaoP() {
    const response1 = await fetch('http://localhost:8080/atividades/');
    const atividades = await response1.json();
    var date = new Date();

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

       var mesAtualAnulado = 0; //M�s atual
       var mesPassadoAnulado = 0; //M�s Anterior
       var doisMesesAtrasAnulado = 0; //Dois meses atr�s
       var tresMesesAtrasAnulado = 0; //3 meses atr�s
       var quatroMesesAtrasAnulado = 0; //4 meses atr�s
       var cincoMesesAtrasAnulado = 0; //5 meses atr�s
       var seisMesesAtrasAnulado = 0; //6 meses atr�s
       var seteMesesAtrasAnulado = 0; //7 meses atr�s
       var oitoMesesAtrasAnulado = 0; //8 meses atr�s
       var noveMesesAtrasAnulado = 0; //9 meses atr�s
       var dezMesesAtrasAnulado = 0; //10 meses atr�s
       var onzeMesesAtrasAnulado = 0; //11 meses atr�s
   
   
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
                
                const response2 = await fetch('http://localhost:8080/espacos/' + atividade.idEspaco);
                const espaco = await response2.json();

                var data = new Date(atividade.Data);

                if (data.getFullYear() == nAno && data.getMonth() == nMes && data.getDate() < date.getDate()) {
                   if (atividade.Anulada.data[0] == 0) { mesAtual += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                    else { mesAtualAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                }
                if (data.getFullYear() == nAnoPassado && data.getMonth() == nMesPassado) {
                    if (atividade.Anulada.data[0] == 0) { mesPassado += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                     else { mesPassadoAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                 }
                 if (data.getFullYear() == nAnoDoisMesesAtras && data.getMonth() == nDoisMesesAtras) {
                    if (atividade.Anulada.data[0] == 0) { doisMesesAtras += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                     else { doisMesesAtrasAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                 }
                 if (data.getFullYear() == nAnoTresMesesAtras && data.getMonth() == nTresMesesAtras) {
                    if (atividade.Anulada.data[0] == 0) { tresMesesAtras += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                     else { tresMesesAtrasAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                 }
                 if (data.getFullYear() == nAnoQuatroMesesAtras && data.getMonth() == nQuatroMesesAtras) {
                    if (atividade.Anulada.data[0] == 0) { quatroMesesAtras += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                     else { quatroMesesAtrasAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                 }
                 if (data.getFullYear() == nAnoCincoMesesAtras && data.getMonth() == nCincoMesesAtras ) {
                    if (atividade.Anulada.data[0] == 0) { cincoMesesAtras += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                     else { cincoMesesAtrasAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                 }
                 if (data.getFullYear() == nAnoSeisMesesAtras && data.getMonth() == nSeisMesesAtras ) {
                    if (atividade.Anulada.data[0] == 0) { seisMesesAtras += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                     else { seisMesesAtrasAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                 }
                 if (data.getFullYear() == nAnoSeteMesesAtras && data.getMonth() == nSeteMesesAtras) {
                    if (atividade.Anulada.data[0] == 0) { seteMesesAtras += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                     else { seteMesesAtrasAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                 }
                 if (data.getFullYear() == nAnoOitoMesesAtras && data.getMonth() == nOitoMesesAtras ) {
                    if (atividade.Anulada.data[0] == 0) { oitoMesesAtras += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                     else { oitoMesesAtrasAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                 }
                 if (data.getFullYear() ==  nAnoNoveMesesAtras && data.getMonth() == nNoveMesesAtras ) {
                    if (atividade.Anulada.data[0] == 0) { noveMesesAtras += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                     else { noveMesesAtrasAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                 }
                 if (data.getFullYear() == nAnoDezMesesAtras && data.getMonth() == nDezMesesAtras) {
                    if (atividade.Anulada.data[0] == 0) { dezMesesAtras += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                     else { dezMesesAtrasAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                 }
                 if (data.getFullYear() == nAnoOnzeMesesAtras && data.getMonth() == nOnzeMesesAtras ) {
                    if (atividade.Anulada.data[0] == 0) { onzeMesesAtras += Math.round(parseInt(espaco[0].Preco) * 0.20)}
                     else { onzeMesesAtrasAnulado += Math.round(parseInt(espaco[0].Preco) * 0.20) }
                 }

               
            }
        }
    }
    catch (err) {
        throw err
    }

    
//line
var ctxL = document.getElementById("lineChartf").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: [lblOnzeMesesAtras, lblDezMesesAtras, lblNoveMesesAtras, lblOitoMesesAtras, lblSeteMesesAtras, lblSeisMesesAtras, lblCincoMesesAtras, lblQuatroMesesAtras, lblTresMesesAtras, lblDoisMesesAtras, lblMesAtras, lblMesAtual],
datasets: [{
label: "Atividades Realizadas",
data: [onzeMesesAtras, dezMesesAtras, noveMesesAtras, oitoMesesAtras, seteMesesAtras, seisMesesAtras, cincoMesesAtras, quatroMesesAtras, tresMesesAtras, doisMesesAtras, mesPassado, mesAtual],
backgroundColor: [
'rgba(26,155,82, 0.3)',
],
borderColor: [
'rgba(26,155,82, 1)',
],
borderWidth: 2
},
{
label: "Atividades Anuladas",
data: [onzeMesesAtrasAnulado, dezMesesAtrasAnulado, noveMesesAtrasAnulado, oitoMesesAtrasAnulado, seteMesesAtrasAnulado, seisMesesAtrasAnulado, cincoMesesAtrasAnulado, quatroMesesAtrasAnulado, tresMesesAtrasAnulado, doisMesesAtrasAnulado, mesPassadoAnulado, mesAtualAnulado],
backgroundColor: [
'rgba(255,0,0, 0.3)',
],
borderColor: [
'rgba(255,0,0, 1)',
],
borderWidth: 2
}
]
},
options: {
responsive: true
}
});
}

async function render3anos() {
    const response1 = await fetch('http://localhost:8080/atividades/');
    const atividades = await response1.json();
    var date = new Date();


  //Vari�veis para contagem do numero de atividades dos 3 meses
  var anoAtual = 0; //M�s atual
  var anoPassado = 0; //M�s Anterior
  var doianosAtras = 0; //Dois meses atr�s

  //Mes e Ano dos Meses
 
  var nAno = (date.getFullYear());  //M�s atual
  var nAnoPassado = (date.getFullYear()-1);  //M�s atual
  var nAno2Passado = (date.getFullYear()-2);  //M�s atual
  
   

try {
    {
        if (isIterable(atividades)) {
            for (atividade of atividades) {
                const response2 = await fetch('http://localhost:8080/espacos/' + atividade.idEspaco);
                const espaco = await response2.json();
                var data = new Date(atividade.Data);
                if (data.getFullYear() == nAno)
               { anoAtual += parseInt(espaco[0].Preco) * 0.20;}
               if (data.getFullYear() == nAnoPassado)
               { anoPassado += parseInt(espaco[0].Preco) * 0.20;}
               if (data.getFullYear() == nAno2Passado)
               { doianosAtras += parseInt(espaco[0].Preco) * 0.20;}
            }
        }
    }

}


catch (err) {
    throw err
}

//bar
var ctxB = document.getElementById("myPieChart").getContext('2d');
var myBarChart = new Chart(ctxB, {
type: 'bar',
data: {
labels: ["2 Anos Atrás", "Último Ano", "Este Ano"],
datasets: [{
label: 'Faturação',
data: [doianosAtras, anoPassado, anoAtual],
backgroundColor: [
'rgba(26,155,82, 1)',
'rgba(26,155,82, 1)',
'rgba(26,155,82, 1)'
],
borderColor: [
'rgba(26,155,82, 0.5)',
'rgba(26,155,82, 0.5)',
'rgba(26,155,82, 0.5)'
],
borderWidth: 1
}]
},
options: {
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
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