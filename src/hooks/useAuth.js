// ============================================================
//  useAuth.js  —  Mi Esencia Divina
//  Gestión de sesión, carrito persistente y códigos de desbloqueo
// ============================================================

import { useState, useCallback } from "react";

const USERS_KEY   = "med_users";
const SESSION_KEY = "med_session";
const CART_KEY    = "med_cart";

// ── Valid unlock codes — add new ones here as orders come in ──
const VALID_CODES = {
  "ESENCIA2024": true,
  "DIVINA2024":  true,
  "CRISTAL01":   true,
  "ALMA2024":    true,
};

function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; }
  catch { return {}; }
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// ── Cart helpers (exported so App.jsx can use them) ───────────
export function loadCart(email) {
  try {
    const key = email ? `${CART_KEY}_${email}` : CART_KEY;
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch { return []; }
}
export function persistCart(cart, email) {
  const key = email ? `${CART_KEY}_${email}` : CART_KEY;
  localStorage.setItem(key, JSON.stringify(cart));
}

// ─────────────────────────────────────────────────────────────
export function useAuth() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY)) || null; }
    catch { return null; }
  });

  const register = useCallback(({ name, email, password }) => {
    const users = getUsers();
    if (users[email]) return { ok: false, error: "Este email ya está registrado." };
    const newUser = { name, email, createdAt: Date.now(), readings: null, unlocked: false };
    users[email] = { ...newUser, password };
    saveUsers(users);
    localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
    setUser(newUser);
    return { ok: true };
  }, []);

  const login = useCallback(({ email, password }) => {
    const users = getUsers();
    const found = users[email];
    if (!found) return { ok: false, error: "Email no encontrado." };
    if (found.password !== password) return { ok: false, error: "Contraseña incorrecta." };
    const sessionUser = {
      name:      found.name,
      email:     found.email,
      createdAt: found.createdAt,
      readings:  found.readings  || null,
      unlocked:  found.unlocked  || false,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  const saveReadings = useCallback((readings) => {
    const users = getUsers();
    if (user && users[user.email]) {
      users[user.email].readings = readings;
      saveUsers(users);
      const updated = { ...user, readings };
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      setUser(updated);
    }
  }, [user]);

  const redeemCode = useCallback((code) => {
    const trimmed = code.trim().toUpperCase();
    if (!VALID_CODES[trimmed]) return { ok: false, error: "Código no válido. Comprueba que está bien escrito." };
    const users = getUsers();
    if (user && users[user.email]) {
      users[user.email].unlocked = true;
      saveUsers(users);
      const updated = { ...user, unlocked: true };
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      setUser(updated);
    }
    return { ok: true };
  }, [user]);

  return { user, register, login, logout, saveReadings, redeemCode };
}
