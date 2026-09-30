function ascii_to_hexa(str) {
  var arr1 = [];
  for (var n = 0, l = str.length; n < l; n++) {
    var hex = Number(str.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }
  return arr1.join('').toUpperCase();
}

function hexa_to_string(hex) {
  // Remover espaços se o usuário colar algo como "67 36 54"
  hex = hex.replace(/\s/g, '');
  var str = '';
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}

const stringInput = document.getElementById('string-input');
const hexInput = document.getElementById('hex-input');

// Conversão String -> Hex
stringInput.addEventListener('input', (e) => {
  hexInput.value = ascii_to_hexa(e.target.value);
});

// Conversão Hex -> String
hexInput.addEventListener('input', (e) => {
  const value = e.target.value;
  // Só converte se for um hex válido (número par de caracteres)
  if (value.length % 2 === 0) {
    stringInput.value = hexa_to_string(value);
  }
});

// Exemplo inicial
const initialHex = "673654674A644B50724356";
hexInput.value = initialHex;
stringInput.value = hexa_to_string(initialHex);
