interface Prova {
  nomeProva: string;
  categoriasId: number;
  linkProva: string;
  profDisId?: number;
  professorId?: number;
  disciplinaId?: number;
}

interface ProvaDB {
  id: number;
  nomeProva: string;
  categoriasId: number;
  linkProva: string;
  profDisId: number;
  disciplinasId: number;
  professoresId: number;
  nomeProfessor: string;
  nomeDisciplina: string;
  periodoDisciplina: number;
}

interface Disciplina {
  id: number;
  nomeDisciplina: string;
  periodoDisciplina: number;
}

interface Professor {
  id: number;
  nomeProfessor: string;
}

interface ProfDis {
  id: number;
  professores: {
    id: number;
    nomeProfessor: string;
  };
}
export { Prova, ProvaDB, Disciplina, Professor, ProfDis };
