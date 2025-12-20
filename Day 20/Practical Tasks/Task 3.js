class Student{
    constructor(name,course){
        this.name=name;
        this.course=course;
    }

    display(){
        console.log(`Name : ${this.name} , Course : ${this.course}`);
    }
}

const s1= new Student("Deepan", "Full Stock");
const s2= new Student("Surenthar", "Full Stock");
const s3= new Student("Arun", "Full Stock");

s1.display();
s2.display();
s3.display();


