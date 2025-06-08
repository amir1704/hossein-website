<script setup>
import {useSettingStore} from "~/stores/useSettingStore.js";
import useWpApi from "~/composables/useWpApi.ts";

const setting = ref(useSettingStore().frontPage);
console.log(setting);
const menuItems = ref([]);
const widgets = ref([]);
const {data,error} = await useWpApi().get('menus/footer');
if(!error.value){
  menuItems.value = data.value;
}
const {data:widgetData, error:widgetError} = await useWpApi().getWidgets('footer-icons');
if(!widgetError.value){
  widgetData.value.forEach((widget)=>{
    widgets.value += widget.rendered;
  });

}
</script>

<template>
  <div class="grid grid-cols-12  pt-24 pb-20 lg:pt-40">
    <div class="col-span-12 place-self-center">
      <NuxtLink to="/">
        <NuxtImg
            :src="setting.logo_footer" alt="logo"/>
      </NuxtLink>
    </div>
    <div class="col-span-12 flex-row flex-wrap justify-center mt-14 hidden lg:flex">
      <NuxtLink class="text-thwhite font-light text-lg mx-3.5" :to="menuItem.href" v-for="menuItem in menuItems">
        {{menuItem.name}}
      </NuxtLink>
    </div>
    <ul class="col-span-12 flex flex-row flex-wrap gap-y-4 justify-center mt-11 [&_li]:mx-3.5 [&_li]:w-[41px] [&_li]:h-[41px]" v-html="widgets">

    </ul>
    <div class="col-span-12 flex flex-row justify-center mt-14">
      <p class="text-thwhite font-light text-xl">{{ setting.copyright }}</p>
    </div>
  </div>
</template>
