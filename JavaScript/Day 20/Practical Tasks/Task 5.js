function Student( name,course){
     this.name=name,
     this.course=course
}

Student.prototype.display=function (){
    console.log(`Name : ${this.name} , Course : ${this.course}`);
    
}

const s1= new Student("Deepan ","Full Stock");

s1.display();