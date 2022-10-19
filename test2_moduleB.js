var fs=require('fs');
var students = [];

exports.prepare=function() {
    return new Promise(function(resolve, reject){
    fs.readFile('./students.json', (err,empdata)=>{

        if (err) {
            reject('unable to read file');
        }
        else {
        
            students = JSON.parse(empdata);

             resolve('Operation was successful');
        }
       
        
    });
})
}

exports.getCPA=function() {
    return new Promise(function(resolve, reject){
        if (students.length == 0) {
            reject('no results returned');
        }
        else {
            const CPAStudents = [];
            for (let i = 0; i < students.length; i++) {
                if (students[i].program == "CPA") {
                    CPAStudents.push(students[i]);
                }
            }
            resolve(CPAStudents);
        }
    });
}


exports.highGPA=function() {
    return new Promise(function(resolve, reject){
        if (students.length == 0) {
            reject('Failed finding the student with the highest GPA');
        }
        else {
            let max = 0;
            let maxStudent = null;
            for (let i = 0; i < students.length; i++) {
                if (students[i].gpa > max) {
                    max = students[i].gpa;
                    maxStudent = students[i];
                }
            }
            resolve(maxStudent);
        }
    });
}