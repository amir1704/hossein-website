<script setup>

import useWpApi from "~/composables/useWpApi.ts";

const slug = useRoute().params?.slug;
const slider = ref(null);
const video = ref(null);
const project = ref(null);
const play = ref(false);
project.value = await useWpApi().getPost('projects', slug);

useHead({
  title: project.value.title.rendered,
});


const classArray = ref(['bg-[#0075db]','bg-[#ff9113]','bg-[#ff00aa]','bg-[#1a4691]','bg-[#7f48c6]','bg-[#37be40]','bg-[#db0021]']);
</script>

<template>
<div class="container flex flex-col justify-center">
  <h2 class="text-[22px] text-thblack-200 text-center">
    {{project.title.rendered}}
  </h2>
  <div class="text-center text-thblack-100 mt-10" v-html="project.excerpt.rendered">

  </div>
  <div class="relative mt-16">
    <swiper-container
        :slides-per-view="1"
        :breakpoints="{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 4,
                },
              }"
        :loop="true"
        ref="slider"
    >
      <swiper-slide v-for="(image,index) in project.acf.images">
        <div class="group mx-0 md:mx-0.5 transition-all duration-300">
          <NuxtImg class="h-auto w-full" :src="image.guid" />
        </div>
      </swiper-slide>
    </swiper-container>
    <div class="h-full flex items-center justify-center absolute right-5 top-0 z-10">
      <button  @click="slider.swiper.slideNext(300)">
        <svg class="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" width="45.196" height="45.196" viewBox="0 0 45.196 45.196">
          <g data-name="Group 9788">
            <path data-name="Path 29639" d="M22.6 0a22.6 22.6 0 1 0 22.6 22.6A22.623 22.623 0 0 0 22.6 0zm6.981 23.929-9.416 9.416a1.883 1.883 0 1 1-2.665-2.663l8.085-8.082-8.085-8.086a1.883 1.883 0 1 1 2.663-2.663l9.416 9.416a1.881 1.881 0 0 1 0 2.662z" style="fill:#fff"/>
          </g>
        </svg>
      </button>
    </div>
    <div class="h-full flex items-center justify-center absolute left-5 top-0 z-10">
      <button  @click="slider.swiper.slideNext(300)">
        <svg class="w-[30px] h-[30px] rotate-180" xmlns="http://www.w3.org/2000/svg" width="45.196" height="45.196" viewBox="0 0 45.196 45.196">
          <g data-name="Group 9788">
            <path data-name="Path 29639" d="M22.6 0a22.6 22.6 0 1 0 22.6 22.6A22.623 22.623 0 0 0 22.6 0zm6.981 23.929-9.416 9.416a1.883 1.883 0 1 1-2.665-2.663l8.085-8.082-8.085-8.086a1.883 1.883 0 1 1 2.663-2.663l9.416 9.416a1.881 1.881 0 0 1 0 2.662z" style="fill:#fff"/>
          </g>
        </svg>
      </button>
    </div>
  </div>
  <div class="mt-28 [&_.aligncenter]:mx-auto text-thblack-100" v-html="project.content.rendered"></div>
  <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-28 mt-28">
    <div class="relative">
      <video class="h-full" ref="video" @playing="play=true;" @pause="play=false">
        <source :src="project.acf.video" type="video/mp4">
      </video>
      <div class="absolute w-full h-full flex items-center justify-center top-0 right-0">
        <button @click="() => {video.play(); }" :class="play?'hidden':''">
          <svg xmlns="http://www.w3.org/2000/svg" width="255.002" height="255.001" viewBox="0 0 255.002 255.001">
            <defs>
              <filter id="j3lztx9hra" x="0" y="0" width="255.002" height="255.001" filterUnits="userSpaceOnUse">
                <feOffset dx="30"/>
                <feGaussianBlur stdDeviation="23" result="blur"/>
                <feFlood/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g style="filter:url(#j3lztx9hra)">
              <path data-name="Subtraction 37" d="M19755.5-6620a58.137 58.137 0 0 1-22.77-4.6 58.311 58.311 0 0 1-18.594-12.538 58.29 58.29 0 0 1-12.537-18.6 58.115 58.115 0 0 1-4.6-22.773 58.1 58.1 0 0 1 4.6-22.77 58.282 58.282 0 0 1 12.537-18.594 58.318 58.318 0 0 1 18.594-12.537 58.137 58.137 0 0 1 22.77-4.6 58.149 58.149 0 0 1 22.773 4.6 58.293 58.293 0 0 1 18.6 12.537 58.294 58.294 0 0 1 12.537 18.594 58.1 58.1 0 0 1 4.6 22.77 58.115 58.115 0 0 1-4.6 22.773 58.3 58.3 0 0 1-12.537 18.6 58.308 58.308 0 0 1-18.6 12.538 58.149 58.149 0 0 1-22.773 4.6zm-10.186-73.061a1 1 0 0 0-1 1v29.587a1 1 0 0 0 1 1 1.007 1.007 0 0 0 .492-.129l26.107-14.794a.989.989 0 0 0 .506-.87.989.989 0 0 0-.506-.87l-26.107-14.793a1 1 0 0 0-.493-.129z" transform="translate(-19658 6806)" style="fill:#fff"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="divide-y divide-thgray-350">
      <div class="flex flex-row pb-12">
        <div>
          <p class="text-[21px] text-thblack-200 font-medium text-left">Customer:</p>
          <p class="text-[21px] text-thblack-200 font-medium text-left mt-12">Website:</p>
          <p class="text-[21px] text-thblack-200 font-medium text-left mt-12">Date:</p>
          <p class="text-[21px] text-thblack-200 font-medium text-left mt-12">Running time:</p>
        </div>
        <div class="ml-20">
          <p class="text-[21px] text-thblack-100 text-left">{{ project.acf.customer }}</p>
          <p class="text-[21px] text-thblack-100 text-left mt-12">{{ project.acf.website }}</p>
          <p class="text-[21px] text-thblack-100 text-left mt-12">{{ project.acf.date }}</p>
          <p class="text-[21px] text-thblack-100 text-left mt-12">{{ project.acf.running_time }}</p>
        </div>
      </div>
      <div class="flex flex-row flex-wrap pt-12 items-center">
        <span class="text-[21px] text-thblack-200 font-medium text-left">Specializations used:</span>
        <template v-for="(tag, index) in project._embedded['wp:term'][0]">
          <span class="text-[13px] font-medium text-thwhite py-3 px-5 mx-1.5 my-1.5 max-w-[101px]" :class="classArray[index%7]">{{tag.name}}</span>
        </template>
      </div>
    </div>
  </div>
</div>
</template>
