# Tarjeta de crédito válida

Para validar una tarjeta de crédito, se utilizará el **algoritmo de Luhn** o algoritmo de módulo 10 que consiste en una *suma de verificación*.

### Pasos para validar una tarjeta de crédito

+ Se crea una función llamada `isValidCard` que tiene como parámetro al número de la tarjeta.
+ Mediante el método `split` se convierte a un array el número de la tarjeta y mediante el método `reverse` se invierte la posición de los números de la tarjeta en el array.
+ Teniendo el resultado, se recorren los números de las posiciones pares mediante un `for` y se multiplica cada uno de ellos por dos y utilizando un `if` se indica la condición de que si el resultado es mayor a 10, se restará 9 al resultado y de lo contrario que retorne el mismo número.
+ Luego se recorren los números de las posiciones impares y se suman los dos arrays.
+ Por último, se aplica la operación `módulo` o residuo de 10 a este resultado y si resulta 0 la tarjeta de crédito es válida.
# tarjeta_valida
# tarjeta
