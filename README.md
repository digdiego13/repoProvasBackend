# Repoprovas Backend
## Sobre o projeto
Repoprovas é uma aplicação que reúne provas antigas do curso de engenharia mecânica. Pode-se agrupar por professores ou disciplinas.


## layout do banco de dados

first of all, you can create a dev DATABASE just openning "createDatabase.txt" file and copying the scripts there.

## Funcionalidades

post prova: postar prova utilizando o seguinte objeto
```
{
  nomeProva: string,
  professorId: number,
  disciplinaId: number,
  linkProva: string,
  categoriasId: number
}
```

get professores: Recebe a lista de professores cadastrados

get disciplinas: Recebe a lista de Disciplinas cadastradas

post profdis: deve-se passar um objeto com o atributo de id do professor. Ira retornar as disciplinas dadas pelo professor escolhido

```
{
	id: number
}
```

post provasdisciplina: deve-se passar um objeto com o atributo de id da disciplina. Ira retornar as provas da disciplina escolhida

```
{
	id: number
}
```

post provasprofessor: deve-se passar um objeto com o atributo de id do professor. Ira retornar as provas dadas pelo professor escolhido

```
{
	id: number
}
```

## Instalando

**Clonando o repositorio**

```
$ git clone https://github.com/digdiego13/repoProvasBackend.git
```

**Instalando dependencias**

```
$ npm install
```

**Rodar a aplicação no modo de desenvolvimento**

Crie um .env file e preencha-o com as variáveis de ambiente seguindo o arquivo .env.example

```
$ ntl -> dev
```

O deploy no Heroku sera feito futuramente
