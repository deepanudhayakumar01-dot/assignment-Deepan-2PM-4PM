const student =[["Deepan",92],["Surenthar",95],["Arun",100]]

for(let i=0 ; i<student.length ; i++){
    for(let j=0 ; j < student[i].length;j++ ){
        if(j/2===0){
            console.log("Name :",student[i][j]);
        }
        else
             console.log("Mark :",student[i][j]);

    }
}