<template>
  <section :id="id" class="products wrap">
    <div class="heading">
      <div>
        <p class="eyebrow">— {{eyebrow}}</p>
        <h2>{{title}}</h2>
      </div>
      <RouterLink to="/products">Összes termék →</RouterLink>
    </div>
    <div class="product-grid">
      <ProductCard v-for="p in items" :key="p.id" :product="p"/>
    </div>
  </section>
</template>
<script setup>import ProductCard from './ProductCard.vue'; defineProps({id:String,eyebrow:String,title:String,items:Array})</script>