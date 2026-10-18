<template>
  <main>
    <Hero/>
    <div class="line wrap">
    </div>
    <ProductSection id="featured" eyebrow="VÁLOGATÁS" title="Kiemelt termékek" :items="products.slice(0,3)"/>
    <div class="line wrap">
    </div>
    <ProductSection eyebrow="FRISSEN ÉRKEZETT" title="Új termékek" :items="products.slice(3,6)"/>
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
  <Footer/>
</template>
<script setup>import Hero from '../components/Hero.vue';import ProductSection from '../components/ProductSection.vue';import Footer from '../components/Footer.vue';import {products} from '../data/products'</script>