<template>
  <main class="products-page wrap">
    <div class="heading">
      <div>
        <p class="eyebrow">— GAMER GEAR KÍNÁLAT</p>
        <h1>Összes termék</h1>
      </div>
      <p class="product-count">{{ products.length }} termék</p>
    </div>

    <p v-if="loading" class="status">
      Termékek betöltése...
    </p>

    <p v-else-if="error" class="status">
      {{ error }}
    </p>

    <div v-else class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :show-badge="false"
      />
    </div>
  </main>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";

import Footer from "../components/Footer.vue";
import ProductCard from "../components/ProductCard.vue";
import { getProducts } from "../services/productService.js";

const products = ref([]);
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    products.value = await getProducts();
  } catch (err) {
    error.value = "Nem sikerült betölteni a termékeket.";
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>