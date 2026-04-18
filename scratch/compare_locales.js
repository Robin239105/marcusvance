const en = require('./src/shared/config/locales/en.js').default;
const fr = require('./src/shared/config/locales/fr.js').default;
const de = require('./src/shared/config/locales/de.js').default;

function compareKeys(obj1, obj2, prefix = '') {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  const missingIn2 = keys1.filter(k => !keys2.includes(k));
  const missingIn1 = keys2.filter(k => !keys1.includes(k));
  
  if (missingIn2.length > 0) console.log(`Missing in ${prefix || 'target'}:`, missingIn2.map(k => prefix + k));
  if (missingIn1.length > 0) console.log(`Extra in ${prefix || 'target'}:`, missingIn1.map(k => prefix + k));
  
  keys1.forEach(k => {
    if (obj2[k] && typeof obj1[k] === 'object' && !Array.isArray(obj1[k])) {
      compareKeys(obj1[k], obj2[k], prefix + k + '.');
    }
  });
}

console.log('--- EN vs FR ---');
compareKeys(en, fr);
console.log('\n--- EN vs DE ---');
compareKeys(en, de);
