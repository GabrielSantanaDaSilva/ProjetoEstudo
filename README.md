# 🎯 SimuIAdos — Simulados Inteligentes com IA

O **SimuIAdos** é uma plataforma web Full Stack que transforma o processo de estudo em uma experiência dinâmica. Através da integração com a API do **Google Gemini**, o sistema gera questões de múltipla escolha personalizadas em tempo real, permitindo que o usuário teste seus conhecimentos em diversas matérias.

---

## 🚀 Tecnologias Utilizadas

### **Front-end**
* **HTML5 & CSS3**: Estruturação semântica e estilização.
* **Bootstrap 5**: Layout responsivo e componentes de interface modernos.
* **JavaScript (Vanilla)**: Manipulação de DOM e consumo da API interna.

### **Back-end**
* **Node.js**: Ambiente de execução.
* **Express**: Framework para criação da API REST e gerenciamento de rotas.
* **Google Generative AI SDK (@google/genai)**: Integração com o modelo Gemini para geração de conteúdo.
* **Dotenv**: Gerenciamento seguro de variáveis de ambiente (chaves de API).
* **CORS**: Configuração de segurança para comunicação entre domínios.

---

## 🛠️ Funcionalidades

- [x] **Geração Dinâmica**: Questões criadas na hora por IA, evitando repetições exaustivas.
- [x] **Disciplinas Específicas**: Páginas dedicadas a Português, Informática e Matemática.
- [x] **Feedback Imediato**: O sistema retorna a resposta correta e uma sugestão de resolução detalhada.
- [x] **Interface Responsiva**: Estude pelo computador, tablet ou celular.
- [x] **Saída Estruturada**: Backend configurado para garantir que a IA responda sempre em formato JSON válido.

---

## 🏗️ Como Executar o Projeto
Clone o repositório:

```Bash
git clone https://github.com/GabrielSantanaDaSilva/ProjetoEstudo.git
```
Instale as dependências:

```Bash
npm install
```
Configure as variáveis de ambiente:

Acesse o Google AI Studio para gerar sua chave de API.

Crie um arquivo .env na raiz do projeto e adicione:

Entre No google studio AI (https://aistudio.google.com/) e gere a sua chave de API do gemini e coloque o codigo abaixo no arquivo .env:
```bash
GEMINI_API_KEY=sua_chave_aqui
PORT=3000
```

Entre na pasta do backend e execute o servidor:

```Bash
cd backend
node server.js
```

Acesse no navegador:
http://localhost:3000 ou Instale a extensão "Live Server" e rode ela.
