# 🧠 Liza A.I — Backend 

Este é o **backend oficial da Liza A.I**, responsável por processar dados enviados pelo usuário e gerar uma **dieta personalizada de 7 dias** utilizando inteligência artificial.

A API foi construída com **Node.js**, **Express**, **TypeScript**, **Zod** e o SDK oficial da **OpenAI**, garantindo validação, segurança e performance.

---

## 🚀 Tecnologias utilizadas

* **Node.js**
* **Express**
* **TypeScript**
* **Zod** (validações de entrada)
* **OpenAI API**
* **CORS**
* **TSX** (dev runner)

---

## 📦 Instalação e dependências

Instale todas as dependências:

```bash
npm install
```

---

## ⚙️ Scripts recomendados

Adicione ao seu `package.json`:

```json
"scripts": {
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

---

## 🔧 Variáveis de ambiente

Crie um arquivo:

```
.env
```

E adicione:

```
OPENAI_API_KEY=sua_chave_aqui
PORT=SUA PORTA
```

---

## ▶️ Como iniciar o servidor

### Ambiente de desenvolvimento (hot reload)

```bash
npm run dev
```

### Produção

```bash
npm run build
npm start
```

Servidor rodará em:

```
http://localhost:3000
```

---

## 📡 Endpoints disponíveis

### **POST /plan**

Gera uma dieta de 7 dias baseada nas informações enviadas.

#### **Body esperado:**

```json
{
	"nome": "Matheus",
	"idade": 28,
	"altura_cm": 180,
	"peso_kg": 80,
	"nivel_atividade": "sedentario",
	"sexo": "masculino",
	"objetivo": "perda_de_peso"
}
```

Validação feita com **Zod**.

## 🛡️ Validações

Toda entrada é validada com **Zod**, evitando:

* Dados faltando
* Tipos incorretos
* Valores inválidos
* Requisições malformadas
