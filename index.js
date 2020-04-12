var chalk=require('chalk');
var dog=require('./dog');
var student={
    name:"Dung Tran",
    age:20
}
var animal=new dog("chó",4);
console.log(animal.stomach("bone"));
console.log(chalk.blue(student.name)+" "+ chalk.red(student.age));