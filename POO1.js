//Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona{
    constructor(nombre, edad, genero) {
        this.nombre = nombre || "Vanesa";
        this.edad = edad || "40";
        this.genero = genero || "mujer";
      }
      detalles() {
        console.log(`Nombre:  ${this.nombre}
        Edad:${this.edad}
        Género:${this.genero}`);
      }
    }

//let miPersona = new Persona("vanesa", "6","mujer");
//miPersona.detalles();
    
//Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Persona {
        constructor (nombre, edad, genero, curso, grupo) {
          super(nombre, edad, genero, curso, grupo) // Llama al constructor del padre
          this.curso = curso || "4º";
          this.grupo = grupo || "B";
          }
          registrar() {
            console.log(`Nombre: ${this.nombre}
            Edad: ${this.edad}
            Género: ${this.genero}
            Curso: ${this.curso}
            Grupo: ${this.grupo}`);
        }
      };
  
      //let miEstudiante = new Estudiante(null, null, null, "3º", "A");
      //miEstudiante.registrar();
    
    //Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
    //asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
    class Profesor extends Persona {
        constructor (nombre,edad,genero, asignatura, nivel){
        super(nombre, edad, genero, asignatura, nivel)
        this.asignatura = asignatura || "Matemáticas";
        this.nivel = nivel || "Superior";
        }
        asignar() {
        console.log(`
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            Género: ${this.genero}
            Asignatura: ${this.asignatura}
            Nivel: ${this.nivel}`);
        }
    }; 

    //let miProfesor = new Profesor(null, null, null, null, null, "Matemáticas", "Superior");
    //miProfesor.asignar();

    //Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.

    let pruebaProfesor = new Profesor ("Maria del Carmen", 24, "Mujer", "Filosofía", "Segundo");
    pruebaProfesor.detalles();
    pruebaProfesor.asignar();

    let pruebaEstudiante = new Estudiante ("Jose", "18", "Hombre", "2º", "H")
    pruebaEstudiante.detalles();
    pruebaEstudiante.registrar();
