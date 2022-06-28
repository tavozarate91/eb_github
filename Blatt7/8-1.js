function onlyNumber(evt) {
	var ch = String.fromCharCode(evt.which);
	if (!(/[0-9]/.test(ch))) {
		evt.preventDefault();
	}

}

function dhlclick(evt) {
	document.getElementById('dhl').value = 1;
	document.getElementById('dhlpreis').value = (10.00).toFixed(2);
	if (document.getElementById('sped').value == 1) {
		summe(-15);
		document.getElementById('sped').value = 0;
		document.getElementById('spedpreis').value = "";
	}
	summe(10);
}

function speditionclick(evt) {
	document.getElementById('sped').value = 1;
	document.getElementById('spedpreis').value = (15.00).toFixed(2);
	if (document.getElementById('dhl').value == 1) {
		summe(-10);
		document.getElementById('dhl').value = 0;
		document.getElementById('dhlpreis').value = "";
	}

	summe(15);
}

function read_only() {
	document.getElementById('dhlpreis').readOnly = true;
	document.getElementById('spedpreis').readOnly = true;
	document.getElementById('zwischensumme').readOnly = true;
	document.getElementById('mwst').readOnly = true;
	document.getElementById('summe').readOnly = true;
}

function summe(wert) {
	var zwischensumme = Number(document.getElementById('zwischensumme').value);
	zwischensumme += Number(wert);
	document.getElementById('zwischensumme').value = zwischensumme.toFixed(2);


	var mwst = (zwischensumme * 0.19).toFixed(2);
	document.getElementById('mwst').value = mwst;

	var summe = (Number(zwischensumme) + Number(mwst)).toFixed(2);
	document.getElementById('summe').value = summe;
}


let wein = [
	["Marienthaler Stiftsberg Rotweincuvée", 3.60],
	["Riesling Classic", 3.70],
	["Silvaner Selection Rheinhessen", 6.90],
	["Domäne Avelsbach Riesling Sekt", 6.15]
];


function makeTable() {
	let table = document.getElementById("table");
	let f = document.querySelector("#Flaschen");
	let n = document.querySelector("#name");
	let flaschen = f.value;
	let name = n.value;

	if (flaschen == 0) return;
	let row = table.insertRow(2);

	let c1 = row.insertCell(0);
	let c2 = row.insertCell(1);
	let c3 = row.insertCell(2);
	let c4 = row.insertCell(3);

	// Zelleninhalt setzen
	let t1 = document.createTextNode(flaschen);
	c1.appendChild(t1);

	let t2 = document.createTextNode(name);
	c2.appendChild(t2);
	c2.colSpan = "2";

	let einzelpreis;
	for (let i = 0; i < wein.length; i++) {
		if (name == wein[i][0]) {
			einzelpreis = (wein[i][1]).toFixed(2);
		}
	}
	let t3 = document.createTextNode(einzelpreis);
	c3.appendChild(t3);

	let preis = (Number(flaschen) * Number(einzelpreis)).toFixed(2);
	let t4 = document.createTextNode(preis);
	c4.appendChild(t4);

	let flaschensumme = Number(document.getElementById('flaschenG').value);
	flaschensumme += Number(flaschen);
	document.getElementById('flaschenG').value = flaschensumme;

	summe(preis);
}
