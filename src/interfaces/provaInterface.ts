interface Prova {
  nomeProva: string;
  categoriasId: number;
  linkProva: string;
  profDisId?: number;
  professorId?: number;
  disciplinaId?: number;
}

interface ProvaDB extends Prova {
  id: number;
}

export { Prova, ProvaDB };
