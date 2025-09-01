// src/components/ui/use-toast.js
import { useEffect, useState } from "react";

const TOAST_LIMIT = 1;

let counter = 0;
const genId = () => {
  counter = (counter + 1) % Number.MAX_VALUE;
  return counter.toString();
};

const store = {
  state: { toasts: [] },
  listeners: [],
  getState() {
    return this.state;
  },
  setState(updater) {
    this.state = typeof updater === "function" ? updater(this.state) : updater;
    this.listeners.forEach((l) => l(this.state));
  },
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  },
};

export function toast(props = {}) {
  const id = genId();

  const dismiss = () =>
    store.setState((s) => ({
      ...s,
      toasts: s.toasts.filter((t) => t.id !== id),
    }));

  const update = (next) =>
    store.setState((s) => ({
      ...s,
      toasts: s.toasts.map((t) => (t.id === id ? { ...t, ...next } : t)),
    }));

  store.setState((s) => ({
    ...s,
    toasts: [{ id, dismiss, ...props }, ...s.toasts].slice(0, TOAST_LIMIT),
  }));

  return { id, dismiss, update };
}

export function useToast() {
  const [state, setState] = useState(store.getState());

  useEffect(() => store.subscribe(setState), []);

  useEffect(() => {
    const timers = state.toasts.map((t) => {
      if (t.duration === Infinity) return null;
      return setTimeout(() => t.dismiss(), t.duration ?? 5000);
    }).filter(Boolean);
    return () => timers.forEach((id) => clearTimeout(id));
  }, [state.toasts]);

  return { toast, toasts: state.toasts };
}
