# NEXUS – Kickoff WCS

## Sobre o projeto
SaaS interno da Invent para gestão de projetos WCS. Stack: React 19 + MUI 9 + Vite + TypeScript. Sem backend — dados em localStorage.

## Regra obrigatória: Registro de funcionalidades por função

Sempre que adicionar ou modificar uma funcionalidade, verificar:

**A funcionalidade se comporta de forma diferente para funções/setores específicos?**

- **SIM** → adicionar/atualizar uma entrada em `src/lib/featureRegistry.ts`
- **NÃO** (disponível para todos) → não listar, não é necessário nenhuma ação

### Funções existentes (values de `ROLES` em Sidebar.tsx)
`gestao` · `engenharia` · `documentacao` · `pmo` · `desenvolvimento` · `eletrica`

### Como adicionar ao registro (`src/lib/featureRegistry.ts`)
```ts
{
  id: 'slug-unico',            // kebab-case, nunca repetir
  title: 'Nome curto',
  description: 'O que essa função vê/pode fazer de diferente.',
  roles: ['pmo', 'documentacao'],  // apenas as funções afetadas
  page: 'Projetos',            // aba/seção onde fica
  addedAt: 'YYYY-MM-DD',       // data de hoje
  implemented: true,           // false se ainda é planejado
},
```

A sub-aba **Configurações → Administração** exibe esse registro automaticamente. Não é necessário alterar a UI para que um novo item apareça lá.

## Arquitetura de navegação
State-based (sem React Router). Página atual controlada pelo estado `page` em `App.tsx`.

## Autenticação
Login fake por enquanto — qualquer credencial válida (2+ chars, email válido, senha 6+ chars) + aceite dos termos permite entrar.
