export class Product
{
    public name : string;
    public description : string;
    public imagePath : string;
    public price : number;
    


    constructor(p_name:string,p_desc:string,p_imagePath:string,p_price:number)
    {

        this.name = p_name;
        this.description = p_desc;
        this.imagePath = p_imagePath;
        this.price = p_price;
       

    }
}