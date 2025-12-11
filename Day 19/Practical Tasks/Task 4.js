const marks = [45, 67, 89, 92];

   function convert(arr,callback) {

          return arr.map(callback);

   }
      

function gradeLogic(mark){

    if (mark >= 90 && mark <= 100) {
       return "A";
    } else if (mark >= 80) {
        return "B";
    } else if (mark >= 70) {
        return "C";
    } else if (mark >= 60) {
       return "D";
    } else {
        return "F";
    }

}



console.log(convert(marks,gradeLogic));
