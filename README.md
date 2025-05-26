# Sistema de Biblioteca

Um sistema moderno de gerenciamento de biblioteca desenvolvido como projeto acadêmico para a disciplina de Tecnologias Emergentes. Este projeto implementa um CRUD completo utilizando tecnologias modernas como React, TypeScript, Node.js e MongoDB.

## 📚 Sobre o Projeto

Este projeto foi desenvolvido como parte da disciplina de Tecnologias Emergentes, com o objetivo de criar uma aplicação funcional que demonstre as competências em:
- Desenvolvimento de CRUD completo (Create, Read, Update, Delete)
- Persistência de dados em banco de dados
- Desenvolvimento Full Stack
- Utilização de tecnologias emergentes do mercado
- Boas práticas de programação e documentação

## 👨‍💻 Autor

**Gustavo Brentan Lomas**
- Projeto desenvolvido para a disciplina de Tecnologias Emergentes
- Disciplina: Tecnologias Emergentes
- Curso: Análise e Desenvolvimento de Sistemas
- Ano: 2025

## 🎯 Objetivos do Projeto

Este projeto atende aos requisitos da disciplina através de:
- ✅ CRUD completo de livros
- ✅ Persistência em banco de dados (MongoDB)
- ✅ Interface moderna e responsiva
- ✅ Documentação completa
- ✅ Testes automatizados
- ✅ Boas práticas de desenvolvimento

## 🚀 Tecnologias

### Frontend
- React 18
- TypeScript
- Material-UI (MUI)
- React Router DOM
- Axios
- Styled Components

### Backend
- Node.js
- TypeScript
- Express
- MongoDB com Mongoose
- Jest para testes
- CORS

## 📋 Funcionalidades

- ✅ Listagem de livros com interface moderna
- ✅ Cadastro de novos livros
- ✅ Edição de livros existentes
- ✅ Exclusão de livros
- ✅ Visualização detalhada de cada livro
- ✅ Validação de formulários
- ✅ Confirmação de exclusão
- ✅ Interface responsiva
- ✅ Testes automatizados no backend

## 🛠️ Estrutura do Projeto

```
biblioteca/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   └── tests/
    └── package.json
```

## 📦 Instalação

### Pré-requisitos
- Node.js
- MongoDB
- npm ou yarn

### Backend
```bash
cd backend
npm install
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 🧪 Testes

Para executar os testes do backend:
```bash
cd backend
npm test
```

## 📝 Modelo de Dados

### Livro
```typescript
{
    _id: string;
    title: string;
    author: string;
    isbn: string;
    description: string;
    publishYear: number;
}
```

## 🌐 Endpoints da API

### Livros
- `GET /api/books` - Lista todos os livros
- `GET /api/books/:id` - Obtém um livro específico
- `POST /api/books` - Cria um novo livro
- `PUT /api/books/:id` - Atualiza um livro
- `DELETE /api/books/:id` - Remove um livro

## 🎨 Design

- Interface moderna com Material-UI
- Tema personalizado
- Componentes reutilizáveis
- Feedback visual para ações do usuário
- Animações suaves
- Layout responsivo

## 👥 Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. 