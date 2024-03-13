
const btnGenerate = document.querySelector("#generate-PDF"); // seleção de botão


btnGenerate.addEventListener("click",() => {
    // Nome do PDF
    var document_name = ""; 
    document_name = document.getElementById('valor_nome').value;
    // Conteúdo do PDF
    const content = document.querySelector("#content")
    // Configuração do arquivo Final do PDF
        const options = {
                margin:[0,0,0,0],
                filename: document_name,
                html2canvas: {scale:4},
                jsPDF: {unit:"mm", format:"a4", orientarion:"portrait"}
        }
    // Gerar e Baixar PDF
    html2pdf().set(options).from(content).save();
})

function chamar(){ // função para os textos

    var captar="";

    captar = document.getElementById('valor_nome').value;
    document.getElementById('digito_nome').innerHTML=captar;

    let geracao = "Geração Média Mensal de ";
    let geracao2 = " kWh";

    captar = document.getElementById('valor_geracao').value;
    document.getElementById('digito_geracao' ).innerHTML=geracao+captar+geracao2;
    document.getElementById('digito_geracao_2' ).innerHTML=captar+geracao2;
    document.getElementById('digito_geracao_3' ).innerHTML=captar+geracao2;
    captar = document.getElementById('valor_data').value;
    document.getElementById('digito_data' ).innerHTML=captar;

    ///// -------

    var Nplacas; // Variável Número de placas
    var Pplacas; // Variável Potência de cada placa
    let WattPico = " Wp";
    let KiloWatt = " kW";
    let UnidadePotenciaPico = " kWp";
    let UnidadeArea= " m2";
    var Cidade="";
    var ValorReal ="";
   
    Nplacas = document.getElementById('valor_placa').value;
    Pplacas = document.getElementById('valor_potencia').value;
    Pinversor = document.getElementById('valor_potencia_inv').value;
    Cidade = document.getElementById('escolher_cidade').value;
    ValorReal = document.getElementById('valor_dinheiro').value;

    var  PtotalGerador = ((Nplacas*Pplacas)/1000)+UnidadePotenciaPico;
    let texto_PtotalGerador = PtotalGerador.toString().replace(".",",");

    var AreaTelhado = Nplacas*2.5*1.5;
    let texto_AreaTelhado = AreaTelhado.toString().replace(".",",");

    let texto_Pinversor = Pinversor.toString().replace(".",",");

    document.getElementById('digito_dinheiro' ).innerHTML= "R$ "+ValorReal+ ",00";
    document.getElementById('digito_pot_sistema' ).innerHTML= texto_PtotalGerador;
    document.getElementById('digito_area_sistema' ).innerHTML=texto_AreaTelhado+UnidadeArea;
    document.getElementById('PotenciaModulo' ).innerHTML=Pplacas+WattPico;
    document.getElementById('QuantidadePlacas' ).innerHTML=Nplacas;
    document.getElementById('Potenciainversor' ).innerHTML=texto_Pinversor+KiloWatt;
    document.getElementById('obs').innerHTML="       A usina solar fotovoltaica de "+texto_PtotalGerador+" será instalada na cidade de "+ Cidade +", destinada ao modelo de geração local. A instalação ocorrerá em estrutura apropriada para telhado cerâmico, fibrocimento ou metálico, e será acompanhada de uma garantia e suporte de 1 ano.";

}

function trocarModulo(){ //função para trocar o inversor

    var NomeModulo;  //Variável do nome do inversor
    var Pplacas; // Variável Potência de cada placa
    let WattPico = " Wp";

    NomeModulo = document.getElementById("escolher_modulo").value;
    document.getElementById('modulo').src= NomeModulo ;
    Pplacas = document.getElementById('valor_potencia').value;

    switch (NomeModulo){
        case "MODULOS/OSDA.JPG":
            var RefModulo = "OSDA - "+Pplacas+WattPico;
            break;       
        case "MODULOS/TSUN POWER.JPG":
            var RefModulo = "TSUN - "+Pplacas+WattPico;
            break;
        case "MODULOS/TRINA SOLAR.JPG":
            var RefModulo = "TRINA - "+Pplacas+WattPico;
            break;
        case "MODULOS/RESUN SOLAR.JPG":
            var RefModulo = "RESUN - "+Pplacas+WattPico;
            break;
        case "MODULOS/JA SOLAR.JPG":
            var RefModulo = "JA - "+Pplacas+WattPico;
            break;
        case "MODULOS/HONOR SOLAR.JPG":
            var RefModulo = "HONOR - "+Pplacas+WattPico;
            break;
        case "MODULOS/ERA SOLAR.JPG":
            var RefModulo = "ERA - "+Pplacas+WattPico;
            break;
    }
    document.getElementById('MarcaModulo').innerHTML= RefModulo;

}

function trocarInversor(){ //função para trocar o inversor

    var NomeInversor;  //Variável do nome do inversor
    
    
    let KiloWatt = " kW";
    Pinversor = document.getElementById('valor_potencia_inv').value;
    let texto_Pinversor = Pinversor.toString().replace(".",",");

    NomeInversor = document.getElementById("escolher_inversor").value;
    document.getElementById('inversor').src= NomeInversor;

    switch (NomeInversor){
        case "INVERSORES/GOODWE.JPG":
            var RefInversor = "GOODWE - "+texto_Pinversor + KiloWatt;
            break;       
        case "INVERSORES/WEG.JPG":
            var RefInversor = "WEG - "+texto_Pinversor + KiloWatt;
            break;
        case "INVERSORES/SOLPLANET.JPG":
            var RefInversor = "SOLPLANET - "+texto_Pinversor + KiloWatt;
            break;
        case "INVERSORES/DEYE.JPG":
            var RefInversor = "DEYE - "+texto_Pinversor + KiloWatt;
            break;      
        case "INVERSORES/MICRO DEYE.JPG":
            var RefInversor = "MICRO DEYE - "+texto_Pinversor + KiloWatt;
            break;
        case "INVERSORES/SOLIS.JPG":
            var RefInversor = "SOLIS - "+texto_Pinversor + KiloWatt;
            break; 
        case "INVERSORES/SUNGROW.JPG":
            var RefInversor = "SOLIS - "+texto_Pinversor + KiloWatt;
            break; 
    }
    document.getElementById('MarcaInversor').innerHTML= RefInversor;





}





function mudar_empresa(){
    let empresa;
    empresa = document.getElementById('escolher_empresa').value;
    document.getElementById('geral').className = empresa;
}





function chamar_global(){ // função para chamar funções
    trocarModulo();
    chamar();
    trocarInversor();
}



