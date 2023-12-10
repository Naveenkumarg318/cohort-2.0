class animal {
  constructor(name, legs, speak) {
    this.name = name;
    this.legs = legs;
    this.speak = speak;
  }
  talk()
  {
    console.log(this.name + " says " +  this.speak);
  }

  printlegs()
  {
    console.log(this.name + "  has " + this.legs + " legs");
  }
}

let dog = new animal("snoopy", 4, "bhow bhow");
let cat = new animal("ragdoll", 4, "mew moew");

dog.talk();
dog.printlegs();

cat.talk();
cat.printlegs();
