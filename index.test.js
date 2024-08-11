const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('HTML structure', () => {
    // Cargar el archivo HTML
    const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
    
    // Crear una instancia de JSDOM
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Verificar el título
    expect(document.title).toBe('Final | Onell Dishmey');

    // Verificar el contenido del <h1>
    const titleElement = document.getElementById('title');
    expect(titleElement.textContent).toBe('Final');

    // Verificar el contenido del <h2>
    const descriptionElement = document.getElementById('by');
    expect(descriptionElement.textContent).toBe('Por On3l7d15h (Onell Dishmey)');

    // Verificar el contenido del <h3>
    const idElement = document.getElementById('id');
    expect(idElement.textContent).toBe('202010179');
});