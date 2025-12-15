

# Algunas correcciones y recomendaciones

La idea y diseño está bien, pero consideramos que faltaría un poco de desarrollo en el contenido y/o agregar más detalles en la sección de *proyectos*. Puede ser agregar una página para cada obra o ver la forma de mostrar más información en la misma página.

# Revisar alineación de elementos
 Los títulos "Proyectos" y "Contacto" parecieran no estar bien alineados con el resto del contenido.

# Links

Los enlaces a los proyectos deberían abrirse en una nueva pestaña. Agregar target="_blank" en los enlaces.

# Imágenes

Optimizar imágenes para web.

# uso de BEM

Durante la cursada sugerimos el uso de la convencion BEM (Block Element Modifier) para nombrar clases. 

Ejemplos de renombrado para clases clave:
.abrir-menu → navegacion__boton--abrir
.cerrar-menu → navegacion__boton--cerrar
.nav → navegacion (bloque principal)
.lista-nav → navegacion__lista
.trabajos → proyectos (bloque para la sección de proyectos)
.contenedor-tarjetas → proyectos__contenedor
.tarjeta → proyectos__tarjeta
.contenido → proyectos__tarjeta__contenido
.contacto → contacto (bloque para la sección de contacto)
.contacto-form → contacto__formulario
.contacto-redes → contacto__redes
.redes-icons → contacto__redes__iconos
.sobre-mi → sobre-mi (bloque para la sección "Sobre mí")
.bio → sobre-mi__biografia
.link-registro → proyectos__tarjeta__enlace o sobre-mi__enlace (dependiendo del contexto)

# Id's y clases

Usar id por ejemplo ```<section id="sobre-mi">``` no es lo más recomendable para aplicar estilos. Se recomienda usar clases.  Lo mismo vale para contacto y proyectos.
En cambio si tiene sentido en ```<section id="inicio">``` porque se usa en JS para aplicar un comportamiento (Hydra) 

# Responsive
El menú funciona bien, pero habría que revisar la alineacion (titulos que conflictúan con las tarjetas de proyectos) y tamaños de texto.

# Uso de JS

Está bien la integracion de Hydra y el menú.