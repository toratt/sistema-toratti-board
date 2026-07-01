# 🚀 Toratti Board - Roadmap

Sistema de gerenciamento de tarefas inspirado no Trello e Kanban.

---

# Status do Projeto

Versão Atual: **0.1**

---

# ✅ V0.1 - Estrutura Inicial

- [x] Configuração do Git
- [x] Integração com GitHub
- [x] Servidor Express
- [x] Estrutura do projeto
- [x] HTML inicial
- [x] CSS inicial
- [x] Criar colunas dinamicamente
- [x] Criar cards
- [x] Interface básica

---

# 🔥 V0.2 - Persistência de Dados

Objetivo:

Salvar automaticamente as informações do board.

### Funcionalidades

- [ ] Salvar colunas
- [ ] Salvar cards
- [ ] Recuperar dados ao abrir o sistema
- [ ] Persistência com localStorage

Conceitos estudados:

- JSON
- localStorage
- Arrays
- Objetos
- Renderização dinâmica

---

# 🔥 V0.3 - Edição

Objetivo:

Permitir alterar informações sem recriar itens.

### Funcionalidades

- [ ] Editar nome da coluna
- [ ] Editar nome do card
- [ ] Salvar alterações automaticamente

---

# 🔥 V0.4 - Exclusão

Objetivo:

Gerenciar melhor o quadro.

### Funcionalidades

- [ ] Excluir card
- [ ] Excluir coluna
- [ ] Modal de confirmação

---

# 🔥 V0.5 - Drag and Drop

Objetivo:

Experiência semelhante ao Trello.

### Funcionalidades

- [ ] Arrastar cards
- [ ] Soltar em outra coluna
- [ ] Atualizar posição
- [ ] Persistir alterações

Tecnologias:

- HTML Drag API

ou

- SortableJS

---

# 🔥 V0.6 - Interface Profissional

Objetivo:

Melhorar a experiência do usuário.

### Funcionalidades

- [ ] Ícones
- [ ] Animações
- [ ] Sombras
- [ ] Hover effects
- [ ] Responsividade
- [ ] Tema Escuro
- [ ] Tema Claro

---

# 🔥 V0.7 - Organização Avançada

### Funcionalidades

- [ ] Prioridade
- [ ] Etiquetas
- [ ] Datas
- [ ] Filtros
- [ ] Busca

---

# 🔥 V0.8 - Banco de Dados

Objetivo:

Persistência fora do navegador.

### Funcionalidades

- [ ] SQLite
- [ ] API REST
- [ ] CRUD completo

---

# 🔥 V0.9 - Usuários

### Funcionalidades

- [ ] Cadastro
- [ ] Login
- [ ] Sessão
- [ ] Autenticação JWT

---

# 🚀 V1.0

Primeira versão estável.

### Funcionalidades

- [ ] Boards múltiplos
- [ ] Compartilhamento
- [ ] Configurações
- [ ] Exportação JSON
- [ ] Backup automático

---

# Estrutura do Projeto

```text
TorattiBoard/

server.js

package.json

ROADMAP.md

public/

index.html
style.css
script.js
```

---

# Tecnologias

Frontend

- HTML
- CSS
- JavaScript

Backend

- Node.js
- Express

Persistência

- LocalStorage
- SQLite (futuro)

Versionamento

- Git
- GitHub

---

# Objetivo

Construir um sistema Kanban pessoal moderno,
modular e escalável, inspirado em Trello,
mas totalmente customizável.