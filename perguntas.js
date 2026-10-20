// Cada alternativa tem a chave proxima, criando caminhos diferentes.
export const perguntas = {
  abertura: {
    titulo: 'Um dia cheio de possibilidades',
    texto: 'Bom dia, {nome}! Você acordou com vários planos. {afirmacao} Como quer começar?',
    alternativas: [
      { texto: 'Preparar um café da manhã tranquilo e organizar o dia.', proxima: 'rotina' },
      { texto: 'Sair para uma atividade física de que gosto.', proxima: 'movimento' },
      { texto: 'Conversar com alguém querido antes dos compromissos.', proxima: 'conexao' }
    ]
  },
  rotina: {
    titulo: 'Seu planejamento muda',
    texto: 'A agenda ficou mais cheia do que você esperava. O que faz?',
    alternativas: [
      { texto: 'Reservar pequenas pausas e priorizar o essencial.', proxima: 'pausas' },
      { texto: 'Pedir ajuda para dividir algumas tarefas.', proxima: 'apoio' }
    ]
  },
  movimento: {
    titulo: 'Movimento do seu jeito',
    texto: 'Você pode escolher uma atividade que combina com seu momento. Qual parece mais agradável?',
    alternativas: [
      { texto: 'Caminhar ao ar livre e observar a paisagem.', proxima: 'natureza' },
      { texto: 'Participar de uma atividade em grupo, sem competição.', proxima: 'apoio' }
    ]
  },
  conexao: {
    titulo: 'Uma conversa importante',
    texto: 'Um amigo conta que está sobrecarregado. Como você responde?',
    alternativas: [
      { texto: 'Ouvir com atenção e oferecer companhia.', proxima: 'apoio' },
      { texto: 'Convidar para um passeio tranquilo em um parque.', proxima: 'natureza' }
    ]
  },
  pausas: {
    titulo: 'O fim da tarde chegou',
    texto: 'Depois de cumprir o essencial, você tem um tempo livre. Qual escolha combina com você?',
    alternativas: [
      { texto: 'Desligar as notificações e descansar um pouco.', proxima: 'finalDescanso' },
      { texto: 'Separar um tempo para conversar com pessoas próximas.', proxima: 'finalConexao' }
    ]
  },
  apoio: {
    titulo: 'Juntos fica mais leve',
    texto: 'Você percebe que ninguém precisa enfrentar tudo sozinho. Como termina seu dia?',
    alternativas: [
      { texto: 'Compartilhar um momento agradável com amigos ou família.', proxima: 'finalConexao' },
      { texto: 'Organizar o dia seguinte e reservar tempo para descansar.', proxima: 'finalDescanso' }
    ]
  },
  natureza: {
    titulo: 'Um instante para respirar',
    texto: 'O contato com o ambiente ao redor trouxe uma pausa agradável. O que você escolhe agora?',
    alternativas: [
      { texto: 'Continuar explorando atividades que me dão prazer.', proxima: 'finalMovimento' },
      { texto: 'Voltar para casa e respeitar meu momento de descanso.', proxima: 'finalDescanso' }
    ]
  }
};
export const finais = {
  finalDescanso: { titulo: 'GUARDIÃO DO EQUILÍBRIO', texto: '{nome}, sua jornada mostrou que respeitar limites e reservar momentos de descanso são formas importantes de autocuidado. Não é preciso acertar tudo para cuidar do próprio bem-estar.' },
  finalConexao: { titulo: 'FORÇA DAS CONEXÕES', texto: '{nome}, você valorizou a escuta, a amizade e a cooperação. Seu dia mostrou que relações de apoio também fazem parte de uma vida saudável.' },
  finalMovimento: { titulo: 'EXPLORADOR DO BEM-ESTAR', texto: '{nome}, você descobriu maneiras agradáveis de se movimentar e aproveitar o ambiente. O melhor caminho é aquele que respeita seu ritmo e suas necessidades.' }
};
