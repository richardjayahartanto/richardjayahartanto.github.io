const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'css', 'custom.css'), 'utf8');

test('uses the Apple icon for the accessible brand link', () => {
    assert.match(html, /<a class="brand"[\s\S]*?<img class="brand-icon" src="img\/apple-icon\.png" alt=""/);
    assert.doesNotMatch(html, /<span class="brand-mark">RJH<\/span>/);
    assert.match(css, /\.brand-icon\s*\{/);
});

test('provides an accessible WhatsApp action for Richard', () => {
    assert.match(html, /class="whatsapp-fab"/);
    assert.match(html, /href="https:\/\/wa\.me\/6287808377877"/);
    assert.match(html, /aria-label="Message Richard on WhatsApp"/);
});

test('keeps the requested capability labels and removes retired tools', () => {
    assert.match(html, /<span>AI coding tools<\/span>/);
    assert.match(html, /<span>Laravel<\/span>/);
    assert.match(html, /<span>System integration<\/span>/);
    assert.doesNotMatch(html, /<span>Cursor<\/span>|<span>Copilot<\/span>/);
    assert.doesNotMatch(html, /<span>Laravel 11 \/ 12<\/span>/);
    assert.doesNotMatch(html, /<span>Photoshop<\/span>|<span>Illustrator<\/span>|<span>InDesign<\/span>|<span>CorelDraw<\/span>|<span>Flash<\/span>/);
    assert.doesNotMatch(html, /Software Accurate integration/);
});
