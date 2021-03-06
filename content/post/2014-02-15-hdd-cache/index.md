---
title:  Cacheando el HDD
date:   2014-02-15T21:15:11+01:00
image:  SSD_HDD.png
slug:   hdd-cache
---
{{< img "SSD_HDD.png" "HDD" >}}

La tecnología SSD es bastante conocida por su buen rendimiento, en especial cuando se E/L (escribe/lee) en posiciones aleatorias. Incluso se han inventado discos híbridos que no son más que HDD con un SSD integrado de unos 20Gb comúnmente para hacer función de caché mejorando considerablemente su rendimiento.

Un HDD de 7200RPM moderno tiene aproximadamente estas velocidades:

{{< img "HDD-7200rpm-sin-cachear.png" "HDD Benchmark" >}}

Mientras que un SSD, a pesar de la variedad de modelos y velocidades que podemos encontrar, los más comunes tienen aproximadamente estas velocidades:

{{< img "ssd.png" "SSD Benchmark" >}}

Como se puede apreciar, la mejora en velocidad puede llegar a ser en algunos casos hasta 100 veces mayor, sin embargo lo cierto es que esto todavía sigue siendo bastante lento si lo comparásemos con un disco de ram (aquellos simulados desde el sistema operativo y que E/L los datos directamente en la ram) que tiene velocidades que ronda varios Gbps. Entonces, qué pasaría si aplicásemos la misma idea de disco híbrido que usaron los fabricantes pero en lugar de un SSD como caché, usásemos la RAM? Pues en una DDR3 dual chanel a 1600Mhz, esto:

{{< img "HDD-7200rpm-cacheado.png" "RAM cached HDD Benchmark" >}}

Las velocidades se vuelven a disparar y el mismo HDD que antes escribía a 124Mbps ahora escribe a casi 8GBps. Sin duda una mejora notable a tener en cuenta y de paso darle uso al espacio de memoria RAM libre. En windows encontramos programas como [PrimoCache](http://www.romexsoftware.com/en-us/primo-cache/index.html) o [Superspeed Express](http://www.superspeed.com/desktop/supercache.php) que permiten hacer esto fácilmente.

Saludos!