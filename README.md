# Healthyfood landing page

![imgPortfolioIII](https://user-images.githubusercontent.com/108038008/202604654-92e461e1-c451-4dca-9c38-ae72d81b1c6c.jpg)

En este repositorio podrán encontrar el código de una landing-page ficticia que forma parte de mi portfolio de Front-End Developer. Se trata de una pequeña empresa local de delivery de comida saludable que requería una página sencilla para sus clientes actuales y potenciales. El contenido de la misma debía incluir una descripción sobre sus productos, servicios y posibles canales de comunicación. Al mismo también, también debía proporcionar un mecanismo para suscribirse a un newsletter con las últimas ofertas. 

A continuación, voy a comentar y describir las diferentes herramientas que utilicé y algunos aspectos del proyecto que considero clave. 

# HTML 
Para estructurar el contenido, intenté utilizar las etiquetas semánticas correspondientes a cada elemento de la página entre los cuales se pueden encontrar: section, nav, header, form o footer, entre otros. Al mismo tiempo, en la nav se pueden encontrar diferentes links que facilitan la navegación interna. Uno de estos enlaces contiene la propiedad onclick=“” que dispara una función para scrollear la página hasta el final de la página. Por último, quisiera destacar el uso de la propiedad required en el input que contiene la clase userEmail para establecer ese dato como condición necesaria para efectuar el envío del formulario.  Si hay alguna consulta que no haya sido tratada en esta sección, el documento index.html tiene una serie de comentarios útiles para recorrer el código. 

# ESTILO 
El estilo principal de esta página web fue desarrollado utilizando SASS+NodeJS para compilar el archivo final main.css. Si bien se trata de un proyecto pequeño, utilicé las ventajas de SASS para poner en práctica este poderoso compilador e incluí el uso de variables, mixins, nesting y demás posibilidades. A la hora de incorporar íconos utilicé el kit básico de fontawesome, lineicons, remixicon y mediante CDN, una opción sencilla y efectiva para los propósitos de este proyecto. A su vez, también sumé a Bootstrap como recurso para diseñar parte de la barra de navegación, un slider y cards. El uso del mismo fue acompañado de una revisión de las etiquetas, las cuales adecué para mejorar el aspecto semántico del código. Finalmente, utilicé toastify para crear un mensaje personalizado que indique al usuario si pudo suscribirse al newsletter con éxito. 

# JAVASCRIPT 
En este repositorio incorporé algunas funcionalidades mediante JavaScript. En primera instancia, cree una función para acceder al final de la página sin importar el tamaño de la página web. Esta puede encontrarse en el archivo index.js con el nombre de contactScroll(). En este mismo archivo hay otra función que permite definir un tamaño de pantalla para establecer un cambio en el DOM según el tamaño de la pantalla (resizeWindow()). Introduje estos cambios para introducir algunos elementos u otros en la sección de menú y testimonio. Dichos cambios también están generados mediante funciones de JavaScript (testimonyCards (), testimonySlider()), las cuales crea elementos HTML en la página. Si bien en el proyecto están hardcodeados, se podría utilizar datos de una base de datos para sumar productos y testimonios a la página web. Finalmente, incluí la posibilidad de suscribirse a un newsletter que cada usuario recibiría por correo electrónico gracias a las facilidades que permite la integración entre mi código JS y el servicio de EmailJS (https://www.emailjs.com/). 


![imgPortfolioII](https://user-images.githubusercontent.com/108038008/202604817-22f6fc14-f3d6-49b2-b95f-b9170cb908b7.jpg)


# ACCESIBILIDAD 
A lo largo del este proyecto comencé a interiorizarme en la accesibilidad web y todos los desafíos que plantea. En este caso particular, intenté poner en práctica una serie de estrategias claves para mejorar la accesibilidad de esta página. En primer lugar, seleccioné una paleta de colores que cumplan con un nivel de contraste adecuado para aquellos usuarios que lo requieran (pueden utilizar cualquier análisis de contraste. Yo utilicé el siguiente: https://color.adobe.com/es/create/color-contrast-analyzer). Por otro lado, todos los elementos interactivos tienen la semántica adecuada y poseen un efecto de enfoque adecuado. También cree una etiqueta <label> con la propiedad for=“”, la cual, según se recomienda, comparte el mismo id que el input dentro del formulario. Esto posibilita acceder al input e ingresar los datos haciendo click fuera del input. Pude testear todos estos aspectos con la herramienta de accesibilidad que posee Mozilla Firefox. Si bien los test de accesibilidad son mucho más minuciosos e incluyen, en muchos casos, la participación de los usuarios, esta herramienta es un buen punto de partida para realizar un primer diagnóstico. 

# AGRADECIMIENTOS Y CRÉDITOS

Este proyecto fue realizado íntegramente por Franco Juárez, desarrollador situado en Bahía Blanca, Buenos Aires, Argentina. También conté con el apoyo y sugerencias de María Laura Sabando, UX/UI Designer. Cualquier sugerencia o comentario va a ser muy bien recibido. Espero les guste, nos vemos pronto. 
