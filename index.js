var chalk=require('chalk');
var student={
    name:"Dung Tran",
    age:20
}
// student.prototype.dead=false;
// module.exports=student;
console.log(chalk.blue(student.name)+ chalk.red(student.age));