# Tarjeta de crédito válida



##### `README.md`

Debe contener lo siguiente:

* Un título con el nombre de tu proyecto.
* Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
* La imagen final de tu proyecto.
* Investigación UX:
  1. Explicar quiénes son los usuarios y los objetivos en relación con el
    producto.
  2. Explicar cómo el producto soluciona los problemas/necesidades de dichos
    usuarios.
  3. Luego colocarás la foto de tu primer prototipo en papel.
  4. Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  5. Imagen del prototipo final.





##### `src/validator.js`

Acá escribirás las funciones necesarias para que el usuario pueda verificar la
tarjeta de crédito y ocultar los dígitos de su número de tarjeta.
Esta función debe ser pura e independiente del DOM.

Para esto debes implementar el **objeto `validator`**, el cual ya se encuentra
_exportado_ en el _boilerplate_. Este objeto (`validator`) contiene
dos métodos (`isValid` y `maskify`):

* **`validator.isValid(creditCardNumber)`**: `creditCardNumber` es un `string`
con el número de tarjeta que se va a verificar. Esta función debe retornar un
`boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

* **`validator.maskify(creditCardNumber)`**: `creditCardNumber` es un `string` con
el número de tarjeta y esta función debe retornar un `string` donde todos menos
los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

##### `src/index.js`

Acá escribirás todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos).
Es decir, en este archivo deberás invocar las funciones `isValid` y `maskify`
según sea necesario para actualizar el resultado en la pantalla (UI).

##### `test/validator.spec.js`

En este archivo tendrás que completar las pruebas unitarias de las funciones
`validator.isValid(creditCardNumber)` y `validator.maskify(creditCardNumber)`
implementadas en `validator.js` utilizando [Jest](https://jestjs.io/es-ES/).
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura),
_statements_ (sentencias), _functions_ (funciones) y _lines_ (líneas); y un
mínimo del 50% de _branches_ (ramas).



###### Readme 
# ( Card Validation ) 
### Descripcion.

En este proyecto es una aplicación web que le permita a un
usuario validar el número de una tarjeta de crédito. Además, se 
implementa funcionalidad para ocultar todos los dígitos de una tarjeta menos
los últimos cuatro.

La temática que tomamos es un usuario validando su tarjeta en una compra de un cafe.
Al iniciar el proyecto  primero debíamos dibujar a mano alzada un Mockup de lo que ibamos a hacer y considerar todas las necesidades de nuestra usuaria.
Se realizo un prototipo en lapiz y papel, y trabajo en uno prototipo de gama alta en figma.

+ [Prototipo de alta gama en Figma](https://www.figma.com/file/j84dRI4XVlWi6D8OaqkNob/Untitled?node-id=0%3A1)
+ [trello](https://www.figma.com/file/j84dRI4XVlWi6D8OaqkNob/Untitled?node-id=0%3A1)
+ [![Mockup](./doc/img/Mochup%20%20-%20card%20Validation.jpeg)]
# Requisitos
- NPM

# Run 
npm install && npm start 

## Documentacion Links

+ [Guía Completa de Flexbox desde 0](https://www.youtube.com/watch?v=F-KCncXMPk0&ab_channel=FalconMasters)
+ [FLEXBOX FROGGY](https://flexboxfroggy.com/#es)
+ [W3.CSS Modal,Botones CSS entre otros](https://www.w3schools.com/jsref/prop_style_display.asp)
+ [07. Expresiones Regulares - Ejemplo con JavaScript](https://www.youtube.com/watch?v=Yi4ThfsyJb0)
+ [Tutorial de GIT para principantes! - Usando la linea de comandos en Git](https://github.com/thiagobustamante/typescript-rest-swagger)
https://www.deepl.com/en/translator
+ [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)



#### Funcionalmente 

## `src/validator.js`


 implementamos el **objeto `validator`**, el cual ya se encuentra
_exportado_ en el _boilerplate_. Este objeto (`validator`) contiene
dos métodos (`isValid` y `maskify`):

* **`validator.isValid(creditCardNumber)`**: `creditCardNumber` es un `string`
con el número de tarjeta que se va a verificar. Esta función debe retornar un
`boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

* **`validator.maskify(creditCardNumber)`**: `creditCardNumber` es un `string` con
el número de tarjeta y esta función debe retornar un `string` donde todos menos
los últimos cuatro caracteres sean reemplazados por un numeral (`#`)
Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('5491621005008394') === '############8394'
    maskify('############8394') ===  '#######8394'

    ```

##### `src/index.js`

Acá escribirás todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos).
Es decir, en este archivo deberás invocar las funciones `isValid` y `maskify`
según sea necesario para actualizar el resultado en la pantalla (UI).

##### `test/validator.spec.js`

En este archivo tendrás que completar las pruebas unitarias de las funciones
`validator.isValid(creditCardNumber)` y `validator.maskify(creditCardNumber)`
implementadas en `validator.js` utilizando [Jest](https://jestjs.io/es-ES/).





