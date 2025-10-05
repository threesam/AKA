import { writable } from "svelte/store";

// Initialize dark mode based on system preference
function getSystemPreference() {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return true; // Default to dark mode on server
}

export const darkMode = writable(getSystemPreference());

// Listen for system preference changes
if (typeof window !== "undefined") {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = (e) => {
    darkMode.set(e.matches);
  };

  mediaQuery.addEventListener("change", handleChange);
}
