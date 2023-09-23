import React from "react";

export function loadStorage(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key) ?? "");
  } catch (err) {
    return;
  }
}

export function saveStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function useLocalStorage<T>(
  key: string,
  defaultValue?: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = React.useState<T>(
    () => loadStorage(key) ?? defaultValue
  );

  React.useEffect(() => saveStorage(key, value), [key, value]);

  // Sync storage value across tabs
  React.useEffect(() => {
    const listener = (e: StorageEvent) =>
      e.key === key && setValue(loadStorage(key));

    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, [key]);

  return [value, setValue];
}
