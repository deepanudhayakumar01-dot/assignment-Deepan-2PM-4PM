class Product{
  constructor(name , price,discont ){
    this.name=name,
    this.price=price,
    this.discont=discont
  }

  discountedPrice(){
    let dis= this.price*this.discont/100
    console.log(`Name : ${this.name} , Price : ${this.price} , Discounted Price ${this.price-dis}`)
  }
}

const p1= new Product("Pen",100,25);
p1.discountedPrice();