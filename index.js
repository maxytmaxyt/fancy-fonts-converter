// index.js - Fancy Fonts Converter

// Mapping für Bold
const boldMap = {
  a:'𝐚', b:'𝐛', c:'𝐜', d:'𝐝', e:'𝐞', f:'𝐟', g:'𝐠', h:'𝐡',
  i:'𝐢', j:'𝐣', k:'𝐤', l:'𝐥', m:'𝐦', n:'𝐧', o:'𝐨', p:'𝐩',
  q:'𝐪', r:'𝐫', s:'𝐬', t:'𝐭', u:'𝐮', v:'𝐯', w:'𝐰', x:'𝐱',
  y:'𝐲', z:'𝐳',
  A:'𝐀', B:'𝐁', C:'𝐂', D:'𝐃', E:'𝐄', F:'𝐅', G:'𝐆', H:'𝐇',
  I:'𝐈', J:'𝐉', K:'𝐊', L:'𝐋', M:'𝐌', N:'𝐍', O:'𝐎', P:'𝐏',
  Q:'𝐐', R:'𝐑', S:'𝐒', T:'𝐓', U:'𝐔', V:'𝐕', W:'𝐖', X:'𝐗',
  Y:'𝐘', Z:'𝐙'
};

// Mapping für Italic
const italicMap = {
  a:'𝑎', b:'𝑏', c:'𝑐', d:'𝑑', e:'𝑒', f:'𝑓', g:'𝑔', h:'ℎ',
  i:'𝑖', j:'𝑗', k:'𝑘', l:'𝑙', m:'𝑚', n:'𝑛', o:'𝑜', p:'𝑝',
  q:'𝑞', r:'𝑟', s:'𝑠', t:'𝑡', u:'𝑢', v:'𝑣', w:'𝑤', x:'𝑥',
  y:'𝑦', z:'𝑧',
  A:'𝐴', B:'𝐵', C:'𝐶', D:'𝐷', E:'𝐸', F:'𝐹', G:'𝐺', H:'𝐻',
  I:'𝐼', J:'𝐽', K:'𝐾', L:'𝐿', M:'𝑀', N:'𝑁', O:'𝑂', P:'𝑃',
  Q:'𝑄', R:'𝑅', S:'𝑆', T:'𝑇', U:'𝑈', V:'𝑉', W:'𝑊', X:'𝑋',
  Y:'𝑌', Z:'𝑍'
};

// Mapping für Script
const scriptMap = {
  a:'𝒶', b:'𝒷', c:'𝒸', d:'𝒹', e:'ℯ', f:'𝒻', g:'ℊ', h:'𝒽',
  i:'𝒾', j:'𝒿', k:'𝓀', l:'ℓ', m:'𝓂', n:'𝓃', o:'ℴ', p:'𝓅',
  q:'𝓆', r:'𝓇', s:'𝓈', t:'𝓉', u:'𝓊', v:'𝓋', w:'𝓌', x:'𝓍',
  y:'𝓎', z:'𝓏',
  A:'𝒜', B:'ℬ', C:'𝒞', D:'𝒟', E:'ℰ', F:'ℱ', G:'𝒢', H:'ℋ',
  I:'ℐ', J:'𝒥', K:'𝒦', L:'ℒ', M:'ℳ', N:'𝒩', O:'𝒪', P:'𝒫',
  Q:'𝒬', R:'ℛ', S:'𝒮', T:'𝒯', U:'𝒰', V:'𝒱', W:'𝒲', X:'𝒳',
  Y:'𝒴', Z:'𝒵'
};

// Mapping für Double-struck (𝔸𝔹…)
const doubleMap = {
  a:'𝕒', b:'𝕓', c:'𝕔', d:'𝕕', e:'𝕖', f:'𝕗', g:'𝕘', h:'𝕙',
  i:'𝕚', j:'𝕛', k:'𝕜', l:'𝕝', m:'𝕞', n:'𝕟', o:'𝕠', p:'𝕡',
  q:'𝕢', r:'𝕣', s:'𝕤', t:'𝕥', u:'𝕦', v:'𝕧', w:'𝕨', x:'𝕩',
  y:'𝕪', z:'𝕫',
  A:'𝔸', B:'𝔹', C:'ℂ', D:'𝔻', E:'𝔼', F:'𝔽', G:'𝔾', H:'ℍ',
  I:'𝕀', J:'𝕁', K:'𝕂', L:'𝕃', M:'𝕄', N:'ℕ', O:'𝕆', P:'ℙ',
  Q:'ℚ', R:'ℝ', S:'𝕊', T:'𝕋', U:'𝕌', V:'𝕍', W:'𝕎', X:'𝕏',
  Y:'𝕐', Z:'ℤ'
};

// Allgemeine Funktion zum Umwandeln
function convert(text, map) {
  return text.split('').map(c => map[c] || c).join('');
}

// Export
module.exports = {
  toBold: text => convert(text, boldMap),
  toItalic: text => convert(text, italicMap),
  toScript: text => convert(text, scriptMap),
  toDouble: text => convert(text, doubleMap)
};

// Beispiel direkt im Code
if (require.main === module) {
  const text = "Hello World!";
  console.log("Bold:   ", module.exports.toBold(text));
  console.log("Italic: ", module.exports.toItalic(text));
  console.log("Script: ", module.exports.toScript(text));
  console.log("Double: ", module.exports.toDouble(text));
}
