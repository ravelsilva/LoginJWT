// Rota POST que faz login, valida usuário simulado, gera JWT e seta cookie HttpOnly
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { username, password } = await req.json();

  if (username !== "admin" || password !== "1234") {
    return NextResponse.json(
      { message: "Credenciais inválidas." },
      { status: 401 }
    );
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "5s",
  });

  const res = NextResponse.json({ message: "Login bem sucedido!" });
  res.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
  });

  return res;
}
