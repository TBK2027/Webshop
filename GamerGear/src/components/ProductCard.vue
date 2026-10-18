<template>
  <article class="product">
    <div class="pic" :class="product.accent">
      <span class="badge">{{product.badge}}</span>
      <button class="heart">♡</button>
      <div class="art">
        <i>
        </i>
        <b>
        </b>
        <span>
        </span>
      </div>
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
<script setup>import {computed} from 'vue'; const p=defineProps({product:Object}); const price=computed(()=>new Intl.NumberFormat('hu-HU').format(p.product.price)+' Ft')</script>