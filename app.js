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





