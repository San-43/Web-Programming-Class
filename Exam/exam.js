const BASE = {
    acciones: { nombre: 'Acciones', riesgo: 0.70, retorno: 0.10 },
    bonos: { nombre: 'Bonos', riesgo: 0.30, retorno: 0.05 },
    cripto: { nombre: 'Criptomonedas', riesgo: 0.90, retorno: 0.18 }
};

const $ = id => document.getElementById(id);
const fmtPct = x => (x * 100).toFixed(1) + '%';

function calcular() {
    const tipo = $('tipo').value;
    const base = BASE[tipo];
    let monto = Number($('monto').value || 0);
    let years = Number($('anios').value || 0);
    if (monto < 100) { $('riesgo').textContent = '—'; $('retorno').textContent = '—'; $('reco').textContent = 'Ingrese un monto válido.'; return; }

    let riesgo = base.riesgo;
    let retorno = base.retorno;

    if (monto < 10000) { riesgo += 0.05; retorno += 0.02; }
    else if (monto > 100000) { riesgo -= 0.05; retorno -= 0.01; }

    if (years < 2) { riesgo += 0.05; retorno -= 0.005; }
    else if (years > 5) { riesgo -= 0.05; retorno += 0.01; }

    riesgo = Math.max(0, Math.min(1, riesgo));
    retorno = Math.max(0, retorno);

    $('tipoLbl').textContent = BASE[tipo].nombre + ` · ${monto.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })} · ${years} años`;
    $('riesgo').textContent = fmtPct(riesgo);
    $('retorno').textContent = fmtPct(retorno);

    let rec = '';
    if (riesgo >= 0.75) rec = 'Riesgo alto: diversifique y considere alargar el plazo.';
    else if (riesgo <= 0.35) rec = 'Riesgo bajo: considere aumentar el horizonte.';
    else rec = 'Riesgo medio: adecuado para la mayoría de los inversionistas.';

    if (tipo === 'cripto' && years < 2) rec += ' Para cripto, un horizonte corto puede ser muy volátil.';
    if (tipo === 'bonos' && years > 5) rec += ' En bonos, evalúe una escalera por vencimientos.';

    $('reco').textContent = rec;
}

$('calc').addEventListener('click', calcular);
$('reset').addEventListener('click', () => {
    $('tipo').value = 'acciones'; $('monto').value = 10000; $('anios').value = 5;
    $('tipoLbl').textContent = '—'; $('riesgo').textContent = '—'; $('retorno').textContent = '—'; $('reco').textContent = '—';
});

calcular();