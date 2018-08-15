---
title:  Por qué prefiero Git a SVN
date:   2014-01-19T05:01:46+01:00
image:  vcs.png
slug:   git-over-svn
---
{{< img "vcs.png" "Git vs SVN" >}}

Después de cometer muchos errores y decisiones incorrectas a medida que programamos software, encontramos la necesidad de usar un sistema de control de versiones que nos facilite hacer rectificaciones al código y trabajar el mismo proyecto con otras personas. A lo largo de varios años he trabajado con TFS, SVN y GIT, he investigado otros como Mercurial y Bazaar, de todos ellos para mí el mejor es Git y si eres de los que consideran que es más adecuado (según popularidad) su otro competidor más cercano el SVN, te comentaré por qué no es mi caso.

 Prefiero Git porque:

* Puedo tener varias versiones de prueba de un mismo desarrollo en mi ordenador como si fuese una, debido a las ramas Git que puedo hacer en local. Con SVN pudiese hacerme estas ramas en el servidor pero en la práctica de esta forma hay muchas pegas y no es viable. En Git estos procesos están tenidos en cuenta y debidamente optimizados por lo que con este usar varias ramas del mismo proyecto es hasta más recomendado.
* Con las ramas personales en local de Git dispongo además de mi propio historial de cambios aparte del ya compartido con los compañeros de equipo. Esto sin duda da más libertad para hacer todos los Commits que estimemos convenientes sin preocuparnos de si están correctos para no de afectar al resto del equipo y servirán de referencia a la hora de detectar y corregir errores.
* Siempre es más recomendado y fácil de depurar los Commits unitarios, en esto SVN tampoco pone mucho de su parte. En Git puedo usar un índice al cual se le indica hasta qué parte de cada fichero quiero hacer Commit o combinar con otra rama.

Estos 3 aspectos para mi han sido suficientes para preferir Git sobre SVN, en lo demás, como programador, ninguno de los 2 me ha beneficiado notablemente más que el otro. Git puede parecer más complejo pero puede usarse como si fuese SVN y entonces no lo sería tanto, se adapta muy bien lo mismo a estilos de desarrollos simples que complejos. Si quieres probar Git, te recomiendo el cliente [SmartGitHg](http://www.syntevo.com/smartgit/). En otro post comentaré cómo usar Git aunque el repositorio sea SVN.