const book={
     title : "My name ", 
     author : "Deepan udhayakumar ", 
     pages : 205,

     describe() {
            console.log(`title : ${this.title} ,author : ${this.author}, pages :  ${this.pages}  `);
            
     }
}
book.describe();

const{title,author}=book
 
console.log(`title : ${title} ,author : ${author}`);

class Employee {
    constructor (name , salary){
        this.name=name,
        this.salary=salary
    }

    displayInfo (){
        console.log(`Name : ${this.name} , Salary : ${this.salary}`);
    }
}
class Manager extends Employee{
    constructor (name , salary,department){
        super(name,salary)
        this.department=department
    }
    displayManagerInfo() {
        console.log(
          `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
        );
    }
}

const e1= new Employee ("Deepan",12000)
const m1=new Manager("Arun", 120000,"Frontend")

e1.displayInfo();
m1.displayManagerInfo()