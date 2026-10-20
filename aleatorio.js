// Funções exportadas para personalizar o jogo com nomes e afirmações aleatórias.
const nomes = ['Alex', 'Luna', 'Kai', 'Íris', 'Noah', 'Maya'];
const afirmacoes = [
  'Descansar também faz parte de cuidar de si.',
  'Pequenas atitudes podem melhorar o dia.',
  'Cuidar da mente importa tanto quanto cuidar do corpo.',
  'Equilíbrio não significa fazer tudo perfeitamente.'
];
export function aleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}
export function criarPersonagem() {
  return { nome: aleatorio(nomes), afirmacao: aleatorio(afirmacoes) };
}
