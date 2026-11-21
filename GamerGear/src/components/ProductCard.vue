<template>
  <article class="product">
    <div class="pic" :class="product.accent">
      <span v-if="showBadge && product.badge" class="badge"> {{ product.badge }}</span>
      <button class="heart">♡</button>
        <img
          :src="product.image"
          :alt="product.name"
          class="product-image"
        />
    </div>
    <div class="info">
      <div>
        <small>{{product.category}}</small>
        <h3>{{product.name}}</h3>
      </div>
      <strong>{{price}}</strong>
    </div>
    <button class="add">Kosárba</button>
  </article>
</template>
<script setup>import {computed} from 'vue'; 
  const p = defineProps({
    product: Object,
    showBadge: {
      type: Boolean,
      default: true
    }
  });

  const price=computed(()=>new Intl.NumberFormat('hu-HU').format(p.product.price)+' Ft')
</script>