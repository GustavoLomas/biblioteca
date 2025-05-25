# Sistema de Biblioteca

Um sistema moderno de gerenciamento de biblioteca desenvolvido com React, TypeScript, Node.js e MongoDB.

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