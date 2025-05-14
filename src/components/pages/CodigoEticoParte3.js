import React from 'react';
import { Link } from 'react-router-dom';
import './CodigoEtico.css'; // Reutiliza tu CSS actual

function CodigoEtico3() {
  return (
    <div className="etica-container">
      <div className="nav-buttons">
        <Link to="/codigo-etico-2" className="nav-arrow left">
          &larr; Anterior
        </Link>
        <Link to="/codigo-etico-1" className="nav-arrow right">
          Siguiente &rarr;
        </Link>
      </div>

      <h1>Aplicación del Código Ético en Ingeniería Informática</h1>

      <section className="etica-section">
        <h2>Responsabilidad y Propósito Comunitario</h2>
        <p>
          El ingeniero de informática debe asumir la totalidad de la responsabilidad de su labor,
          garantizando que cada sistema, programa o servicio creado favorezca el bienestar humano y social.
          Esto conlleva valorar y reducir los peligros para la seguridad, la privacidad y el bienestar de las personas,
          siempre dando prioridad al interés general sobre los intereses personales o corporativos.
        </p>
      </section>

      <section className="etica-section">
        <h2>Honestidad, Transparencia y Veracidad</h2>
        <p>
          Es fundamental la honestidad: el profesional debe mantener la transparencia en relación con las habilidades,
          restricciones y posibles peligros de los sistemas que elabora. Esto implica identificar fallos, rectificarlos de inmediato
          y prevenir cualquier tipo de manipulación, alteración de datos o conflicto de intereses no declarado.
        </p>
      </section>

      <section className="etica-section">
        <h2>Secreto Profesional y Salvaguarda de los Datos Personales</h2>
        <p>
          La obligación de preservar el secreto profesional es esencial: cualquier información a la que se tiene acceso por razones laborales
          debe ser manejada con la máxima discreción, respetando la privacidad y los derechos esenciales de los usuarios.
        </p>
      </section>

      <section className="etica-section">
        <h2>Justicia, No Discriminación y Accesibilidad</h2>
        <p>
          El respeto de los derechos humanos requiere que los sistemas de computación sean creados y funcionen sin distinciones de género,
          etnia, discapacidad, orientación sexual, religión o cualquier otro aspecto. Además, el ingeniero tiene la responsabilidad de asegurar
          que la tecnología esté al alcance de todos, en particular para los grupos más vulnerables o desfavorecidos, luchando de manera activa
          contra la brecha digital.
        </p>
      </section>

      <section className="etica-section">
        <h2>Legalidad y Cumplimiento de las Reglas</h2>
        <p>
          Es obligatorio respetar la ley en vigor, particularmente en lo que respecta a la protección de datos personales y derechos digitales.
          No obstante, la ética profesional demanda acatar la ley, fomentando de manera activa la justicia social y la protección de la dignidad humana.
        </p>
      </section>

      <section className="etica-section">
        <h2>Derechos Humanos y Ética Informática</h2>
        <ul>
          <li>Crear sistemas que aseguren la privacidad y la autorización informada de los usuarios.</li>
          <li>Notificar a las autoridades o a los individuos afectados acerca de cualquier riesgo real o posible originado por sistemas de computación, dando prioridad a la seguridad y el bienestar de la población.</li>
          <li>No involucrarse en iniciativas que vulneren los derechos humanos o que puedan emplearse para supervisión a gran escala, discriminación o manipulación social.</li>
        </ul>
      </section>

      <section className="etica-section">
        <h2>Conducta Ética en la Práctica Profesional</h2>
        <ul>
          <li>Valorar la repercusión social y moral de sus acciones y productos.</li>
          <li>Actuar con autonomía, dignidad y fidelidad, cooperando con compañeros y clientes basándose en el respeto recíproco y la solidaridad laboral.</li>
          <li>Fomentar entornos de trabajo exentos de acoso, discriminación y represalias por manifestar inquietudes éticas.</li>
          <li>Desestimar cualquier tarea que ataque los principios éticos y reportar acciones que violan el código ético.</li>
        </ul>
      </section>

      <section className="etica-section">
        <h2>Conclusión</h2>
        <p>
          Implementar el código ético profesional en Ingeniería Informática implica fusionar la excelencia técnica con la conciencia moral,
          la atención de los derechos humanos y la dedicación al bienestar colectivo. Solo de esta manera, la profesión aporta de manera auténtica
          al avance humano y a una sociedad más equitativa, inclusiva y segura.
        </p>
      </section>
    </div>
  );
}

export default CodigoEtico3;
