function onlyNumber(evt) {
        /*var ASCIICode = (e.which) ? e.which : e.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;*/
	var ch = String.fromCharCode(evt.which);
	if(!(/[0-9]/.test(ch))){
		evt.preventDefault();
	}
	
}

function sumBottles(){
	var f1 = document.getElementById('Flaschen1').value;
        var f2 = document.getElementById('Flaschen2').value;
	var f3 = document.getElementById('Flaschen3').value;
	var f4 = document.getElementById('Flaschen4').value;
	//console.log(Number(f1)+Number(f2)+Number(f3)+Number(f4));
	return Number(f1)+Number(f2)+Number(f3)+Number(f4);
}

function dhlclick(evt) {
	if (sumBottles() > 12){
		document.getElementById('Preis5').value = 0;
		evt.preventDefault();
		return;
	}
	document.getElementById('Flaschen5').value = 1;
	document.getElementById('Preis5').value = 10.00;
	if(document.getElementById('Flaschen6').value = 1){
		document.getElementById('Flaschen6').value = 0;
		document.getElementById('Preis6').value = "";
	}
	summe();
}
function checkDhl(){
	if (sumBottles() > 12){
		document.getElementById('Preis5').value = 0;
	}
}

function speditionclick(evt) {
	document.getElementById('Flaschen6').value = 1;
	document.getElementById('Preis6').value = 15.00;
	if(document.getElementById('Flaschen5').value = 1){
		document.getElementById('Flaschen5').value = 0;
		document.getElementById('Preis5').value = "";
	}
	summe();
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

function preise(a,id){
	var flasche = 'Flaschen'+id;
	var preis = 'Preis'+id;
	let n1 = document.getElementById(flasche).value;
        let n2 = a;
        var s3 = Number(n1)*Number(n2);
	s3 = s3.toFixed(2);
        //console.log(s3);
        document.getElementById(preis).value= s3;
	checkDhl();
	summe();
}

function summe(){
        var z1 = document.getElementById('Preis1').value;
        var z2 = document.getElementById('Preis2').value;
        var z3 = document.getElementById('Preis3').value;
	var z4 = document.getElementById('Preis4').value;
	var z5 = document.getElementById('Preis5').value;
	var z6 = document.getElementById('Preis6').value;
	var z7 = Number(z1)+Number(z2)+Number(z3)+Number(z4)+Number(z5)+Number(z6);
	z7 = z7.toFixed(2);
	document.getElementById('Preis7').value = z7;
	var mwst = z7*0.19;
	mwst = mwst.toFixed(2);
	document.getElementById('Preis8').value = mwst;
	var z9 = Number(z7)+Number(mwst);
	z9 = z9.toFixed(2);
	document.getElementById('Preis9').value = z9;
}
