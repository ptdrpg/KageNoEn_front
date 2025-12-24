import { redirect } from "react-router"

type JwtPayload = {
  Id: number
  Role: string
  Username: string
  iss: string
  exp: number
}

function decodeJWT(token: string): JwtPayload | null {
  try {
    const payload = token.split(".")[1]
    const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
    return JSON.parse(decoded)
  } catch {
    return null
  }
}

function isTokenExpired(token: string): boolean {
  const payload = decodeJWT(token)
  if (!payload?.exp) return true

  const now = Math.floor(Date.now() / 1000)
  return payload.exp < now
}

export function requireAuth(request: Request) {
  const cookie = request.headers.get("cookie")
  const token = cookie?.match(/token=([^;]+)/)?.[1]

  if (!token || isTokenExpired(token)) {
    throw redirect("/login")
  }

  const payload = decodeJWT(token)

  return payload
}