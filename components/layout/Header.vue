<script setup>
 import GrayBack from "~/components/layout/GrayBack.vue";
 import Modal from "~/components/layout/Modal.vue";
 import useWpApi from "~/composables/useWpApi.ts";
 import {useSettingStore} from "~/stores/useSettingStore.js";
 const showMenu = ref(false);
 const showContact = ref(false);
 let show = ref(false);
 const isOpen = () => (show.value = !show.value);
 onMounted(()=>{
   window.document.addEventListener('click',(e)=>{
     if(e.target.classList.contains('gray-back')){
       showMenu.value = false;
       showContact.value = false;
     }
   })
 });

const setting = ref(useSettingStore().frontPage);
const menuItems = ref([]);
const {data,error} = await useWpApi().get('menus/primary');
if(!error.value){
  menuItems.value = data.value;
}
</script>
<template>
  <div class="container mx-auto">


        <div class="grid grid-cols-12">
            <div class=" xl:col-span-4 hidden xl:flex items-center xl:justify-start ">
              <button aria-controls="default-sidebar" type="button" class="flex text-thblack-100 text-xl focus:outline-none" @click="()=>{showMenu=!showMenu;}">
                <svg class="w-[22px] h-[22px] mt-1 mr-1" data-name="Group 9826" xmlns="http://www.w3.org/2000/svg" width="31.75" height="31.751" viewBox="0 0 31.75 31.751">
                  <path data-name="instagram(1)" d="M16.188 31.752h-.316c-2.489.006-4.788-.057-7.025-.193a9.39 9.39 0 0 1-5.413-2.049A8.688 8.688 0 0 1 .515 24.8a20.885 20.885 0 0 1-.479-4.987C.02 18.65 0 17.276 0 15.88s.02-2.78.036-3.936a20.888 20.888 0 0 1 .479-4.987 8.688 8.688 0 0 1 2.92-4.713A9.39 9.39 0 0 1 8.848.2c2.236-.141 4.536-.2 7.03-.2s4.789.059 7.022.2a9.39 9.39 0 0 1 5.413 2.049 8.687 8.687 0 0 1 2.919 4.713 20.887 20.887 0 0 1 .479 4.987c.016 1.159.033 2.533.036 3.929v.006c0 1.4-.02 2.77-.036 3.929a20.875 20.875 0 0 1-.479 4.987 8.687 8.687 0 0 1-2.919 4.713 9.39 9.39 0 0 1-5.413 2.045c-2.142.13-4.342.194-6.715.194zm-.316-2.481c2.448.006 4.7-.056 6.88-.189a6.833 6.833 0 0 0 4-1.5 6.262 6.262 0 0 0 2.084-3.4 19 19 0 0 0 .4-4.408c.016-1.151.032-2.515.036-3.9s-.02-2.747-.036-3.9a19 19 0 0 0-.4-4.408 6.262 6.262 0 0 0-2.084-3.4 6.835 6.835 0 0 0-4-1.5c-2.184-.133-4.432-.194-6.874-.189s-4.7.056-6.88.189a6.834 6.834 0 0 0-4 1.5 6.262 6.262 0 0 0-2.084 3.4 19 19 0 0 0-.4 4.408c-.016 1.152-.032 2.517-.036 3.9s.02 2.743.036 3.9a19 19 0 0 0 .4 4.408A6.262 6.262 0 0 0 5 27.587a6.834 6.834 0 0 0 4 1.5c2.182.128 4.431.19 6.872.184z" transform="translate(0 -.001)" style="fill:#293340"/>
                  <g data-name="Group 263">
                    <path data-name="Line 3" transform="translate(9.31 21.165)" style="fill:none;stroke:#293340;stroke-linecap:round;stroke-width:1.5px" d="M0 0h13.131"/>
                    <path data-name="Line 4" transform="translate(9.31 15.876)" style="fill:none;stroke:#293340;stroke-linecap:round;stroke-width:1.5px" d="M0 0h13.131"/>
                    <path data-name="Line 5" style="fill:none;stroke:#293340;stroke-linecap:round;stroke-width:1.5px" d="M0 0h13.131" transform="translate(9.31 10.587)"/>
                  </g>
                </svg>
                <span>menu</span>
              </button>
            </div>
            <div class="col-span-12 xl:col-span-4 place-self-center">
                <NuxtLink to="/">
                    <NuxtImg
                     :src="setting.logo" alt="logo"/>
                </NuxtLink>
            </div>
            <div class="col-span-12 xl:col-span-4 flex items-center justify-center xl:justify-end mt-12 xl:mt-0">
              <button aria-controls="default-sidebar" type="button" class="flex text-thblack-100 text-xl focus:outline-none mx-5 xl:mx-2 xl:hidden" @click="()=>{showMenu=!showMenu;}">
                <svg class="w-[22px] h-[22px] mt-1 mr-1" data-name="Group 9826" xmlns="http://www.w3.org/2000/svg" width="31.75" height="31.751" viewBox="0 0 31.75 31.751">
                  <path data-name="instagram(1)" d="M16.188 31.752h-.316c-2.489.006-4.788-.057-7.025-.193a9.39 9.39 0 0 1-5.413-2.049A8.688 8.688 0 0 1 .515 24.8a20.885 20.885 0 0 1-.479-4.987C.02 18.65 0 17.276 0 15.88s.02-2.78.036-3.936a20.888 20.888 0 0 1 .479-4.987 8.688 8.688 0 0 1 2.92-4.713A9.39 9.39 0 0 1 8.848.2c2.236-.141 4.536-.2 7.03-.2s4.789.059 7.022.2a9.39 9.39 0 0 1 5.413 2.049 8.687 8.687 0 0 1 2.919 4.713 20.887 20.887 0 0 1 .479 4.987c.016 1.159.033 2.533.036 3.929v.006c0 1.4-.02 2.77-.036 3.929a20.875 20.875 0 0 1-.479 4.987 8.687 8.687 0 0 1-2.919 4.713 9.39 9.39 0 0 1-5.413 2.045c-2.142.13-4.342.194-6.715.194zm-.316-2.481c2.448.006 4.7-.056 6.88-.189a6.833 6.833 0 0 0 4-1.5 6.262 6.262 0 0 0 2.084-3.4 19 19 0 0 0 .4-4.408c.016-1.151.032-2.515.036-3.9s-.02-2.747-.036-3.9a19 19 0 0 0-.4-4.408 6.262 6.262 0 0 0-2.084-3.4 6.835 6.835 0 0 0-4-1.5c-2.184-.133-4.432-.194-6.874-.189s-4.7.056-6.88.189a6.834 6.834 0 0 0-4 1.5 6.262 6.262 0 0 0-2.084 3.4 19 19 0 0 0-.4 4.408c-.016 1.152-.032 2.517-.036 3.9s.02 2.743.036 3.9a19 19 0 0 0 .4 4.408A6.262 6.262 0 0 0 5 27.587a6.834 6.834 0 0 0 4 1.5c2.182.128 4.431.19 6.872.184z" transform="translate(0 -.001)" style="fill:#293340"/>
                  <g data-name="Group 263">
                    <path data-name="Line 3" transform="translate(9.31 21.165)" style="fill:none;stroke:#293340;stroke-linecap:round;stroke-width:1.5px" d="M0 0h13.131"/>
                    <path data-name="Line 4" transform="translate(9.31 15.876)" style="fill:none;stroke:#293340;stroke-linecap:round;stroke-width:1.5px" d="M0 0h13.131"/>
                    <path data-name="Line 5" style="fill:none;stroke:#293340;stroke-linecap:round;stroke-width:1.5px" d="M0 0h13.131" transform="translate(9.31 10.587)"/>
                  </g>
                </svg>
              </button>
                <button class="mx-5 xl:mx-2" @click="() => {showContact = true}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.044" height="22.062" viewBox="0 0 22.044 22.062">
                        <path data-name="telephone(2)" d="M14.463 22.063C5.623 22-4.733 9.116 2.835 1.543c.269-.273.553-.536.846-.782a3.213 3.213 0 0 1 4.342.185l.011.011 1.457 1.515A3.16 3.16 0 0 1 8.453 7.6a6.958 6.958 0 0 0-1.153.573c-.8.818-1.314 2.147 1.689 5.154.974.976 2.417 2.273 3.695 2.273a2.04 2.04 0 0 0 1.453-.67 6.7 6.7 0 0 0 .532-1.1 3.154 3.154 0 0 1 5.136-1.058l1.5 1.449.011.01a3.219 3.219 0 0 1 .192 4.335c-.229.274-.473.542-.726.8a8.743 8.743 0 0 1-6.319 2.697zM5.755 1.726a1.5 1.5 0 0 0-.967.355c-.251.21-.494.436-.725.67-4.034 4.1-1.817 9.695 2.059 13.527 3.841 3.822 9.41 5.911 13.439 1.864.217-.217.426-.447.622-.682a1.488 1.488 0 0 0-.084-2.009L18.6 14l-.011-.01a1.419 1.419 0 0 0-2.322.477 6.641 6.641 0 0 1-.887 1.653 3.741 3.741 0 0 1-2.7 1.2c-1.9 0-3.623-1.485-4.914-2.779-1.955-1.877-4.22-5.083-1.666-7.607a6.843 6.843 0 0 1 1.7-.925 1.426 1.426 0 0 0 .464-2.325l-.011-.011L6.8 2.158a1.476 1.476 0 0 0-1.043-.432zM21.4 10.3a.862.862 0 0 1-.857-.784 8.6 8.6 0 0 0-7.8-7.8A.862.862 0 1 1 12.9 0a10.4 10.4 0 0 1 9.358 9.358.862.862 0 0 1-.781.935q-.042.007-.077.007zm-6.713 0a.862.862 0 0 0 .545-1.09 3.486 3.486 0 0 0-2.121-2.177.862.862 0 0 0-.574 1.625 1.751 1.751 0 0 1 1.061 1.1.861.861 0 0 0 1.09.545zm3.385-.007a.862.862 0 0 0 .731-.975 6.941 6.941 0 0 0-5.862-5.858.862.862 0 0 0-.241 1.706 5.209 5.209 0 0 1 4.4 4.4.861.861 0 0 0 .975.731z" transform="translate(-.214 -.001)" style="fill:#293340"/>
                    </svg>
                </button>
                <NuxtLink :to="setting.shop_link" class="mx-5 xl:mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.999" height="22" viewBox="0 0 21.999 22">
                        <g data-name="Group 231">
                            <path data-name="instagram(1)" d="M11.217 22H11c-1.724 0-3.318-.04-4.867-.134a6.506 6.506 0 0 1-3.75-1.42 6.02 6.02 0 0 1-2.026-3.264 14.472 14.472 0 0 1-.332-3.456C.014 12.923 0 11.971 0 11s.014-1.92.025-2.723a14.473 14.473 0 0 1 .332-3.456A6.02 6.02 0 0 1 2.38 1.555 6.506 6.506 0 0 1 6.131.136C7.68.041 9.274 0 11 0s3.318.04 4.867.134a6.506 6.506 0 0 1 3.75 1.42A6.019 6.019 0 0 1 21.64 4.82a14.472 14.472 0 0 1 .332 3.456c.011.8.023 1.755.025 2.723 0 .968-.014 1.919-.025 2.723a14.465 14.465 0 0 1-.332 3.456 6.019 6.019 0 0 1-2.023 3.266 6.506 6.506 0 0 1-3.75 1.42c-1.484.09-3.008.134-4.653.134zM11 20.282c1.7 0 3.254-.039 4.767-.131a4.735 4.735 0 0 0 2.769-1.036 4.339 4.339 0 0 0 1.444-2.359 13.166 13.166 0 0 0 .279-3.054c.011-.8.022-1.743.025-2.7s-.014-1.9-.025-2.7a13.168 13.168 0 0 0-.279-3.054 4.339 4.339 0 0 0-1.444-2.359 4.736 4.736 0 0 0-2.769-1.036c-1.515-.094-3.073-.137-4.767-.133s-3.254.039-4.767.131a4.736 4.736 0 0 0-2.767 1.036 4.339 4.339 0 0 0-1.444 2.359A13.167 13.167 0 0 0 1.744 8.3c-.011.8-.022 1.744-.025 2.7s.014 1.9.025 2.7a13.166 13.166 0 0 0 .279 3.054 4.339 4.339 0 0 0 1.444 2.359 4.736 4.736 0 0 0 2.769 1.036c1.512.094 3.07.137 4.764.133z" transform="translate(0 -.001)" style="fill:#293340"/>
                            <g data-name="Group 230">
                                <path data-name="Path 29563" d="M14.8 12.625A5.761 5.761 0 0 1 9 6.828a.828.828 0 0 1 1.656 0 4.14 4.14 0 0 0 8.281 0 .828.828 0 0 1 1.656 0 5.761 5.761 0 0 1-5.793 5.797z" transform="translate(-3.797 -1.625)" style="fill:#293340"/>
                            </g>
                        </g>
                    </svg>
                </NuxtLink>
                <NuxtLink :to="setting.instagram_link" class="mx-5 xl:mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.062" height="22.062" viewBox="0 0 22.062 22.062">
                        <path data-name="instagram(1)" d="M11.249 22.064h-.22c-1.729 0-3.327-.04-4.881-.134a6.525 6.525 0 0 1-3.761-1.424A6.037 6.037 0 0 1 .358 17.23a14.512 14.512 0 0 1-.333-3.465C.014 12.959 0 12.005 0 11.034S.014 9.106.025 8.3a14.514 14.514 0 0 1 .333-3.465A6.037 6.037 0 0 1 2.387 1.56 6.525 6.525 0 0 1 6.148.136C7.7.041 9.3 0 11.033 0s3.327.04 4.881.134a6.525 6.525 0 0 1 3.762 1.426A6.036 6.036 0 0 1 21.7 4.835a14.513 14.513 0 0 1 .337 3.465c.011.805.023 1.76.025 2.73 0 .971-.014 1.925-.025 2.73a14.505 14.505 0 0 1-.337 3.47 6.036 6.036 0 0 1-2.029 3.275 6.525 6.525 0 0 1-3.761 1.424 75.93 75.93 0 0 1-4.666.135zm-.22-1.724c1.7 0 3.263-.039 4.781-.131a4.748 4.748 0 0 0 2.777-1.039 4.352 4.352 0 0 0 1.447-2.37 13.2 13.2 0 0 0 .28-3.063c.011-.8.022-1.748.025-2.709s-.014-1.909-.025-2.709a13.206 13.206 0 0 0-.28-3.063A4.352 4.352 0 0 0 18.586 2.9a4.749 4.749 0 0 0-2.776-1.044c-1.517-.092-3.08-.135-4.777-.131s-3.263.039-4.781.131A4.749 4.749 0 0 0 3.476 2.9a4.352 4.352 0 0 0-1.448 2.361 13.2 13.2 0 0 0-.28 3.063c-.011.8-.022 1.749-.025 2.711s.014 1.906.025 2.707a13.2 13.2 0 0 0 .28 3.063 4.352 4.352 0 0 0 1.448 2.365 4.749 4.749 0 0 0 2.777 1.039c1.517.091 3.08.135 4.776.131zm-.041-3.921a5.386 5.386 0 1 1 5.386-5.386 5.393 5.393 0 0 1-5.386 5.386zm0-9.049a3.663 3.663 0 1 0 3.663 3.663 3.667 3.667 0 0 0-3.663-3.663zm5.99-3.447a1.293 1.293 0 1 0 1.292 1.292 1.293 1.293 0 0 0-1.292-1.292zm0 0" transform="translate(0 -.001)" style="fill:#293340"/>
                    </svg>
                </NuxtLink>
                <div class="relative mt-2">
                  <button @click="isOpen" class="mx-5 xl:mx-2">
                    <svg data-name="Component 69 – 1" xmlns="http://www.w3.org/2000/svg" width="33.094" height="22.062" viewBox="0 0 33.094 22.062">
                      <g data-name="Group 226">
                        <path data-name="instagram(1)" d="M11.249 22.064h-.22c-1.729 0-3.327-.04-4.881-.134a6.525 6.525 0 0 1-3.761-1.424A6.037 6.037 0 0 1 .358 17.23a14.512 14.512 0 0 1-.333-3.465C.014 12.959 0 12.005 0 11.034S.014 9.106.025 8.3a14.514 14.514 0 0 1 .333-3.465A6.037 6.037 0 0 1 2.387 1.56 6.525 6.525 0 0 1 6.148.136C7.7.041 9.3 0 11.033 0s3.327.04 4.881.134a6.525 6.525 0 0 1 3.762 1.426A6.036 6.036 0 0 1 21.7 4.835a14.513 14.513 0 0 1 .337 3.465c.011.805.023 1.76.025 2.73 0 .971-.014 1.925-.025 2.73a14.505 14.505 0 0 1-.337 3.47 6.036 6.036 0 0 1-2.029 3.275 6.525 6.525 0 0 1-3.761 1.424 75.93 75.93 0 0 1-4.666.135zm-.22-1.724c1.7 0 3.263-.039 4.781-.131a4.748 4.748 0 0 0 2.777-1.039 4.352 4.352 0 0 0 1.447-2.37 13.2 13.2 0 0 0 .28-3.063c.011-.8.022-1.748.025-2.709s-.014-1.909-.025-2.709a13.206 13.206 0 0 0-.28-3.063A4.352 4.352 0 0 0 18.586 2.9a4.749 4.749 0 0 0-2.776-1.044c-1.517-.092-3.08-.135-4.777-.131s-3.263.039-4.781.131A4.749 4.749 0 0 0 3.476 2.9a4.352 4.352 0 0 0-1.448 2.361 13.2 13.2 0 0 0-.28 3.063c-.011.8-.022 1.749-.025 2.711s.014 1.906.025 2.707a13.2 13.2 0 0 0 .28 3.063 4.352 4.352 0 0 0 1.448 2.365 4.749 4.749 0 0 0 2.777 1.039c1.517.091 3.08.135 4.776.131z" transform="translate(0 -.001)" style="fill:#293340"/>
                        <g data-name="Group 225">
                          <path data-name="Path 29595" d="M5.75 8.44a.691.691 0 0 1 .691-.69h3.683a.69.69 0 1 1 0 1.381H7.131v5.754a.691.691 0 0 1-1.381 0z" transform="translate(-.473 -.632)" style="fill-rule:evenodd;fill:#293340"/>
                          <path data-name="Path 29596" d="M5.75 11.94a.691.691 0 0 1 .691-.69h3.452a.69.69 0 1 1 0 1.381H6.441a.691.691 0 0 1-.691-.691z" transform="translate(-.473 -.91)" style="fill-rule:evenodd;fill:#293340"/>
                          <path data-name="Path 29597" d="M5.75 15.44a.691.691 0 0 1 .691-.69h3.452a.69.69 0 1 1 0 1.381H6.441a.691.691 0 0 1-.691-.691z" transform="translate(-.473 -1.187)" style="fill-rule:evenodd;fill:#293340"/>
                          <path data-name="Path 29598" d="M12.941 8.75a.691.691 0 0 1 .691.69v5.524a.691.691 0 0 1-1.381 0V9.44a.691.691 0 0 1 .69-.69z" transform="translate(-.988 -.711)" style="fill-rule:evenodd;fill:#293340"/>
                          <path data-name="Path 29599" d="M15.012 10.631a1.381 1.381 0 0 0-1.381 1.381V15a.691.691 0 0 1-1.381 0v-2.988a2.762 2.762 0 0 1 5.524 0V15a.691.691 0 0 1-1.381 0v-2.988a1.381 1.381 0 0 0-1.381-1.381z" transform="translate(-.988 -.751)" style="fill-rule:evenodd;fill:#293340"/>
                        </g>
                      </g>
                      <path  data-name="Polygon 5" d="m3.558 0 3.558 5.269H0z" transform="rotate(180 16.547 7.363)"  style="fill:#293340"/>
                    </svg>
                  </button>
                  <div
                      v-show="show"
                      class="absolute right-0 py-6 mt-2 bg-thgray-250 pl-9 pr-8 z-40"
                  >
                    <div class="relative pl-2 py-2 group">
                      <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                      <div class="flex flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-0 before:h-full before:px-px before:bg-thgray-400 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 after:w-1.5 after:h-1.5 after:bg-thred after:border-2 after:box-content after:border-thgray-400 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
                        <NuxtLink to="/" class="text-base text-thblack-200">English</NuxtLink>
                      </div>
                    </div>
                    <div class="relative pl-2 py-2 group">
                      <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                      <div class="flex flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-0 before:h-full before:px-px before:bg-thgray-400 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 after:w-1.5 after:h-1.5 after:bg-thwhite after:border-2 after:box-content after:border-thgray-400 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
                        <NuxtLink to="/" class="text-base text-thgray-400">Persian</NuxtLink>
                      </div>
                    </div>
                    <div class="relative pl-2 py-2 group">
                      <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                      <div class="flex flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-0 before:h-full before:px-px before:bg-thgray-400 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-0 after:w-1.5 after:h-1.5 after:bg-thwhite after:border-2 after:box-content after:border-thgray-400 after:rounded-full  after:-translate-x-1/2 after:translate-y-1.5">
                        <NuxtLink to="/" class="text-base text-thgray-400">Arabic</NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
            <div class="col-span-12 place-content-center mt-12 xl:mt-20 flex justify-center">
                <div class="relative w-full max-w-[360px] md:max-w-[580px]">
                  <input type="text" class="w-full max-w-[360px] md:max-w-[580px] bg-thgray-250 px-7 py-3.5 rounded-xl placeholder:text-base placeholder:text-thgray-400 focus:outline-none" placeholder="Search..."/>
                  <button class="absolute right-5 inset-y-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.985" height="19.985" viewBox="0 0 19.985 19.985">
                      <g data-name="Icon feather-search">
                        <path data-name="Path 29455" d="M4.5 12.309A7.809 7.809 0 1 0 12.309 4.5 7.809 7.809 0 0 0 4.5 12.309z" transform="translate(-1.134 -3.5)" style="fill:none;stroke:#414141;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/>
                        <path data-name="Path 29456" d="m24.975 29.221 4.246-4.246" transform="translate(-23.561 -10.651)" style="fill:none;stroke:#414141;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/>
                      </g>
                    </svg>
                  </button>
                </div>
            </div>
        </div>
      <GrayBack :active="showMenu" />
      <aside id="default-sidebar" class="menu fixed top-0 left-0 z-40 w-full md:w-3/4 lg:w-2/3 xl:w-1/3  h-screen transition-transform -translate-x-full" :class="showMenu ? 'translate-x-0' : ''" aria-label="Sidenav" >
        <div class="overflow-y-auto h-full bg-thred p-8 lg:p-14 xl:p-24">
          <div class="grid grid-cols-12">
            <div class="col-span-12 flex justify-start">
              <button @click="()=>{showMenu=false}">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43">
                  <g data-name="Group 9785">
                    <g data-name="Rectangle 2854" style="stroke-width:3.5px;stroke:#fff;fill:none">
                      <rect width="43" height="43" rx="13" style="stroke:none"/>
                      <rect x="1.75" y="1.75" width="39.5" height="39.5" rx="11.25" style="fill:none"/>
                    </g>
                    <g data-name="Group 135">
                      <path data-name="Path 29514" d="M0 .553.552 0l5.8 5.8L12.141 0l.552.552L6.9 6.349l5.793 5.793-.552.552L6.348 6.9.555 12.694 0 12.142l5.8-5.793z" transform="translate(15.153 15.138)" style="fill:#fff;stroke-width:3px;stroke:#fff"/>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            <div class="col-span-12 flex flex-col justify-start p-8 lg:p-14 xl:p-20">
              <div class=" w-full border-b border-b-thwhite py-1 mb-8" v-for="menuItem in menuItems">
                <NuxtLink class="text-thwhite font-light text-2xl border-b border-b-thwhite border-b-4" :to="menuItem.href">
                  {{menuItem.name}}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </aside>
  <Modal :show="showContact">
    <div class="h-full  bg-gradient-to-tr from-thred2-200 to-thred2-100 p-7 ring-thwhite ring-1">
      <div class="flex justify-end">
        <button @click="()=>{showContact=false}">
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
            <g data-name="Group 461">
              <g data-name="Rectangle 2445" style="stroke:#fff;fill:none">
                <path style="stroke:none" d="M0 0h31v31H0z"/>
                <path style="fill:none" d="M.5.5h30v30H.5z"/>
              </g>
              <g data-name="Group 135">
                <path data-name="Path 29514" d="M0 .732.731 0l7.677 7.678L16.08.006l.731.731-7.673 7.672 7.673 7.673-.731.731-7.672-7.674-7.673 7.673L0 16.081l7.677-7.672z" transform="translate(7 6.999)" style="fill:#fff"/>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div class="grid grid-cols-12 mt-20">
        <div class="col-span-12 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="25.333" height="25.259" viewBox="0 0 25.333 25.259">
            <path d="M22.193 13.933a4 4 0 0 1-.852-.153 12 12 0 0 1-1.665-.5 2.542 2.542 0 0 0-3.153 1.271l-.28.572a15.483 15.483 0 0 1-3.381-2.542A15.483 15.483 0 0 1 10.32 9.2l.534-.356A2.542 2.542 0 0 0 12.125 5.7a13.131 13.131 0 0 1-.5-1.665 9.613 9.613 0 0 1-.153-.864A3.814 3.814 0 0 0 7.663 0H3.849A3.814 3.814 0 0 0 .036 4.335a24.153 24.153 0 0 0 21 20.924h.483a3.807 3.807 0 0 0 3.814-3.826v-3.814a3.814 3.814 0 0 0-3.14-3.686zm.636 7.627a1.271 1.271 0 0 1-.432.953 1.347 1.347 0 0 1-1.042.318A21.61 21.61 0 0 1 2.654 4.043 1.386 1.386 0 0 1 2.972 3a1.271 1.271 0 0 1 .953-.432h3.814a1.271 1.271 0 0 1 1.271 1q.076.521.191 1.03a14.136 14.136 0 0 0 .585 1.97l-1.78.832a1.271 1.271 0 0 0-.623 1.691 18.42 18.42 0 0 0 8.9 8.9 1.325 1.325 0 0 0 1.691-.661l.788-1.78a17.4 17.4 0 0 0 2.008.585q.508.114 1.03.191a1.271 1.271 0 0 1 1 1.271z" style="fill:#fafafa"/>
          </svg>
        </div>
        <div class="col-span-12 flex justify-center mt-8">
          <p class="text-thwhite font-light text-2xl">{{ setting.telephone }}</p>
        </div>
        <div class="col-span-12 flex justify-center mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="25.424" height="20.339" viewBox="0 0 25.424 20.339">
            <path d="M21.61 0H3.814A3.814 3.814 0 0 0 0 3.814v12.712a3.814 3.814 0 0 0 3.814 3.814h17.8a3.814 3.814 0 0 0 3.814-3.814V3.814A3.814 3.814 0 0 0 21.61 0zm-.728 2.542-7.407 6.1a1.264 1.264 0 0 1-1.481.036L4.542 2.542zM21.61 17.8H3.814a1.271 1.271 0 0 1-1.271-1.271V4.195l7.881 6.483a3.778 3.778 0 0 0 2.273.754 3.908 3.908 0 0 0 2.349-.789l7.836-6.448v12.331A1.271 1.271 0 0 1 21.61 17.8z" style="fill:#fafafa"/>
          </svg>
        </div>
        <div class="col-span-12 flex justify-center mt-8">
          <p class="text-thwhite font-light text-2xl">{{ setting.email }}</p>
        </div>
        <div class="col-span-12 flex justify-center mt-14">
          <div class="flex flex-row">
            <NuxtLink :to="setting.facebook" class="mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="37.42" height="37.42" viewBox="0 0 37.42 37.42">
                <path d="M28.7 6.474a2.245 2.245 0 1 0 1.588.658 2.245 2.245 0 0 0-1.588-.658zM37.308 11a14.2 14.2 0 0 0-.861-4.547 9.243 9.243 0 0 0-2.17-3.312A8.794 8.794 0 0 0 30.965.992a13.658 13.658 0 0 0-4.547-.88C24.435 0 23.8 0 18.71 0S12.985 0 11 .112a13.658 13.658 0 0 0-4.545.88 8.943 8.943 0 0 0-3.312 2.151A8.794 8.794 0 0 0 .992 6.455 13.658 13.658 0 0 0 .112 11C0 12.985 0 13.621 0 18.71s0 5.725.112 7.708a13.658 13.658 0 0 0 .879 4.547 8.794 8.794 0 0 0 2.152 3.312 8.943 8.943 0 0 0 3.312 2.152 13.658 13.658 0 0 0 4.545.879c1.983.112 2.619.112 7.708.112s5.725 0 7.708-.112a13.658 13.658 0 0 0 4.547-.879 8.794 8.794 0 0 0 3.312-2.152 9.074 9.074 0 0 0 2.17-3.312 14.2 14.2 0 0 0 .861-4.547c0-1.983.112-2.619.112-7.708s0-5.725-.112-7.708zM33.94 26.194a10.5 10.5 0 0 1-.636 3.48 5.725 5.725 0 0 1-1.4 2.152 5.969 5.969 0 0 1-2.152 1.4 10.5 10.5 0 0 1-3.48.636c-1.871.094-2.563.112-7.484.112s-5.613 0-7.484-.112a10.721 10.721 0 0 1-3.63-.561 6.118 6.118 0 0 1-2.058-1.4 5.613 5.613 0 0 1-1.385-2.152 10.365 10.365 0 0 1-.748-3.555c0-1.871-.112-2.563-.112-7.484s0-5.613.112-7.484a10.365 10.365 0 0 1 .655-3.555 5.613 5.613 0 0 1 1.475-2.058 5.875 5.875 0 0 1 2.058-1.5 10.721 10.721 0 0 1 3.555-.636c1.871 0 2.563-.112 7.484-.112s5.613 0 7.484.112a10.5 10.5 0 0 1 3.48.636 5.725 5.725 0 0 1 2.226 1.5 5.725 5.725 0 0 1 1.4 2.058 10.5 10.5 0 0 1 .636 3.555c.094 1.871.112 2.563.112 7.484s-.015 5.613-.108 7.484zM18.71 9.112a9.579 9.579 0 1 0 3.682.72 9.6 9.6 0 0 0-3.682-.72zm0 15.829a6.23 6.23 0 1 1 2.384-.474 6.23 6.23 0 0 1-2.384.474z" style="fill:#fafafa"/>
              </svg>
            </NuxtLink>
            <NuxtLink :to="setting.twitter" class="mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="44.904" height="44.904" viewBox="0 0 44.904 44.904">
                <g data-name="Layer 2">
                  <g data-name="twitter">
                    <path data-name="Vector" d="M10.334 29.939h-.15a20.338 20.338 0 0 1-8.7-2.039 2.582 2.582 0 0 1-1.459-2.695A2.638 2.638 0 0 1 2.2 23a12.4 12.4 0 0 0 4.752-1.665A17.756 17.756 0 0 1 .38 4.362a2.638 2.638 0 0 1 1.871-2.151 2.526 2.526 0 0 1 2.676.767A13.265 13.265 0 0 0 8.962 6.49a13.265 13.265 0 0 0 5.095 1.633 8.419 8.419 0 0 1 2.638-5.8 8.363 8.363 0 0 1 11.918.355 1.31 1.31 0 0 0 1.459.187A2.6 2.6 0 0 1 33.7 5.859a12.461 12.461 0 0 1-2.395 4.865 20.188 20.188 0 0 1-20.971 19.215zm0-3.742h.15a16.446 16.446 0 0 0 17.007-16.072 2.47 2.47 0 0 1 .692-1.59 9.71 9.71 0 0 0 1.16-1.871 4.79 4.79 0 0 1-3.574-1.59 4.584 4.584 0 0 0-3.293-1.328 4.677 4.677 0 0 0-3.349 1.291 4.734 4.734 0 0 0-1.347 4.528l.486 2.133-2.189.15a15.529 15.529 0 0 1-6.612-.9 15.529 15.529 0 0 1-5.623-3.592 13.321 13.321 0 0 0 6.978 12.086l1.777 1.01-1.179 1.684A10.515 10.515 0 0 1 6.4 25.729a15.6 15.6 0 0 0 3.91.468z" transform="translate(5.588 7.481)" style="fill:#fafafa"/>
                  </g>
                </g>
              </svg>
            </NuxtLink>
            <NuxtLink :to="setting.instagram_link">
              <svg xmlns="http://www.w3.org/2000/svg" width="37.42" height="37.42" viewBox="0 0 37.42 37.42">
                <path d="M35.362 0H2.058A2.058 2.058 0 0 0 0 2.058v33.3a2.058 2.058 0 0 0 2.058 2.062h17.924v-14.5h-4.864v-5.613h4.865V13.1a6.81 6.81 0 0 1 7.259-7.484 37.906 37.906 0 0 1 4.359.225v5.052h-2.975c-2.357 0-2.806 1.123-2.806 2.75v3.611h5.613l-.73 5.613H25.82V37.42h9.542a2.058 2.058 0 0 0 2.058-2.058V2.058A2.058 2.058 0 0 0 35.362 0z" style="fill:#fafafa"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Modal>
  </div>
</template>