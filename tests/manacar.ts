class manacar {
    brand:string ;
    constructor (brand:string){
        this.brand =brand ;

}

driving ():void {
    console.log ('${this.brand} is driving');

}
}

let nncar =new manacar ('TATA');
nncar.driving ();
