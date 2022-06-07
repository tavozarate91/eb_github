function onlyNumber(e) {
        var ASCIICode = (e.which) ? e.which : e.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
}

function dhlclick(e) {
        if (onlyNumber(e) < 12)
            return false;
        return true;
}

function read_only() {
    document.getElementById('Preis1').readOnly = true;
    document.getElementById('Preis2').readOnly = true;
    document.getElementById('Preis3').readOnly = true;
    document.getElementById('Preis4').readOnly = true;
    document.getElementById('Preis5').readOnly = true;
    document.getElementById('Preis6').readOnly = true;
    document.getElementById('Preis7').readOnly = true;
    document.getElementById('Preis8').readOnly = true;
    document.getElementById('Preis9').readOnly = true;
}

function multiply(){
   var n1 = parseInt(document.getElementById('Flaschen1').value);
   var n2 = parseInt(document.getElementById('Preis1').value);
    document.getElementById('result').innerHTML = n1*n2;
}
