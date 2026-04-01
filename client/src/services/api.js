const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong.");
  }

  return data;
}

export const getItems = () => request("/items");

export const getItem = (id) => request(`/items/${id}`);

export const createItem = (payload) =>
  request("/items", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateItem = (id, payload) =>
  request(`/items/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

export const deleteItem = (id) =>
  request(`/items/${id}`, {
    method: "DELETE",
  });
