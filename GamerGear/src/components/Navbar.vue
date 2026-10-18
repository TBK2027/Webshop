<template>
  <header class="navbar">
    <div class="nav-inner">
      <RouterLink class="brand" to="/">
        <b>G</b>
        <span>GAMER <span class="dim">GEAR</span></span>
      </RouterLink>

      <nav>
        <RouterLink to="/">Főoldal</RouterLink>
        <RouterLink to="/products">Termékek</RouterLink>
      </nav>

      <div class="tools">
        <button type="button" @click="open = !open">⌕ <span>Keresés</span></button>
        <button type="button" aria-label="Profil">◯</button>
        <button type="button" aria-label="Kedvencek">♡</button>
        <button type="button" aria-label="Kosár">▱</button>
      </div>
    </div>

    <div v-if="open" class="search">
      <input autofocus type="search" placeholder="Mit keresel?" />
      <button type="button" @click="open = false">Bezárás</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
</script>