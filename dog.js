function dog (name,age){
    this.name=name;
    this.age=age;
}
dog.prototype.stomach=function(food){
    console.log(food);
}
module.exports=dog;
