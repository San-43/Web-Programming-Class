// Datos del ciclo ENERO–JUNIO 2025 (según tu captura)
const semester = {
  title: "Enero–Junio 2025",
  rows: [
    { asignatura: "BASES DE DATOS DISTRIBUIDAS", rep: 0, cal: 8,  res: "A",  tipo: "OR", examen: "06/05/2025" },
    { asignatura: "AUTÓMATAS Y COMPILADORES",   rep: 0, cal: 9,  res: "A",  tipo: "OR", examen: "07/05/2025" },
    { asignatura: "REDES DE COMPUTADORAS",      rep: 0, cal: 8,  res: "A",  tipo: "OR", examen: "08/05/2025" },
    { asignatura: "SISTEMAS BASADOS EN CONOCIMIENTO", rep: 0, cal: 8, res: "A", tipo: "OR", examen: "06/05/2025" },
    { asignatura: "FUNDAMENTOS DE METODOLOGÍA DE LA INVESTIGACIÓN", rep: 0, cal: 7, res: "A", tipo: "OR", examen: "12/05/2025" },
    { asignatura: "EN OTRAS PALABRAS… LENGUA EXTRANJERA", rep: 0, cal: 6, res: "NA", tipo: "OR", examen: "09/05/2025" },
    { asignatura: "EN OTRAS PALABRAS… LENGUA EXTRANJERA", rep: 1, cal: 0, res: "NP", tipo: "EX", examen: "12/06/2025" }
  ]
};

// Utilidades
const sum = (a, b) => a + b;
const fmt = n => n.toLocaleString("es-MX", { maximumFractionDigits: 2 });
const byIncluded = r => r.cal > 0 && r.res !== "NP";

// Render
(function render() {
  const app = document.getElementById("app");
  const included = semester.rows.filter(byIncluded);
  const promedio = included.length
    ? included.map(r => r.cal).reduce(sum, 0) / included.length
    : 0;
  const promedioRedondeado = Math.round(promedio);

  const cls = r =>
    r.res === "A"  ? "ok"   :
    r.res === "NA" ? "warn" : // no acreditada
    r.res === "NP" ? "bad"  : "";

  const table = `
    <table aria-label="Calificaciones del semestre">
      <thead>
        <tr>
          <th>Asignatura</th>
          <th>Rep.</th>
          <th>Cal.</th>
          <th>Res.</th>
          <th>Tipo</th>
          <th>Examen</th>
        </tr>
      </thead>
      <tbody>
        ${semester.rows.map(r => `
          <tr>
            <td>${r.asignatura}</td>
            <td>${r.rep}</td>
            <td>${r.cal}</td>
            <td class="${cls(r)}">${r.res}</td>
            <td>${r.tipo}</td>
            <td>${r.examen}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6">
            Promedio del ciclo (sin NP): ${fmt(promedio)} &nbsp;•&nbsp; Redondeado: <b>${promedioRedondeado}</b>
          </td>
        </tr>
      </tfoot>
    </table>
  `;

  app.innerHTML = table;
})();
