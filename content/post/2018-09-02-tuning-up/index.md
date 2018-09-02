---
title:  Puesta a punto - parte 1
date:   2018-09-02T10:12:19+02:00
image:  lightning.png
slug:   tuning-1
draft:  true
---

{{< img "lightning.png" "lightning" "z10" >}}

Hace ya 1001 días que no publico nada en mi blog y pensaba que ya iba siendo hora. Como estructuralmente en este sitio muchas cosas han cambiado desde entonces mientras lo ponía a punto, pensé que sería buena idea primero ponerles al día al respecto.

Resulta que el hosting low cost que usaba ([Quijost](https://quijost.com/)) no dejaba de tener caídas, problemas de rendimiento y bugs de software que hacían que cada año pareciese que no estaba pagando por algo que valiese la pena realmente. Fue por eso por lo que en cuanto me enteré de que podía hospedarlo en [Github Pages](https://pages.github.com/) sin coste alguno evitándome todos los problemas anteriormente mencionados no lo dudé 2 veces y comencé la migración.

{{< img "github-pages.png" "Github pages" "z10" >}}

El truco de Github Pages para conseguir un rendimiento tan increíble por 0€ consiste en tener la web estática, es decir, sin código fuente nuestro que necesite ser procesado por el servidor para mostrarle la web al usuario por lo que ya directamente no me era posible usar Wordpress. Esto se traduce en que cuando desee hacer cualquier tipo de actualización al sitio es necesario pegarse con el código fuente de la web para modificar los ficheros afectados. Como primera impresión eso puede parecer poco práctico pero por suerte este inconveniente tiene una solución bastante buena, usar algún generador de webs estáticas de entre los [muchos](https://www.staticgen.com/) que hay. Ya pienso que no usaría Wordpress ni teniendo un hosting decente porque con esta alternativa no tengo nada que envidiarle.

{{< img "jekyll.png" "Jekyll" "z10" >}}

De entre esos generadores al principio me decanté por [Jekyll](https://jekyllrb.com/) por ser el que Github soporta oficialmente evitándote tener que "compilar" la web antes de subirla pero el que esté desarrollado en [Ruby](https://www.ruby-lang.org/en/) no me terminó de convencer. En lo personal no tengo interés en nada relacionado con ese lenguaje así que después de unos años de usarlo en mi blog sin prácticamente tocarlo, probé con [Nuxt](https://nuxtjs.org/). Pero este otro resultó que me sobrecargaba más de lo deseado el sitio con las librerías de [Vue](https://vuejs.org/) además de reducirme el factor simplista que buscaba conseguir en un mantenimiento y uso diario del sitio por lo que seguí buscando.

{{< img "hugo.svg" "lightning" "z10" >}}

Fue entonces cuando probé usar [Hugo](https://gohugo.io/), que a diferencia de Jekyll y Nuxt está desarrollado en [Golang](https://golang.org/) y eso para mí fue un punto a su favor desde el primer momento. Golang es un lenguaje de programación asombroso, permite generar binarios sin dependencias externas para la gran mayoría de sistemas operativos y arquitecturas usando el mismo código fuente y con Hugo esto también se aplica, con un binario podremos generar nuestra web desde donde sea en cuestión de milisegundos.

Hugo es bastante simplista, cubre funciones relativamente básicas, pero a la vez te permite crear las tuyas propias sin mucha dificultad. Pudiese usar solamente Hugo para mantener mi blog pero me pareció interesante perfeccionarlo aún más con otras herramientas y servicios que ya comentaré en la siguiente publicación.

¡Saludos!