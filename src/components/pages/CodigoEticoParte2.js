import React from "react";
import "./CodigoEticoParte2.css";
import { Link } from 'react-router-dom';

const CodigoEticoParte2 = () => {
  return (
    <div className="container-etica">
      <div className="nav-buttons">
        <Link to="/codigo-etico-1" className="nav-arrow left">
          &larr; Anterior
        </Link>
        <Link to="/codigo-etico-3" className="nav-arrow right">
          Siguiente &rarr;
        </Link>
      </div>
      <div className="nav-buttons">
        <Link to="/codigo-etico-1" className="nav-arrow left">
          &larr; Anterior
        </Link>
        <Link to="/codigo-etico-3" className="nav-arrow right">
          Siguiente &rarr;
        </Link>
      </div>
      <h1>
        Elementos Éticos Aplicables a la Ingeniería Informática y Electrónica
      </h1>

      <table className="etica-table">
        <thead>
          <tr>
            <th>Elemento del Código Ético</th>
            <th>Aplicación en la Profesión</th>
            <th>Radio de Acción Ético Profesional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Responsabilidad Social</td>
            <td>
              Diseñar sistemas que beneficien a la sociedad y no generen
              exclusión o dependencia.
            </td>
            <td>
              Velar porque las soluciones tecnológicas respeten la equidad y el
              bienestar de todos los usuarios.
            </td>
          </tr>
          <tr>
            <td>2. Respeto por la Vida y la Seguridad</td>
            <td>
              Crear tecnologías que no pongan en riesgo la vida humana o la
              integridad física.
            </td>
            <td>
              Asegurar que los sistemas electrónicos e informáticos sean
              seguros, probados y confiables.
            </td>
          </tr>
          <tr>
            <td>3. Protección del Medio Ambiente</td>
            <td>
              Diseñar hardware y sistemas que generen bajo impacto ambiental.
            </td>
            <td>
              Promover el reciclaje, reducir la obsolescencia programada y
              minimizar residuos.
            </td>
          </tr>
          <tr>
            <td>4. Confidencialidad y Protección de Datos</td>
            <td>
              Manejar con ética la información personal y sensible de los
              usuarios.
            </td>
            <td>
              Implementar políticas de seguridad, cifrado y protección de bases
              de datos.
            </td>
          </tr>
          <tr>
            <td>5. Honestidad Profesional</td>
            <td>
              Informar con veracidad sobre el funcionamiento, limitaciones o
              problemas de los sistemas.
            </td>
            <td>
              No falsear resultados técnicos, ni omitir errores que puedan
              perjudicar a terceros.
            </td>
          </tr>
          <tr>
            <td>6. Justicia e Igualdad</td>
            <td>Crear tecnología accesible para todos, sin discriminación.</td>
            <td>
              Diseñar sin sesgos de género, raza, discapacidad o condición
              socioeconómica.
            </td>
          </tr>
          <tr>
            <td>7. Respeto a la Propiedad Intelectual</td>
            <td>No copiar software, planos ni patentes sin autorización.</td>
            <td>
              Usar licencias legales, dar crédito y desarrollar de forma
              original.
            </td>
          </tr>
          <tr>
            <td>8. Lealtad y Transparencia con el Cliente</td>
            <td>
              Ser claro con las capacidades reales del producto o sistema.
            </td>
            <td>
              Comunicar honestamente los alcances técnicos y limitaciones.
            </td>
          </tr>
          <tr>
            <td>9. Cumplimiento de Normas y Leyes</td>
            <td>Seguir estándares nacionales e internacionales.</td>
            <td>
              No participar en actividades ilegales como espionaje o hackeo.
            </td>
          </tr>
          <tr>
            <td>10. Desarrollo Profesional Continuo</td>
            <td>
              Mantenerse actualizado con tecnologías emergentes y buenas
              prácticas éticas.
            </td>
            <td>Participar en cursos, capacitaciones y grupos técnicos.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CodigoEticoParte2;
