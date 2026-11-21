const API_URL = "http://localhost:3000/products";

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Nem sikerült betölteni a termékeket!");
  }

  return await response.json();
}