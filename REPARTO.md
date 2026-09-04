# Reparto de ejercicios - Práctica 1

Grupo de 5. Criterios: **equidad** (tamaño/dificultad) y **no repetir patrones**
(los ejercicios muy similares van a integrantes distintos).

---

### 🧑‍💻 Integrante 1
- **Ejercicios**: Parte 1 (1–10) · 12 · 14
- **Archivos**:
  - `src/parte 1/ejercicios.ts` (ej 1-10)
  - `src/parte 3/figuras.ts`
  - `src/parte 3/ej14-vehiculos.ts`
- **Patrón**: map/filter/find + clase abstracta (áreas) + override

### 🧑‍💻 Integrante 2
- **Ejercicios**: Parte 1 (11–20) · 13 · 17
- **Archivos**:
  - `src/parte 1/ejercicios.ts` (ej 11-20)
  - `src/parte 3/empleados.ts`
  - `src/parte 3/ej17-pagos.ts`
- **Patrón**: reduce/callbacks + clase abstracta (sueldos) + interface

### 🧑‍💻 Integrante 3
- **Ejercicios**: 7 · 15 · 16
- **Archivos**:
  - `src/parte 2/ej07-tipos-interfaces.ts`
  - `src/RESPUESTAS-ejercicio7.md`
  - `src/parte 3/ej15-animales.ts`
  - `src/parte 3/ej16-sueldos.ts`
- **Patrón**: type vs interface (teoría) + polimorfismo + reduce

### 🧑‍💻 Integrante 4
- **Ejercicios**: 8, 9, 10 · 19
- **Archivos**:
  - `src/parte 2/clase-alumno.ts`
  - `src/parte 3/ej19-personajes.ts`
- **Patrón**: encapsulamiento + herencia con daño

### 🧑‍💻 Integrante 5
- **Ejercicios**: 11 · 18 · 20
- **Archivos**:
  - `src/parte 2/cuenta.ts`
  - `src/parte 3/ej18-notificaciones.ts`
  - `src/parte 3/ej20-universidad.ts` (integrador)
- **Patrón**: validaciones + polimorfismo + integrador

---

## Por qué está repartido así

- `empleados` (13) ↔ `sueldos` (16) son casi idénticos → integrantes distintos (2 y 3).
- `clase-alumno` (8-10) ↔ `universidad` (20) y `clase-alumno` ↔ `cuenta` (11) → integrantes distintos.
- Clases abstractas con subclases (`figuras`, `animales`, `sueldos`, `notificaciones`, `personajes`) → una por integrante.
- Los que usan `console.log` (vehículos, pagos, animales, notificaciones) no quedan juntos en el mismo integrante.

## Coordinación parte 1

Un solo archivo (`src/parte 1/ejercicios.ts`) que tocan los integrantes 1 y 2 (ej 1-10 y 11-20). Como usan git, trabajan en paralelo y se mergea — solo cuidar de no pisarse preambulo/imports.

## Verificación

```bash
npm test         # tests
npm run test:watch
npm run typecheck
```

No modificar `*.test.ts` ni `src/models/db.ts`.