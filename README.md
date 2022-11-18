# Healthyfood landing page

<a href="#englishReadme">English</a>

![imgPortfolioIII](https://user-images.githubusercontent.com/108038008/202604654-92e461e1-c451-4dca-9c38-ae72d81b1c6c.jpg)

En este repositorio podrán encontrar el código de una landing-page ficticia que forma parte de mi portfolio de Front-End Developer. Se trata de una pequeña empresa local de delivery de comida saludable que requería una página sencilla para sus clientes actuales y potenciales. El contenido de la misma debía incluir una descripción sobre sus productos, servicios y posibles canales de comunicación. Al mismo también, también debía proporcionar un mecanismo para suscribirse a un newsletter con las últimas ofertas.

A continuación, voy a comentar y describir las diferentes herramientas que utilicé y algunos aspectos del proyecto que considero clave. 

# HTML 
Para estructurar el contenido, intenté utilizar las etiquetas semánticas correspondientes a cada elemento de la página entre los cuales se pueden encontrar: section, nav, header, form o footer, entre otros. Al mismo tiempo, en la nav se pueden encontrar diferentes links que facilitan la navegación interna. Uno de estos enlaces contiene la propiedad onclick=“” que dispara una función para scrollear la página hasta el final. Por último, quisiera destacar el uso de la propiedad required en el input que contiene la clase userEmail para establecer ese dato como condición necesaria para efectuar el envío del formulario.  Si hay alguna consulta que no haya sido tratada en esta sección, el documento index.html tiene una serie de comentarios útiles para recorrer el código. 

# ESTILO 
El estilo principal de esta página web fue desarrollado utilizando SASS+NodeJS para compilar el archivo final main.css. Si bien se trata de un proyecto pequeño, utilicé las ventajas de SASS para poner en práctica este poderoso compilador e incluí el uso de variables, mixins, nesting y demás posibilidades. A la hora de incorporar íconos utilicé el kit básico de fontawesome, lineicons, remixicon y mediante CDN, una opción sencilla y efectiva para los propósitos de este proyecto. A su vez, también sumé a Bootstrap como recurso para diseñar parte de la barra de navegación, un slider y cards. El uso del mismo fue acompañado de una revisión de las etiquetas, las cuales adecué para mejorar el aspecto semántico del código. Finalmente, utilicé toastify para crear un mensaje personalizado que indique al usuario si pudo suscribirse al newsletter con éxito. 

# JAVASCRIPT 
En este repositorio incorporé algunas funcionalidades mediante JavaScript. En primera instancia, cree una función para acceder al final de la página sin importar el tamaño de la página web. Esta puede encontrarse en el archivo index.js con el nombre de contactScroll(). En este mismo archivo hay otra función que permite definir un tamaño de pantalla para establecer un cambio en el DOM según el tamaño de la pantalla (resizeWindow()). Introduje estos cambios para introducir algunos elementos u otros en la sección de menú y testimonio. Dichos cambios también están generados mediante funciones de JavaScript (testimonyCards (), testimonySlider()), las cuales crea elementos HTML en la página. Si bien en el proyecto están hardcodeados, se podría utilizar datos de una base de datos para sumar productos y testimonios a la página web. Finalmente, incluí la posibilidad de suscribirse a un newsletter que cada usuario recibiría por correo electrónico gracias a las facilidades que permite la integración entre mi código JS y el servicio de EmailJS (https://www.emailjs.com/). 


![imgPortfolioII](https://user-images.githubusercontent.com/108038008/202604817-22f6fc14-f3d6-49b2-b95f-b9170cb908b7.jpg)


# ACCESIBILIDAD 
A lo largo del este proyecto comencé a interiorizarme en la accesibilidad web y todos los desafíos que plantea. En este caso particular, intenté poner en práctica una serie de estrategias claves para mejorar la accesibilidad de esta página. En primer lugar, seleccioné una paleta de colores que cumplan con un nivel de contraste adecuado para aquellos usuarios que lo requieran (pueden utilizar cualquier análisis de contraste. Yo utilicé el siguiente: https://color.adobe.com/es/create/color-contrast-analyzer). Por otro lado, todos los elementos interactivos tienen la semántica adecuada y poseen un efecto de enfoque adecuado. También cree una etiqueta label con la propiedad for=“”, la cual, según se recomienda, comparte el mismo id que el input dentro del formulario. Esto posibilita acceder al input e ingresar los datos haciendo click fuera del input. Pude testear todos estos aspectos con la herramienta de accesibilidad que posee Mozilla Firefox. Si bien los test de accesibilidad son mucho más minuciosos e incluyen, en muchos casos, la participación de los usuarios, esta herramienta es un buen punto de partida para realizar un primer diagnóstico. 

# AGRADECIMIENTOS Y CRÉDITOS

Este proyecto fue realizado íntegramente por Franco Juárez, desarrollador situado en Bahía Blanca, Buenos Aires, Argentina. También conté con el apoyo y sugerencias de María Laura Sabando, UX/UI Designer. Cualquier sugerencia o comentario va a ser muy bien recibido. Espero les guste, nos vemos pronto. 


<h1 id="englishReadme">Healthyfood landing page (English)</h1>

[Spanish](#healthyfood-landing-page)

![imgPortfolioIII](https://user-images.githubusercontent.com/108038008/202604654-92e461e1-c451-4dca-9c38-ae72d81b1c6c.jpg)

In this repository you can find the code of a fictitious landing-page that is part of my Front-End Developer portfolio. This is a small local healthy food delivery business that required a simple page for their current and potential customers. Its content should include a description of its products, services and possible communication channels. At the same time, it also had to provide a mechanism to subscribe to a newsletter with the latest offers.
Next, I am going to comment and describe the different tools that I used and some aspects of the project that I consider key.

# HTML 
To structure the content, I tried to use the semantic tags corresponding to each element of the page, among which can be found: section, nav, header, form or footer, among others. At the same time, in the navigation bar you can find different links that facilitate internal navigation. One of the links contains the property onclick="" which triggers a function to scroll the page to the bottom. Finally, I would like to highlight the use of the required property in the input that contains the userEmail class to establish this data as a necessary condition to send the form. If there are any queries not covered in this section, the index.html document has a number of useful comments for stepping through the code.

# STYLE
The main styling of this web page was developed using SASS+NodeJS to compile the final main.css file. Although this is a small project, I took advantage of SASS to implement this powerful compiler and included the use of variables, mixins, nesting and more. When incorporating icons I used the basic fontawesome kit, lineicons, remixicon and through CDN, a simple and effective option for the purposes of this project. At the same time, as you can see, I also added Bootstrap as a resource to design part of the navigation bar, a slider and cards. Its use was accompanied by a review of the tags, which I adapted to improve the semantic aspect of the code. Finally, I used toastify to create a custom message that tells the user if they were able to subscribe to the newsletter successfully.

# JAVASCRIPT 
In this repository I incorporated some functionalities through JavaScript. In the first instance, create a function to access the bottom of the page regardless of the size of the web page. This can be found in the index.js file under the name contactScroll(). In this same file there is another function that allows to define a screen size to establish a change in the DOM according to the screen size (resizeWindow()). I made these changes to introduce some elements or others in the menu and testimonial section. Such changes are also generated by JavaScript functions (testimonyCards(), testimonySlider()), which create HTML elements on the page. Although they are hardcoded, this data could be stored in an external database and used to add products and testimonials to the website. Finally, I included the possibility of subscribing to a newsletter that each user would receive by email thanks to the facilities that the integration between my JS code and the EmailJS service allows (https://www.emailjs.com/). 


![imgPortfolioII](https://user-images.githubusercontent.com/108038008/202604817-22f6fc14-f3d6-49b2-b95f-b9170cb908b7.jpg)


# ACCESSIBILITY
Throughout this project I began to internalize myself in web accessibility and all the challenges it poses. In this particular case, I tried to implement a series of key strategies to improve the accessibility of this page. First, I selected a color palette that meets an appropriate contrast level for those users who require it (you can use any contrast analysis. I used the following: https://color.adobe.com/es/create /color-contrast-analyzer). On the other hand, all interactive elements have the proper semantics and have a proper focus effect. Also create a label tag with the property for=“”, which, as recommended, shares the same id as the input within the form. This makes it possible to access the input and enter the data by clicking outside the input. I was able to test all these aspects with the accessibility tool that Mozilla Firefox has. Although accessibility tests are much more detailed and include, in many cases, the participation of users, this tool is a good starting point for making a first diagnosis.

# THANKS AND CREDITS
This project was carried out entirely by Franco Juárez, a developer located in Bahía Blanca, Buenos Aires, Argentina. I also had the support and suggestions of María Laura Sabando, UX/UI Designer. Any suggestion or comment will be very welcome. I hope you like it, see you soon.

