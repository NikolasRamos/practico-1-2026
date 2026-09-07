# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

---

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

Interface permite fusionar declaraciones. Esto significa que cuando se declara la misma interface varias veces TypeScript las combina automáticamente en una única interface que posee todos los atributos internos de todas las distintas declaraciones. Type no es capaz de esto, ya que si se intenta hacer lanza un error en tiempo de compilación.

---

## ¿Qué permite hacer `type` que `interface` no?

Type tiene la capacidad de representar otras cosas aparte de clases u objetos, como valores primitivos, uniones de valores, tuplas y tipos. Interface solo puede representar objetos, clases y funciones.

---

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

Interface se extiende con "extends" como las clases comunes, mientras que type se exiende con el caracter "&".
Como ejemplo utilicemos la interface y el type Alumno del ejercicio 7:
### Alumno extends Persona {...};
### type Alumno = Persona & {...};

---

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

Para representar la entidad "Alumno" elegiría interface, ya que este nunca será un tipo primitivo. En todos los casos en los que serian útiles las particularidades de type es posible encontrar una alternativa que funcione en interface. Además esta última permite extender la declaración en caso de ser necesario, ya que en el caso de un alumno es muy probable que se quieran añadir otros atributos como el estado académico o las materias en las que está anotado.
