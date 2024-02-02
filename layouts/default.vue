<script setup>
import Header from '../components/layout/Header.vue';
import Footer from "~/components/layout/Footer.vue";
useHead({
    bodyAttrs: {
        class: 'bg-thgray-100 font-heebo'
    }
});
import { register } from 'swiper/element/bundle';
register()
</script>
<template>
      <header class="container mx-auto mt-20">
        <Header />
      </header>

      <main class="container mx-auto mt-24">
        <slot></slot>
      </main>
      <footer class="bg-thred mt-64">
          <div class="container mx-auto ">
            <Footer />
          </div>
      </footer>
</template>