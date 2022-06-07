class Kegelstumpf {
    constructor(R, r, h) {
        this.R = R;
        this.r = r;
		this.h = h;
    }
	
	volumen(){
		var V = ((Math.PI*this.h)/3)*
						(Math.pow(this.R,2)+this.R*this.r+Math.pow(this.r,2));
		return V;
	}
	
	mantelflaeche(){
		var m = Math.sqrt(Math.pow(this.R-this.r,2)+Math.pow(this.h,2));
		var M = Math.PI*m*(this.R+this.r);
		return M;
	}
	
	oberflaeche(){
		var m = this.mantelflaeche()
		var O = Math.PI*Math.pow(this.R,2)+Math.PI*Math.pow(this.r,2)+m;
		return O;
	}
}

let kegelstumpf = new Kegelstumpf(6, 2, 5);
 var V = kegelstumpf.volumen();
 console.log(V);
 var M = kegelstumpf.mantelflaeche();
 console.log(M);
 var O = kegelstumpf.oberflaeche();
 console.log(O);