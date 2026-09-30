function ascii_to_hexa(str) {
  return Array.from(new TextEncoder().encode(str), byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase();
}

function hexa_to_string(hex) {
  // Remover espaços se o usuário colar algo como "67 36 54"
  hex = hex.replace(/\s/g, '');
  if (!/^(?:[0-9a-f]{2})*$/i.test(hex)) return null;
  const bytes = new Uint8Array(hex.match(/.{2}/g)?.map(byte => parseInt(byte, 16)) || []);
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } catch (_) {
    return null;
  }
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
  const decoded = hexa_to_string(value);
  if (decoded !== null) stringInput.value = decoded;
});

// Exemplo inicial
const initialHex = "48656c6c6f";
hexInput.value = initialHex;
stringInput.value = hexa_to_string(initialHex);
