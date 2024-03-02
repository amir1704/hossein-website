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

      <header class="bg-thgray-100 z-10 relative pt-16 lg:pt-20">
        <Header />
      </header>

      <main class="bg-thgray-100 z-10 relative pt-11 lg:pt-24">
        <slot></slot>
      </main>
      <div class="h-[380px] lg:h-[600px] bg-transparent"></div>
      <footer class="bg-thred -mt-8 fixed bottom-0 w-full h-[380px] lg:h-[600px]">
          <div class="container mx-auto ">
            <Footer />
          </div>
      </footer>
</template>