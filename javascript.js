var person ={
    name: "Mg Mg",
    age: 30,
    address: "Mandalay",
    sayName: function(){
        return "My name is " + this.name;
    },
    sayAge: function(){
        return "I'm" + this.age;
    }

};
console.log(person.sayAge());