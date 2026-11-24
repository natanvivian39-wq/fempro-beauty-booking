import { useSyncExternalStore } from "react";
import { accounts, type AccountKind } from "./accounts";

// Frontend-only session. Replace with the real auth/backend when it's connected.
const KEY = "fempro-account";
const listeners = new Set<() => void>();

function read(): AccountKind {
  const v = localStorage.getItem(KEY);
  return v === "empty" ? "empty" : "demo";
}

export function setAccount(kind: AccountKind) {
  localStorage.setItem(KEY, kind);
  listeners.forEach((l) => l());
}

export function useAccount() {
  const kind = useSyncExternalStore(
    (l) => { listeners.add(l); return () => listeners.delete(l); },
    read,
    () => "demo" as AccountKind,
  );
  return accounts[kind];
}
