<script setup>
 import GrayBack from "~/components/layout/GrayBack.vue";
 const showMenu = ref(false);
 onMounted(()=>{
   window.document.addEventListener('click',(e)=>{
     if(e.target.classList.contains('gray-back')){
       showMenu.value = false;
     }
   })
 });
 onUnmounted(()=>{
   window.document.removeEventListener('click');
 });
</script>
<template>
        <div class="grid grid-cols-12">
            <div class="col-span-12 md:col-span-4 flex items-center md:justify-start ">
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
            <div class="col-span-12 md:col-span-4 place-self-center">
                <NuxtLink to="/">
                    <NuxtImg
                     src="/images/logo.png" alt="logo"/>
                </NuxtLink>
            </div>
            <div class="col-span-12 md:col-span-4 flex items-center md:justify-end">
                <button class="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.044" height="22.062" viewBox="0 0 22.044 22.062">
                        <path data-name="telephone(2)" d="M14.463 22.063C5.623 22-4.733 9.116 2.835 1.543c.269-.273.553-.536.846-.782a3.213 3.213 0 0 1 4.342.185l.011.011 1.457 1.515A3.16 3.16 0 0 1 8.453 7.6a6.958 6.958 0 0 0-1.153.573c-.8.818-1.314 2.147 1.689 5.154.974.976 2.417 2.273 3.695 2.273a2.04 2.04 0 0 0 1.453-.67 6.7 6.7 0 0 0 .532-1.1 3.154 3.154 0 0 1 5.136-1.058l1.5 1.449.011.01a3.219 3.219 0 0 1 .192 4.335c-.229.274-.473.542-.726.8a8.743 8.743 0 0 1-6.319 2.697zM5.755 1.726a1.5 1.5 0 0 0-.967.355c-.251.21-.494.436-.725.67-4.034 4.1-1.817 9.695 2.059 13.527 3.841 3.822 9.41 5.911 13.439 1.864.217-.217.426-.447.622-.682a1.488 1.488 0 0 0-.084-2.009L18.6 14l-.011-.01a1.419 1.419 0 0 0-2.322.477 6.641 6.641 0 0 1-.887 1.653 3.741 3.741 0 0 1-2.7 1.2c-1.9 0-3.623-1.485-4.914-2.779-1.955-1.877-4.22-5.083-1.666-7.607a6.843 6.843 0 0 1 1.7-.925 1.426 1.426 0 0 0 .464-2.325l-.011-.011L6.8 2.158a1.476 1.476 0 0 0-1.043-.432zM21.4 10.3a.862.862 0 0 1-.857-.784 8.6 8.6 0 0 0-7.8-7.8A.862.862 0 1 1 12.9 0a10.4 10.4 0 0 1 9.358 9.358.862.862 0 0 1-.781.935q-.042.007-.077.007zm-6.713 0a.862.862 0 0 0 .545-1.09 3.486 3.486 0 0 0-2.121-2.177.862.862 0 0 0-.574 1.625 1.751 1.751 0 0 1 1.061 1.1.861.861 0 0 0 1.09.545zm3.385-.007a.862.862 0 0 0 .731-.975 6.941 6.941 0 0 0-5.862-5.858.862.862 0 0 0-.241 1.706 5.209 5.209 0 0 1 4.4 4.4.861.861 0 0 0 .975.731z" transform="translate(-.214 -.001)" style="fill:#293340"/>
                    </svg>
                </button>
                <NuxtLink to="\" class="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.999" height="22" viewBox="0 0 21.999 22">
                        <g data-name="Group 231">
                            <path data-name="instagram(1)" d="M11.217 22H11c-1.724 0-3.318-.04-4.867-.134a6.506 6.506 0 0 1-3.75-1.42 6.02 6.02 0 0 1-2.026-3.264 14.472 14.472 0 0 1-.332-3.456C.014 12.923 0 11.971 0 11s.014-1.92.025-2.723a14.473 14.473 0 0 1 .332-3.456A6.02 6.02 0 0 1 2.38 1.555 6.506 6.506 0 0 1 6.131.136C7.68.041 9.274 0 11 0s3.318.04 4.867.134a6.506 6.506 0 0 1 3.75 1.42A6.019 6.019 0 0 1 21.64 4.82a14.472 14.472 0 0 1 .332 3.456c.011.8.023 1.755.025 2.723 0 .968-.014 1.919-.025 2.723a14.465 14.465 0 0 1-.332 3.456 6.019 6.019 0 0 1-2.023 3.266 6.506 6.506 0 0 1-3.75 1.42c-1.484.09-3.008.134-4.653.134zM11 20.282c1.7 0 3.254-.039 4.767-.131a4.735 4.735 0 0 0 2.769-1.036 4.339 4.339 0 0 0 1.444-2.359 13.166 13.166 0 0 0 .279-3.054c.011-.8.022-1.743.025-2.7s-.014-1.9-.025-2.7a13.168 13.168 0 0 0-.279-3.054 4.339 4.339 0 0 0-1.444-2.359 4.736 4.736 0 0 0-2.769-1.036c-1.515-.094-3.073-.137-4.767-.133s-3.254.039-4.767.131a4.736 4.736 0 0 0-2.767 1.036 4.339 4.339 0 0 0-1.444 2.359A13.167 13.167 0 0 0 1.744 8.3c-.011.8-.022 1.744-.025 2.7s.014 1.9.025 2.7a13.166 13.166 0 0 0 .279 3.054 4.339 4.339 0 0 0 1.444 2.359 4.736 4.736 0 0 0 2.769 1.036c1.512.094 3.07.137 4.764.133z" transform="translate(0 -.001)" style="fill:#293340"/>
                            <g data-name="Group 230">
                                <path data-name="Path 29563" d="M14.8 12.625A5.761 5.761 0 0 1 9 6.828a.828.828 0 0 1 1.656 0 4.14 4.14 0 0 0 8.281 0 .828.828 0 0 1 1.656 0 5.761 5.761 0 0 1-5.793 5.797z" transform="translate(-3.797 -1.625)" style="fill:#293340"/>
                            </g>
                        </g>
                    </svg>
                </NuxtLink>
                <NuxtLink to="\" class="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.062" height="22.062" viewBox="0 0 22.062 22.062">
                        <path data-name="instagram(1)" d="M11.249 22.064h-.22c-1.729 0-3.327-.04-4.881-.134a6.525 6.525 0 0 1-3.761-1.424A6.037 6.037 0 0 1 .358 17.23a14.512 14.512 0 0 1-.333-3.465C.014 12.959 0 12.005 0 11.034S.014 9.106.025 8.3a14.514 14.514 0 0 1 .333-3.465A6.037 6.037 0 0 1 2.387 1.56 6.525 6.525 0 0 1 6.148.136C7.7.041 9.3 0 11.033 0s3.327.04 4.881.134a6.525 6.525 0 0 1 3.762 1.426A6.036 6.036 0 0 1 21.7 4.835a14.513 14.513 0 0 1 .337 3.465c.011.805.023 1.76.025 2.73 0 .971-.014 1.925-.025 2.73a14.505 14.505 0 0 1-.337 3.47 6.036 6.036 0 0 1-2.029 3.275 6.525 6.525 0 0 1-3.761 1.424 75.93 75.93 0 0 1-4.666.135zm-.22-1.724c1.7 0 3.263-.039 4.781-.131a4.748 4.748 0 0 0 2.777-1.039 4.352 4.352 0 0 0 1.447-2.37 13.2 13.2 0 0 0 .28-3.063c.011-.8.022-1.748.025-2.709s-.014-1.909-.025-2.709a13.206 13.206 0 0 0-.28-3.063A4.352 4.352 0 0 0 18.586 2.9a4.749 4.749 0 0 0-2.776-1.044c-1.517-.092-3.08-.135-4.777-.131s-3.263.039-4.781.131A4.749 4.749 0 0 0 3.476 2.9a4.352 4.352 0 0 0-1.448 2.361 13.2 13.2 0 0 0-.28 3.063c-.011.8-.022 1.749-.025 2.711s.014 1.906.025 2.707a13.2 13.2 0 0 0 .28 3.063 4.352 4.352 0 0 0 1.448 2.365 4.749 4.749 0 0 0 2.777 1.039c1.517.091 3.08.135 4.776.131zm-.041-3.921a5.386 5.386 0 1 1 5.386-5.386 5.393 5.393 0 0 1-5.386 5.386zm0-9.049a3.663 3.663 0 1 0 3.663 3.663 3.667 3.667 0 0 0-3.663-3.663zm5.99-3.447a1.293 1.293 0 1 0 1.292 1.292 1.293 1.293 0 0 0-1.292-1.292zm0 0" transform="translate(0 -.001)" style="fill:#293340"/>
                    </svg>
                </NuxtLink>
                <button class="mx-2">
                    <svg data-name="Group 226" xmlns="http://www.w3.org/2000/svg" width="22.062" height="22.062" viewBox="0 0 22.062 22.062">
                        <path data-name="instagram(1)" d="M11.249 22.064h-.22c-1.729 0-3.327-.04-4.881-.134a6.525 6.525 0 0 1-3.761-1.424A6.037 6.037 0 0 1 .358 17.23a14.513 14.513 0 0 1-.333-3.465C.014 12.959 0 12.005 0 11.034S.014 9.106.025 8.3a14.514 14.514 0 0 1 .333-3.465A6.037 6.037 0 0 1 2.387 1.56 6.525 6.525 0 0 1 6.148.136C7.7.041 9.3 0 11.033 0s3.327.04 4.881.134a6.525 6.525 0 0 1 3.762 1.426A6.036 6.036 0 0 1 21.7 4.835a14.513 14.513 0 0 1 .337 3.465c.011.805.023 1.76.025 2.73 0 .971-.014 1.925-.025 2.73a14.505 14.505 0 0 1-.337 3.47 6.036 6.036 0 0 1-2.029 3.275 6.525 6.525 0 0 1-3.761 1.424 75.93 75.93 0 0 1-4.666.135zm-.22-1.724c1.7 0 3.263-.039 4.781-.131a4.748 4.748 0 0 0 2.777-1.039 4.352 4.352 0 0 0 1.447-2.37 13.2 13.2 0 0 0 .28-3.063c.011-.8.022-1.748.025-2.709s-.014-1.909-.025-2.709a13.206 13.206 0 0 0-.28-3.063A4.352 4.352 0 0 0 18.586 2.9a4.749 4.749 0 0 0-2.776-1.044c-1.517-.092-3.08-.135-4.777-.131s-3.263.039-4.781.131A4.749 4.749 0 0 0 3.476 2.9a4.352 4.352 0 0 0-1.448 2.361 13.2 13.2 0 0 0-.28 3.063c-.011.8-.022 1.749-.025 2.711s.014 1.906.025 2.707a13.2 13.2 0 0 0 .28 3.063 4.352 4.352 0 0 0 1.448 2.365 4.749 4.749 0 0 0 2.777 1.039c1.517.091 3.08.135 4.776.131z" transform="translate(0 -.001)" style="fill:#293340"/>
                        <g data-name="Group 225">
                            <path data-name="Path 29595" d="M5.75 8.44a.691.691 0 0 1 .691-.69h3.683a.69.69 0 1 1 0 1.381H7.131v5.754a.691.691 0 0 1-1.381 0z" transform="translate(-.473 -.632)" style="fill-rule:evenodd;fill:#293340"/>
                            <path data-name="Path 29596" d="M5.75 11.94a.691.691 0 0 1 .691-.69h3.452a.69.69 0 1 1 0 1.381H6.441a.691.691 0 0 1-.691-.691z" transform="translate(-.473 -.91)" style="fill-rule:evenodd;fill:#293340"/>
                            <path data-name="Path 29597" d="M5.75 15.44a.691.691 0 0 1 .691-.69h3.452a.69.69 0 1 1 0 1.381H6.441a.691.691 0 0 1-.691-.691z" transform="translate(-.473 -1.187)" style="fill-rule:evenodd;fill:#293340"/>
                            <path data-name="Path 29598" d="M12.941 8.75a.691.691 0 0 1 .691.69v5.524a.691.691 0 0 1-1.381 0V9.44a.691.691 0 0 1 .69-.69z" transform="translate(-.988 -.711)" style="fill-rule:evenodd;fill:#293340"/>
                            <path data-name="Path 29599" d="M15.012 10.631a1.381 1.381 0 0 0-1.381 1.381V15a.691.691 0 0 1-1.381 0v-2.988a2.762 2.762 0 0 1 5.524 0V15a.691.691 0 0 1-1.381 0v-2.988a1.381 1.381 0 0 0-1.381-1.381z" transform="translate(-.988 -.751)" style="fill-rule:evenodd;fill:#293340"/>
                        </g>
                    </svg>
                </button>
            </div>
            <div class="col-span-12 place-content-center mt-20 flex justify-center">
                <div class="relative w-full max-w-[580px]">
                  <input type="text" class="w-full max-w-[580px] bg-thgray-300 px-9 py-5 rounded-lg placeholder:text-base placeholder:text-thgray-400 focus:outline-none" placeholder="Search..."/>
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
      <aside id="default-sidebar" class="menu fixed top-0 left-0 z-40 w-full md:w-1/3  h-screen transition-transform -translate-x-full" :class="showMenu ? 'translate-x-0' : ''" aria-label="Sidenav" >
        <div class="overflow-y-auto h-full bg-thred p-24">
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
            <div class="col-span-12 flex flex-col justify-start p-24">
              <div class=" w-full border-b border-b-thwhite py-1 mb-8">
                <NuxtLink class="text-thwhite font-light text-2xl border-b border-b-thwhite border-b-4" to="\">
                  Home
                </NuxtLink>
              </div>
              <div class=" w-full border-b border-b-thwhite py-1 mb-8">
                <NuxtLink class="text-thwhite font-light text-2xl border-b border-b-thwhite border-b-4" to="\">
                  About Us
                </NuxtLink>
              </div>
              <div class=" w-full border-b border-b-thwhite py-1 mb-8">
                <NuxtLink class="text-thwhite font-light text-2xl border-b border-b-thwhite border-b-4" to="\">
                  Our Services
                </NuxtLink>
              </div>
              <div class=" w-full border-b border-b-thwhite py-1 mb-8">
                <NuxtLink class="text-thwhite font-light text-2xl border-b border-b-thwhite border-b-4" to="\">
                  Blogs
                </NuxtLink>
              </div>
              <div class=" w-full border-b border-b-thwhite py-1 mb-8">
                <NuxtLink class="text-thwhite font-light text-2xl border-b border-b-thwhite border-b-4" to="\">
                  Our Products
                </NuxtLink>
              </div>
              <div class=" w-full border-b border-b-thwhite py-1 mb-8">
                <NuxtLink class="text-thwhite font-light text-2xl border-b border-b-thwhite border-b-4" to="\">
                  Contact Us
                </NuxtLink>
              </div>
              <div class=" w-full border-b border-b-thwhite py-1 mb-8">
                <NuxtLink class="text-thwhite font-light text-2xl border-b border-b-thwhite border-b-4" to="\">
                  Our Projects
                </NuxtLink>
              </div>
              <div class=" w-full border-b border-b-thwhite py-1 mb-8">
                <NuxtLink class="text-thwhite font-light text-2xl border-b border-b-thwhite border-b-4" to="\">
                  Shop
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </aside>
</template>