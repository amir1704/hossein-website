<script setup>

import useWpApi from "~/composables/useWpApi.ts";
import { useFullscreen } from '@vueuse/core';
import {UseFullscreen} from "@vueuse/components";
const slug = useRoute().params?.slug;
const slider = ref(null);
const video = ref(null);
const project = ref(null);
const testimonial = ref(null);
const play = ref(false);
const similars = ref([]);




const player = ref(null);
const playAudio = ref(true);
project.value = await useWpApi().getPost('projects', slug);
if(project.value){
  const {data,error} = await useWpApi().get(`testimonials/${project.value.acf.testimonial.ID}?_embed=1`);
  if(!error.value){
    testimonial.value = data.value;
  }
  if(project.value.project_categories?.length){
    const similar = await useWpApi().getPosts(`projects`,1,4,'id,slug,featured_media,featured_media_src_url','project_category',project.value.project_categories[0],project.value.id);
    if(!similar.error.value){
      similars.value = similar.data.value;
    }
  }
}
useHead({
  title: project.value.title.rendered,
});




const classArray = ref(['bg-[#0075db]','bg-[#ff9113]','bg-[#ff00aa]','bg-[#1a4691]','bg-[#7f48c6]','bg-[#37be40]','bg-[#db0021]']);
</script>

<template>
<div class="flex flex-col justify-center">
  <h2 class="container text-[22px] text-thblack-200 text-center">
    {{project.title.rendered}}
  </h2>
  <div class="container text-center text-thblack-100 mt-10" v-html="project.excerpt.rendered">

  </div>
  <div class="relative mt-16" v-if="project.acf.images">
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
        <div class="group mx-0 md:mx-0.5 transition-all duration-300 relative">
          <UseFullscreen v-slot="{ toggle }">
            <NuxtImg class="h-auto w-full" :src="image" />
            <div class="absolute top-0 right-0 bg-thblack-200 opacity-50 w-full h-full hidden justify-center items-center group-hover:flex transition-all duration-300">
              <button @click="toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="51.528" height="37.778" viewBox="0 0 51.528 37.778">
                  <path data-name="Path 29663" d="M39.794 21.588a14.6 14.6 0 1 1-13.034-8 2.264 2.264 0 0 1 .721.1 1.7 1.7 0 0 1 1.133 1.288 7.53 7.53 0 0 0 7.332 5.976 6.894 6.894 0 0 0 1.837-.24 1.738 1.738 0 0 1 2.011.876zM26.76 5C15.015 5 2.977 15.3 1.02 27.032a1.715 1.715 0 0 0 3.38.568C5.931 18.549 15.8 8.434 26.76 8.434S47.59 18.549 49.1 27.6a1.729 1.729 0 0 0 1.7 1.442 1.766 1.766 0 0 0 .292-.017 1.724 1.724 0 0 0 1.408-1.976C50.544 15.3 38.506 5 26.76 5z" transform="translate(-.997 -5)" style="fill:#fff"/>
                </svg>
              </button>
            </div>
          </UseFullscreen>
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
  <div class="container  mt-28 [&_.aligncenter]:mx-auto text-thblack-100" v-html="project.content.rendered"></div>
  <div class="container  grid grid-cols-1 lg:grid-cols-2 lg:gap-28 mt-28">
    <div class="relative" v-if="project.acf.is_video">
      <video class="h-full" ref="video" @play="play=true; video.setAttribute('controls','')" @pause="play=false; video.removeAttribute('controls')">
        <source :src="project.acf.video" type="video/mp4">
      </video>
      <div class="absolute w-full h-full items-center justify-center top-0 right-0" :class="play?'hidden':'flex'">
        <button @click="() => {video.play(); }" >
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
    <div class="relative" v-else>
      <NuxtImg :src="project.acf.video" class="w-full" />
    </div>
    <div class="divide-y divide-thgray-350">
      <div class="flex flex-row pb-12">
        <div>
          <p class="text-[21px] text-thblack-200 text-left">Customer:</p>
          <p class="text-[21px] text-thblack-200 text-left mt-12">Website:</p>
          <p class="text-[21px] text-thblack-200 text-left mt-12">Date:</p>
          <p class="text-[21px] text-thblack-200 text-left mt-12">Running time:</p>
        </div>
        <div class="ml-20">
          <p class="text-[21px] text-thblack-100 text-left">{{ project.acf.customer }}</p>
          <p class="text-[21px] text-thblack-100 text-left mt-12"><NuxtLink :to="project.acf.website">{{ project.acf.website }}</NuxtLink></p>
          <p class="text-[21px] text-thblack-100 text-left mt-12">{{ project.acf.date }}</p>
          <p class="text-[21px] text-thblack-100 text-left mt-12">{{ project.acf.running_time }}</p>
        </div>
      </div>
      <div class="flex flex-row flex-wrap pt-12 items-center" v-if="project._embedded['wp:term']">
        <span class="text-[21px] text-thblack-200 text-left">Specializations used:</span>
        <template v-for="(tag, index) in project._embedded['wp:term'][0]">
          <span class="text-[13px] font-medium text-thwhite py-3 px-5 mx-1.5 my-1.5 max-w-[101px]" :class="classArray[index%7]">{{tag.name}}</span>
        </template>
      </div>
    </div>
  </div>
  <div class="container  mt-48 flex flex-col justify-center bg-thgray-250 text-center" v-if="testimonial">
    <NuxtImg class="w-[100px] rounded-full -mt-12 mx-auto" :src="testimonial.featured_media_src_url" />
    <h3 class="mt-7 text-thblack-200 text-[23px] font-semibold">{{testimonial.title.rendered}}</h3>
    <p class="mt-1 text-[19px] text-thblack-100">{{testimonial.acf.teller}}</p>
    <NuxtImg class="mt-7 mx-auto md:hidden" src="/images/wave.png" />
    <NuxtImg class="mt-7 mx-auto hidden md:block" src="/images/wave-big.png" />
    <button class="bg-thgray-100 rounded-full w-14 h-14 flex justify-center items-center my-8 mx-auto">
      <audio ref="player" :src="testimonial.acf.audio"></audio>
      <svg v-if="playAudio" @click="()=>{playAudio = false; player.play();}" xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17">
        <path data-name="Polygon 4" d="M7.63 1.535a1 1 0 0 1 1.74 0l6.784 11.972a1 1 0 0 1-.87 1.493H1.716a1 1 0 0 1-.87-1.493z" transform="rotate(90 7.5 7.5)" style="fill:#db0021"/>
      </svg>
      <svg v-else @click="()=>{playAudio = true; player.pause();}" fill="#db0021" height="25px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="25px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                  <path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z"/>
                  <path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z"/>
                </g>
              </svg>
    </button>
  </div>
  <div class="container  similar my-48" v-if="similars.length">
    <div class="grid grids-col-12 place-items-center">
      <h1 class="text-thblack-100 text-[22px]">
        Similar projects
      </h1>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 mt-12">
      <div class="project relative border-[.5px] border-[#d8d8d8]" v-for="project in similars">
        <NuxtLink class="w-full h-full" :to="`/projects/${project.slug}`">
          <NuxtImg :src="project.featured_media_src_url" class="w-full" :alt="project.slug" />
        </NuxtLink>
        <!--          <button class="absolute top-4 right-4">-->
        <!--            <svg xmlns="http://www.w3.org/2000/svg" width="35.378" height="35.379" viewBox="0 0 35.378 35.379">-->
        <!--              <defs>-->
        <!--                <filter id="hyq3wtdqja" x="0" y="0" width="35.378" height="35.379" filterUnits="userSpaceOnUse">-->
        <!--                  <feOffset dx="-1" dy="1"/>-->
        <!--                  <feGaussianBlur stdDeviation="3" result="blur"/>-->
        <!--                  <feFlood flood-opacity=".161"/>-->
        <!--                  <feComposite operator="in" in2="blur"/>-->
        <!--                  <feComposite in="SourceGraphic"/>-->
        <!--                </filter>-->
        <!--              </defs>-->
        <!--              <g style="filter:url(#hyq3wtdqja)">-->
        <!--                <path data-name="Union 1" d="M2.793 17.379A2.793 2.793 0 0 1 0 14.586V5.9a2.793 2.793 0 0 1 2.793-2.8h8.689a2.793 2.793 0 0 1 2.793 2.8v8.689a2.793 2.793 0 0 1-2.794 2.793zM15.517 4.966a3.1 3.1 0 0 0-3.1-3.1H3.264A2.8 2.8 0 0 1 5.9 0h8.689a2.791 2.791 0 0 1 2.793 2.794v8.689a2.8 2.8 0 0 1-1.861 2.633z" transform="translate(10 8)" style="fill:#fff"/>-->
        <!--              </g>-->
        <!--            </svg>-->
        <!--          </button>-->
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-12 flex justify-center mt-16">
        <NuxtLink to="/projects" class="bg-thred text-thwhite min-w-48 font-light font-xl px-16 py-6 flex flex-row content-center">
          <svg class="mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M9.6 16a.8.8 0 0 1-.8-.8V9.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zM.8 16a.8.8 0 0 1-.8-.8V9.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zm8-7.2a.8.8 0 0 1-.8-.8V.8a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zM.8 7.2a.8.8 0 0 1-.8-.8V.8A.8.8 0 0 1 .8 0h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4z" style="fill:#fff"/>
          </svg>
          <p>MORE</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</div>
</template>
