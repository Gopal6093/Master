    class Car{
        brand:string; //propertie

        constructor (brand:string){ //constuctor
            this.brand=brand ;
        }
        drive ():void{ //method 
            console.log ('${this.brand}isdrivng'); //print value 

        }
    }
        let myCar=new Car("tesla");
        myCar.drive();

    
