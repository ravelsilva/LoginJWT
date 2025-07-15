import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(req) {
  const token = req.cookies.get("token")?.value;
  //O ? antes do ponto significa: "se o resultado da operação anterior
  //(req.cookies.get("token")) não for null nem undefined,
  // então tente acessar a propriedade .value"

  if (!token) {
    //Verificação de token
    return NextResponse.json({ message: "Token ausente." }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.json({
      message: "Você está autenticado!",
      user: decoded,
    });
  } catch (err) {
    return NextResponse.json({ message: "Token inválido." }, { status: 401 });
  }
}
