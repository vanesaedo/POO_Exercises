/* Warrior:
constructor(life, power): Establece el valor de las propiedades life y power
attack: Devuelve el valor de power del guerrero
defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante. */

class Warrior{
    constructor(life, power) {
        this.life = 5;
        this.power = 40;
        this.damage = damage;
      }
      attack () {
        console.log(`Power:  ${this.power}`);
      }
      defend () {
        this.life = this.life - this.damage;
        console.log(`Life:  ${this.life}`);
      }
    }

/* Maya: extiende de la clase Warrior
constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
drinkColaCao: Suma 10 al poder. */

class Maya extends Warrior {
    constructor(life,power,damage){
    super(life,power,damage)
    
}
};