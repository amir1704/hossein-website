<script setup>
import Header from '../components/layout/Header.vue';
useHead({
    bodyAttrs: {
        class: 'bg-thgray-100 font-heebo'
    }
})
</script>
<template>
      <header class="container mx-auto mt-20">
        <Header />
      </header>

      <main class="container mx-auto mt-24">
        <slot></slot>
      </main>
      <footer class="container mx-auto">

      </footer>
</template>