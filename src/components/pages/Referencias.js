// src/components/pages/Referencias.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import "./Referencias.css";

const referencias = [
  {
    numero: 1,
    titulo: "La autonomía y toma de decisiones de la IA",
    autorAnaliza: "Luna Vélez Cano",
    tituloArticulo: "MARCO ÉTICO PARA LA INTELIGENCIA ARTIFICIAL EN COLOMBIA",
    tipo: "Artículo académico.",
    autores: "Armando Guío Español, Elena Tamayo Uribe y Pablo Gómez Ayerbe",
    publicadoEn: "Ministerio de Ciencia, Tecnología e innovación de Colombia",
    palabrasClave:
      "Principios éticos, Control humano, Inteligencia artificial, Tecnología, datos, algoritmos, prácticas, decisiones.",
    referencia:
      "Guío Español, A., Tamayo Uribe, E., & Gómez Ayerbe, P. (2021). Capítulo 3: Adopción de principios éticos para la IA en Colombia (p. 27). En Marco ético para la inteligencia artificial en Colombia. Ministerio de Ciencia, Tecnología e Innovación de Colombia. https://minciencias.gov.co/sites/default/files/marco-etico-ia-colombia-2021.pdf",
    resumen: `En Colombia, se han adoptado principios éticos orientados a garantizar que el desarrollo y uso de la IA se realicen de forma responsable y segura.
      
      Uno de los principios fundamentales establecidos en el Marco Ético para la Inteligencia Artificial en Colombia es el control humano sobre las decisiones tomadas por sistemas de inteligencia artificial (Human-in-the-loop y Human-over-the-loop).
      
      Este principio es aplicable a sistemas de inteligencia artifcial que tengan cierta autonomía en la toma de decisiones, haciendo que el ser humano tenga control total sobre la toma de decisiones, especialmente en una etapa de implementación (Human-in-the-loop).
      
      El Marco Ético también resalta tres áreas clave donde estos principios deben aplicarse con especial cuidado:
      
      En la ética de los datos: la recolección y procesamiento debe ser realizada conforme a los parámetros y criterios establecidos por los seres humanos.
      
      En la ética de los algoritmos: los algoritmos deben permitir y facilitar la toma de decisiones, pero en un principio deben servir de guía para la toma de decisiones y no pueden actuar de forma automatizada y conforme a modelos sugeridos.
      
      En la ética de las prácticas: los sistemas de inteligencia artificial no deben ser utilizados para interactuar con la ciudadanía sin el control de un ser humano. Los sistemas de respuesta y conversación automatizada deben tener mecanismos para que los seres humanos intervengan y participen en cualquier momento.
      
      Los principios éticos adoptados en Colombia buscan asegurar que la inteligencia artificial sea una herramienta al servicio de las personas, no un reemplazo. La idea no es frenar el avance tecnológico, sino guiarlo por un camino que respete los valores humanos, promueva el bienestar colectivo y evite que la automatización cause daños o injusticias. De esta manera, se construye una IA que complemente nuestras capacidades, nos apoye en la toma de decisiones y contribuya a un desarrollo más justo y equitativo para todos.`,
  },
  {
    numero: 2,
    titulo: "El sesgo algorítmico y la discriminación",
    autorAnaliza: "Catalina Villa Quijano",
    tituloArticulo:
      "Ponderando los dilemas éticos y legales de la Inteligencia Artificial.",
    tipo: "Artículo académico.",
    autores: "David Ramírez Plascencia y Rosa María Alonzo González.",
    publicadoEn: "Textos y Contextos, 1(29), 2024",
    palabrasClave:
      "Inteligencia Artificial, ética, legalidad, sesgo algorítmico, discriminación.",
    referencia:
      "Ramírez Plascencia, D., & Alonzo González, R. M. (2024). Ponderando los dilemas éticos y legales de la Inteligencia Artificial. Textos y Contextos, 1(29), 109–118. https://doi.org/10.29166/tyc.v1i29.7001",
    resumen: `El artículo de Ramírez Plascencia y Alonzo González se enfoca en una de las preocupaciones más relevantes en torno al uso de la inteligencia artificial (IA): sus implicaciones éticas y legales, especialmente en lo que se refiere al sesgo algorítmico y la discriminación. La obra parte de una reflexión crítica sobre cómo estas tecnologías, que a menudo se presentan como neutras y objetivas, pueden terminar replicando e incluso amplificando desigualdades sociales ya existentes.
      
      Uno de los aspectos que más destaca el artículo es el papel que tienen los datos en la formación de los sistemas de inteligencia artificial. Los autores explican que los algoritmos aprenden de grandes volúmenes de información histórica, la cual no siempre está libre de prejuicios. Por ejemplo, si un sistema se entrena con datos de contratación de personal que históricamente han favorecido a ciertos perfiles (por género, raza o nivel socioeconómico), es probable que repita ese patrón en sus decisiones futuras. Esto implica que la tecnología, en lugar de corregir esas desigualdades, podría reforzarlas si no se toman medidas adecuadas.
      
      El análisis también incluye ejemplos concretos de cómo esto ya está ocurriendo en diferentes sectores. En el ámbito laboral, por ejemplo, whay casos en los que los algoritmos de selección han descartado automáticamente a candidatas mujeres por asociar ciertos roles con el género masculino. En el campo financiero, se han detectado sistemas que niegan créditos a personas de determinados barrios o perfiles demográficos, simplemente porque los datos usados reflejan un historial discriminatorio. En la justicia penal, se han utilizado herramientas para predecir reincidencia que han mostrado sesgos raciales graves.
      
      Otro punto importante que abordan los autores es el vacío normativo que existe frente a estas situaciones. La tecnología avanza con tanta rapidez que las leyes y regulaciones no logran seguirle el paso. Esta falta de legislación específica, sumada a la complejidad técnica de los sistemas, dificulta la identificación y corrección de los sesgos, así como la asignación de responsabilidades cuando hay perjuicios. En este sentido, el artículo hace un llamado urgente a los gobiernos, particularmente en América Latina, para que trabajen en marcos legales y éticos que respondan a estos retos. Se resalta que nuestra región, al tener profundas brechas sociales, es especialmente vulnerable a los efectos negativos de una IA mal diseñada o regulada.
      
      Los autores también proponen una serie de medidas que podrían ayudar a mitigar estos riesgos. Entre ellas, subrayan la importancia de la supervisión humana en todo el proceso de desarrollo y aplicación de la IA. No se trata solo de revisar los resultados finales, sino de intervenir desde la etapa de diseño, garantizando que los datos sean representativos y que el modelo sea testeado bajo criterios de equidad. Además, se sugiere que las empresas y organizaciones que implementan estas tecnologías deben ser más transparentes en sus procesos, permitiendo auditorías externas y facilitando mecanismos de apelación para las personas afectadas por decisiones automatizadas.
      
      Finalmente, el artículo concluye con una invitación a adoptar una mirada interdisciplinaria frente al desarrollo de la inteligencia artificial. La ética, el derecho, la informática, la sociología y otras áreas del conocimiento deben dialogar y trabajar de manera conjunta para crear tecnologías que sean realmente inclusivas y justas. No se trata de detener el avance tecnológico, sino de guiarlo con principios que prioricen el bienestar colectivo y la defensa de los derechos humanos.
      
      En síntesis, este artículo es una lectura fundamental para entender que el sesgo algorítmico y la discriminación no son errores técnicos aislados, sino síntomas de una problemática estructural más profunda. Y que, si queremos construir una sociedad más equitativa, no podemos dejar que los algoritmos decidan solos.`,
  },
  {
    numero: 3,
    titulo: "La privacidad y la vigilancia",
    autorAnaliza: "Susana Molina Rodríguez",
    tituloArticulo:
      "Impacto de la inteligencia artificial en la ética y la privacidad de los datos.",
    tipo: "Artículo académico.",
    autores: "Javier Guaña-Moya y Luis Chipuxi-Fajardo.",
    publicadoEn:
      'Institución Editora de RECIAMUC "Editorial Saberes del Conocimiento", Vol. 7, No. 1, 2023-05-30.',
    palabrasClave:
      "Inteligencia Artificial, Ética, Privacidad de los Datos, Principios, Personas.",
    referencia:
      "Guaña-Moya, J., & Chipuxi-Fajardo, L. (2023). Impacto de la inteligencia artificial en la ética y la privacidad de los datos. RECIAMUC, 7(1), 923-930. https://doi.org/10.26820/reciamuc/7.(1).enero.2023.923-930",
    resumen: `La privacidad se ha convertido en uno de los valores más comprometidos en el contexto del desarrollo acelerado de tecnologías basadas en inteligencia artificial (IA). En una sociedad donde los datos personales se recolectan constantemente mediante aplicaciones, cámaras, redes sociales y dispositivos inteligentes, la frontera entre lo público y lo privado se ha desdibujado, dando paso a formas sofisticadas de vigilancia algorítmica.
      
      En su estudio, Guaña-Moya y Chipuxi-Fajardo (2023) titulado "Impacto de la inteligencia artificial en la ética y la privacidad de los datos", abordan los desafíos éticos emergentes en este nuevo panorama digital, destacando cómo la vigilancia masiva mediada por algoritmos plantea serias amenazas, teniendo una capacidad de vigilancia masiva, y advierten sobre los riesgos que esto representa para los derechos fundamentales, especialmente cuando no hay un consentimiento claro o una comprensión real por parte de los usuarios sobre el uso de su información.
      
      Los autores destacan cómo la vigilancia mediada por algoritmos puede operar sin el conocimiento ni el consentimiento informado de los usuarios. Esto puede traducirse en decisiones automáticas que afectan directamente a las personas (como rechazar un crédito, filtrar candidatos laborales o priorizar contenidos) sin que estas puedan cuestionar el proceso o recibir explicaciones claras. La vigilancia, en este caso, no es solo pasiva, sino activa e invasiva, condicionando la vida de las personas en función de datos e inferencias.
      
      Otro de los aspectos señalados es la vulneración del consentimiento informado, ya que muchas veces los usuarios no son plenamente conscientes del uso que se da a su información. Esto se agrava con la discriminación algorítmica, fenómeno mediante el cual los sistemas automatizados reproducen o amplifican sesgos sociales preexistentes, afectando desproporcionadamente a ciertos grupos. Otro aspecto clave es la falta de transparencia y rendición de cuentas. Las decisiones tomadas por algoritmos suelen estar envueltas en confusión, lo que dificulta cuestionarlas o exigir responsabilidades. En este contexto, la vigilancia tecnológica puede convertirse en un mecanismo de control que invade esferas íntimas de la vida cotidiana sin un adecuado control ciudadano.
      
      Guaña-Moya y Chipuxi-Fajardo proponen, como respuesta a este panorama, la urgente necesidad de establecer marcos éticos sólidos y normativas claras que regulen el uso de la IA. Estos marcos deben priorizar principios como la equidad, la transparencia y la protección de los derechos fundamentales. También señalan que es necesario fomentar una cultura tecnológica más consciente, en la que el desarrollo de sistemas inteligentes esté alineado con el bienestar social.
      
      Frente a este escenario, es clave para comprender la tensión entre avance tecnológico y derechos humanos, y se convierte en un punto de partida para debatir sobre los límites de la vigilancia en un contexto donde los datos personales son cada vez más valiosos. Su aporte al marco teórico no solo permite dimensionar los riesgos actuales, sino también proyectar soluciones responsables que incluyan a todos los actores: gobiernos, empresas tecnológicas y ciudadanía.
      
      Resulta pertinente abordar el tema de la privacidad y la vigilancia dentro de los dilemas éticos de la inteligencia artificial, ya que permite concluir que la vigilancia tecnológica, sin límites ni responsabilidad ética, pone en riesgo la libertad individual y la dignidad humana. Por eso, resulta urgente que tanto desarrolladores como legisladores, instituciones y la ciudadanía, se comprometan en la creación de tecnologías justas, transparentes y respetuosas de la privacidad.`,
  },
  {
    numero: 4,
    titulo: "La responsabilidad moral y atribución de culpa",
    autorAnaliza: "Gustavo Adolfo Velásquez Granado",
    tituloArticulo:
      "Ética de la IA autónoma: Decisiones éticas en manos de algoritmos",
    tipo: "Articulo Académico",
    autores: "Juan José Blanco Bejarano",
    publicadoEn: "Universo IA",
    palabrasClave:
      "Responsabilidad moral, Inteligencia Artificial, atribución de culpa, intervención humana, cadena de responsabilidad.",
    referencia:
      "Bejarano, J. J. B. (2024, 24 octubre). Ética de la IA autónoma: Decisiones éticas en manos de algoritmos. Universo-IA.com. https://universo-ia.com/etica-de-la-ia-autonoma-decisiones-eticas-en-manos-de-algoritmos/#:~:text=Responsabilidad%20en%20las%20decisiones%20de,la%20IA",
    resumen: `La integración de la Inteligencia Artificial en la sociedad plantea un dilema filosófico fundamental: ¿quién asume la responsabilidad moral cuando un sistema de IA causa daño? A diferencia de los contextos tradicionales donde es relativamente sencillo identificar al responsable, la IA introduce el "problema de las muchas manos" donde la responsabilidad se diluye entre programadores, empresas, usuarios y el propio sistema.
      
      Actualmente, el consenso es que la responsabilidad recae en los humanos involucrados, ya que la IA carece de intencionalidad moral. Sin embargo, persiste la pregunta: ¿exactamente quién debe responder? Por ejemplo, en accidentes de vehículos autónomos, ¿es culpable el fabricante, el propietario o ambos? El caso de Uber en 2018, donde un vehículo autónomo atropelló a un peatón, evidenció la urgencia de clarificar esta cuestión, aunque se resolvió sin establecer un precedente significativo.
      
      Algunos proponen una "personalidad electrónica" para sistemas avanzados de IA, pero esto resulta prematuro dado que las máquinas actuales no comprenden el significado moral de sus acciones. Sin conciencia para rectificar o arrepentirse, responsabilizar directamente a la IA tendría poco sentido punitivo.
      
      La posición predominante sostiene que la responsabilidad debe distribuirse entre:
      
      Programadores: por errores de diseño previsibles
      
      Empresas: por implementación sin controles adecuados
      
      Usuarios: por uso indebido
      
      Esta problemática ha impulsado el concepto de "rendición de cuentas algorítmica", adoptado por organizaciones como la OCDE y la Comisión Europea, que demanda capacidad de explicación y responsabilidad por los resultados de sistemas de IA, incluyendo compensación por daños, análisis de fallos e intervención humana cuando sea necesario.
      
      En términos filosóficos, la IA actual no califica como agente moral capaz de discernir entre bien y mal. Similar a un animal adiestrado, si un algoritmo "muerde", la responsabilidad recae en sus propietarios o creadores.
      
      En conclusión, la era de la IA requiere nuevos enfoques éticos y jurídicos que establezcan líneas claras de responsabilidad a lo largo de la cadena de diseño, implementación y uso. Esto evitará un vacío ético donde todos se eximan de responsabilidad culpando a "la computadora". La IA no libera a sus creadores y usuarios de la responsabilidad moral, sino que intensifica su compromiso ético.`,
  },
  {
    numero: 5,
    titulo: "El impacto en la educación y la formación académica",
    autorAnaliza: "Cristian Danilo Tobón Marulanda",
    tituloArticulo: "Retos Éticos y Culturales de la IA en la educación",
    tipo: "Artículo de divulgación académica",
    autores: "Magistrum University",
    publicadoEn: "Magistrum University",
    palabrasClave: `Inteligencia artificial
      Educación
      Ética
      Privacidad de datos
      Sesgo algorítmico
      Brecha digital
      Integridad académica
      Dependencia tecnológica`,
    referencia:
      "Magistrum University. (2025, febrero 4). Retos éticos y culturales de la IA en la educación. Magistrum University. https://magistrum.university/retos-eticos-y-culturales-de-la-ia-en-la-educacion/",
    resumen: `La inteligencia artificial está transformando el ámbito educativo, ofreciendo herramientas que personalizan el aprendizaje, proporcionan retroalimentación inmediata y automatizan tareas administrativas. Estas innovaciones permiten a los docentes enfocarse en aspectos más críticos de la enseñanza, como la atención personalizada y el desarrollo emocional de los estudiantes.
      
      Sin embargo, la implementación en la educación plantea varios desafíos éticos
      
      Privacidad de los datos: la personalización del aprendizaje mediante Ia requiere la recopilación de grandes cantidades de datos estudiantiles, lo que genera preocupaciones sobre cómo se recopilan, almacenan y utilizan estos datos. Es esencial que las instituciones educativas adopten estándares estrictos de protección de datos y cumplan con regulaciones como el GDPR.
      
      Sesgo algorítmico: los algoritmos de la IA pueden perpetuar o incluso amplificar los sesgos existentes en los datos utilizados para entrenarlos, lo que puede llevar a resultados injustos o discriminatorios. Es crucial desarrollar algoritmos transparentes y diversos que sean evaluados y auditados regularmente para identificar y corregir sesgos.
      
      Dependencia excesiva de tecnología: Aunque la IA puede automatizar muchas tareas, depender demasiado de ella puede deshumanizar la educación y disminuir el papel crítico del docente. Es fundamental equilibrar el uso de la IA con la intervención humana, asegurando que la tecnología complemente, pero no reemplace, a los educadores.
      
      Además, la IA plantea retos en cuanto a la integridad académica. Herramientas como ChatGPT pueden generar textos originales, lo que dificulta la detección de plagio y cuestiona las políticas tradicionales contra la copia.
      
      Para abordar estos desafíos, se proponen varias soluciones
      
      Formación en ética y uso responsable de la IA: Es vital educar a estudiantes y docentes sobre el uso de la IA, promoviendo la integridad académica y el pensamiento crítico.
      
      Regulación y políticas claras: Estableces marcos legales que protejan los derechos de los estudiantes y promuevan el uso responsable de la IA en la educación.
      
      Equidad en el acceso a la tecnología: Garantizar que todos los estudiantes y centros educativos tengan acceso equitativo a las tecnologías avanzadas, evitando que la IA aumente las desigualdades educativas.
      
      En conclusion, la IA tiene el potencial de enriquecer la educación, pero su implementaición debe ser ética, equitativa y centrada en el ser humano. Es esencial que las instituciones educativas, los desarrolladores de tecnologia y los responsables de politicas trabajen juntos para integrar la IA de manera responsable en el sistema educativo`,
  },
  {
    numero: 6,
    titulo: "La relación entre IA y creatividad humana",
    autorAnaliza: "Santiago Agudelo Durango",
    tituloArticulo: "Impacto de la IA en la creatividad humana.",
    tipo: "Articulo académico.",
    autores: "Smarttie",
    publicadoEn: "2003 - actualizado en 2024",
    palabrasClave: "IA, creatividad, industria, educación.",
    referencia:
      "El Impacto de la IA en el Proceso Creativo Humano. (2024, octubre 25). Smarttie. https://blog.smarttie.com.mx/impacto-ia-proceso-creativo-humano/",
    resumen: `En el siguiente artículo, se profundizara el tema de la creatividad con ayuda de más referencias y artículos académicos que nos ayuden a la mejora constante y cuerpo de este artículo, se llevara a cabo la interpretación de la creatividad humana con la IA, siendo esto algo importante a medida que crece, la humanidad teniendo una dependencia enorme a esta nueva herramienta tecnológica porque especialmente los alumnos son aquellos que más se benefician de esta herramienta, perdiendo capacidad de pensar, de realizar sus actividades sin necesidad de esforzarse, esto de manera general no es correcto, pero es la era que nos toca, el autor profundiza esa parte del proceso creativo, sin embargo, para la continuación de este articulo nos basaremos en más artículos que profundice con estadísticas y coherencia este proceso que viene creciendo, por el momento daremos una leve opinión sobre el tema basándonos en articulo indicado.
      
      Una de las principales acontecimientos es la IA en la vida diaria en la vida de las personas, esto es una de las cosas que nos ha llevado a depender de esta herramienta tecnológica, según la estadística que nos proporciona el articulo es que el crecimiento del uso de la IA en la industria creativa va en aumento en el 2025 con un 30%, esto debido a la gran desentendencia que se tiene a esa herramienta tecnológica esto para diferentes procesos además que viéndolo de un punto de vista coherente para las empresas, es mejor contratar una IA que haga las cosas más fáciles que contratar a humanos, esto en términos generales es mejor, sin embargo, se pierde la calidad de vida de las personas. De este modo nos indica el artículo que la productividad de la empresa Accenture reporto un aumento en un 40% la productividad claramente mi opinión acerca de esto es debido a que las personas pueden realizar sus tareas de forma más rápida, lo cual es muy contradictorio con lo anterior porque si en cuestión se contrata a una persona para realizar tareas que la IA no puede hacer lo mejor que puede hacer es no utilizar la misma, pero esto es una ayuda para la investigación y para ser mas eficientes en algunos aspectos de la vida laboral. De igual manera nos indica el autor que la adopción por parte de los artistas es del 37% puede ser que las cosas artísticas ya no sean como antes, únicas, especiales, hechas para la persona de forma única esto debido a que la IA logra que las personas la utilicen para realizar sus trabajos artísticos y este porcentaje va en aumento.
      
      Esto autor en esencia nos indica lo que ha influido la IA en el área de la creatividad que es la esencia de nuestro estudio. Inicia con la música el indica que hay una IA que compone música para videojuegos y películas, pero a opinión personal, la IA ha sido una gran ayuda en muchos campos ejemplo en este porque he evidenciado varias películas las cuales han sido creadas por humanos utilizando cosas de su entorno, mas eso cosas que su creatividad indique, cosas que nunca pensamos que era un sonido tan común ahora con la IA se puede crear este tipo de cosas sin tanto esfuerzo solo buscando crear e ir modificando estas piezas al gusto de cada persona o del acontecimiento dando como generalidad que algunos sonidos ya no son compuestos por nosotros. En la literatura es en otro que está reemplazando la IA porque el autor del articulo indica que hay una IA que puede crear texto coherente, texto legible e interesante para el usuario siendo una de las mayores preocupaciones que la literatura siempre ha sido muy valorada por los medios y más por las personas que se ha hecho por siglos por los humanos y que ahora se haga por una IA que no piensa, que no siente, que no sabe solo lo que le hemos enseñado son cosas que debemos reflexionar sobre el manejo que le damos a la IA.`,
  },
  {
    numero: 7,
    titulo: "Los desafíos en la interacción entre humanos e IA",
    autorAnaliza: "Juan Pablo Osorio Giraldo",
    tituloArticulo:
      "Retos en la interacción entre los seres humanos y la inteligencia artificial",
    tipo: "Artículo académico / Ensayo de análisis ético",
    autores: "Armando Hernández Cruz",
    publicadoEn: `Libro de Memorias del Congreso de Ciencia, Tecnología y Sociedad: Conectando saberes, compartiendo ciencia 
      Publicado por Ciencia Latina, 30 de noviembre de 2023`,
    palabrasClave:
      "Inteligencia artificial, interacción humano-máquina, ética tecnológica, privacidad, automatización, transparencia algorítmica",
    referencia:
      "Hernández Cruz, A. (2023). Retos en la interacción entre los seres humanos y la inteligencia artificial. En Libro de Memorias del Congreso de Ciencia, Tecnología y Sociedad: Conectando saberes, compartiendo ciencia (pp. 117–119). Ciencia Latina. https://doi.org/10.37811/cli_w986",
    resumen: `El autor destaca que la IA tiene el potencial de enriquecer la inteligencia humana al proporcionar acceso a vastas cantidades de información y asistencia personalizada. Sin embargo, también identifica varios desafíos éticos y sociales:
      
      Privacidad y seguridad de los datos: La dependencia de la IA en grandes volúmenes de datos plantea preocupaciones sobre la protección de la información personal y el uso indebido de los datos.
      
      Impacto en el empleo y la economía: La automatización de tareas por parte de la IA podría desplazar empleos humanos, generando desigualdades económicas y sociales.
      
      Confiabilidad y transparencia: La opacidad de los algoritmos de IA puede llevar a decisiones injustas o discriminatorias, subrayando la necesidad de desarrollar sistemas transparentes y responsables.
      
      Desde la perspectiva de la ética profesional, el autor enfatiza la importancia de establecer marcos legales y éticos sólidos que guíen el desarrollo y la implementación de la IA. Esto incluye garantizar la equidad, la justicia y la protección de los derechos humanos en todas las aplicaciones de la IA.
      
      Este referente es particularmente relevante para estudiantes y profesionales interesados en comprender los aspectos éticos de la tecnología, ya que proporciona una visión crítica de cómo la IA afecta diversas dimensiones de la sociedad y la necesidad de abordarlas con responsabilidad y conciencia ética.`,
  },
  {
    numero: 8,
    titulo: "Referencias Bibliográficas",
    autorAnaliza: "",
    tituloArticulo: "",
    tipo: "",
    autores: "",
    publicadoEn: "",
    palabrasClave: "",
    referencia: "",
    resumen: `González Arencibia, Mario, & Martínez Cardero, Dagmaris. (2020). Dilemas éticos en el escenario de la inteligencia artificial. Economía y Sociedad, 25(57), 93-109. https://dx.doi.org/10.15359/eys.25-57.5
      
      Oviedo Guevara, L. G. . (2023). Dilema de la inteligencia artificial: pensamiento crítico y generaciones digitales. Realidad Y Reflexión, 1(58), 69–83. https://doi.org/10.5377/ryr.v1i58.17397
      
      Ramírez Plascencia, D., & Alonzo González, R. M. (2024). Ponderando los dilemas éticos y legales de la Inteligencia Artificial. Textos Y Contextos, 1(29). Recuperado a partir de https://revistadigital.uce.edu.ec/index.php/CONTEXTOS/article/view/7001
      
      Muriel, F. A. Z., Zapata, S. M., & Zapata, D. M. (2024). Dilemas éticos planteados por el auge de la inteligencia artificial: una mirada desde el transhumanismo. Dialnet. https://dialnet.unirioja.es/servlet/articulo?codigo=9839672
      
      Cantú-Martínez, P. C. (2024). Inteligencia artificial y sus connotaciones éticas. Revista Iberoamericana De Bioética, (25), 01–11. https://doi.org/10.14422/rib.i25.y2024.008
      
      Bejarano, J. J. B. (2024, 24 octubre). Ética de la IA autónoma: Decisiones éticas en manos de algoritmos. Universo-IA.com. https://universo-ia.com/etica-de-la-ia-autonoma-decisiones-eticas-en-manos-de-algoritmos/#:~:text=Responsabilidad%20en%20las%20decisiones%20de,la%20IA
      
      Grigore, A. E. (2022). Derechos humanos e inteligencia artificial. IUS ET SCIENTIA, 8(1), 164–175. https://doi.org/10.12795/IETSCIENTIA.2022.i01.10`,
  },
];

export default function Referencias() {
    const location = useLocation();
    const { page } = queryString.parse(location.search);
    const initialPage = parseInt(page) || 0;
    const [index, setIndex] = useState(initialPage);
    const [animacion, setAnimacion] = useState("fadeIn");
  
    const ref = referencias[index];
  
    const cambiarReferencia = (dir) => {
      setAnimacion("slideOut");
      setTimeout(() => {
        const nuevaPos = (index + dir + referencias.length) % referencias.length;
        setIndex(nuevaPos);
        setAnimacion("slideIn");
      }, 200);
    };
  
    const extraerURL = (texto) => {
      const match = texto.match(/https?:\/\/[^\s]+/);
      return match ? match[0] : null;
    };
  
    const textoSinURL = (texto) => {
      return texto.replace(/https?:\/\/[^\s]+/, "").trim();
    };
  
    return (
      <div className="referencias-container">
        <button className="btn-lateral fixed izquierda" onClick={() => cambiarReferencia(-1)}>
          &larr;
        </button>
  
        <div className={`referencia-card ${animacion}`}>
          <h2>Referente #{ref.numero}</h2>
          <h3>{ref.titulo}</h3>
  
          {ref.autorAnaliza && (
            <div className="referencia-section">
              <strong>Elaborado/Analizado por:</strong> {ref.autorAnaliza}
            </div>
          )}
          {ref.tituloArticulo && (
            <div className="referencia-section">
              <strong>Título del artículo:</strong> {ref.tituloArticulo}
            </div>
          )}
          {ref.tipo && (
            <div className="referencia-section">
              <strong>Tipo:</strong> {ref.tipo}
            </div>
          )}
          {ref.autores && (
            <div className="referencia-section">
              <strong>Autores:</strong> {ref.autores}
            </div>
          )}
          {ref.publicadoEn && (
            <div className="referencia-section">
              <strong>Publicado en:</strong> {ref.publicadoEn}
            </div>
          )}
          {ref.palabrasClave && (
            <div className="referencia-section">
              <strong>Palabras clave:</strong> {ref.palabrasClave}
            </div>
          )}
          <div className="referencia-section">
            <strong>Referencia:</strong>
            <span>
              {textoSinURL(ref.referencia)}{" "}
              {extraerURL(ref.referencia) && (
                <a href={extraerURL(ref.referencia)} target="_blank" rel="noreferrer">
                  {extraerURL(ref.referencia)}
                </a>
              )}
            </span>
          </div>
          <div className="referencia-section">
            <strong>Resumen / Análisis:</strong>
            <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
              {ref.resumen}
            </pre>
          </div>
        </div>
  
        <button className="btn-lateral fixed derecha" onClick={() => cambiarReferencia(1)}>
          &rarr;
        </button>
      </div>
    );
  }
