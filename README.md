# 🚀 Next.js 15 App Router — Autenticação JWT + Refresh Token

Este projeto é um **exemplo simples** de como fazer **login com JWT**, proteger rotas e usar **refresh token** no **Next.js 15** com **App Router**.

---

## 📌 Funcionalidades

- ✅ Login com JWT (token curto)
- ✅ Cookies `HttpOnly` para segurança
- ✅ Proteção de rota `/dashboard`
- ✅ Middleware para proteger rotas automaticamente
- ✅ Endpoint `/api/refresh` para renovar token quando expirar
- ✅ Redirecionamento automático para login se expirar

---

## 📂 Estrutura de Pastas

app/
├─ api/
│ ├─ login/route.js # Rota para login e geração de token
│ ├─ protected/route.js # Rota GET protegida
│ ├─ refresh/route.js # Gera novo access token
├─ login/page.js # Tela de login com redirecionamento
├─ dashboard/page.js # Dashboard protegido
middleware.js # Protege rotas /dashboard

yaml
Copiar
Editar

---

## ⚙️ Como rodar

1️⃣ **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
2️⃣ Instale as dependências

bash
Copiar
Editar
npm install
3️⃣ Crie o .env.local

env
Copiar
Editar
JWT_SECRET=umasecretforte123
4️⃣ Inicie o servidor

bash
Copiar
Editar
npm run dev
🚦 Fluxo de uso
1️⃣ Acesse http://localhost:3000/login
2️⃣ Faça login com:

makefile
Copiar
Editar
Usuário: admin
Senha: 1234
3️⃣ Se válido, um JWT é criado, salvo em cookie e redireciona para /dashboard

4️⃣ /dashboard faz requisição a /api/protected:

Se token válido: ✅

Se expirado: tenta /api/refresh:

Se válido: ✅ novo token

Se falhar: 🔒 redireciona para /login

📮 Testar no Postman
POST http://localhost:3000/api/login

json
Copiar
Editar
{
  "username": "admin",
  "password": "1234"
}
GET http://localhost:3000/api/protected
Envie o cookie token.

GET http://localhost:3000/api/refresh
Envie o cookie refreshToken.

⚠️ Importante
Em produção, use Secure + SameSite nos cookies.

Guarde refreshToken no banco para poder invalidar em logout.

Proteja suas rotas com middleware.js.

📚 Tecnologias
Next.js 15 (App Router)

jsonwebtoken

bcryptjs (opcional para hash de senha)

Postman para testar as APIs

✨ Feito para estudos
Este repositório é didático para aprender JWT + Refresh Token no Next.js 15.
Adapte para produção conforme boas práticas de segurança!
```
