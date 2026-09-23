function greetPerson(name:string) {
  return `ola, ${name}`;

}
console.log(greetPerson('Fernando')) 

// Podemos definir una funcion de flecha para obtener el mismo resultado
const getUser= (nameUser:String) => `hola, ${nameUser}`
    console.log(getUser('maria'))


    const getDetailUser= () => {
        return{
            uid: 'ABC123',
            username: 'TonyMontana'

        }
    }

console.log(getDetailUser())
