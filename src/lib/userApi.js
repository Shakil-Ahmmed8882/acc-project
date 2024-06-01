// lib/api.js
export async function getUserData() {
  const response = await fetch(process.env.BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
