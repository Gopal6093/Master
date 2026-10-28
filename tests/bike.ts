class bike{
    brand:string;
    constructor (brand :string){
        this.brand =brand;
    }
    drive () :void{
        console.log('${this.brand } is driveing');

    }
}
    let myBike  =new bike ('Bajjaj');
    myBike.drive ();

    
