# Projeto_8

# 📄 Gerador de Currículo Inteligente com Preview em Tempo Real

Aplicação **React moderna** que permite aos usuários criar **currículos profissionais** com **preview instantâneo**.  
Este projeto é a **primeira parte** de um curso em duas etapas que demonstra **conceitos avançados de React** e **TailwindCSS**.

---

## 🚀 Tecnologias Utilizadas
- **React 19**
- **TypeScript**
- **TailwindCSS v4**
- **Vite**

---

## 🎯 Objetivo
O foco deste projeto é **praticar conceitos fundamentais do React** em um cenário prático, sem se preocupar com **responsividade mobile**.  
O layout é **otimizado para desktop/laptop**, ideal para criação de currículos.

---

## 📚 Conceitos em Foco
- **Formulários Controlados** – gerenciamento avançado de estado de inputs  
- **Layout Desktop** – grid e flexbox com TailwindCSS v4  
- **Sincronização de Estado** – preview em tempo real do currículo  
- **Componentização** – arquitetura escalável e reutilizável  
- **Listas Dinâmicas** – adicionar/remover habilidades e experiências  

---

## 🖥️ Conceito da Aplicação
**Layout Split-Screen**
- **Esquerda (50%)** → Formulário completo de entrada de dados  
- **Direita (50%)** → Preview atualizado em tempo real  
- **Layout fixo** e otimizado para telas desktop  

---

## 📝 Estrutura do Formulário
1. **Dados Pessoais** → Nome, email, telefone, LinkedIn, resumo profissional  
2. **Habilidades** → Lista dinâmica com níveis de proficiência  
3. **Experiências** → Lista dinâmica de experiências profissionais  

---

## ⚙️ Funcionalidades Core
- ✅ **Preview Instantâneo** – mudanças aparecem em tempo real  
- ✅ **Listas Dinâmicas** – adicionar/remover habilidades e experiências  
- ✅ **Layout Desktop** – interface fixa e otimizada  
- ✅ **Design Profissional** – interface clean e moderna  

---

## 🧩 Conceitos React Praticados
1. **Estado Compartilhado Avançado**
   - Estado central para todo o currículo  
   - Sincronização entre formulário e preview  
   - Gerenciamento de listas dinâmicas  

2. **Componentes Controlados**
   - Inputs controlados com validação  
   - Textareas com contadores e formatação  
   - Listas reutilizáveis com botões de ação  

3. **Props e Lifting State Up**
   - Comunicação entre componentes pai/filho  
   - Callbacks para atualização de estado  
   - Estratégias contra props drilling  

4. **Renderização Condicional Avançada**
   - Layout condicional baseado em estado  
   - Tratamento de estados vazios  
   - Validação visual de campos  

---

## 📌 Requisitos Funcionais
### 01 - Layout Split-Screen
- Tela dividida em duas colunas iguais  
- Scroll independente em cada seção  

### 02 - Formulário de Dados Pessoais
- Campos: Nome, Email, Telefone, LinkedIn  
- Textarea para resumo com contador de caracteres  
- Validação em tempo real  

### 03 - Gerenciamento de Habilidades
- Lista dinâmica  
- Input para nome da habilidade  
- Seletor de nível (Básico, Intermediário, Avançado)  
- Botões adicionar/remover  

### 04 - Gerenciamento de Experiências
- Campos: Empresa, Cargo, Período, Descrição  
- Checkbox "Trabalho atual"  
- Validação de datas  

### 05 - Preview em Tempo Real
- Atualização instantânea ao digitar  
- Layout profissional do currículo  
- Indicação visual para campos vazios  

---
