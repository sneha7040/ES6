function student() {}
//patrent class
class Students {
  constructor(name, age, cls) {//constructor
    this.myname = name;
    this.myage = age;
    this.mycls = cls;
  }
   bioData() {
    return `I am ${this.myname}. age is ${this.myage}. class is ${this.mycls}`;
    // console.log("i am class method");
  }
}
//child class inherit parent class fetures 
class Player extends Students {
  constructor(name, age, cls, game) {// constructor
    super(name, age, cls);// call the variable of parent class
    this.mygame = game;
  }
  play_bioData() {
    return `${super.bioData()}. player of ${this.mygame}`;
  }

}

//let obj1 = new Player("Sneha", "22", "cse", "pubg");
let obj2 = new Player("Pritha", "28", "ece", "free-fire");
//obj1.bioData();
console.log(obj2.play_bioData());
