<script setup>
import {useSettingStore} from "~/stores/useSettingStore.js";
const player = ref(null);
const play = ref(true);
const slider = ref(null);

const setting = useSettingStore().setting;

useHead({
  title: setting.title,
})
const getActive = (e) => {
  document.querySelector('.testimonial.active')?.classList.remove('active');
  e.target.closest('.testimonial').classList.add('active');
}
const filters = ref(null);

const showFilter = () => {
  if(filters.value.classList.contains('hidden')){
    filters.value.classList.remove('hidden');
    filters.value.classList.add('flex');
  }
  else{
    filters.value.classList.add('hidden');
    filters.value.classList.remove('flex');
  }
}
</script>

<template>
  <section class="projects">
    <div class="grid grid-cols-12">
      <div class="col-span-12 flex flex-col lg:hidden justify-center">
        <button @click="showFilter" class="flex justify-center text-thblack-100 text-xl focus:outline-none">
          <svg class="w-[22px] h-[22px] mt-1 mr-1" xmlns="http://www.w3.org/2000/svg" width="29.439" height="29.44" viewBox="0 0 29.439 29.44">
            <g data-name="Group 9831">
              <path data-name="Path 29643" d="M9.247 12.778V2.562a.562.562 0 1 0-1.124 0v10.216a1.676 1.676 0 0 0 0 3.164v1.227a.562.562 0 0 0 1.124 0v-1.227a1.676 1.676 0 0 0 0-3.164zm-.562 2.144a.562.562 0 1 1 .562-.562.562.562 0 0 1-.562.561z" style="fill:#293340" transform="rotate(90 11.765 12.965)"/>
              <path data-name="Path 29644" d="M16.371 5.371a1.683 1.683 0 0 0-1.124-1.582V2.562a.562.562 0 0 0-1.124 0v1.227a1.676 1.676 0 0 0 0 3.164v10.216a.562.562 0 0 0 1.124 0V6.953a1.683 1.683 0 0 0 1.124-1.582zm-1.685.562a.562.562 0 1 1 .562-.562.562.562 0 0 1-.563.562z" transform="rotate(90 12.347 12.383)" style="fill:#293340"/>
              <path data-name="Path 29645" d="M22.371 14.36a1.683 1.683 0 0 0-1.124-1.582V2.562a.562.562 0 0 0-1.124 0v10.216a1.676 1.676 0 0 0 0 3.164v1.227a.562.562 0 0 0 1.124 0v-1.227a1.683 1.683 0 0 0 1.124-1.582zm-1.685.562a.562.562 0 1 1 .562-.562.562.562 0 0 1-.563.561z" transform="rotate(90 12.93 11.8)" style="fill:#293340"/>
              <path data-name="instagram(1)" d="M15.01 29.441h-.293c-2.308.006-4.44-.053-6.514-.179a8.707 8.707 0 0 1-5.019-1.9 8.056 8.056 0 0 1-2.707-4.37 19.366 19.366 0 0 1-.444-4.624C.019 17.293 0 16.019 0 14.724s.018-2.574.033-3.649a19.368 19.368 0 0 1 .445-4.624 8.056 8.056 0 0 1 2.707-4.37A8.707 8.707 0 0 1 8.2.181C10.277.055 12.41 0 14.723 0s4.44.053 6.514.179a8.707 8.707 0 0 1 5.019 1.9 8.055 8.055 0 0 1 2.707 4.37 19.367 19.367 0 0 1 .444 4.624c.015 1.075.03 2.348.033 3.643v.005c0 1.3-.018 2.569-.033 3.643a19.356 19.356 0 0 1-.444 4.624 8.055 8.055 0 0 1-2.707 4.37 8.707 8.707 0 0 1-5.019 1.9c-1.986.121-4.026.18-6.226.18zm-.293-2.3c2.27.005 4.355-.052 6.379-.175a6.336 6.336 0 0 0 3.7-1.387 5.807 5.807 0 0 0 1.932-3.156 17.618 17.618 0 0 0 .373-4.087c.015-1.068.03-2.332.033-3.615s-.018-2.547-.033-3.615a17.622 17.622 0 0 0-.373-4.087A5.807 5.807 0 0 0 24.8 3.863a6.337 6.337 0 0 0-3.7-1.386c-2.025-.123-4.109-.18-6.374-.175s-4.354.052-6.379.175a6.337 6.337 0 0 0-3.7 1.386 5.807 5.807 0 0 0-1.941 3.156 17.62 17.62 0 0 0-.373 4.087c-.015 1.068-.03 2.334-.033 3.617s.018 2.543.033 3.612a17.618 17.618 0 0 0 .373 4.087 5.807 5.807 0 0 0 1.932 3.156 6.337 6.337 0 0 0 3.7 1.386c2.03.125 4.115.183 6.379.177z" transform="translate(0 -.001)" style="fill:#293340"/>
            </g>
          </svg>
          <span>filter</span>
        </button>
        <div ref="filters" class="flex-row flex-wrap justify-center hidden">
          <button class="text-thblack-100 text-lg mx-3.5">
            All
          </button>
          <button class="text-thblack-100 text-lg mx-3.5">
            Website
          </button>
          <button class="text-thblack-100 text-lg mx-3.5">
            Logo
          </button>
          <button class="text-thblack-100 text-lg mx-3.5">
            Instagram
          </button>
          <button class="text-thblack-100 text-lg mx-3.5">
            Teaser
          </button>
          <button class="text-thblack-100 text-lg mx-3.5">
            UI/UX
          </button>
        </div>
      </div>
      <div class="col-span-12 flex-row justify-center hidden lg:flex">
        <button class="text-thblack-100 text-lg mx-3.5">
          All
        </button>
        <button class="text-thblack-100 text-lg mx-3.5">
          Website
        </button>
        <button class="text-thblack-100 text-lg mx-3.5">
          Logo
        </button>
        <button class="text-thblack-100 text-lg mx-3.5">
          Instagram
        </button>
        <button class="text-thblack-100 text-lg mx-3.5">
          Teaser
        </button>
        <button class="text-thblack-100 text-lg mx-3.5">
          UI/UX
        </button>
      </div>

    </div>
    <div class="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-5 mt-12">
        <div class="project relative">
          <NuxtLink class="w-full h-full" to="/">
            <NuxtImg src="/images/projects.jpg" class="w-full" />
          </NuxtLink>
          <button class="absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
              <defs>
                <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                  <feOffset dx="-1" dy="1"/>
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feFlood flood-opacity=".161"/>
                  <feComposite operator="in" in2="blur"/>
                  <feComposite in="SourceGraphic"/>
                </filter>
              </defs>
              <g style="filter:url(#hyq3wtdqja)">
                <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
              </g>
            </svg>
          </button>
        </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
      <div class="project relative">
        <NuxtLink class="w-full h-full" to="/">
          <NuxtImg src="/images/projects.jpg" class="w-full" />
        </NuxtLink>
        <button class="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">
            <defs>
              <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">
                <feOffset dx="-1" dy="1"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#hyq3wtdqja)">
              <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-12 flex justify-center mt-16">
        <NuxtLink to="/" class="bg-thred text-thwhite min-w-48 font-light font-xl px-16 py-6 flex flex-row content-center">
          <svg class="mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M9.6 16a.8.8 0 0 1-.8-.8V9.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zM.8 16a.8.8 0 0 1-.8-.8V9.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zm8-7.2a.8.8 0 0 1-.8-.8V.8a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zM.8 7.2a.8.8 0 0 1-.8-.8V.8A.8.8 0 0 1 .8 0h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4z" style="fill:#fff"/>
          </svg>
          <p>Projects</p>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="testimonials mt-44 lg:mt-52 xl:mt-72">
    <div class="grid grid-cols-12">
      <div class="col-span-12 xl:col-span-6 flex justify-center xl:justify-start">
        <h1 class="text-thblack-100 text-2xl">Testimonials</h1>
      </div>
      <div class="hidden xl:flex xl:col-span-6 justify-end">
        <NuxtLink to="/" class="text-thred text-2xl">
          See All
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-12 mt-14">
      <div class="col-span-3 hidden xl:block xl:mr-8">
          <NuxtImg src="/images/testimonials.webp" />
          <div class="bg-thred px-6 py-7">
            <h1 class="text-thwhite font-bold text-xl xl:text-base ">
              Peter Azarbad
            </h1>
            <p class="text-thwhite text-base">
              Justin
            </p>
          </div>
      </div>
      <div class="col-span-12 xl:col-span-9">
          <swiper-container
              :slides-per-view="1"
              :breakpoints="{
                768: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 5,
                },
              }"
              :loop="true"
              ref="slider"
          >
            <swiper-slide>
              <div class="testimonial col-span-2 group mx-0 md:mx-3 transition-all duration-300" @click="getActive">
                <NuxtImg class="h-auto max-w-full" src="/images/testimonials.webp" />
                <div class="bg-thgray-200 px-6 py-7 text-center xl:text-start group-hover:bg-thred group-[.active]:bg-thred transition-all duration-300" >
                  <h1 class="text-thblack-200 font-semibold text-xl xl:text-base group-hover:text-thwhite group-hover:font-bold group-[.active]:text-thwhite group-[.active]:font-bold transition-all duration-300 ">
                    Peter Azarbad
                  </h1>
                  <p class="text-thblack-200 opacity-40 text-xl xl:text-base group-hover:text-thwhite group-hover:opacity-100 group-[.active]:text-thwhite group-[.active]:opacity-100 transition-all duration-300" >
                    Justin
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="testimonial col-span-2 group mx-0 md:mx-3 transition-all duration-300" @click="getActive">
                <NuxtImg class="h-auto max-w-full" src="/images/testimonials.webp" />
                <div class="bg-thgray-200 px-6 py-7 text-center xl:text-start group-hover:bg-thred group-[.active]:bg-thred transition-all duration-300" >
                  <h1 class="text-thblack-200 font-semibold text-xl xl:text-base group-hover:text-thwhite group-hover:font-bold group-[.active]:text-thwhite group-[.active]:font-bold transition-all duration-300 ">
                    Peter Azarbad
                  </h1>
                  <p class="text-thblack-200 opacity-40 text-xl xl:text-base group-hover:text-thwhite group-hover:opacity-100 group-[.active]:text-thwhite group-[.active]:opacity-100 transition-all duration-300" >
                    Justin
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="testimonial col-span-2 group mx-0 md:mx-3 transition-all duration-300" @click="getActive">
                <NuxtImg class="h-auto max-w-full" src="/images/testimonials.webp" />
                <div class="bg-thgray-200 px-6 py-7 text-center xl:text-start group-hover:bg-thred group-[.active]:bg-thred transition-all duration-300" >
                  <h1 class="text-thblack-200 font-semibold text-xl xl:text-base group-hover:text-thwhite group-hover:font-bold group-[.active]:text-thwhite group-[.active]:font-bold transition-all duration-300 ">
                    Peter Azarbad
                  </h1>
                  <p class="text-thblack-200 opacity-40 text-xl xl:text-base group-hover:text-thwhite group-hover:opacity-100 group-[.active]:text-thwhite group-[.active]:opacity-100 transition-all duration-300" >
                    Justin
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="testimonial col-span-2 group mx-0 md:mx-3 transition-all duration-300" @click="getActive">
                <NuxtImg class="h-auto max-w-full" src="/images/testimonials.webp" />
                <div class="bg-thgray-200 px-6 py-7 text-center xl:text-start group-hover:bg-thred group-[.active]:bg-thred transition-all duration-300" >
                  <h1 class="text-thblack-200 font-semibold text-xl xl:text-base group-hover:text-thwhite group-hover:font-bold group-[.active]:text-thwhite group-[.active]:font-bold transition-all duration-300 ">
                    Peter Azarbad
                  </h1>
                  <p class="text-thblack-200 opacity-40 text-xl xl:text-base group-hover:text-thwhite group-hover:opacity-100 group-[.active]:text-thwhite group-[.active]:opacity-100 transition-all duration-300" >
                    Justin
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="testimonial col-span-2 group mx-0 md:mx-3 transition-all duration-300" @click="getActive">
                <NuxtImg class="h-auto max-w-full" src="/images/testimonials.webp" />
                <div class="bg-thgray-200 px-6 py-7 text-center xl:text-start group-hover:bg-thred group-[.active]:bg-thred transition-all duration-300" >
                  <h1 class="text-thblack-200 font-semibold text-xl xl:text-base group-hover:text-thwhite group-hover:font-bold group-[.active]:text-thwhite group-[.active]:font-bold transition-all duration-300 ">
                    Peter Azarbad
                  </h1>
                  <p class="text-thblack-200 opacity-40 text-xl xl:text-base group-hover:text-thwhite group-hover:opacity-100 group-[.active]:text-thwhite group-[.active]:opacity-100 transition-all duration-300" >
                    Justin
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="testimonial col-span-2 group mx-0 md:mx-3 transition-all duration-300" @click="getActive">
                <NuxtImg class="h-auto max-w-full" src="/images/testimonials.webp" />
                <div class="bg-thgray-200 px-6 py-7 text-center xl:text-start group-hover:bg-thred group-[.active]:bg-thred transition-all duration-300" >
                  <h1 class="text-thblack-200 font-semibold text-xl xl:text-base group-hover:text-thwhite group-hover:font-bold group-[.active]:text-thwhite group-[.active]:font-bold transition-all duration-300 ">
                    Peter Azarbad
                  </h1>
                  <p class="text-thblack-200 opacity-40 text-xl xl:text-base group-hover:text-thwhite group-hover:opacity-100 group-[.active]:text-thwhite group-[.active]:opacity-100 transition-all duration-300" >
                    Justin
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        <div class="grid grid-cols-12 mx-3 mt-11">
          <div class="col-span-12 xl:col-span-3 flex flex-row justify-center">
            <button class="bg-thgray-200 rounded-full rotate-180 w-16 h-16 flex justify-center items-center mx-1" @click="slider.swiper.slidePrev(300)">
              <svg xmlns="http://www.w3.org/2000/svg" width="8.992" height="14.388" viewBox="0 0 8.992 14.388">
                <path data-name="Path 29473" d="M172.153 128.222a.9.9 0 1 0-1.184 1.354l6.42 5.617-6.421 5.618a.9.9 0 1 0 1.184 1.354l7.194-6.295a.9.9 0 0 0 0-1.354zm0 0" transform="translate(-170.661 -128)" style="fill:#db0021"/>
              </svg>
            </button>
            <button class="bg-thgray-200 rounded-full w-16 h-16 flex justify-center items-center mx-1">
              <audio ref="player" src="/horse.mp3"></audio>
              <svg v-if="play" @click="()=>{play = false; player.play();}" xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17">
                <path data-name="Polygon 4" d="M7.63 1.535a1 1 0 0 1 1.74 0l6.784 11.972a1 1 0 0 1-.87 1.493H1.716a1 1 0 0 1-.87-1.493z" transform="rotate(90 7.5 7.5)" style="fill:#db0021"/>
              </svg>
              <svg v-else @click="()=>{play = true; player.pause();}" fill="#db0021" height="25px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="25px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                  <path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z"/>
                  <path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z"/>
                </g>
              </svg>
            </button>
            <button class="bg-thgray-200 rounded-full w-16 h-16 flex justify-center items-center mx-1" @click="slider.swiper.slideNext(300)">
              <svg xmlns="http://www.w3.org/2000/svg" width="8.992" height="14.388" viewBox="0 0 8.992 14.388">
                <path data-name="Path 29473" d="M172.153 128.222a.9.9 0 1 0-1.184 1.354l6.42 5.617-6.421 5.618a.9.9 0 1 0 1.184 1.354l7.194-6.295a.9.9 0 0 0 0-1.354zm0 0" transform="translate(-170.661 -128)" style="fill:#db0021"/>
              </svg>
            </button>
          </div>
          <div ref="wavePlayer" class="col-span-12 xl:col-span-9 mt-7 xl:mt-0">
            <NuxtImg class="h-auto w-full" src="/images/wave-big.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="partners mt-44 lg:mt-52 xl:mt-72 group">
    <div class="grid grids-col-12 place-items-center">
        <h1 class="text-thblack-100 text-2xl">
            Our Partners
        </h1>
    </div>
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused">
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
      </div>
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused" aria-hidden="true">
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
      </div>
    </div>
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused">
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
      </div>
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused" aria-hidden="true">
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
      </div>
    </div>
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused">
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
      </div>
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused" aria-hidden="true">
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
        <div class="flex justify-center items-center">
          <NuxtImg class="max-w-24 max-h-24" src="/images/partners.png" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 mt-24">
      <div class="col-span-12 flex justify-center">
        <NuxtLink to="/" class="bg-thred text-thwhite font-light font-xl min-w-48 px-20 py-6 flex flex-row content-center">
          <svg class="mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M9.6 16a.8.8 0 0 1-.8-.8V9.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zM.8 16a.8.8 0 0 1-.8-.8V9.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zm8-7.2a.8.8 0 0 1-.8-.8V.8a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zM.8 7.2a.8.8 0 0 1-.8-.8V.8A.8.8 0 0 1 .8 0h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4z" style="fill:#fff"/>
          </svg>
          <p>MORE</p>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="callAction mt-44 lg:mt-52 xl:mt-80">
    <div class="grid grid-cols-12 xl:gap-24">
      <div class="col-span-12 xl:col-span-5">
        <NuxtImg src="/images/callAction.webp" class="h-auto max-w-full" />
      </div>
      <div class="col-span-12 xl:col-span-7 mt-14 xl:mt-0 text-center xl:text-start">
        <svg class="mx-auto xl:mx-0" data-name="Quote Pattern" xmlns="http://www.w3.org/2000/svg" width="70.534" height="49.791" viewBox="0 0 70.534 49.791">
          <path d="M15.642 0a15.643 15.643 0 0 0-.907 31.259c.142 1.534.035 5.709-3.965 11.516a1.1 1.1 0 0 0 .128 1.4c1.637 1.637 2.649 2.668 3.357 3.389.927.943 1.35 1.373 1.969 1.935a1.1 1.1 0 0 0 1.464.016 42.24 42.24 0 0 0 13.594-33.953C30.625 6.545 24.048 0 15.642 0z" transform="rotate(180 35.267 24.896)" style="fill:#e60018"/>
          <path data-name="Shape" d="M31.284 15.562C30.625 6.545 24.047 0 15.643 0a15.643 15.643 0 0 0-.906 31.259c.142 1.533.034 5.705-3.967 11.516a1.1 1.1 0 0 0 .128 1.4c1.631 1.631 2.64 2.66 3.348 3.38.931.949 1.356 1.382 1.978 1.946a1.1 1.1 0 0 0 1.464.014 42.243 42.243 0 0 0 13.596-33.953z" transform="rotate(180 15.696 24.895)" style="fill:#e60018"/>
        </svg>
        <h2 class="text-thblack-200 font-bold text-xl mt-10 px-28 xl:px-0">
          Gregory Hayes - CEO of photoin.id
        </h2>
        <p class="text-thblack-100 text-xl mt-2 px-12 xl:px-0">
          “ Double Square did excellent work on photoin.id. The project was a great success. They not only deliver innovative web and mobile applications but also are very committed to deep understand the needs of their clients. “
        </p>
        <div class="flex ">
          <NuxtLink to="/" class="bg-thred text-thwhite font-light font-xl min-w-48 px-20 py-6 flex flex-row content-center mt-10 mx-auto xl:mx-0">
            <svg class="mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path d="M9.6 16a.8.8 0 0 1-.8-.8V9.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zM.8 16a.8.8 0 0 1-.8-.8V9.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zm8-7.2a.8.8 0 0 1-.8-.8V.8a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zM.8 7.2a.8.8 0 0 1-.8-.8V.8A.8.8 0 0 1 .8 0h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4z" style="fill:#fff"/>
            </svg>
            <span>MORE</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
