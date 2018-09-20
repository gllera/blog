---
title:  Puesta a punto - parte 2
date:   2018-09-20T01:12:20+01:00
image:  compress.png
slug:   tuning-2
---

{{< img "compress.png" "compress" "z10" >}}

Una vez se tiene una web estática con un rendimiento bien bueno que se puede mantener relativamente fácil y por 0€ ¿Qué otra cosa se le pudiese mejorar? Pues el ancho de banda óptimo que necesita, de nada valdrá que una web comience a mostrar contenido muy rápido si luego tarda una eternidad descargando las cosas que necesita. Eso beneficiará principalmente a las visitas desde teléfonos móviles. Yo a menudo suelo navegar a velocidad reducida (8KB/s) porque se me agota el bono de datos del móvil así que optimicé este sitio para poderlo navegar a esa velocidad.

{{< img "gulp.png" "gulp" "z10" >}}

Apliqué las siguiéntes técnicas de reducción de ancho de banda de forma automatizada a través de [Gulp](https://gulpjs.com/) y con algo de apoyo extra de [tinypng](https://tinypng.com/) e [Icomoon](https://icomoon.io/). Pienso que en una web "bien currada" deberían estar presentes al menos las más básicas de estas. Especifico aproximadamente la mejora que aportan cada una de ellas en donde se aplican a mi blog:

- Eliminar espacios en blancos, saltos de línea y código comentado de los ficheros html, css y javascript, usar urls relativas, omitir tags y comillas opcionales (-30% tamaño)
- Unificar ficheros CSS y Javascript (-20% peticiones al servidor)
- Adjuntar ficheros pequeños al código fuente mediante "Data URLs" (-20% peticiones al servidor)
- Evitar incluir "packs" completos, como todo Bootstrap o FontAwesome (-90% tamaño)
- Optimizar imágenes en tamaño y calidad (-60% tamaño)
- Evitar usar vídeos, sonidos e imágenes (-80% tamaño)
- Usar vectores y fuentes siempre que sea posible (-20% tamaño, -15% peticiones al servidor)
- Evitar cargar plugins pesados como Disqus (comentarios) automáticamente (-95% tamaño, -80% peticiones al servidor)

El resultado es tener un sitio bastante ligero que cumple su función perfectamente. En estos momentos, cargar por primera vez mi blog necesita bajar sólo unos 51KB para el post anterior (parte 1 de "Puesta a punto"). Si lo comparamos, por ejemplo, con [éste](https://www.huffingtonpost.es/david-varela-naranjo/es-mejor-la-cerveza-filtrada-o-sin-filtrar_a_23529897) artículo del famoso sitio de noticias Huffingtonpost vemos que este último necesita 40 veces mas ancho de banda (2MB) además de que hace 11 veces más peticiones al servidor (113 vs 9). 

Traté de acceder al Huffingtonpost desde mi móvil con velocidad reducida pero tardaba tanto en poder ver algo que desistí. Las conexiones lentas no se tienen demasiado en cuenta hoy en día y eso no me parece correcto. Me recuerda a lo que sucede cuando se le aumenta el sueldo a alguien con mentalidad económica de pobre, que lo que hace es darse gustos proporcionalmente más caros por lo que sigue estando sin dinero y sintiéndose pobre. En este caso tenemos internet más rápido pero las páginas también son más pesadas por lo que siguen tardando en cargar, y ya si tienes un internet lento ni te cuento. Para mí el valor de los sitios webs no está en la cantidad de chorradillas visuales guays pesadas que tenga sino en el contenido.

Por cierto, aún me queda otro tema de "Puesta a punto" que comentar que ya lo haré en el próximo post, saludos!