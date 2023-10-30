---
import Logocad from '../components/logo-CAD.astro';
import CodeEditor from '../CodeEditor';

let tuCodigo = ''; // Inicializa el código vacío

function tuFuncionDeCambio(nuevoCodigo) {
  tuCodigo = nuevoCodigo; // Actualiza el código cuando cambia
}
---

<div class="hero">
  <div class="hero-left">
    <div class="cont-comp-cat">
      <Logocad class="logocad-styles"><Logocad /></Logocad>
    </div>
    <h1>Change as you need.</h1>
    <button class="btn btn-primary">Accion</button>
  </div>
  <div class="hero-right">
    <CodeEditor code={tuCodigo} onChange={tuFuncionDeCambio} />
    <pre><code>{tuCodigo}</code></pre>
  </div>
</div>

<style>
  .hero {
    display: flex;
  }
  .cont-comp-cat {
    display: flex;
  }
  .hero-left {
    flex: 1;
    padding: 20px;
  }

  .hero-right {
    flex: 1;
    padding: 20px;
    background-color: #f0f0f0;
  }
</style>
