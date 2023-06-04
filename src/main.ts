let a: number;
// a = "hello" ERROR
// a = flase ERROR
a = 200;

let b: number | string | Date;

b = 200;
// b = false; ERROR
b = "True";
b = new Date();

let c: any;
c = true;
c = "hello";
c = 100;
c = new Date();

let f;
f = "hello";
f = 250;

function func(age: number, name: string) {
  console.log(name + " is " + age + " years old");
}

func(30, "Sao");

function func2() {
  console.log("another function");
}
