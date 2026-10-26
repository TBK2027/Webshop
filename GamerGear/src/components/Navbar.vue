<template>
  <header class="navbar">
    <div class="nav-inner">

      <RouterLink class="brand" to="/">
        <b>G</b>

        <span>GAMER
          <span class="dim">GEAR</span>
        </span>
      </RouterLink>

      <nav>
        <RouterLink to="/">
          Főoldal
        </RouterLink>

        <RouterLink to="/products">
          Termékek
        </RouterLink>
      </nav>

      <div class="tools">
        <div v-if="open" class="search-bar">
          <input
            ref="searchInput"
            type="search"
            placeholder="Mit keresel?"
            @keyup.esc="open = false"
          />

          <button
            type="button"
            @click="open = false"
            aria-label="Keresés bezárása"
          >
            ×
          </button>
        </div>

        <button
          v-else
          type="button"
          class="search-button"
          @click="openSearch"
        >
          ⌕
          <span>Keresés</span>
        </button>

        <button
          type="button"
          aria-label="Profil"
        >
          ◯
        </button>

        <button
          type="button"
          aria-label="Kedvencek"
        >
          ♡
        </button>

        <button
          type="button"
          aria-label="Kosár"
        >
          ▱
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, nextTick } from "vue";
import "../styles/SearchBar.css";

const open = ref(false);
const searchInput = ref(null);

async function openSearch() {
  open.value = true;
  await nextTick();
  searchInput.value?.focus();
}
</script>