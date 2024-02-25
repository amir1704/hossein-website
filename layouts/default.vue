<script setup>
import Header from '../components/layout/Header.vue';
import Footer from "~/components/layout/Footer.vue";
useHead({
    bodyAttrs: {
        class: 'bg-thgray-100 font-heebo'
    }
});
import { register } from 'swiper/element/bundle';
import {useSettingStore} from "~/stores/useSettingStore.js";
import useWpApi from "~/composables/useWpApi.ts";
register();

await useSettingStore().getToken();
await useSettingStore().getSetting();
const {data,error} = await useWpApi().getFrontPage();
if(!error.value){
  await useSettingStore().setFrontPage(data.value.acf);
}

</script>
<template>
      <header class="container mx-auto mt-16 lg:mt-20">
        <Header />
      </header>

      <main class="container mx-auto mt-11 lg:mt-24">
        <slot></slot>
      </main>
      <footer class="bg-thred mt-44 lg:mt-64">
          <div class="container mx-auto ">
            <Footer />
          </div>
      </footer>
</template>