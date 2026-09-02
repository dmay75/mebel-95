"use client";

import { FormEvent, useState } from "react";

export default function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json().catch(() => ({})) as { error?: string };

    setSubmitting(false);
    if (!response.ok) {
      setStatus(data.error || "Не удалось войти.");
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <main className="admin-login-page">
      <form className="admin-login-card" onSubmit={submit}>
        <div>
          <p className="admin-kicker">Mebel 95</p>
          <h1>Вход в админ-панель</h1>
          <p>Закрытая зона для управления товарами, категориями и настройками магазина.</p>
        </div>

        <label>
          Email
          <input autoComplete="email" onChange={(event) => setEmail(event.target.value)} required type="email" value={email} />
        </label>

        <label>
          Пароль
          <input autoComplete="current-password" onChange={(event) => setPassword(event.target.value)} required type="password" value={password} />
        </label>

        <button disabled={submitting} type="submit">{submitting ? "Входим..." : "Войти"}</button>
        {status ? <p className="admin-form-status">{status}</p> : null}
      </form>
    </main>
  );
}
