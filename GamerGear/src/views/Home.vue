<template>
  <main>
    <Hero />

    <div class="line wrap"></div>

    <ProductSection
      id="featured"
      eyebrow="VÁLOGATÁS"
      title="Kiemelt termékek"
      :items="featuredProducts"
    />

    <div class="line wrap"></div>

    <ProductSection
      eyebrow="FRISSEN ÉRKEZETT"
      title="Új termékek"
      :items="newProducts"
    />

    <ProductSection
      eyebrow="PRECÍZ IRÁNYÍTÁS"
      title="Gamer egerek"
      :items="mice"
    />

    <ProductSection
      eyebrow="MINDEN LEÜTÉS SZÁMÍT"
      title="Gamer billentyűzetek"
      :items="keyboards"
    />

    <ProductSection
      eyebrow="MERÜLJ EL A JÁTÉKBAN"
      title="Gamer headsetek"
      :items="headsets"
    />

    <section class="newsletter wrap">
      <div>
        <p class="eyebrow">— NE MARADJ LE</p>
        <h2>Kapd el az új dropokat.</h2>
      </div>

      <form @submit.prevent>
        <input type="email" placeholder="email@pelda.hu">
        <button class="btn lime">Feliratkozom</button>
      </form>
    </section>
  </main>

  <Footer />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import Hero from "../components/Hero.vue";
import ProductSection from "../components/ProductSection.vue";
import Footer from "../components/Footer.vue";

import { getProducts } from "../services/productService.js";

const products = ref([]);

onMounted(async () => {
  try {
    products.value = await getProducts();
  } catch (error) {
    console.error("Hiba a termékek betöltésekor:", error);
  }
});

const featuredProducts = computed(() =>
  products.value.slice(0, 3)
);

const newProducts = computed(() =>
  products.value.slice(3, 6)
);

const mice = computed(() =>
  products.value.filter(p => p.category === "Egér")
);

const keyboards = computed(() =>
  products.value.filter(p => p.category === "Billentyűzet")
);

const headsets = computed(() =>
  products.value.filter(p => p.category === "Headset")
);
</script>