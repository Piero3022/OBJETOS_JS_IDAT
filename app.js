const person = {
    name: 'Diego',
    lastName: 'Cueva',
    age: '30',
    job: 'Software developer',
    bank: [{ name: 'Interbank' }, { name: 'BCP' }],
    greetings: function () {
        return `Hola mi nombre es ${this.name} y mi apellido es ${this.apellido}`;
    },


};

//person.name = 'Prueba'; cambiar el valor de una constante 
// como evito eso ? 
//console.log(person);

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2021,
    color: 'red',
    isRunning: false,
    startEngine: function () {
        this.isRunning = true;
        console.log(`The ${this.color} ${this.brand} ${this.model} has been started.`);
    },
    stopEngine: function () {
        this.isRunning = false;
        console.log(`The ${this.color} ${this.brand} ${this.model} has been stopped.`);
    }
};


console.log(car.startEngine());
console.log(car.stopEngine());


//___________________________________________________________________________________________________

for (let index = 0; index < 10; index += 2) {

    console.log(index);
}

let n = 0;
while (n < 10) {
    console.log(n);
    n++;
}

console.log(n);

//__________________________ EJERCICIO FIZZ BUZZ _________________

for (let index = 1; index <= 30; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FizzBuzz");
    } else if (index % 3 === 0) {
        console.log("Fizz");
    } else if (index % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(index);
    }
}





//index += 2
// index = index +2



