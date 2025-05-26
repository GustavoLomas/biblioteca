# Sistema de Biblioteca

Um sistema moderno de gerenciamento de biblioteca desenvolvido como projeto acadêmico para a faculdade. Este projeto demonstra a implementação de um sistema completo utilizando tecnologias modernas como React, TypeScript, Node.js e MongoDB.

## 📚 Sobre o Projeto

Este projeto foi desenvolvido como parte do curso de graduação, com o objetivo de demonstrar competências em:
- Desenvolvimento Full Stack
- Arquitetura de Software
- Boas práticas de programação
- Testes automatizados
- Documentação de software

## 👨‍💻 Autor

**Gustavo Lomas**
- Projeto desenvolvido para disciplina acadêmica
- Curso: [Nome do Curso]
- Instituição: [Nome da Instituição]
- Ano: 2024

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