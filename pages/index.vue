<script setup>
import {useSettingStore} from "~/stores/useSettingStore.js";
import useWpApi from "~/composables/useWpApi.ts";
const player = ref(null);
const play = ref(true);
const slider = ref(null);

const setting = useSettingStore().setting;
const projectCategories = ref([]);
const projectCategory = ref(null);
const projects = ref([]);

const testimonials = ref([]);
const testimonial = ref({});

const partners = ref([]);

useHead({
  title: setting.title,
})
const getActive = (index) => {
  testimonial.value = testimonials.value[index];
  // document.querySelector('.testimonial.active')?.classList.remove('active');
  // e.target.closest('.testimonial').classList.add('active');
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


const {data, error} = await useWpApi().getPosts('project_categories',1,20,'id,name');
if(!error.value){
  projectCategories.value = data.value;
  console.log(projectCategories.value)
}

const getProjects = async (category = null) => {
  if(category){
    projectCategory.value = category;
    const {data, error} = await useWpApi().getPosts('projects',1,12,'slug,featured_media,featured_media_src_url','project_categories',category);
    if(!error.value){
      projects.value = data.value;
    }
  }
  else{
    projectCategory.value = null;
    const {data, error} = await useWpApi().getPosts('projects',1,12,'slug,featured_media,featured_media_src_url');
    if(!error.value){
      projects.value = data.value;
    }
  }
}

const getTestimonials = async () => {

  const {data, error} = await useWpApi().getPosts('testimonials',1,12,'id,title,featured_media,featured_media_src_url,acf');
  if(!error.value){
    testimonials.value = data.value;
    testimonial.value= testimonials.value[0];
  }
}


const getPartners = async () => {

  const {data, error} = await useWpApi().getPosts('partners',1,24,'id,title,featured_media,featured_media_src_url');
  if(!error.value){
    partners.value = data.value;
  }
}
await getProjects();

await getTestimonials();

await getPartners();

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
          <button class="text-lg mx-3.5 border-b-2 hover:text-thred hover:border-b-2 hover:border-b-thred"
                  :class="!projectCategory ? 'text-thred border-b-thred':'text-thblack-100 border-b-transparent'"
                  @click="getProjects(null)">
            All
          </button>
          <button class="text-lg mx-3.5 border-b-2 hover:text-thred hover:border-b-2 hover:border-b-thred"
                  :class="projectCategory == project_cat.id ? 'text-thred border-b-thred':'text-thblack-100 border-b-transparent'"
                  v-for="project_cat in projectCategories"
                  @click="getProjects(project_cat.id)">
            {{ project_cat.name }}
          </button>
        </div>
      </div>
      <div class="col-span-12 flex-row justify-center hidden lg:flex ">
        <button class="text-lg mx-3.5 border-b-2 hover:text-thred hover:border-b-2 hover:border-b-thred transition-all duration-300"
                :class="!projectCategory ? 'text-thred border-b-thred':'text-thblack-100 border-b-transparent'"
                @click="getProjects(null)">
          All
        </button>
        <button class="text-lg mx-3.5 border-b-2 hover:text-thred hover:border-b-2 hover:border-b-thred transition-all duration-300"
                :class="projectCategory == project_cat.id ? 'text-thred border-b-thred':'text-thblack-100 border-b-transparent'"
                v-for="project_cat in projectCategories"
                @click="getProjects(project_cat.id)">
          {{ project_cat.name }}
        </button>
      </div>

    </div>
    <div class="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 mt-12">
        <div class="project relative" v-for="project in projects">
          <NuxtLink class="w-full h-full" to="/" :to-sample="`/project/${project.slug}`">
            <NuxtImg :src="project.featured_media_src_url" class="w-full" />
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
        <NuxtLink to="/" class="bg-thred text-thwhite min-w-48 font-light font-xl px-16 py-6 flex flex-row content-center">
          <svg class="mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M9.6 16a.8.8 0 0 1-.8-.8V9.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zM.8 16a.8.8 0 0 1-.8-.8V9.6a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zm8-7.2a.8.8 0 0 1-.8-.8V.8a.8.8 0 0 1 .8-.8h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4zM.8 7.2a.8.8 0 0 1-.8-.8V.8A.8.8 0 0 1 .8 0h5.6a.8.8 0 0 1 .8.8v5.6a.8.8 0 0 1-.8.8zm.8-1.6h4v-4h-4z" style="fill:#fff"/>
          </svg>
          <p>Projects</p>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="services mt-44 lg:mt-52 xl:mt-72 group">
    <div class="grid grids-col-12 place-items-center">
      <h1 class="text-thblack-100 text-2xl">
        Our Services
      </h1>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4  xl:grid-cols-6 mt-12">
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="86.609" height="86.145" viewBox="0 0 86.609 86.145">
          <g data-name="Group 10139">
            <g data-name="Outline Color">
              <path data-name="Path 30314" d="m9.684 59.573 19.275 29.99a11.572 11.572 0 0 0 13.165 4.8l30.9-9.591a8.631 8.631 0 0 0 5.019-4.11l13.3-24.375a9.258 9.258 0 0 0-.422-9.565L70.313 15.77a8.437 8.437 0 0 0-9.427-3.411L30.742 21.32a17.97 17.97 0 0 0-10.913 9.11L9.26 51.313a8.325 8.325 0 0 0 .424 8.26z" transform="translate(-7.351 -10.013)" style="fill:#fff"/>
              <path data-name="Path 30315" d="m92.462 112.88-41.928 11.587L24.551 86.06a17.966 17.966 0 0 0-4.721 5.847L9.26 112.789a8.332 8.332 0 0 0 .425 8.26l19.275 29.989a11.579 11.579 0 0 0 13.165 4.8l30.9-9.59a8.635 8.635 0 0 0 5.018-4.11l13.3-24.375a9.236 9.236 0 0 0 1.119-4.879z" transform="translate(-7.352 -71.489)" style="fill:#cf3b40"/>
              <path data-name="Path 30316" d="m50.534 124.467-16.24 31.015a11.531 11.531 0 0 1-5.334-4.444L9.685 121.049a8.332 8.332 0 0 1-.425-8.26l10.57-20.882a17.966 17.966 0 0 1 4.721-5.847z" transform="translate(-7.352 -71.489)" style="fill:#b11f24"/>
              <g>
                <path data-name="Path 30317" d="M56.413 59.947a1.019 1.019 0 1 0 1.645-1.2l-3.006-4.114a1.019 1.019 0 1 0-1.645 1.2z"/>
                <path data-name="Path 30318" d="M41.606 37.955a1.019 1.019 0 0 0-.222 1.424l3.006 4.114a1.019 1.019 0 1 0 1.645-1.2l-3.006-4.114a1.019 1.019 0 0 0-1.424-.222z"/>
                <path data-name="Path 30319" d="M62.423 68.174a1.019 1.019 0 1 0 1.646-1.2l-3.006-4.114a1.019 1.019 0 0 0-1.646 1.2z"/>
                <path data-name="Path 30320" d="m14.942 37.695-4.75 1.842a1.019 1.019 0 1 0 .737 1.9l4.75-1.842a1.019 1.019 0 1 0-.737-1.9z"/>
                <path data-name="Path 30321" d="m24.443 34.014-4.75 1.843a1.019 1.019 0 0 0 .737 1.9l4.75-1.842a1.019 1.019 0 0 0-.737-1.9z"/>
                <path data-name="Path 30322" d="M41.296 23.504a1.019 1.019 0 0 0 1.423-.228l2.987-4.127a1.019 1.019 0 1 0-1.651-1.195l-2.987 4.127a1.019 1.019 0 0 0 .228 1.423z"/>
                <path data-name="Path 30323" d="M47.269 15.25a1.019 1.019 0 0 0 1.423-.228l2.987-4.127A1.019 1.019 0 1 0 50.028 9.7l-2.986 4.127a1.019 1.019 0 0 0 .227 1.423z"/>
                <path data-name="Path 30324" d="M63.811 5.192a9.41 9.41 0 0 0-10.566-3.823l-30.146 8.962a19.067 19.067 0 0 0-11.529 9.627L.999 40.84a9.387 9.387 0 0 0 .478 9.268l19.275 29.99a12.641 12.641 0 0 0 14.324 5.218l30.9-9.591a9.6 9.6 0 0 0 5.612-4.6l13.3-24.375a10.25 10.25 0 0 0-.468-10.617zm-40.13 7.092 30.144-8.962a7.554 7.554 0 0 1 .976-.221l-1.787 2.471a1.019 1.019 0 0 0 1.651 1.195l2.634-3.634a7.386 7.386 0 0 1 4.819 3.189L82.721 37.27a8.236 8.236 0 0 1 1.292 3.367l-32.6 9.01-2.37-3.244a1.02 1.02 0 1 0-1.644 1.205l1.915 2.622-5.695 1.574-12.348-18.253 4.608-1.711 2.5 3.424a1.019 1.019 0 1 0 1.646-1.2l-2.568-3.515 2.274-3.141a1.02 1.02 0 1 0-1.65-1.2l-2.572 3.535-5.41 2.078L18.586 14.8a16.923 16.923 0 0 1 5.1-2.516zm-1.215 66.715L3.191 49.008a7.316 7.316 0 0 1-1.152-4.122l4.14-1.6a1.019 1.019 0 0 0-.737-1.9l-2.955 1.141a7.231 7.231 0 0 1 .331-.766l10.57-20.883a16.937 16.937 0 0 1 3.611-4.782l25 36.949-15.5 29.612a10.51 10.51 0 0 1-4.033-3.658zm60.633-33.218-13.3 24.375a7.6 7.6 0 0 1-1.8 2.2l-.926-1.268a1.019 1.019 0 1 0-1.645 1.2l.841 1.151a7.7 7.7 0 0 1-.9.342l-30.9 9.591a10.525 10.525 0 0 1-6.076.045l15.488-29.574 40.172-11.1a8.242 8.242 0 0 1-.956 3.041z"/>
              </g>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">3D Design</p>
      </div>
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="85.776" height="86.145" viewBox="0 0 85.776 86.145">
          <g data-name="Group 10138">
            <g data-name="Group 10031">
              <g data-name="Group 10030">
                <path data-name="Path 30349" d="M67.01 11.724 79.5 71.025a9.176 9.176 0 0 1-7.088 10.869l-34.028 7.164a9.176 9.176 0 0 1-10.87-7.088l-12.486-59.3a9.176 9.176 0 0 1 7.089-10.87L56.14 4.635a9.176 9.176 0 0 1 10.87 7.089z" transform="translate(-5.182 -3.776)" style="fill:#b11f24"/>
              </g>
            </g>
            <g data-name="Group 10035">
              <g data-name="Group 10034">
                <path data-name="Path 30351" d="M64.2 86.567a2.431 2.431 0 0 1-1.878 2.879l-7.02 1.478a2.431 2.431 0 0 1-1-4.757l7.02-1.478a2.431 2.431 0 0 1 2.878 1.878z" transform="translate(-9.597 -13.207)" style="fill:#fff"/>
              </g>
            </g>
            <g data-name="Group 10037">
              <g data-name="Group 10036">
                <path data-name="Path 30352" d="M70.5 68.949 35.921 76.23a3.829 3.829 0 0 1-4.536-2.958l-9.634-45.754a3.829 3.829 0 0 1 2.958-4.536L59.287 15.7a3.829 3.829 0 0 1 4.536 2.958l9.633 45.753a3.829 3.829 0 0 1-2.956 4.538z" transform="translate(-5.986 -5.091)" style="fill:#fff"/>
              </g>
            </g>
            <g data-name="Group 10045">
              <g data-name="Group 10044">
                <path data-name="Path 30356" d="M36.385 89.832a9.846 9.846 0 0 1-9.606-7.814l-12.486-59.3a9.849 9.849 0 0 1 7.6-11.653L55.916 3.9a9.851 9.851 0 0 1 11.653 7.6l12.486 59.3a9.838 9.838 0 0 1-7.6 11.653l-34.023 7.165a9.925 9.925 0 0 1-2.047.214zm21.56-84.821a8.514 8.514 0 0 0-1.756.184l-34.024 7.164a8.524 8.524 0 0 0-6.577 10.085l12.486 59.3a8.514 8.514 0 0 0 10.086 6.579l34.023-7.164a8.514 8.514 0 0 0 6.577-10.085l-12.486-59.3a8.53 8.53 0 0 0-8.329-6.761z" transform="translate(-5.093 -3.687)" style="fill:#0c132b"/>
              </g>
            </g>
            <g data-name="Group 10047">
              <g data-name="Group 10046">
                <path data-name="Path 30357" d="M35.043 76.886a4.5 4.5 0 0 1-4.394-3.566l-9.633-45.754a4.49 4.49 0 0 1 3.469-5.32l34.578-7.28a4.491 4.491 0 0 1 5.32 3.469l9.634 45.753a4.5 4.5 0 0 1-3.469 5.32l-34.577 7.28a4.48 4.48 0 0 1-.926.1zm24.951-60.694a3.2 3.2 0 0 0-.659.069l-34.578 7.28a3.167 3.167 0 0 0-2.446 3.752l9.633 45.753a3.171 3.171 0 0 0 3.756 2.448l34.577-7.28a3.171 3.171 0 0 0 2.447-3.752l-9.637-45.754a3.17 3.17 0 0 0-3.093-2.516zM70.41 68.861h.009z" transform="translate(-5.898 -5.002)" style="fill:#0c132b"/>
              </g>
            </g>
            <g data-name="Group 10049">
              <g data-name="Group 10048">
                <path data-name="Path 30358" d="M54.717 91.551a3.093 3.093 0 0 1-.636-6.119l7.02-1.478a3.092 3.092 0 1 1 1.274 6.052l-7.02 1.478a3.093 3.093 0 0 1-.638.067zm7.021-6.34a1.769 1.769 0 0 0-.365.038l-7.02 1.478a1.769 1.769 0 1 0 .729 3.462l7.02-1.478a1.769 1.769 0 0 0-.365-3.5z" transform="translate(-9.509 -13.119)" style="fill:#0c132b"/>
              </g>
            </g>
            <g data-name="Group 10051">
              <g data-name="Group 10050">
                <path data-name="Path 30359" d="M37.116 16.153a.662.662 0 0 1-.136-1.31l1.115-.235a.662.662 0 0 1 .273 1.3l-1.115.235a.668.668 0 0 1-.137.01z" transform="translate(-7.725 -4.97)" style="fill:#0f0f0f"/>
              </g>
            </g>
            <g data-name="Group 10053">
              <g data-name="Group 10052">
                <path data-name="Path 30360" d="M41.548 15.048a.662.662 0 0 1-.136-1.31l7.263-1.53a.662.662 0 0 1 .273 1.3l-7.263 1.53a.668.668 0 0 1-.137.01z" transform="translate(-8.247 -4.687)" style="fill:#0f0f0f"/>
              </g>
            </g>
            <g data-name="Group 10094">
              <g data-name="Group 10093">
                <g data-name="Group 10092">
                  <g data-name="Group 10091">
                    <g data-name="Group 10090">
                      <g data-name="Group 10069">
                        <g data-name="Group 10068">
                          <path data-name="Path 30367" d="M68.188 63.238a2.127 2.127 0 0 1-3.005-.114l-6.425-6.932a2.127 2.127 0 1 1 3.119-2.892l6.423 6.933a2.127 2.127 0 0 1-.112 3.005z" transform="translate(-10.281 -9.442)" style="fill:#b11f24"/>
                        </g>
                      </g>
                      <g data-name="Group 10073">
                        <g data-name="Group 10072">
                          <path data-name="Path 30369" d="M68.523 56.656c5.35-2.456 12.454-7.409 18.054-12.6 9.268-8.591 10.906-14.569 8.168-17.523s-8.824-1.773-18.092 6.817c-5.6 5.191-11.077 11.9-13.93 17.049z" transform="translate(-10.814 -6.203)" style="fill:#0c132b"/>
                        </g>
                      </g>
                      <g data-name="Group 10077">
                        <g data-name="Group 10076">
                          <path data-name="Path 30371" d="M63.516 63.248s1.415 4.546-3.777 8.21c-4.57 3.225-10.492-.228-12.777-1.819a.537.537 0 0 1 .159-.958c1.794-.509 5.048-1.974 4.323-5.823-1.126-5.982 5.9-6.262 5.9-6.262z" transform="translate(-8.934 -9.909)" style="fill:#b11f24"/>
                        </g>
                      </g>
                      <g data-name="Group 10085">
                        <g data-name="Group 10084">
                          <path data-name="Path 30375" d="M68.435 57.23a.661.661 0 0 1-.485-.212l-5.8-6.257a.661.661 0 0 1-.093-.771c2.895-5.223 8.413-11.98 14.059-17.213 4.45-4.125 8.4-6.777 11.736-7.881 3.968-1.312 6.154-.127 7.291 1.1 1.627 1.756 4.085 7.068-8.2 18.459-5.646 5.233-12.8 10.225-18.228 12.716a.661.661 0 0 1-.276.06zm-4.987-7.015 5.144 5.549a77.327 77.327 0 0 0 17.447-12.281c7.917-7.339 10.961-13.54 8.132-16.588-1.58-1.7-4.082-1.345-5.9-.742-3.156 1.044-6.942 3.6-11.252 7.595a77.327 77.327 0 0 0-13.571 16.467z" transform="translate(-10.726 -6.114)" style="fill:#0c132b"/>
                        </g>
                      </g>
                      <g data-name="Group 10087">
                        <g data-name="Group 10086">
                          <path data-name="Path 30376" d="M66.657 64.379h-.108a2.77 2.77 0 0 1-1.94-.891l-6.425-6.932a2.788 2.788 0 1 1 4.09-3.791l6.426 6.93a2.788 2.788 0 0 1-2.042 4.684zm-6.429-11.185a1.465 1.465 0 0 0-1.073 2.461l6.425 6.932a1.456 1.456 0 0 0 1.019.468 1.473 1.473 0 0 0 1.051-.389 1.465 1.465 0 0 0 .079-2.07L61.3 53.663a1.456 1.456 0 0 0-1.019-.468h-.057z" transform="translate(-10.192 -9.354)" style="fill:#0c132b"/>
                        </g>
                      </g>
                      <g data-name="Group 10089">
                        <g data-name="Group 10088">
                          <path data-name="Path 30377" d="M55.338 73.364c-3.632 0-7.147-2.089-8.843-3.27a1.2 1.2 0 0 1 .357-2.138c2.082-.591 4.44-1.948 3.854-5.064a5.388 5.388 0 0 1 .925-4.543c1.853-2.328 5.451-2.5 5.6-2.5a.676.676 0 0 1 .511.212l6.167 6.653a.661.661 0 0 1 .147.253c.063.2 1.494 5.051-4.027 8.947a7.968 7.968 0 0 1-4.7 1.453zm-7.873-4.21c2.339 1.586 7.719 4.558 11.8 1.675 4.284-3.023 3.732-6.6 3.56-7.341l-5.836-6.3c-.816.088-3.127.467-4.331 1.984a4.131 4.131 0 0 0-.657 3.47c.58 3.077-1.073 5.438-4.541 6.508z" transform="translate(-8.845 -9.821)" style="fill:#0c132b"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g data-name="Group 10096">
              <g data-name="Group 10095">
                <path data-name="Path 30378" d="M7.193 75.236 4.674 59.379a2.208 2.208 0 0 1 1.831-2.532l23.112-3.671a2.208 2.208 0 0 1 2.525 1.84l2.519 15.857a2.2 2.2 0 0 1-1.832 2.527L9.717 77.068a2.2 2.2 0 0 1-2.524-1.832z" transform="translate(-3.985 -9.504)" style="fill:#0c132b"/>
              </g>
            </g>
            <g data-name="Group 10100">
              <g data-name="Group 10099">
                <path data-name="Path 30380" d="M9.281 77.669a2.872 2.872 0 0 1-2.83-2.418L3.933 59.394a2.87 2.87 0 0 1 2.38-3.294l23.111-3.671a2.869 2.869 0 0 1 3.283 2.39l2.519 15.857a2.862 2.862 0 0 1-2.382 3.281L9.733 77.633a2.872 2.872 0 0 1-.452.036zm-1.522-2.625a1.545 1.545 0 0 0 1.767 1.282l23.111-3.671a1.539 1.539 0 0 0 1.282-1.767L31.4 55.031a1.547 1.547 0 0 0-.618-1.014 1.528 1.528 0 0 0-1.15-.277L6.521 57.412a1.529 1.529 0 0 0-1.007.619 1.547 1.547 0 0 0-.274 1.155z" transform="translate(-3.896 -9.416)" style="fill:#0c132b"/>
              </g>
            </g>
            <g data-name="Group 10110">
              <g data-name="Group 10102">
                <g data-name="Group 10101">
                  <path data-name="Path 30381" d="M29.982 71.586 13.148 74.26a1.241 1.241 0 0 1-1.269-1.85L17.422 63a1.248 1.248 0 0 1 2.05-.131l3.008 3.858a1.232 1.232 0 0 0 1.911.049l1.594-1.831a1.232 1.232 0 0 1 1.984.158l2.877 4.612a1.238 1.238 0 0 1-.863 1.873z" transform="translate(-4.815 -10.591)" style="fill:#fff"/>
                </g>
              </g>
              <g data-name="Group 10106">
                <g data-name="Group 10105">
                  <path data-name="Path 30383" d="M12.857 74.85a1.9 1.9 0 0 1-1.636-2.862l5.543-9.414a1.91 1.91 0 0 1 3.141-.2l3.008 3.858a.564.564 0 0 0 .437.224.615.615 0 0 0 .451-.2l1.6-1.834a1.894 1.894 0 0 1 3.046.245l2.876 4.609A1.9 1.9 0 0 1 30 72.151l-16.836 2.674a1.958 1.958 0 0 1-.307.024zm5.549-11.884h-.039a.577.577 0 0 0-.466.282l-5.539 9.408a.579.579 0 0 0 .594.861l16.834-2.673a.576.576 0 0 0 .4-.873l-2.875-4.608a.571.571 0 0 0-.919-.079L24.8 67.12a1.919 1.919 0 0 1-1.486.657 1.887 1.887 0 0 1-1.448-.736l-3.006-3.855a.571.571 0 0 0-.455-.22z" transform="translate(-4.727 -10.503)" style="fill:#0c132b"/>
                </g>
              </g>
              <g data-name="Group 10109">
                <g data-name="Group 10107" transform="translate(16.754 48.313)">
                  <circle data-name="Ellipse 50" cx="1.719" cy="1.719" r="1.719" style="fill:#fff"/>
                </g>
                <g data-name="Group 10108">
                  <path data-name="Path 30384" d="M24.512 62.45a2.384 2.384 0 1 1 .375-.03 2.385 2.385 0 0 1-.375.03zm0-3.439a1.061 1.061 0 0 0-.858.436 1.057 1.057 0 1 0 1.9.455 1.058 1.058 0 0 0-1.041-.891z" transform="translate(-6.041 -10.038)" style="fill:#fff"/>
                </g>
              </g>
            </g>
            <g data-name="Group 10136">
              <g data-name="Group 10135">
                <g data-name="Group 10134">
                  <g data-name="Group 10118">
                    <g data-name="Group 10117">
                      <path data-name="Path 30388" d="m89.468 8.5 1.623 6.8a2.149 2.149 0 0 1-1.591 2.591l-28.176 6.725a2.153 2.153 0 0 1-2.592-1.593l-1.623-6.8a2.157 2.157 0 0 1 1.591-2.588l28.177-6.726A2.153 2.153 0 0 1 89.468 8.5z" transform="translate(-10.146 -4.059)" style="fill:#fff"/>
                    </g>
                  </g>
                  <g data-name="Group 10122">
                    <g data-name="Group 10121">
                      <path data-name="Path 30390" d="M60.736 25.249A2.818 2.818 0 0 1 58 23.089l-1.623-6.8a2.819 2.819 0 0 1 2.084-3.389l28.174-6.723a2.814 2.814 0 0 1 3.388 2.083l1.623 6.8a2.816 2.816 0 0 1-2.082 3.389L61.39 25.171a2.816 2.816 0 0 1-.653.077zM87.289 7.424a1.491 1.491 0 0 0-.347.041L58.768 14.19a1.495 1.495 0 0 0-1.1 1.794l1.623 6.8a1.491 1.491 0 0 0 1.795 1.1l28.173-6.725a1.487 1.487 0 0 0 1.1-1.794l-1.623-6.8a1.493 1.493 0 0 0-1.446-1.144z" transform="translate(-10.058 -3.971)" style="fill:#0c132b"/>
                    </g>
                  </g>
                  <g data-name="Group 10124">
                    <g data-name="Group 10123">
                      <path data-name="Path 30391" d="m92.351 8.5 1.623 6.8a2.149 2.149 0 0 1-1.593 2.592l-6.543 1.562a2.153 2.153 0 0 1-2.592-1.593l-1.623-6.8a2.157 2.157 0 0 1 1.593-2.591l6.543-1.562A2.153 2.153 0 0 1 92.351 8.5z" transform="translate(-13.03 -4.059)" style="fill:#b11f24"/>
                    </g>
                  </g>
                  <g data-name="Group 10128">
                    <g data-name="Group 10127">
                      <path data-name="Path 30393" d="M85.25 20.085a2.818 2.818 0 0 1-2.736-2.16l-1.623-6.8a2.816 2.816 0 0 1 2.083-3.389l6.543-1.562a2.814 2.814 0 0 1 3.389 2.086l1.623 6.8a2.81 2.81 0 0 1-2.082 3.389L85.9 20.008a2.816 2.816 0 0 1-.653.077zm4.922-12.661a1.491 1.491 0 0 0-.347.041l-6.544 1.562a1.491 1.491 0 0 0-1.1 1.794l1.623 6.8a1.493 1.493 0 0 0 1.794 1.1l6.543-1.562a1.487 1.487 0 0 0 1.1-1.794l-1.623-6.8a1.494 1.494 0 0 0-1.446-1.144z" transform="translate(-12.941 -3.971)" style="fill:#0c132b"/>
                    </g>
                  </g>
                  <g data-name="Group 10133">
                    <g data-name="Group 10130">
                      <g data-name="Group 10129">
                        <path data-name="Path 30394" d="M87.759 15.691a2.317 2.317 0 1 1 1.979-1.1 2.3 2.3 0 0 1-1.979 1.1zm.006-3.312a.993.993 0 1 0 .519.147.995.995 0 0 0-.519-.147z" transform="translate(-13.486 -4.554)" style="fill:#fff"/>
                      </g>
                    </g>
                    <g data-name="Group 10132">
                      <g data-name="Group 10131">
                        <path data-name="Path 30395" d="M91.15 16.2a.657.657 0 0 1-.346-.1l-1.569-.964a.662.662 0 1 1 .693-1.128l1.569.964a.662.662 0 0 1-.347 1.228z" transform="translate(-13.895 -4.89)" style="fill:#fff"/>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">Graphic Design</p>
      </div>
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="86.16" height="85" viewBox="0 0 86.16 85">
          <g data-name="Group 10148">
            <g data-name="Group 10007">
              <path data-name="Path 30258" d="M2986.554 409.478a10.27 10.27 0 0 1-7.908-3.7v-.251a7.911 7.911 0 0 1 5.269-7.466 3.088 3.088 0 0 0 5.281-.018l.164.015a7.91 7.91 0 0 1 5.282 7.456v.035a10.274 10.274 0 0 1-8.088 3.929" transform="translate(-2911.293 -325.752)" style="fill:#eee"/>
              <path data-name="Path 30259" d="M3002.48 384a3.088 3.088 0 0 1-2.636-1.473 3.052 3.052 0 0 1-.459-1.617 3.088 3.088 0 0 1 6.176 0 3.052 3.052 0 0 1-.441 1.6 3.088 3.088 0 0 1-2.64 1.487" transform="translate(-2927.226 -310.213)" style="fill:#eee"/>
              <path data-name="Path 30260" d="M2997.177 295.666a3.141 3.141 0 1 1 3.607 3.106 3.229 3.229 0 0 1-.465.033 3.137 3.137 0 0 1-3.133-2.9 2.955 2.955 0 0 1-.009-.234" transform="translate(-2925.53 -244.686)" style="fill:#b11f24"/>
              <path data-name="Path 30261" d="M2968.32 368.835a10.292 10.292 0 0 1 10.283-10.3h.017a10.294 10.294 0 0 1 8.08 16.665v-.035a7.909 7.909 0 0 0-5.282-7.456l-.163-.016a3.093 3.093 0 1 0-5.277.013 7.912 7.912 0 0 0-5.27 7.467v.251a10.25 10.25 0 0 1-2.393-6.586" transform="translate(-2903.36 -295.399)" style="fill:#0c132b"/>
              <path data-name="Path 30262" d="M2829.767 368.991a10.294 10.294 0 0 1 9.952-10.285h.338a10.292 10.292 0 0 1 7.919 16.878v-.252a7.911 7.911 0 0 0-5.265-7.471 3.088 3.088 0 1 0-5.735-1.615 3.055 3.055 0 0 0 .459 1.617 7.912 7.912 0 0 0-5.272 7.466v.25a10.254 10.254 0 0 1-2.4-6.589" transform="translate(-2796.915 -295.531)" style="fill:#0c132b"/>
              <path data-name="Path 30263" d="M2861.679 135.041a5.325 5.325 0 1 1-5.329-5.32 5.276 5.276 0 0 1 5.327 5.225v.1" transform="translate(-2813.251 -119.612)" style="fill:#b11f24"/>
              <path data-name="Path 30264" d="M2866.988 381.016a3.088 3.088 0 0 1-5.735 1.621 3.056 3.056 0 0 1-.459-1.617 3.088 3.088 0 0 1 6.176 0z" transform="translate(-2820.753 -310.304)" style="fill:#eee"/>
              <path data-name="Path 30265" d="M2862.651 298.871a3.136 3.136 0 0 1-3.015-2.9c0-.075-.011-.154-.011-.234a3.14 3.14 0 0 1 3.022-3.141h.119a3.143 3.143 0 0 1 3.143 3.139v.234a3.141 3.141 0 0 1-3.128 2.916z" transform="translate(-2819.854 -244.74)" style="fill:#b11f24"/>
              <path data-name="Path 30266" d="M2840.074 405.69a7.911 7.911 0 0 1 5.272-7.466 3.088 3.088 0 0 0 5.271 0 7.912 7.912 0 0 1 5.283 7.455v.252a10.29 10.29 0 0 1-15.817.013 3.142 3.142 0 0 1-.009-.254" transform="translate(-2804.835 -325.891)" style="fill:#eee"/>
              <path data-name="Path 30267" d="M2828.631 184.323a17.672 17.672 0 0 1-13.274-6.357v-.441a13.614 13.614 0 0 1 9.066-12.844 5.319 5.319 0 0 0 9.07 0 13.613 13.613 0 0 1 9.088 12.829v.441a17.665 17.665 0 0 1-13.6 6.386c-.126-.009-.238-.009-.349-.013" transform="translate(-2785.846 -146.471)" style="fill:#b11f24"/>
              <path data-name="Path 30268" d="M2797.6 114.32a17.712 17.712 0 1 1 31.322 11.316v-.436a13.613 13.613 0 0 0-9.088-12.829 5.323 5.323 0 1 0-9.07 0 13.615 13.615 0 0 0-9.066 12.844v.441a17.616 17.616 0 0 1-4.1-11.331" transform="translate(-2772.2 -94.158)" style="fill:#fff"/>
              <path data-name="Path 30269" d="M2709.459 409.745a10.273 10.273 0 0 1-7.91-3.7v-.252a7.917 7.917 0 0 1 5.27-7.466 3.088 3.088 0 0 0 5.274 0 7.912 7.912 0 0 1 5.281 7.458v.249a10.279 10.279 0 0 1-7.914 3.71" transform="translate(-2698.413 -325.97)" style="fill:#eee"/>
              <path data-name="Path 30270" d="M2728.022 382.69a3.088 3.088 0 0 1-5.274 0 3.056 3.056 0 0 1-.459-1.617 3.094 3.094 0 1 1 6.189 0 3.057 3.057 0 0 1-.456 1.617" transform="translate(-2714.346 -310.337)" style="fill:#eee"/>
              <path data-name="Path 30271" d="M2728.362 296.156a3.139 3.139 0 0 1-3.132 2.909h-.23a3.141 3.141 0 1 1 3.373-3.134c0 .064 0 .141-.009.225" transform="translate(-2714.192 -244.892)" style="fill:#b11f24"/>
              <path data-name="Path 30272" d="M2704.6 366.289a3.095 3.095 0 1 0-6.189 0 3.056 3.056 0 0 0 .458 1.617 7.917 7.917 0 0 0-5.27 7.466v.251a10.294 10.294 0 0 1 7.676-16.889h.221a10.292 10.292 0 0 1 7.921 16.876v-.249a7.912 7.912 0 0 0-5.281-7.458 3.057 3.057 0 0 0 .463-1.615" transform="translate(-2690.468 -295.552)" style="fill:#0c132b"/>
              <path data-name="Path 30273" d="M2813.192 130.626h-.3a18.308 18.308 0 0 1-13.722-6.575l-.031-.04a18.308 18.308 0 0 1 14.079-30.029h.013a18.322 18.322 0 0 1 .014 36.645zm-13.058-7.319a17.111 17.111 0 0 0 12.793 6.106h.325a17.106 17.106 0 1 0-.013-34.211h-.013a17.1 17.1 0 0 0-13.119 28.057z" transform="translate(-2770.129 -92.155)" style="fill:#0c132b"/>
              <path data-name="Path 30274" d="M2854.729 138.97a5.929 5.929 0 1 1 5.814-5.814 5.929 5.929 0 0 1-5.814 5.814m0-10.645a4.718 4.718 0 1 0 4.617 4.615 4.716 4.716 0 0 0-4.617-4.615z" transform="translate(-2811.626 -117.61)" style="fill:#0c132b"/>
              <path data-name="Path 30275" d="M2900.567 176.516a.6.6 0 0 1-.6-.6.163.163 0 0 1 0-.031v-.4a13.028 13.028 0 0 0-8.682-12.257.607.607 0 0 1 .349-1.162l.054.019a14.239 14.239 0 0 1 9.485 13.4v.441a.613.613 0 0 1-.606.589" transform="translate(-2843.846 -144.442)" style="fill:#0c132b"/>
              <path data-name="Path 30276" d="M2813.346 176.591a.6.6 0 0 1-.606-.6v-.443a14.242 14.242 0 0 1 9.472-13.416.607.607 0 0 1 .4 1.143 13.015 13.015 0 0 0-8.662 12.271v.432a.606.606 0 0 1-.6.616h-.009" transform="translate(-2783.835 -144.491)" style="fill:#0c132b"/>
              <path data-name="Path 30277" d="M3028.139 404.42a.607.607 0 0 1-.607-.607v-.249a7.314 7.314 0 0 0-4.875-6.884.606.606 0 0 1 .4-1.145 8.533 8.533 0 0 1 5.691 8.027v.251a.606.606 0 0 1-.606.607z" transform="translate(-2944.796 -323.8)" style="fill:#0c132b"/>
              <path data-name="Path 30278" d="M2699.714 377.937a10.9 10.9 0 0 1-.238-21.8h.238a10.9 10.9 0 0 1 8.41 17.834.19.19 0 0 1-.031.04 10.892 10.892 0 0 1-8.371 3.931zm-.018-20.593h-.183a9.69 9.69 0 1 0 7.62 15.93l.031-.038a9.688 9.688 0 0 0-7.451-15.881z" transform="translate(-2688.675 -293.556)" style="fill:#0c132b"/>
              <path data-name="Path 30279" d="M2723.37 382.778a3.7 3.7 0 1 1 3.7-3.7 3.7 3.7 0 0 1-3.7 3.7m0-6.187a2.486 2.486 0 0 0-2.486 2.486 2.482 2.482 0 0 0 2.484 2.481 2.488 2.488 0 0 0 .148-4.974h-.148z" transform="translate(-2712.335 -308.341)" style="fill:#0c132b"/>
              <path data-name="Path 30280" d="M2750.292 404.6a.6.6 0 0 1-.6-.6v-.245a7.312 7.312 0 0 0-4.875-6.887.61.61 0 1 1 .395-1.154 8.53 8.53 0 0 1 5.684 8.029v.272a.606.606 0 0 1-.609.589" transform="translate(-2731.34 -323.938)" style="fill:#0c132b"/>
              <path data-name="Path 30281" d="M2699.536 404.634a.609.609 0 0 1-.6-.585v-.265a8.531 8.531 0 0 1 5.669-8.055.607.607 0 0 1 .406 1.143 7.314 7.314 0 0 0-4.865 6.9v.221a.6.6 0 0 1-.58.629z" transform="translate(-2696.403 -323.952)" style="fill:#0c132b"/>
              <path data-name="Path 30282" d="M2838.05 377.819a10.887 10.887 0 0 1-8.369-3.917l-.031-.04a10.9 10.9 0 0 1 8.036-17.84h.364a10.9 10.9 0 0 1 0 21.8m-7.412-4.654a9.69 9.69 0 1 0 7.412-15.932h-.327a9.688 9.688 0 0 0-7.114 15.881z" transform="translate(-2794.903 -293.468)" style="fill:#0c132b"/>
              <path data-name="Path 30283" d="M2861.933 382.722a3.7 3.7 0 1 1 3.7-3.7 3.7 3.7 0 0 1-3.7 3.7m0-6.187a2.49 2.49 0 0 0-2.484 2.49 2.485 2.485 0 0 0 2.484 2.484 2.488 2.488 0 0 0 0-4.976z" transform="translate(-2818.786 -308.298)" style="fill:#0c132b"/>
              <path data-name="Path 30284" d="M2888.809 404.512h-.022a.6.6 0 0 1-.582-.625v-.223a7.315 7.315 0 0 0-4.881-6.893.607.607 0 1 1 .4-1.145 8.535 8.535 0 0 1 5.688 8.029v.276a.606.606 0 0 1-.606.582" transform="translate(-2837.75 -323.867)" style="fill:#0c132b"/>
              <path data-name="Path 30285" d="M2838.08 404.546a.6.6 0 0 1-.6-.6v-.249a8.531 8.531 0 0 1 5.675-8.038.609.609 0 0 1 .774.371.6.6 0 0 1-.363.77 7.315 7.315 0 0 0-4.868 6.9v.249a.606.606 0 0 1-.609.6" transform="translate(-2802.839 -323.89)" style="fill:#0c132b"/>
              <path data-name="Path 30286" d="M2977.109 377.721a10.9 10.9 0 0 1 0-21.8h.017a10.9 10.9 0 0 1-.006 21.8zm0-20.593a9.69 9.69 0 1 0 9.684 9.684 9.69 9.69 0 0 0-9.684-9.684" transform="translate(-2901.854 -293.388)" style="fill:#0c132b"/>
              <path data-name="Path 30287" d="M3000.468 382.569a3.7 3.7 0 1 1 3.7-3.7 3.7 3.7 0 0 1-3.7 3.7m0-6.176a2.488 2.488 0 1 0 2.489 2.487 2.486 2.486 0 0 0-2.489-2.487z" transform="translate(-2925.215 -308.18)" style="fill:#0c132b"/>
              <path data-name="Path 30288" d="M2976.64 404.4a.606.606 0 0 1-.6-.584v-.265a8.539 8.539 0 0 1 5.673-8.047.607.607 0 0 1 .458 1.123.545.545 0 0 1-.055.019 7.318 7.318 0 0 0-4.853 6.9v.22a.6.6 0 0 1-.579.629z" transform="translate(-2909.29 -323.767)" style="fill:#0c132b"/>
              <path data-name="Path 30289" d="M2870.652 257.464h-.606v-10.007a.6.6 0 1 1 1.209 0v10.01z" transform="translate(-2827.86 -209.597)" style="fill:#0c132b"/>
              <path data-name="Path 30290" d="M2870.708 327.368a.6.6 0 0 1-.6-.6v-9.026a.6.6 0 0 1 .6-.607h.007a.607.607 0 0 1 .607.607v9.024a.607.607 0 0 1-.607.606z" transform="translate(-2827.905 -263.598)" style="fill:#0c132b"/>
              <path data-name="Path 30291" d="M3010.765 327.148a.6.6 0 0 1-.6-.6V317.5a.605.605 0 1 1 1.211 0v9.044a.607.607 0 0 1-.6.607z" transform="translate(-2935.504 -263.408)" style="fill:#0c132b"/>
              <path data-name="Path 30292" d="M2732.662 327.419a.607.607 0 0 1-.606-.607v-9.028a.6.6 0 1 1 1.208 0v9.028a.6.6 0 0 1-.6.607z" transform="translate(-2721.849 -263.627)" style="fill:#0c132b"/>
              <path data-name="Path 30293" d="M2747.026 305.807a.607.607 0 1 1-.073-1.211.568.568 0 0 1 .073 0l25.611-.02a.607.607 0 1 1 0 1.213z" transform="translate(-2732.856 -253.945)" style="fill:#0c132b"/>
              <path data-name="Path 30294" d="M2884.57 305.688a.607.607 0 1 1-.073-1.211.537.537 0 0 1 .073 0l25.611-.024a.607.607 0 1 1 0 1.213l-25.611.018z" transform="translate(-2838.525 -253.851)" style="fill:#0c132b"/>
              <path data-name="Path 30295" d="M2723.218 297.588a2.314 2.314 0 0 1-.28-.011 3.751 3.751 0 1 1 4.028-3.75v.28a3.75 3.75 0 0 1-3.748 3.481m0-6.285a2.538 2.538 0 0 0-.185 5.073 1.754 1.754 0 0 0 .185 0 2.546 2.546 0 0 0 2.528-2.349v-.19a2.535 2.535 0 0 0-2.534-2.535h.007z" transform="translate(-2712.178 -242.814)" style="fill:#0c132b"/>
              <path data-name="Path 30296" d="M2860.777 297.507h-.15a3.732 3.732 0 0 1-3.6-3.468c0-.086-.011-.181-.011-.276a3.73 3.73 0 0 1 3.593-3.75h.147a3.75 3.75 0 0 1 3.75 3.75 2.355 2.355 0 0 1-.011.282 3.75 3.75 0 0 1-3.719 3.461m-.029-6.284h-.073a2.524 2.524 0 0 0-2.437 2.534v.185a2.526 2.526 0 0 0 2.427 2.345h.092a2.543 2.543 0 0 0 2.53-2.349v-.19a2.534 2.534 0 0 0-2.534-2.534h-.027z" transform="translate(-2817.85 -242.758)" style="fill:#0c132b"/>
              <path data-name="Path 30297" d="M2998.307 297.417a3.75 3.75 0 0 1-3.734-3.461c0-.09-.011-.185-.011-.278a3.75 3.75 0 1 1 4.31 3.7 2.875 2.875 0 0 1-.564.04m0-6.282a2.535 2.535 0 0 0-2.524 2.537v.185a2.534 2.534 0 1 0 2.526-2.726z" transform="translate(-2923.519 -242.692)" style="fill:#0c132b"/>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">Digital Marketing</p>
      </div>
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="86.145" height="85" viewBox="0 0 86.145 85">
          <defs>
            <clipPath id="v3i5p7cj6a">
              <path data-name="Rectangle 2859" style="stroke-width:.5px;fill:none;stroke:#707070" d="M0 0h86.145v77.205H0z"/>
            </clipPath>
          </defs>
          <g data-name="Group 10141">
            <g data-name="Group 9999">
              <g data-name="Group 9998" style="clip-path:url(#v3i5p7cj6a)" transform="translate(0 4.73)">
                <path data-name="Path 29671" d="M362.454 177.653a6.9 6.9 0 0 1-1.228 4.543l-2.093 5.171-.1.244-2.1 5.178a1.47 1.47 0 0 1-2.722 0l-2.389-5.851-1.931-4.723a6.923 6.923 0 0 1 6.086-10.875 4.07 4.07 0 0 1 .468.042 6.96 6.96 0 0 1 6.009 6.272m-4.292.581a2.6 2.6 0 1 0 0 .007z" transform="translate(-283.407 -139.755)" style="fill:#0c132b"/>
                <path data-name="Path 29672" d="M301.939 250.126c.021.028.044.053.065.079a31.781 31.781 0 0 1-6.93 16.893l-2.757-1.754.6-2.04-8.393-1.671-5.876-1.915 4.315-2.876 3.464-1.084 2.876-1.079-1.563-6.712s6 1.793 6.355 1.793a1.98 1.98 0 0 0 .618-.3l2.4 5.851a1.47 1.47 0 0 0 2.722 0z" transform="translate(-226.313 -202.27)" style="fill:#eee"/>
                <path data-name="Path 29673" d="M374.618 194.692a2.608 2.608 0 1 1-2.6 2.612 2.608 2.608 0 0 1 2.6-2.612z" transform="translate(-302.471 -158.814)" style="fill:#eee"/>
                <path data-name="Path 29674" d="M204.241 88.788a7.748 7.748 0 0 0-.468-.042 6.867 6.867 0 0 0-2.931.463l-2.213-4.571-5.278-3.712s-2.631 6.236-2.631 6.714-.714 4.911-.714 4.911l-6.47 6 2.4 5.637-4.311 4.911-3.718-1.794.835-5.635-7.67-1.072-.482-2.4 2.513-3.48-3.361-6.349-4.315-1.794.714-3.478-4.076-3.468.858-5.755.239-1.6a31.649 31.649 0 0 1 9.249-2.193l3.683 9.035a1.47 1.47 0 0 0 2.722 0l3.392-8.352a32.019 32.019 0 0 1 22.034 18.022" transform="translate(-131.213 -57.168)" style="fill:#eee"/>
                <path data-name="Path 29675" d="m93.021 127.614-3.231 4.434 1.959 3.012a132.789 132.789 0 0 1-9.472-5.809q-2.887-1.95-5.572-3.969l-.421-.3.019-.028 2.086-2.966-2.873-1.8.6-4.074-1.356-.328a6.921 6.921 0 1 0-12.634-5.657q-.072.163-.137.329l-.316-.019a31.979 31.979 0 0 1 17.56-23.553c.594.224 1.426-.62 2.029-.377l-1.091 6.828 4.076 3.473-.714 3.478 4.315 1.794 3.361 6.349-2.514 3.48.482 2.4 7.67 1.072-.835 5.636 3.719 1.789 4.311-4.911-2.4-5.632 6.47-6s.714-4.436.714-4.911 2.631-6.714 2.631-6.714l5.278 3.711 2.214 4.571a6.915 6.915 0 0 0-3.145 10.413l1.929 4.722a1.985 1.985 0 0 1-.617.3c-.36 0-6.355-1.793-6.355-1.793l1.563 6.713-2.887 1.082-3.475 1.084-4.315 2.877 5.876 1.915 8.4 1.672-.6 2.038 2.757 1.754a32.065 32.065 0 0 1-8.03 7.1c-.253.16-.509.316-.765.463l-.317-.549a86.473 86.473 0 0 1-8.3-3.2l-3.455-6.034z" transform="translate(-49.318 -70.874)" style="fill:#b11f24"/>
                <path data-name="Path 29676" d="m170.252 311.341.318.549a32.008 32.008 0 0 1-28.444 1.856l-2.075-8.386a66.771 66.771 0 0 0 2.982-6c-.01-.481-4.676-1.554-4.676-1.554L136.8 294.7l.765-1.084.428.3q2.684 2.015 5.572 3.969a125.7 125.7 0 0 0 9.471 5.809l1.157 1.777-1.315 2.517 1.8 2.28 7.668-1.445-.388-.677a86.487 86.487 0 0 0 8.3 3.2" transform="translate(-110.599 -239.505)" style="fill:#b11f24"/>
                <path data-name="Path 29677" d="M221.781 8.923a6.892 6.892 0 0 1-1.228 4.543l-.91 2.236-3.392 8.352a1.47 1.47 0 0 1-2.722 0l-3.683-9.035-.63-1.54a6.923 6.923 0 1 1 12.565-4.557m-4.292.581a2.606 2.606 0 1 0-2.6 2.612 2.607 2.607 0 0 0 2.6-2.612" transform="translate(-168.648 -2.105)" style="fill:#0c132b"/>
                <path data-name="Path 29678" d="m225.147 319.8.388.677-7.67 1.445-1.8-2.277 1.315-2.519-1.159-1.78-1.959-3.012 3.231-4.434 4.2 5.865z" transform="translate(-173.791 -251.159)" style="fill:#eee"/>
                <path data-name="Path 29679" d="M234 26.015a2.606 2.606 0 1 1-2.606 2.606A2.606 2.606 0 0 1 234 26.015" transform="translate(-187.765 -21.221)" style="fill:#eee"/>
                <path data-name="Path 29680" d="m76.893 245.873 2.078 8.386a31.961 31.961 0 0 1-19.6-29.453 31.331 31.331 0 0 1 .261-4.12c.04.047.082.091.123.133a6.906 6.906 0 0 0 1.129 5.3l4.316 10.565a1.47 1.47 0 0 0 2.717 0l2.376-5.846a119.684 119.684 0 0 0 3.771 3l.351.253-.019.028-.765 1.084 1.561 3.115s4.676 1.077 4.676 1.554-2.98 6-2.98 6" transform="translate(-47.446 -180.018)" style="fill:#eee"/>
                <path data-name="Path 29681" d="m124.887 249.967-2.093 2.966-.351-.252c-1.3-.991-2.555-2-3.771-3l1.929-4.736a6.771 6.771 0 0 0 .654-1.164l1.356.322-.6 4.075z" transform="translate(-95.817 -198.854)" style="fill:#eee"/>
                <path data-name="Path 29682" d="M74.588 197.331a6.9 6.9 0 0 1-.57 3.373 6.771 6.771 0 0 1-.654 1.165l-1.93 4.731-2.378 5.851a1.47 1.47 0 0 1-2.722 0l-4.311-10.568a6.905 6.905 0 0 1-1.13-5.3 6.581 6.581 0 0 1 .351-1.21 6.921 6.921 0 0 1 13.341 1.95zm-4.292.58a2.606 2.606 0 0 0-2.6-2.608 2.561 2.561 0 0 0-1.305.351 2.606 2.606 0 1 0 3.913 2.254z" transform="translate(-48.58 -155.789)" style="fill:#0c132b"/>
                <path data-name="Path 29683" d="M85.472 214.793a2.561 2.561 0 0 1 1.3-.351 2.614 2.614 0 1 1-1.3.351" transform="translate(-67.669 -174.924)" style="fill:#eee"/>
                <path data-name="Path 29684" d="M291.35 90.218a.48.48 0 0 1-.438-.284 31.642 31.642 0 0 0-21.7-17.75.482.482 0 0 1 .214-.94 32.624 32.624 0 0 1 22.364 18.293.484.484 0 0 1-.242.639.493.493 0 0 1-.2.042" transform="translate(-218.322 -58.107)" style="fill:#0c132b"/>
                <path data-name="Path 29685" d="M89.177 132.254a32.419 32.419 0 0 1-32.448-32.389v-.028a31.813 31.813 0 0 1 .265-4.183c.04-.323.093-.675.163-1.11a32.448 32.448 0 0 1 17.834-23.916 31.604 31.604 0 0 1 2.066-.917 32.1 32.1 0 0 1 9.387-2.224.481.481 0 0 1 .079.96 31.135 31.135 0 0 0-9.107 2.159c-.7.283-1.373.582-2 .889A31.489 31.489 0 0 0 58.114 94.7c-.069.423-.119.767-.158 1.079a31.457 31.457 0 0 0 31.221 35.513h.023a31.41 31.41 0 0 0 15.814-4.273c.232-.133.477-.28.751-.452A31.514 31.514 0 0 0 120.5 102.94a7.47 7.47 0 0 0 .028-.3l.482.025.479.058a2.834 2.834 0 0 1-.032.319 32.474 32.474 0 0 1-15.177 24.338c-.282.175-.537.333-.779.472a32.4 32.4 0 0 1-16.3 4.4z" transform="translate(-45.287 -55.049)" style="fill:#0c132b"/>
                <path data-name="Path 29686" d="M89.135 214.712a.482.482 0 1 1 .482-.482.482.482 0 0 1-.484.481z" transform="translate(-71.329 -174.357)" style="fill:#0c132b"/>
                <path data-name="Path 29687" d="M136.589 271.446a.484.484 0 0 1-.468-.367l-2.075-8.386a.474.474 0 0 1 .044-.351c1.228-2.28 2.548-4.818 2.869-5.613a28.584 28.584 0 0 0-4.239-1.238.48.48 0 0 1-.323-.252l-1.559-3.115a.478.478 0 0 1 .037-.493l2.582-3.662-2.457-1.526a.484.484 0 0 1-.221-.479l.526-3.638-.928-.221a.482.482 0 0 1 .224-.938l1.356.325a.482.482 0 0 1 .365.538l-.551 3.762 2.622 1.624a.481.481 0 0 1 .154.662l-.016.024-2.708 3.843 1.33 2.663c4.837 1.119 4.837 1.608 4.837 1.966 0 .393-1 2.433-2.961 6.06l2.031 8.205a.484.484 0 0 1-.351.584.523.523 0 0 1-.123.023" transform="translate(-105.063 -196.714)" style="fill:#0c132b"/>
                <path data-name="Path 29688" d="M59.854 213.107h-.028l-.316-.019a.481.481 0 1 1 .056-.961l.316.019a.481.481 0 0 1-.028.961" transform="translate(-47.187 -173.035)" style="fill:#0c132b"/>
                <path data-name="Path 29689" d="M292.929 265.446a.482.482 0 0 1-.258-.075l-2.757-1.754a.478.478 0 0 1-.2-.542l.449-1.537-7.876-1.566-.056-.014-5.876-1.915a.482.482 0 0 1-.118-.859l4.315-2.878a.48.48 0 0 1 .125-.06l3.459-1.079 2.47-.924-1.466-6.3a.481.481 0 0 1 .607-.572c2.122.637 5.574 1.645 6.184 1.764a3.359 3.359 0 0 0 .395-.223.482.482 0 1 1 .507.821c-.507.314-.7.375-.877.375-.323 0-3.119-.81-5.7-1.579l1.375 5.906a.481.481 0 0 1-.3.56l-2.871 1.079-.026.009-3.406 1.063-3.431 2.289 4.911 1.6 8.365 1.664a.483.483 0 0 1 .368.609l-.5 1.691 2.456 1.561a.482.482 0 0 1-.26.889z" transform="translate(-224.168 -200.136)" style="fill:#0c132b"/>
                <path data-name="Path 29690" d="M179.536 117.025a.49.49 0 0 1-.209-.047l-3.72-1.8a.481.481 0 0 1-.267-.5l.765-5.157-7.191-1.005a.479.479 0 0 1-.405-.381l-.484-2.4a.48.48 0 0 1 .082-.377l2.338-3.236-3.131-5.934-4.155-1.729a.484.484 0 0 1-.288-.542l.659-3.2-3.859-3.287a.484.484 0 0 1-.161-.43l1.1-7.354a.482.482 0 1 1 .961.085.492.492 0 0 1-.008.057l-1.052 7.09 3.871 3.3a.475.475 0 0 1 .16.463l-.647 3.1 3.952 1.635a.492.492 0 0 1 .242.219l3.361 6.351a.482.482 0 0 1-.037.507l-2.389 3.308.374 1.856 7.332 1.024a.484.484 0 0 1 .41.547l-.784 5.285 3.069 1.482 3.869-4.413-2.294-5.353a.483.483 0 0 1 .116-.544l6.348-5.884c.335-2.091.682-4.4.681-4.676a63.516 63.516 0 0 1 2.671-6.9.481.481 0 0 1 .721-.205l5.278 3.71a.483.483 0 0 1 .158.184l2.213 4.571a.486.486 0 0 1-.877.421l-2.164-4.466-4.687-3.3c-1.133 2.7-2.28 5.572-2.363 6-.019.584-.6 4.232-.721 4.969a.489.489 0 0 1-.147.277l-6.221 5.767 2.268 5.32a.479.479 0 0 1-.081.507l-4.309 4.911a.486.486 0 0 1-.347.165" transform="translate(-129.124 -64.607)" style="fill:#0c132b"/>
                <path data-name="Path 29691" d="M215.734 320.214a.481.481 0 0 1-.377-.184l-1.8-2.28a.484.484 0 0 1-.049-.526l1.186-2.266-2.966-4.56a.484.484 0 0 1 .014-.547l3.22-4.42a.482.482 0 0 1 .814.019l4.178 5.836.026.04 3.841 6.712a.48.48 0 0 1-.177.656.474.474 0 0 1-.152.056l-7.669 1.445a.524.524 0 0 1-.089.019m-1.228-2.806 1.426 1.8 6.723-1.271-3.492-6.1-3.8-5.3-2.641 3.627 2.938 4.515a.482.482 0 0 1 .023.486z" transform="translate(-171.66 -248.97)" style="fill:#0c132b"/>
                <path data-name="Path 29692" d="M232.19 29.583a3.088 3.088 0 1 1 3.087-3.09 3.089 3.089 0 0 1-3.087 3.09zm0-5.213a2.126 2.126 0 1 0 2.064 2.064 2.126 2.126 0 0 0-2.064-2.064" transform="translate(-185.956 -19.094)" style="fill:#0c132b"/>
                <path data-name="Path 29693" d="M212.8 23.34a1.917 1.917 0 0 1-1.807-1.214L206.7 11.6a7.4 7.4 0 1 1 12.19-.014l-4.285 10.544a1.915 1.915 0 0 1-1.807 1.217zM212.786.96a6.437 6.437 0 0 0-5.271 10.14.458.458 0 0 1 .053.1l4.315 10.568a.987.987 0 0 0 1.829 0l3.394-8.354.907-2.229a.233.233 0 0 1 .014-.032.7.7 0 0 1 .04-.07 6.437 6.437 0 0 0-4.9-10.114h-.386" transform="translate(-166.553)" style="fill:#0c132b"/>
                <path data-name="Path 29694" d="M372.476 198.284a3.091 3.091 0 1 1 3.091-3.091 3.091 3.091 0 0 1-3.091 3.091m0-5.216a2.126 2.126 0 1 0 2.124 2.132 2.128 2.128 0 0 0-2.124-2.131z" transform="translate(-300.327 -156.702)" style="fill:#0c132b"/>
                <path data-name="Path 29695" d="M353.406 192.01a1.929 1.929 0 0 1-1.806-1.21l-4.3-10.524a7.409 7.409 0 0 1 6.532-11.6 4.11 4.11 0 0 1 .5.047 7.425 7.425 0 0 1 6.439 6.723 7.327 7.327 0 0 1-1.279 4.814l-4.274 10.536a1.919 1.919 0 0 1-1.8 1.217zm-.01-22.384a6.293 6.293 0 0 0-2.34.442 6.436 6.436 0 0 0-2.929 9.7.5.5 0 0 1 .053.095l4.315 10.573a.976.976 0 0 0 .915.616.96.96 0 0 0 .91-.616l4.3-10.58a.247.247 0 0 1 .014-.032.557.557 0 0 1 .04-.07 6.375 6.375 0 0 0 1.138-4.227 6.458 6.458 0 0 0-5.6-5.846 6.505 6.505 0 0 0-.821-.05" transform="translate(-281.248 -137.578)" style="fill:#0c132b"/>
                <path data-name="Path 29696" d="M84.662 217.987a3.09 3.09 0 1 1 3.087-3.09 3.091 3.091 0 0 1-3.087 3.09zm0-5.216a2.126 2.126 0 1 0 2.133 2.129 2.122 2.122 0 0 0-2.126-2.119h-.007z" transform="translate(-65.552 -172.774)" style="fill:#0c132b"/>
                <path data-name="Path 29697" d="M65.573 211.826a1.93 1.93 0 0 1-1.807-1.214l-4.3-10.524a7.41 7.41 0 0 1-.8-6.928 7.4 7.4 0 0 1 13.756 5.471q-.047.117-.1.233a7.163 7.163 0 0 1-.667 1.21l-4.282 10.534a1.918 1.918 0 0 1-1.807 1.217zm0-22.384a6.432 6.432 0 0 0-6.011 4.082 6.052 6.052 0 0 0-.332 1.128 6.442 6.442 0 0 0 1.052 4.927.5.5 0 0 1 .053.095l4.322 10.575a.977.977 0 0 0 .917.614.956.956 0 0 0 .912-.616l4.3-10.58a.234.234 0 0 1 .014-.032.559.559 0 0 1 .04-.07 6.436 6.436 0 0 0-4.9-10.112 5.794 5.794 0 0 0-.377-.012z" transform="translate(-46.453 -153.756)" style="fill:#0c132b"/>
                <path data-name="Path 29698" d="M156.2 303.364a.488.488 0 0 1-.233-.061c-.859-.477-1.729-.974-2.587-1.477a.482.482 0 0 1 .452-.852l.035.021c.851.5 1.714.993 2.568 1.466a.482.482 0 0 1-.235.9m-5.779-3.413a.483.483 0 0 1-.256-.074 134.386 134.386 0 0 1-3.157-2.042.482.482 0 0 1 .5-.826l.036.024a127.54 127.54 0 0 0 3.134 2.026.482.482 0 0 1-.256.891zm-6.232-4.159a.483.483 0 0 1-.279-.088 144.444 144.444 0 0 1-3.036-2.215.482.482 0 0 1 .578-.772c.984.74 2 1.48 3.015 2.2a.481.481 0 0 1-.279.877z" transform="translate(-113.765 -238.696)" style="stroke:#eee;fill:#eee;stroke-width:.5px"/>
                <path data-name="Path 29699" d="M119.528 276.541a.479.479 0 0 1-.3-.1 126.27 126.27 0 0 1-2.931-2.356.482.482 0 0 1 .616-.742c.951.789 1.929 1.579 2.908 2.336a.482.482 0 0 1-.3.863" transform="translate(-93.75 -222.888)" style="stroke:#0c132b;fill:#0c132b;stroke-width:.5px"/>
                <path data-name="Path 29700" d="M334.168 286.866h-.028a37.719 37.719 0 0 1-3.769-.421.482.482 0 1 1 .137-.955h.016a36.347 36.347 0 0 0 3.673.412.482.482 0 0 1-.028.963zm3.741-.047a.482.482 0 0 1-.044-.961 14.7 14.7 0 0 0 3.54-.738.484.484 0 1 1 .323.912 15.569 15.569 0 0 1-3.771.786zm-11.132-1.11a.414.414 0 0 1-.112-.014 63.455 63.455 0 0 1-3.641-.993.481.481 0 1 1 .279-.921c1.228.37 2.428.7 3.587.977a.482.482 0 0 1-.112.951zm17.982-1.557a.481.481 0 0 1-.333-.828 6.532 6.532 0 0 0 .877-1.052 6.636 6.636 0 0 0 .877-1.929.482.482 0 0 1 .938.225c0 .012-.006.024-.01.036a7.627 7.627 0 0 1-1.01 2.2 7.461 7.461 0 0 1-1.009 1.2.476.476 0 0 1-.33.151m2.143-6.89a.482.482 0 0 1-.479-.43 16.576 16.576 0 0 0-.824-3.538.481.481 0 1 1 .91-.31 17.486 17.486 0 0 1 .877 3.743.481.481 0 0 1-.426.526zm-2.317-7.083a.482.482 0 0 1-.43-.265 39.13 39.13 0 0 0-1.83-3.215.482.482 0 1 1 .8-.545l.019.031a42.339 42.339 0 0 1 1.875 3.294.484.484 0 0 1-.431.7zm-3.964-6.348a.482.482 0 0 1-.389-.2 61.153 61.153 0 0 0-2.289-2.929.482.482 0 1 1 .705-.658.471.471 0 0 1 .036.044c.824 1 1.607 2 2.324 2.973a.481.481 0 0 1-.388.766" transform="translate(-262.23 -212)" style="stroke:#0c132b;fill:#0c132b;stroke-width:.5px"/>
                <path data-name="Path 29701" d="M279.308 373.9a.488.488 0 0 1-.149-.023c-.44-.144-.891-.293-1.338-.447a.482.482 0 0 1 .314-.912c.442.153.886.3 1.321.442a.482.482 0 0 1-.147.94m-4.843-1.754a.482.482 0 0 1-.175-.033 96.4 96.4 0 0 1-3.473-1.457.482.482 0 1 1 .307-.915.471.471 0 0 1 .084.038c1.151.51 2.306.994 3.436 1.442a.482.482 0 0 1-.176.93z" transform="translate(-219.655 -301.588)" style="stroke:#eee;fill:#eee;stroke-width:.5px"/>
                <path data-name="Path 29702" d="M11.326 93.351a.48.48 0 0 1-.351-.153c-.046-.049-.089-.1-.133-.147-.81-.9-1.6-1.817-2.331-2.715a.482.482 0 1 1 .715-.648.465.465 0 0 1 .031.038 74.232 74.232 0 0 0 2.424 2.815.482.482 0 0 1-.025.681.475.475 0 0 1-.33.13m-4.736-5.8a.48.48 0 0 1-.391-.2 43.121 43.121 0 0 1-2.1-3.138.482.482 0 1 1 .8-.54 52.025 52.025 0 0 0 2.089 3.112.481.481 0 0 1-.389.765zm-3.9-6.383a.486.486 0 0 1-.433-.27 26.739 26.739 0 0 1-1.44-3.529.482.482 0 0 1 .9-.34c.006.015.011.03.015.046a25.708 25.708 0 0 0 1.389 3.4.482.482 0 0 1-.433.693M.516 74.04a.482.482 0 0 1-.481-.446A12.197 12.197 0 0 1 0 72.687a9.227 9.227 0 0 1 .465-2.982.482.482 0 1 1 .928.264c0 .015-.01.031-.016.046a8.29 8.29 0 0 0-.412 2.671c0 .27.011.551.032.835a.482.482 0 0 1-.445.517H.516zm27.713-5.74a.492.492 0 0 1-.165-.028 76.469 76.469 0 0 0-3.526-1.194.481.481 0 0 1 .286-.919 74.84 74.84 0 0 1 3.569 1.209.481.481 0 0 1-.165.933M3 67.276a.481.481 0 0 1-.314-.845 9.758 9.758 0 0 1 3.446-1.852.482.482 0 0 1 .291.919 8.787 8.787 0 0 0-3.117 1.666.48.48 0 0 1-.306.112m18.066-1.184a.439.439 0 0 1-.116-.014 51.56 51.56 0 0 0-3.631-.763.481.481 0 1 1 .161-.949c1.186.2 2.429.463 3.7.777a.482.482 0 0 1-.116.949M13.7 64.866h-.035a25.747 25.747 0 0 0-3.673-.014.482.482 0 0 1-.072-.961 26.651 26.651 0 0 1 3.813.014.482.482 0 0 1-.033.961" transform="translate(.987 -52.067)" style="stroke:#0c132b;fill:#0c132b;stroke-width:.5px"/>
              </g>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">Website</p>
      </div>
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="85" viewBox="0 0 84 85">
          <g data-name="Group 10142">
            <g data-name="Group 10003" transform="translate(-.475 .364)">
              <path data-name="Path 30325" d="M45.6 0H20.726A20.726 20.726 0 0 0 0 20.726V45.6a20.726 20.726 0 0 0 20.726 20.723H45.6A20.726 20.726 0 0 0 66.323 45.6V20.726A20.726 20.726 0 0 0 45.6 0z" transform="translate(9.604 9.437)" style="fill:#b11f24"/>
              <path data-name="Path 30329" d="M372.181 88.362a4.181 4.181 0 1 1 4.181-4.181 4.181 4.181 0 0 1-4.181 4.181z" transform="translate(-310.317 -61.199)" style="fill:#fafafa"/>
              <g data-name="Rectangle 2885" transform="translate(.476 -.364)" style="stroke-width:2px;stroke:#000;fill:none">
                <rect width="84" height="85" rx="26" style="stroke:none"/>
                <rect x="1" y="1" width="82" height="83" rx="25" style="fill:none"/>
              </g>
              <g data-name="Rectangle 2897" transform="translate(8.476 8.636)" style="stroke-width:2px;stroke:#000;fill:none">
                <rect width="68" height="68" rx="21" style="stroke:none"/>
                <rect x="1" y="1" width="66" height="66" rx="20" style="fill:none"/>
              </g>
              <path data-name="Path 30298" d="M2130.418 186.522a17.949 17.949 0 0 0-35.474-3.682 17.535 17.535 0 0 0-.4 3.71v.091a17.939 17.939 0 0 0 35.876.323v-.349a.493.493 0 0 0 0-.093m-17.928 11.29a11.218 11.218 0 0 1-11.255-11.177.806.806 0 0 1 0-.091 10.9 10.9 0 0 1 .3-2.5 11.253 11.253 0 0 1 22.188 2.487.734.734 0 0 1 0 .093 11.218 11.218 0 0 1-11.233 11.191" transform="translate(-2069.715 -144.104)" style="fill:#eee"/>
              <g data-name="Rectangle 2886" transform="translate(23.476 23.636)" style="stroke:#000;fill:none">
                <rect width="38" height="38" rx="19" style="stroke:none"/>
                <rect x=".5" y=".5" width="37" height="37" rx="18.5" style="fill:none"/>
              </g>
              <rect data-name="Rectangle 2887" width="24" height="24" rx="12" transform="translate(30.476 30.636)" style="fill:#b11f24"/>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">Social Media</p>
      </div>
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="86.129" viewBox="0 0 85 86.129">
          <g data-name="Group 10151">
            <g data-name="Group 10149">
              <path data-name="Path 29703" d="M2247.638 873.288a14.149 14.149 0 0 0 .425-2.159 17.726 17.726 0 0 1-15.966 31.592 19.075 19.075 0 0 0 7.323-5.617 10.629 10.629 0 0 0 6.776-18.633z" transform="translate(-2173.654 -851.085)" style="fill:#0c132b"/>
              <path data-name="Path 29704" d="m2105.746 1116.624-36.254.026a18.127 18.127 0 0 1 36.254-.026" transform="translate(-2044.946 -1031.067)" style="fill:#b11f24"/>
              <path data-name="Path 29705" d="M2146.948 1045.2a18.207 18.207 0 0 0-6.718 0l-.01-14.329 6.714-.1z" transform="translate(-2100.93 -977.451)" style="fill:#0c132b"/>
              <path data-name="Path 29706" d="m2132.227 923.141.865 5.02-4.508-2.365-4.506 2.371.859-5.02-3.649-3.55 5.036-.734 2.252-4.569 2.258 4.565 5.04.728z" transform="translate(-2085.944 -885.252)" style="fill:#b11f24"/>
              <path data-name="Path 29707" d="m2115.895 898.224-5.04-.728-2.258-4.563-2.252 4.563-5.036.734 3.649 3.566-.859 5.02 4.506-2.381 4.508 2.365-.865-5zm-7.284 14.195a12.554 12.554 0 1 1 12.544-12.564 12.549 12.549 0 0 1-12.531 12.567h-.012z" transform="translate(-2065.964 -863.894)" style="fill:#eee"/>
              <path data-name="Path 29708" d="M2034.982 885.362a12.554 12.554 0 1 0-12.562-12.546 12.55 12.55 0 0 0 12.555 12.544zm-8.276 4.96a19.213 19.213 0 0 1-18.917-14.542l-2.863-11.4-1.417-5.672a14.936 14.936 0 0 1-.332-1.786 16.162 16.162 0 0 1-.072-3.8 8.553 8.553 0 0 0 4.818 1.47l54.069-.04a8.575 8.575 0 0 0 4.725-1.415 14.947 14.947 0 0 1-.4 5.9l-1.443 5.182-3.274 11.792a19.255 19.255 0 0 1-18.246 14.073l-3.262.046-1.75.028-6.714.1-1.22.018z" transform="translate(-1992.337 -836.832)" style="fill:#b11f24"/>
              <path data-name="Path 29709" d="M2053.09 831.621a8.575 8.575 0 0 1-4.728 1.421l-54.069.04a8.6 8.6 0 0 1-8.482-7.143l70.913.486c-1.863 3.657-2.069 3.883-2.281 4.1a8.347 8.347 0 0 1-1.352 1.1z" transform="translate(-1978.709 -815.315)" style="fill:#0c132b"/>
              <path data-name="Path 29710" d="M1987.757 780.113a8.559 8.559 0 0 1 6.078-2.522l54.071-.042a8.6 8.6 0 0 1 8.373 10.567l-70.917-.486a8.167 8.167 0 0 1-.123-1.439 8.553 8.553 0 0 1 2.518-6.079" transform="translate(-1978.256 -777.013)" style="fill:#b11f24"/>
              <path data-name="Path 29711" d="M1971.952 878.83a10.629 10.629 0 0 0 6.3 18.488 19.247 19.247 0 0 0 7.478 5.835 17.518 17.518 0 0 1-6.615 1.286 17.726 17.726 0 0 1-8.909-33.062 14.96 14.96 0 0 0 .331 1.786l1.417 5.673z" transform="translate(-1959.362 -851.282)" style="fill:#0c132b"/>
              <path data-name="Path 29712" d="M2067.42 1115.119a.546.546 0 0 1-.546-.544 18.669 18.669 0 0 1 18.649-18.688h.016a18.665 18.665 0 0 1 18.673 18.651.542.542 0 0 1-.538.545h-.006l-36.256.028zm18.127-18.141h-.014a17.575 17.575 0 0 0-17.561 17.05l35.149-.026a17.566 17.566 0 0 0-17.574-17.024" transform="translate(-2042.873 -1028.99)" style="fill:#0c132b"/>
              <path data-name="Path 29713" d="M2306.529 855.423a.457.457 0 0 1-.07 0 .545.545 0 0 1-.472-.609 13.7 13.7 0 0 0-.022-3.6.545.545 0 1 1 1.081-.149 14.725 14.725 0 0 1 .022 3.887.544.544 0 0 1-.54.47" transform="translate(-2232.119 -834.832)" style="fill:#0c132b"/>
              <path data-name="Path 29714" d="M2297.659 877.019a.544.544 0 0 1-.526-.69l1.441-5.183a13.747 13.747 0 0 0 .41-2.071.546.546 0 0 1 1.083.129 14.814 14.814 0 0 1-.444 2.234l-1.439 5.182a.546.546 0 0 1-.526.4" transform="translate(-2225.116 -849.088)" style="fill:#0c132b"/>
              <path data-name="Path 29715" d="M2083.632 930.933a19.622 19.622 0 0 1-7.936-1.669.546.546 0 1 1 .328-1.04.556.556 0 0 1 .11.048 18.563 18.563 0 0 0 7.779 1.573l16.651-.238a18.544 18.544 0 0 0 7.208-1.565l.038-.016a18.67 18.67 0 0 0 10.484-12.1l3.274-11.79a.546.546 0 0 1 1.052.292l-3.276 11.79a19.76 19.76 0 0 1-11.131 12.815l-.034.014a19.639 19.639 0 0 1-7.6 1.643l-16.653.24z" transform="translate(-2049.554 -876.893)" style="fill:#0c132b"/>
              <path data-name="Path 29716" d="M2023.864 930a.539.539 0 0 1-.22-.046 19.876 19.876 0 0 1-7.681-6.012 19.649 19.649 0 0 1-3.532-7.28l-2.871-11.4a.546.546 0 0 1 1.057-.266l2.865 11.4a18.523 18.523 0 0 0 3.337 6.877 18.788 18.788 0 0 0 7.258 5.681.545.545 0 0 1-.22 1.044z" transform="translate(-1997.498 -877.585)" style="fill:#0c132b"/>
              <path data-name="Path 29717" d="M2002.827 862.779a.544.544 0 0 1-.528-.413l-1.418-5.674a15.507 15.507 0 0 1-.349-1.839 16.585 16.585 0 0 1-.074-3.927.546.546 0 0 1 1.089.07c0 .017 0 .034-.006.051a15.454 15.454 0 0 0 .072 3.665 14.147 14.147 0 0 0 .317 1.714l1.419 5.676a.546.546 0 0 1-.4.661.617.617 0 0 1-.125.016" transform="translate(-1990.238 -834.69)" style="fill:#0c132b"/>
              <path data-name="Path 29718" d="M2170.387 1043.689a.544.544 0 0 1-.544-.544l-.012-14.423a.546.546 0 0 1 1.091 0l.01 14.421a.545.545 0 0 1-.543.546z" transform="translate(-2124.368 -975.395)" style="fill:#0c132b"/>
              <path data-name="Path 29719" d="M2138.159 1044.071a.546.546 0 0 1-.546-.546l-.01-14.329a.544.544 0 1 1 1.087 0l.012 14.329a.546.546 0 0 1-.545.546z" transform="translate(-2098.858 -975.771)" style="fill:#0c132b"/>
              <path data-name="Path 29720" d="M1991.764 793.29a9.139 9.139 0 0 1-9.012-7.593 8.938 8.938 0 0 1-.131-1.53 9.141 9.141 0 0 1 9.135-9.147l54.07-.042a9.151 9.151 0 0 1 9.139 9.127 9.042 9.042 0 0 1-.234 2.1.563.563 0 0 1-.044.123c-1.921 3.77-2.113 3.968-2.381 4.234a8.974 8.974 0 0 1-1.389 1.143l-.042.032a9.108 9.108 0 0 1-5.03 1.51l-54.069.042zm54.071-17.23-54.071.04a8.052 8.052 0 0 0-8.046 8.056 7.584 7.584 0 0 0 .109 1.343 8.044 8.044 0 0 0 7.937 6.7l54.071-.042a8.021 8.021 0 0 0 4.385-1.3l.046-.034a7.83 7.83 0 0 0 1.262-1.028c.149-.151.337-.343 2.153-3.9a8.242 8.242 0 0 0 .2-1.786 8.059 8.059 0 0 0-8.044-8.048" transform="translate(-1976.184 -774.979)" style="fill:#0c132b"/>
              <path data-name="Path 29721" d="M1977 902.959a18.272 18.272 0 0 1-9.168-34.079.546.546 0 0 1 .547.942A17.185 17.185 0 0 0 1977 901.87h.014a16.971 16.971 0 0 0 6.409-1.246.525.525 0 0 1 .2-.04.544.544 0 0 1 .173 1.062 18.031 18.031 0 0 1-6.788 1.313z" transform="translate(-1957.265 -849.256)" style="fill:#0c132b"/>
              <path data-name="Path 29722" d="M2003.068 924.071h-.044a11.173 11.173 0 0 1-6.647-19.4.548.548 0 0 1 .828.716.753.753 0 0 1-.063.069 10.081 10.081 0 0 0 5.972 17.53.546.546 0 0 1-.04 1.089z" transform="translate(-1984.178 -877.5)" style="fill:#0c132b"/>
              <path data-name="Path 29723" d="M2237.332 902.721a18.123 18.123 0 0 1-7.313-1.528.546.546 0 0 1 .438-.992 17.035 17.035 0 0 0 6.875 1.435h.014a17.179 17.179 0 0 0 8.583-32.056.551.551 0 0 1-.224-.248.544.544 0 0 1 .494-.772.551.551 0 0 1 .322.105 18.269 18.269 0 0 1-9.171 34.061z" transform="translate(-2171.794 -849.052)" style="fill:#0c132b"/>
              <path data-name="Path 29724" d="M2265.28 923.459a.545.545 0 0 1-.01-1.089 10.085 10.085 0 0 0 6.422-17.681.541.541 0 0 1-.138-.2.516.516 0 0 1-.044-.216.546.546 0 0 1 .544-.546.538.538 0 0 1 .4.173 11.175 11.175 0 0 1-7.157 19.556z" transform="translate(-2199.509 -876.89)" style="fill:#0c132b"/>
              <path data-name="Path 29725" d="M2106.525 910.95a13.1 13.1 0 0 1-.01-26.191h.01a13.1 13.1 0 0 1 0 26.2zm0-25.107a12.008 12.008 0 0 0 0 24.008h.01a12 12 0 0 0 12-12.01v-.006a12 12 0 0 0-12.008-11.992" transform="translate(-2063.89 -861.874)" style="fill:#0c132b"/>
              <path data-name="Path 29726" d="M2119.225 938.209a.546.546 0 1 1 .548-.545.546.546 0 0 1-.548.545z" transform="translate(-2083.88 -903.318)" style="fill:#0c132b"/>
              <path data-name="Path 29727" d="M2122.008 926.637a.555.555 0 0 1-.32-.1.544.544 0 0 1-.216-.534l.81-4.738-3.445-3.349a.54.54 0 0 1-.136-.558.546.546 0 0 1 .438-.373l4.762-.693 2.125-4.312a.542.542 0 0 1 .972 0l2.131 4.31 4.762.686a.546.546 0 0 1 .3.929l-3.45 3.355.815 4.736a.544.544 0 0 1-.794.575l-4.256-2.232-4.248 2.238a.526.526 0 0 1-.254.059m-1.617-8.73 2.855 2.778a.542.542 0 0 1 .157.484l-.663 3.93 3.528-1.857a.547.547 0 0 1 .508 0l3.53 1.851-.677-3.931a.54.54 0 0 1 .157-.482l2.853-2.778-3.947-.575a.542.542 0 0 1-.41-.3l-1.77-3.571-1.764 3.571a.543.543 0 0 1-.41.3z" transform="translate(-2083.875 -883.181)" style="fill:#0c132b"/>
              <path data-name="Path 29728" d="m2054.787 824.877-70.915-.486a.546.546 0 0 1 0-1.089l70.919.486a.546.546 0 0 1 0 1.089z" transform="translate(-1976.768 -813.229)" style="fill:#0c132b"/>
              <path data-name="Path 29729" d="M2182 1128.031a.544.544 0 0 1-.484-.292 13.272 13.272 0 0 0-6.234-5.488.546.546 0 0 1 .362-1.029l.035.014a14.247 14.247 0 0 1 6.8 6 .543.543 0 0 1-.482.794z" transform="translate(-2128.391 -1049.019)" style="fill:#eee"/>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">Website</p>
      </div>
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="86.245" height="86.145" viewBox="0 0 86.245 86.145">
          <g data-name="Group 10140">
            <g data-name="Group 10004">
              <path data-name="Rectangle 2860" transform="translate(74.342 24.071)" style="fill:#b11f24" d="M0 0h11.292v51.386H0z"/>
              <path data-name="Path 29802" d="M3735.716 814.631a2.164 2.164 0 1 1-2.164 2.164 2.164 2.164 0 0 1 2.164-2.164z" transform="translate(-3655.65 -804.44)" style="fill:#b11f24"/>
              <path data-name="Rectangle 2861" transform="translate(55.896 43.647)" style="fill:#0c132b" d="M0 0h11.292v31.812H0z"/>
              <path data-name="Path 29803" d="M3642.219 913.448a2.17 2.17 0 1 1-.52-.369 2.164 2.164 0 0 1 .52.369z" transform="translate(-3579.221 -883.452)" style="fill:#b11f24"/>
              <path data-name="Rectangle 2862" transform="translate(37.45 34.048)" style="fill:#b11f24" d="M0 0h11.292v41.409H0z"/>
              <path data-name="Path 29804" d="M3544.561 867.835a2.2 2.2 0 0 1-.13-.744 2.162 2.162 0 1 1 .132.746z" transform="translate(-3503.499 -844.897)" style="fill:#b11f24"/>
              <path data-name="Rectangle 2863" transform="translate(19.027 41.013)" style="fill:#0c132b" d="M0 0h11.292v34.446H0z"/>
              <path data-name="Path 29805" d="M3454.192 901.819a2.164 2.164 0 1 1-4.049 1.488 2.133 2.133 0 0 1-.074-.558 2.166 2.166 0 0 1 4.124-.93" transform="translate(-3427.584 -873.587)" style="fill:#b11f24"/>
              <path data-name="Rectangle 2864" transform="translate(.51 47.601)" style="fill:#b11f24" d="M0 0h11.292v27.858H0z"/>
              <path data-name="Path 29806" d="M3359.5 935.688a2.191 2.191 0 0 1 .13.744 2.157 2.157 0 1 1-.13-.744" transform="translate(-3351.356 -900.691)" style="fill:#b11f24"/>
              <path data-name="Path 29807" d="M3346.856 1032.261h-11.293a.51.51 0 0 1-.51-.51v-27.858a.512.512 0 0 1 .51-.512h11.293a.512.512 0 0 1 .511.512v27.858a.511.511 0 0 1-.511.51m-10.781-1.021h10.271v-26.84h-10.271z" transform="translate(-3335.053 -956.292)" style="fill:#0c132b"/>
              <path data-name="Path 29808" d="M3441.571 1005.147h-11.293a.511.511 0 0 1-.511-.51v-34.446a.512.512 0 0 1 .511-.512h11.293a.512.512 0 0 1 .512.512v34.447a.512.512 0 0 1-.512.51m-10.781-1.021h10.271V970.7h-10.271z" transform="translate(-3411.25 -929.178)" style="fill:#0c132b"/>
              <path data-name="Path 29809" d="M3535.817 976.494h-11.294a.51.51 0 0 1-.51-.51v-41.411a.51.51 0 0 1 .51-.51h11.294a.51.51 0 0 1 .51.51v41.411a.51.51 0 0 1-.51.51m-10.792-1.021h10.275v-40.389h-10.271z" transform="translate(-3487.073 -900.525)" style="fill:#0c132b"/>
              <path data-name="Path 29810" d="M3630.17 1015.967h-11.293a.512.512 0 0 1-.512-.51V983.64a.512.512 0 0 1 .512-.512h11.293a.512.512 0 0 1 .511.512v31.817a.512.512 0 0 1-.511.51m-10.781-1.021h10.269v-30.789h-10.269z" transform="translate(-3562.98 -939.998)" style="fill:#0c132b"/>
              <path data-name="Path 29811" d="M3724.53 935.435h-11.294a.51.51 0 0 1-.51-.51v-51.388a.51.51 0 0 1 .51-.51h11.294a.51.51 0 0 1 .51.51v51.388a.51.51 0 0 1-.51.51m-10.782-1.021h10.27v-50.358h-10.27z" transform="translate(-3638.895 -859.466)" style="fill:#0c132b"/>
              <path data-name="Path 29812" d="M3355.293 937.006a2.676 2.676 0 1 1 2.513-3.595 2.71 2.71 0 0 1 .162.93 2.679 2.679 0 0 1-2.675 2.664m0-4.33a1.649 1.649 0 1 0 1.553 1.083 1.65 1.65 0 0 0-1.553-1.083" transform="translate(-3349.184 -898.587)" style="fill:#0c132b"/>
              <path data-name="Path 29813" d="M3450.145 903.3a2.672 2.672 0 0 1-2.584-1.985 2.594 2.594 0 0 1-.091-.69 2.676 2.676 0 1 1 2.676 2.676m0-4.328a1.654 1.654 0 0 0-1.654 1.652 1.631 1.631 0 0 0 .056.426 1.65 1.65 0 1 0 1.6-2.078" transform="translate(-3425.493 -871.472)" style="fill:#0c132b"/>
              <path data-name="Path 29814" d="M3544.5 867.7a2.674 2.674 0 1 1 2.385-1.462l-.026.045a2.657 2.657 0 0 1-2.359 1.418m0-4.33a1.654 1.654 0 0 0-1.652 1.654 1.7 1.7 0 0 0 .1.571 1.675 1.675 0 0 0 1.554 1.081 1.641 1.641 0 0 0 1.472-.9.234.234 0 0 1 .022-.039 1.654 1.654 0 0 0-1.489-2.365z" transform="translate(-3501.408 -842.834)" style="fill:#0c132b"/>
              <path data-name="Path 29815" d="M3638.611 915.579a2.676 2.676 0 0 1-2.382-3.891.283.283 0 0 1 .024-.043 2.676 2.676 0 1 1 2.357 3.933m-1.489-3.386a1.635 1.635 0 0 0-.162.711 1.664 1.664 0 1 0 .184-.752z" transform="translate(-3577.117 -881.349)" style="fill:#0c132b"/>
              <path data-name="Path 29816" d="M3733.61 817.364a2.676 2.676 0 1 1 2.676-2.676 2.681 2.681 0 0 1-2.676 2.676m0-4.328a1.654 1.654 0 1 0 1.6 1.6 1.65 1.65 0 0 0-1.6-1.6" transform="translate(-3653.543 -802.334)" style="fill:#0c132b"/>
              <path data-name="Path 29817" d="M3374.588 918.251a.51.51 0 0 1-.229-.968.288.288 0 0 1 .054-.024l14.417-5.275a.512.512 0 0 1 .352.96l-14.411 5.273a.515.515 0 0 1-.182.034" transform="translate(-3366.445 -882.743)" style="fill:#0c132b"/>
              <path data-name="Path 29818" d="M3577.8 886.843a.507.507 0 0 1-.232-.056l-14.527-7.394a.51.51 0 0 1 .216-.973.543.543 0 0 1 .234.056l14.526 7.394a.51.51 0 0 1-.216.973z" transform="translate(-3518.233 -855.759)" style="fill:#0c132b"/>
              <path data-name="Path 29819" d="M3655.2 847.975a.512.512 0 0 1-.373-.865l15.524-16.126a.514.514 0 1 1 .744.709l-15.527 16.134a.51.51 0 0 1-.368.149" transform="translate(-3592.199 -817.468)" style="fill:#0c132b"/>
              <path data-name="Path 29820" d="M3469.056 883.56a.512.512 0 0 1-.177-.992l14.448-5.292a.512.512 0 0 1 .417.93l-.052.024-14.456 5.294a.485.485 0 0 1-.18.035" transform="translate(-3442.448 -854.816)" style="fill:#0c132b"/>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">Seo</p>
      </div>
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="86.381" viewBox="0 0 84 86.381">
          <g data-name="Group 10147">
            <g data-name="Group 10013">
              <path data-name="Rectangle 2866" transform="translate(41.806 69.627)" style="fill:#0c132b" d="M0 0h16.806v2.458H0z"/>
              <path data-name="Rectangle 2867" transform="translate(41.804 65.801)" style="fill:#0c132b" d="M0 0h16.806v2.458H0z"/>
              <path data-name="Rectangle 2868" transform="translate(41.793 51.592)" style="fill:#0c132b" d="M0 0h16.806v2.458H0z"/>
              <path data-name="Rectangle 2869" transform="translate(41.79 47.765)" style="fill:#0c132b" d="M0 0h16.806v2.462H0z"/>
              <path data-name="Rectangle 2870" transform="translate(41.778 33.693)" style="fill:#0c132b" d="M0 0h16.806v2.458H0z"/>
              <path data-name="Path 30053" d="M3566.557 2280.562a3.416 3.416 0 0 1-3.414 3.417l-50.757.04a3.415 3.415 0 0 1-3.419-3.411v-.009l-.049-66.129a3.412 3.412 0 0 1 3.408-3.415h10.9v6.352h-8.163l.046 61.481 45.29-.034-.045-61.481h-8.163v-6.352h10.9a3.411 3.411 0 0 1 3.419 3.4v.009z" transform="translate(-3496.562 -2198.373)" style="fill:#b11f24"/>
              <path data-name="Path 30054" d="M3598.3 2150.589a1.16 1.16 0 1 0 .006 0zm-12.953 18.934a1.588 1.588 0 0 1-1.594-1.583v-11.687a1.346 1.346 0 0 1 1.344-1.348h9.664a4.509 4.509 0 1 1 6.952 0h9.658a1.346 1.346 0 0 1 1.349 1.344v11.662a1.587 1.587 0 0 1-1.585 1.588z" transform="translate(-3557.088 -2147.015)" style="fill:#0c132b"/>
              <path data-name="Rectangle 2871" transform="translate(41.777 29.868)" style="fill:#0c132b" d="M0 0h16.806v2.458H0z"/>
              <path data-name="Path 30055" d="M3654.942 2165.876a1.161 1.161 0 1 1 1.161-1.161 1.162 1.162 0 0 1-1.161 1.161" transform="translate(-3613.732 -2159.981)" style="fill:#0c132b"/>
              <path data-name="Path 30056" d="M3553.9 2253.769h-7.837v1.344a1.5 1.5 0 0 0-.2.182 2.027 2.027 0 0 0 0 2.867l.2.2v5.111h10.237v-6.368l.546-.546a2.029 2.029 0 1 0-2.871-2.868zm27.294 21.7v-2.456l-16.806.013v2.462zm-2.963-29.321v-1.894h8.163l.046 61.482-45.291.034-.045-61.482h8.163v1.894a1.589 1.589 0 0 0 1.585 1.578l25.787-.02a1.586 1.586 0 0 0 1.594-1.579v-.013m2.948 11.425v-2.46l-16.807.013v2.46zm-24.31 13.321a2.025 2.025 0 0 0-2.864 0l-.087.088h-7.841v1.344a1.681 1.681 0 0 0-.2.173 2.029 2.029 0 0 0 0 2.869l.2.2v5.111h10.246v-6.369l.546-.546a2.026 2.026 0 0 0 .014-2.864zm24.338 26.438v-2.458l-16.805.013v2.458zm0-3.821v-2.463l-16.807.012v2.458zm-.011-14.209v-2.464l-16.807.011v2.46zm-.016-17.9v-2.468l-16.805.013v2.455zm-24.839 27.61h-10.246v9.7h10.246z" transform="translate(-3522.591 -2225.256)" style="fill:#eee"/>
              <path data-name="Rectangle 2872" transform="translate(23.497 63.768)" style="fill:#0c132b" d="M0 0h10.246v9.702H0z"/>
              <path data-name="Path 30057" d="M3571.542 2316.361a2.031 2.031 0 0 0 1.434-.6l4.314-4.32v6.369h-10.246v-5.11l3.061 3.057a2.025 2.025 0 0 0 1.438.6" transform="translate(-3543.577 -2279.599)" style="fill:#0c132b"/>
              <path data-name="Path 30058" d="M3569.615 2298.764a2.025 2.025 0 0 1-2.864.005l-.005-.005-3.061-3.057-.2-.2a2.027 2.027 0 0 1 0-2.867 1.485 1.485 0 0 1 .2-.182 2.027 2.027 0 0 1 2.666.173l1.819 1.82 3.346-3.337.087-.091a2.03 2.03 0 1 1 2.869 2.873l-.546.546z" transform="translate(-3540.215 -2262.598)" style="fill:#eee"/>
              <path data-name="Path 30059" d="M3568.248 2389.469a2.044 2.044 0 0 1-1.436-.594l-3.06-3.057-.2-.2a2.029 2.029 0 0 1 0-2.869 1.638 1.638 0 0 1 .2-.173 2.025 2.025 0 0 1 2.666.173l1.828 1.82 3.345-3.348.087-.087a2.028 2.028 0 0 1 2.87 2.865l-.546.546-4.316 4.32a2.032 2.032 0 0 1-1.44.606" transform="translate(-3540.27 -2335.482)" style="fill:#eee"/>
              <path data-name="Path 30060" d="M3570.181 2405.833a2.029 2.029 0 0 0 2.869 0l4.316-4.32v6.369h-10.246v-5.111z" transform="translate(-3543.638 -2352.449)" style="fill:#0c132b"/>
              <path data-name="Path 30061" d="m3574.918 2294.008-3.341 3.346-1.82-1.82a2.025 2.025 0 0 0-2.666-.173v-1.341z" transform="translate(-3543.615 -2265.496)" style="fill:#0c132b"/>
              <path data-name="Path 30062" d="m3574.951 2384.076-3.345 3.343-1.829-1.82a2.024 2.024 0 0 0-2.665-.173v-1.344z" transform="translate(-3543.632 -2338.345)" style="fill:#0c132b"/>
              <path data-name="Path 30063" d="M3510.269 2282.371a3.919 3.919 0 0 1-3.916-3.912l-.051-66.127a3.921 3.921 0 0 1 3.914-3.92h10.894a.5.5 0 0 1 0 1h-10.894a2.912 2.912 0 0 0-2.912 2.911l.049 66.129a2.912 2.912 0 0 0 2.912 2.911l50.766-.038a2.912 2.912 0 0 0 2.912-2.911l-.05-66.128a2.911 2.911 0 0 0-2.911-2.912h-10.9a.5.5 0 1 1 0-1h10.9a3.914 3.914 0 0 1 3.916 3.912l.042 66.134a3.918 3.918 0 0 1-3.914 3.917l-50.757.038z" transform="translate(-3494.446 -2196.232)" style="fill:#0c132b"/>
              <path data-name="Path 30064" d="M3583.242 2199.049a2.091 2.091 0 0 1-2.091-2.086v-11.681a1.85 1.85 0 0 1 1.847-1.848h9.66a.5.5 0 1 1 0 1H3583a.85.85 0 0 0-.85.848l.009 11.68a1.092 1.092 0 0 0 1.092 1.092l25.787-.018a1.092 1.092 0 0 0 1.092-1.092l-.017-11.675a.843.843 0 0 0-.833-.855h-9.68a.5.5 0 0 1-.06-1 .493.493 0 0 1 .06 0h9.658a1.845 1.845 0 0 1 1.852 1.838v.016l.009 11.68a2.087 2.087 0 0 1-2.085 2.089z" transform="translate(-3554.987 -2176.044)" style="fill:#0c132b"/>
              <path data-name="Path 30065" d="M3634.823 2153.244a.5.5 0 0 1-.384-.182 5 5 0 1 1 7.719-.012.5.5 0 0 1-.771-.637 4.013 4.013 0 1 0-6.187.013.5.5 0 0 1-.384.819z" transform="translate(-3597.155 -2144.862)" style="fill:#0c132b"/>
              <path data-name="Path 30066" d="M3539.018 2304.133a.5.5 0 0 1-.5-.5l-.048-61.482a.5.5 0 0 1 .5-.5h8.16a.5.5 0 0 1 0 1h-7.662l.046 60.482 44.29-.033-.046-60.483h-7.658a.5.5 0 0 1-.06-1h8.223a.5.5 0 0 1 .5.5l.047 61.482a.5.5 0 0 1-.493.5h-.007l-45.291.034z" transform="translate(-3520.466 -2223.12)" style="fill:#0c132b"/>
              <path data-name="Path 30067" d="M3564.926 2293.785a.5.5 0 0 1-.5-.5v-1.341a.5.5 0 0 1 .5-.5h7.837a.5.5 0 0 1 .06 1 .493.493 0 0 1-.06 0h-7.337v.842a.5.5 0 0 1-.5.5z" transform="translate(-3541.459 -2263.42)" style="fill:#0c132b"/>
              <path data-name="Path 30068" d="M3564.957 2316.243a.5.5 0 0 1-.5-.5v-5.109a.5.5 0 0 1 1 0v4.611h9.247v-5.866a.5.5 0 0 1 1 0v6.37a.5.5 0 0 1-.5.5z" transform="translate(-3541.483 -2277.521)" style="fill:#0c132b"/>
              <path data-name="Path 30069" d="M3618.523 2309.819a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.5z" transform="translate(-3584.809 -2277.475)" style="fill:#0c132b"/>
              <path data-name="Path 30070" d="M3565.1 2486.533a.5.5 0 0 1-.5-.5v-9.7a.5.5 0 0 1 .145-.353.514.514 0 0 1 .353-.147h10.246a.5.5 0 0 1 .5.5v9.7a.5.5 0 0 1-.5.5l-10.246.009zm.491-1h9.247v-8.7h-9.247z" transform="translate(-3541.599 -2412.558)" style="fill:#0c132b"/>
              <path data-name="Path 30071" d="M3566.065 2297.323a2.549 2.549 0 0 1-1.789-.741l-3.262-3.257a2.531 2.531 0 0 1 0-3.576 1.994 1.994 0 0 1 .224-.2l.027-.022a2.527 2.527 0 0 1 3.324.215l1.476 1.472 2.988-2.991a.229.229 0 0 1 .033-.017l.058-.06a2.529 2.529 0 1 1 3.581 3.559l-.522.522-.027.03-4.322 4.319a2.532 2.532 0 0 1-1.786.743zm-4.164-7.022-.042.035a1.1 1.1 0 0 0-.14.12 1.526 1.526 0 0 0 0 2.158l3.263 3.259a1.526 1.526 0 0 0 2.159 0l4.289-4.292a.291.291 0 0 1 .027-.031l.546-.546a1.529 1.529 0 0 0-2.164-2.16l-.081.086-.037.033-3.313 3.319a.5.5 0 0 1-.706 0l-1.819-1.819a1.531 1.531 0 0 0-1.982-.164" transform="translate(-3538.101 -2260.061)" style="fill:#0c132b"/>
              <path data-name="Path 30072" d="M3564.994 2383.833a.5.5 0 0 1-.5-.5v-1.345a.5.5 0 0 1 .5-.5h7.839a.5.5 0 0 1 0 1h-7.34v.844a.5.5 0 0 1-.5.5" transform="translate(-3541.514 -2336.251)" style="fill:#0c132b"/>
              <path data-name="Path 30073" d="M3564.992 2406.308a.5.5 0 0 1-.507-.493v-5.115a.5.5 0 1 1 1 0v4.611h9.245v-5.868a.5.5 0 1 1 1 0v6.368a.5.5 0 0 1-.5.5h-10.246z" transform="translate(-3541.506 -2350.371)" style="fill:#0c132b"/>
              <path data-name="Path 30074" d="M3618.593 2399.868a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.5" transform="translate(-3584.864 -2350.308)" style="fill:#0c132b"/>
              <path data-name="Path 30075" d="M3566.139 2387.454a2.548 2.548 0 0 1-1.787-.74l-3.262-3.259a2.53 2.53 0 0 1 0-3.575 2.055 2.055 0 0 1 .225-.2l.026-.02a2.527 2.527 0 0 1 3.324.215l1.476 1.472 3.077-3.082a2.527 2.527 0 1 1 3.743 3.4 2.394 2.394 0 0 1-.175.174l-.522.522-.028.031-4.308 4.32a2.549 2.549 0 0 1-1.787.742zm-4.161-7.023a.5.5 0 0 1-.046.036 1.081 1.081 0 0 0-.138.118 1.531 1.531 0 0 0 0 2.164l3.262 3.259a1.531 1.531 0 0 0 2.162 0l4.294-4.292.027-.031.546-.546a1.529 1.529 0 0 0-2.164-2.16l-3.432 3.437a.494.494 0 0 1-.353.147.5.5 0 0 1-.353-.146l-1.829-1.819a1.527 1.527 0 0 0-1.978-.166" transform="translate(-3538.162 -2332.976)" style="fill:#0c132b"/>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">Content Plan</p>
      </div>
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86.381" viewBox="0 0 86 86.381">
          <g data-name="Group 10152">
            <g data-name="Group 10150">
              <path data-name="Path 29821" d="m4272.137 1024.488 1.644-1.046 3.792 6.385-20.591 14.12-3.109-7.837 1.471-.931zm-11.848 13.824a1.5 1.5 0 1 0-1.5 1.5 1.5 1.5 0 0 0 1.5-1.5" transform="translate(-4205.209 -972.28)" style="fill:#0c132b"/>
              <path data-name="Path 29822" d="M4273.041 1092.646a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5" transform="translate(-4219.463 -1028.116)" style="fill:#eee"/>
              <path data-name="Path 29823" d="m4275.521 1084.589-5.553-13.973 20.591-14.12 8.733 14.693z" transform="translate(-4218.195 -998.95)" style="fill:#b11f24"/>
              <path data-name="Path 29824" d="M4181.364 911.331a2.24 2.24 0 0 1 .907-3.034l.013-.007 1.837-.982a2.245 2.245 0 0 1 2.894.713l2.55 3.743 3.451 5.06 3.192-1.633a1.953 1.953 0 0 1 1.643-.063l1.42.594 2.552-1.351a1.956 1.956 0 0 1 2.368.417 50.73 50.73 0 0 1 9.226 15.786l-16.808 10.691-.011-.015-1.165-2.035-7.115-5.074a2.154 2.154 0 0 1-.759-.973l-1.889-4.795a2.178 2.178 0 0 1-.051-1.447l1.531-4.87-2.831-5.242z" transform="translate(-4146.489 -878.37)" style="fill:#eee"/>
              <path data-name="Path 29825" d="M4060.86 790.5a2.239 2.239 0 0 0-.916 3.032l.009.016 2.966 5.5a20.744 20.744 0 1 1 5.245-5.06l-2.559-3.745a2.245 2.245 0 0 0-2.907-.715zm-21.849-7.31 7.338 7.325a4.556 4.556 0 0 0 6.443 0l10.936-10.95a4.56 4.56 0 1 0-6.2-6.69q-.132.122-.254.256l-7.722 7.722-4.111-4.105a4.56 4.56 0 0 0-6.666 6.223q.111.119.231.23z" transform="translate(-4025.079 -760.59)" style="fill:#b11f24"/>
              <path data-name="Path 29826" d="M4082.266 835.1a4.556 4.556 0 0 1-6.443 0l-7.338-7.321a4.56 4.56 0 0 1 6.444-6.453l4.111 4.105 7.721-7.722a4.56 4.56 0 1 1 6.528 6.367l-.077.077z" transform="translate(-4054.548 -805.179)" style="fill:#eee"/>
              <path data-name="Path 29827" d="M4246.755 948.814a.5.5 0 0 1-.477-.327l-.047-.118a49.954 49.954 0 0 0-9.127-15.627 1.451 1.451 0 0 0-1.758-.309l-2.551 1.349a.5.5 0 0 1-.43.02l-1.421-.592a1.449 1.449 0 0 0-1.219.044l-3.191 1.627a.5.5 0 0 1-.647-.165l-3.451-5.06a.506.506 0 0 1 .835-.57l3.2 4.694 2.795-1.425a2.449 2.449 0 0 1 2.067-.077l1.2.5 2.346-1.237a2.46 2.46 0 0 1 2.978.528 51.063 51.063 0 0 1 9.323 15.944l.046.121a.5.5 0 0 1-.472.682z" transform="translate(-4179.78 -895.983)" style="fill:#0c132b"/>
              <path data-name="Path 29828" d="M4189.209 928.186a.506.506 0 0 1-.445-.265l-10-18.517a2.748 2.748 0 0 1 1.119-3.722l1.839-.98a2.74 2.74 0 0 1 3.559.873l2.55 3.743a.506.506 0 0 1-.8.614.74.74 0 0 1-.031-.046l-2.549-3.741a1.734 1.734 0 0 0-2.252-.552l-1.839.982a1.735 1.735 0 0 0-.713 2.348v.007l10 18.517a.505.505 0 0 1-.445.745z" transform="translate(-4144.345 -876.211)" style="fill:#0c132b"/>
              <path data-name="Path 29829" d="M4213 1002.464a.5.5 0 0 1-.437-.256l-1.1-1.938-7.025-5.01a2.653 2.653 0 0 1-.937-1.2l-1.888-4.8a2.7 2.7 0 0 1-.063-1.781l1.532-4.87a.506.506 0 0 1 .964.3l-1.532 4.87a1.67 1.67 0 0 0 .041 1.1l1.886 4.8a1.641 1.641 0 0 0 .583.735l7.117 5.078a.473.473 0 0 1 .143.16l1.166 2.033a.5.5 0 0 1-.182.689.5.5 0 0 1-.261.083" transform="translate(-4162.893 -939.075)" style="fill:#0c132b"/>
              <path data-name="Path 29830" d="M4260.39 1056.308a.474.474 0 0 1-.167-.029.5.5 0 0 1-.3-.289l-8.671-21.81a.509.509 0 0 1 .2-.614l19.915-12.667a.5.5 0 0 1 .7.151.1.1 0 0 0 .01.016l3.792 6.387 8.733 14.693a.508.508 0 0 1-.178.7h-.006l-23.771 13.4a.5.5 0 0 1-.25.066m-8.045-22.113 2.962 7.449 5.332 13.434 22.816-12.861-11.994-20.187-1.2.765z" transform="translate(-4203.064 -970.163)" style="fill:#0c132b"/>
              <path data-name="Path 29831" d="M4267.873 1069.067a.506.506 0 0 1-.287-.919l20.591-14.122a.506.506 0 0 1 .572.833l-20.591 14.122a.515.515 0 0 1-.285.086" transform="translate(-4216.1 -996.894)" style="fill:#0c132b"/>
              <path data-name="Path 29832" d="M4270.675 1094.048a2.008 2.008 0 1 1-.122-4.013h.122a2.008 2.008 0 0 1 .121 4.013h-.121m0-3a1 1 0 1 0-.085 1.995h.085a1 1 0 0 0 0-1.995" transform="translate(-4217.097 -1026.008)" style="fill:#0c132b"/>
              <path data-name="Path 29833" d="M4049.383 801.037a21.231 21.231 0 0 1-.015-42.462h.017a21.229 21.229 0 0 1 17.2 33.672.5.5 0 1 1-.823-.579 20.224 20.224 0 0 0-16.374-32.082h-.017a20.217 20.217 0 0 0 .011 40.434h.017a20.107 20.107 0 0 0 11.24-3.421.5.5 0 1 1 .563.836 21.093 21.093 0 0 1-11.8 3.6z" transform="translate(-4023.09 -758.575)" style="fill:#0c132b"/>
              <path data-name="Path 29834" d="M4076.929 834.975a5.093 5.093 0 0 1-3.58-1.48l-7.337-7.324a5.066 5.066 0 0 1 7.157-7.17l3.754 3.749 7.354-7.367a5.065 5.065 0 1 1 7.17 7.157l-10.939 10.95a5.084 5.084 0 0 1-3.578 1.485zm-7.339-16.442a4.045 4.045 0 0 0-2.87 6.922l7.338 7.325a4.06 4.06 0 0 0 5.736-.006l10.937-10.945a4.054 4.054 0 1 0-5.736-5.731l-7.721 7.722a.509.509 0 0 1-.716 0l-4.1-4.105a4.043 4.043 0 0 0-2.866-1.182" transform="translate(-4052.436 -803.21)" style="fill:#0c132b"/>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">Seo</p>
      </div>
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="86.145" height="86" viewBox="0 0 86.145 86">
          <g data-name="Group 10144">
            <g data-name="Group 10005">
              <path data-name="Path 29730" d="m3027.932 823.6-8.139-8.125 1.446-1.448a4.486 4.486 0 0 1 6.341 0l1.793 1.79a4.487 4.487 0 0 1 0 6.34z" transform="translate(-2945.008 -801.04)" style="fill:#0c132b"/>
              <path data-name="Path 29731" d="m3014.795 838.481-4.275-4.268-3.862-3.859 2.377-2.379 8.137 8.125z" transform="translate(-2934.247 -813.543)" style="fill:#eee"/>
              <path data-name="Path 29732" d="m2933.841 957.5 3.077 32.42-7.9-1.9-5.444 4.361 4.736-29.346z" transform="translate(-2866.189 -919.643)" style="fill:#0c132b"/>
              <path data-name="Path 29733" d="m2638.934 981.376 8.578-.005 8.578-.007 1.063-5.924 1.065-5.922.358-1.995 8.951-2.628 1.194-1.2 1.762-1.762-4.736 29.346-56.913-.229 7.8-34.863 43.37-.033-.614.614-1.886 6.826-6.8.005-8.576.007-8.578.007-8.578.005-1.065 5.926-1.062 5.922-1.064 5.924 8.578-.007z" transform="translate(-2608.362 -918.543)" style="fill:#eee"/>
              <path data-name="Path 29734" d="m2873.278 964.884-2.347.69 1.275-4.616 1.887-6.826.614-.615.584-.582-.36 4.425 4.239-.351.186-.014-.355 4.425 4.423-.363-1.194 1.2z" transform="translate(-2823.064 -915.907)" style="fill:#eee"/>
              <path data-name="Path 29735" d="m2921.747 885.187-1.762 1.762-4.423.363.354-4.425-.186.014-.019-.219 20.082-20.113.1-.1 4.275 4.268-12.9 12.915z" transform="translate(-2859.624 -841.799)" style="fill:#b11f24"/>
              <path data-name="Path 29736" d="m2897.291 865.42-4.239.351.36-4.425 4.583-4.59 15.6-15.624 3.862 3.859-.1.1-20.086 20.109z" transform="translate(-2841.184 -824.318)" style="fill:#b11f24"/>
              <path data-name="Path 29737" d="m2695.924 932.127-.583.582-43.37.033 1.157-5.174 47.38-.034-4.583 4.59z" transform="translate(-2643.698 -895.098)" style="fill:#0c132b"/>
              <path data-name="Path 29738" d="m2834.478 1003.229 1.062-5.924 6.8-.005-1.275 4.616 2.347-.69-.358 1.995z" transform="translate(-2793.203 -952.249)" style="fill:#eee"/>
              <path data-name="Path 29739" d="m2795.618 1003.252-8.578.007 1.063-5.924 8.576-.007z" transform="translate(-2754.343 -952.272)" style="fill:#b11f24"/>
              <path data-name="Path 29740" d="m2822.723 1068.743 1.062-5.926 8.58-.005-1.064 5.924z" transform="translate(-2783.573 -1005.915)" style="fill:#eee"/>
              <path data-name="Path 29741" d="m2828.6 1035.988 1.063-5.922 8.582-.005-1.066 5.922z" transform="translate(-2788.385 -979.086)" style="fill:#b11f24"/>
              <path data-name="Path 29742" d="m2784.926 1062.841-1.062 5.926-8.578.005 1.063-5.924z" transform="translate(-2744.714 -1005.938)" style="fill:#b11f24"/>
              <path data-name="Path 29743" d="m2789.744 1036.012-8.576.007 1.062-5.922 8.578-.007z" transform="translate(-2749.532 -979.11)" style="fill:#eee"/>
              <path data-name="Path 29744" d="m2748.18 1003.29-8.578.007 1.064-5.924 8.578-.007z" transform="translate(-2715.483 -952.304)" style="fill:#eee"/>
              <path data-name="Path 29745" d="m2737.482 1062.879-1.064 5.924-8.58.007 1.065-5.924z" transform="translate(-2705.847 -1005.97)" style="fill:#eee"/>
              <path data-name="Path 29746" d="m2742.308 1036.05-8.578.007 1.062-5.922 8.578-.007z" transform="translate(-2710.673 -979.141)" style="fill:#b11f24"/>
              <path data-name="Path 29747" d="m2700.736 1003.329-8.58.007 1.065-5.926 8.578-.005z" transform="translate(-2676.617 -952.335)" style="fill:#b11f24"/>
              <path data-name="Path 29748" d="m2690.044 1062.917-1.065 5.924-8.578.007 1.063-5.924z" transform="translate(-2666.987 -1006.001)" style="fill:#b11f24"/>
              <path data-name="Path 29749" d="m2686.283 1036.1 1.062-5.922 8.58-.007-1.062 5.922z" transform="translate(-2671.805 -979.172)" style="fill:#eee"/>
              <path data-name="Path 29750" d="m2663.606 966.189-56.915-.229a.48.48 0 0 1-.368-.172.47.47 0 0 1-.091-.4l8.95-40.036a.475.475 0 0 1 .461-.37l47.38-.034a.473.473 0 0 1 .057.945.5.5 0 0 1-.057 0l-47 .036-8.738 39.086 55.924.224 4.678-28.945a.472.472 0 1 1 .933.15l-4.743 29.346a.472.472 0 0 1-.467.4" transform="translate(-2606.22 -892.981)" style="fill:#0c132b"/>
              <path data-name="Path 29751" d="M2921.444 990.808a.473.473 0 0 1-.294-.842l5.442-4.361a.479.479 0 0 1 .406-.091l7.255 1.745-3.016-31.759a.473.473 0 0 1 .942-.09l3.079 32.42a.473.473 0 0 1-.162.4.467.467 0 0 1-.42.1l-7.676-1.84-5.262 4.215a.467.467 0 0 1-.3.1" transform="translate(-2864.058 -917.6)" style="fill:#0c132b"/>
              <path data-name="Path 29752" d="M2649.7 954.515a.473.473 0 1 1-.057-.945.45.45 0 0 1 .057 0l43.371-.033a.473.473 0 1 1 0 .947z" transform="translate(-2641.424 -916.4)" style="fill:#0c132b"/>
              <path data-name="Path 29753" d="M2674.711 1000.934a.486.486 0 0 1-.084-.008.471.471 0 0 1-.381-.548l4.475-24.92a.473.473 0 0 1 .929.172l-4.475 24.92a.473.473 0 0 1-.464.385" transform="translate(-2661.939 -934.039)" style="fill:#0c132b"/>
              <path data-name="Path 29754" d="M2722.148 1000.892a.458.458 0 0 1-.083-.009.47.47 0 0 1-.383-.543l4.475-24.922a.473.473 0 1 1 .931.172l-4.475 24.922a.473.473 0 0 1-.466.384" transform="translate(-2700.798 -934.004)" style="fill:#0c132b"/>
              <path data-name="Path 29755" d="M2769.589 1000.885a.46.46 0 0 1-.084 0 .473.473 0 0 1-.382-.549l4.475-24.921a.474.474 0 0 1 .931.172l-4.475 24.92a.474.474 0 0 1-.465.379" transform="translate(-2739.659 -934.004)" style="fill:#0c132b"/>
              <path data-name="Path 29756" d="M2817.027 1017.018a.485.485 0 0 1-.084 0 .473.473 0 0 1-.382-.549l3.829-21.352a.473.473 0 1 1 .931.172l-3.829 21.342a.474.474 0 0 1-.465.387" transform="translate(-2778.519 -950.143)" style="fill:#0c132b"/>
              <path data-name="Path 29757" d="M2838.206 979.478a.445.445 0 0 1-.085-.009.47.47 0 0 1-.387-.54v-.007l.64-3.575a.473.473 0 1 1 .931.172l-.64 3.575a.473.473 0 0 1-.461.384" transform="translate(-2795.865 -933.949)" style="fill:#0c132b"/>
              <path data-name="Path 29758" d="M2864.464 1034.765a.484.484 0 0 1-.085-.009.473.473 0 0 1-.382-.549l2.769-15.4v-.019l.358-2a.474.474 0 0 1 .931.172l-.355 1.979v.019l-2.772 15.416a.473.473 0 0 1-.464.391" transform="translate(-2817.379 -967.896)" style="fill:#0c132b"/>
              <path data-name="Path 29759" d="M2670.446 995.657a.473.473 0 1 1-.058-.945.413.413 0 0 1 .058 0l37.117-.029v.947l-37.119.028z" transform="translate(-2658.421 -950.106)" style="fill:#0c132b"/>
              <path data-name="Path 29760" d="M2664.708 1028.4a.473.473 0 0 1 0-.945l43.706-.033a.473.473 0 0 1 .057.945h-.057l-43.7.032z" transform="translate(-2653.767 -976.923)" style="fill:#0c132b"/>
              <path data-name="Path 29761" d="M2657.941 1061.15a.473.473 0 0 1 0-.945l44.389-.033a.473.473 0 1 1 .057.945.491.491 0 0 1-.057 0l-44.387.033z" transform="translate(-2648.225 -1003.752)" style="fill:#0c132b"/>
              <path data-name="Path 29762" d="M2650.417 1093.889a.473.473 0 1 1 0-.947l44.506-.038a.473.473 0 1 1 .057.945h-.057l-44.506.034z" transform="translate(-2642.037 -1030.565)" style="fill:#0c132b"/>
              <path data-name="Path 29763" d="M2868.788 849.047a.471.471 0 0 1-.473-.47.456.456 0 0 1 .017-.127l3.162-11.442a.492.492 0 0 1 .12-.208l1.172-1.17.026-.029 24.006-24.042a4.965 4.965 0 0 1 7.008 0l1.793 1.792a4.967 4.967 0 0 1 0 7.008l-25.2 25.228a.455.455 0 0 1-.2.119l-11.3 3.324a.432.432 0 0 1-.133.019m3.583-11.667-2.9 10.5 10.361-3.041 25.128-25.152a4.019 4.019 0 0 0 0-5.68l-1.793-1.79a4.015 4.015 0 0 0-5.678 0l-23.977 24.025c0 .012-.019.021-.028.031z" transform="translate(-2820.922 -798.908)" style="fill:#0c132b"/>
              <path data-name="Path 29764" d="M2894.992 959.658a.475.475 0 0 1-.334-.139.466.466 0 0 1-.134-.377l.312-3.871-3.871.32a.477.477 0 0 1-.373-.138.469.469 0 0 1-.136-.372l.358-4.422a.472.472 0 1 1 .943.031.246.246 0 0 1 0 .038l-.313 3.871 3.873-.32a.473.473 0 0 1 .372.138.467.467 0 0 1 .136.372l-.311 3.871 3.87-.317a.472.472 0 1 1 .077.942l-4.42.373z" transform="translate(-2839.057 -913.669)" style="fill:#0c132b"/>
              <path data-name="Path 29765" d="M3025.792 834.425a.465.465 0 0 1-.333-.139l-8.139-8.125a.474.474 0 1 1 .67-.67l8.137 8.125a.475.475 0 0 1-.334.809" transform="translate(-2942.868 -811.394)" style="fill:#0c132b"/>
              <path data-name="Path 29766" d="M3012.582 847.518a.478.478 0 0 1-.334-.138l-8.137-8.125a.473.473 0 1 1 .637-.7.432.432 0 0 1 .031.031l8.137 8.125a.473.473 0 0 1-.334.807" transform="translate(-2932.034 -822.108)" style="fill:#0c132b"/>
              <path data-name="Path 29767" d="M2914.205 881.476a.473.473 0 0 1-.344-.807l20.092-20.111a.472.472 0 0 1 .668.668l-20.082 20.113a.477.477 0 0 1-.334.138" transform="translate(-2858.119 -840.12)" style="fill:#0c132b"/>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">Strategic Plan</p>
      </div>
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="86.129" height="86.194" viewBox="0 0 86.129 86.194">
          <g data-name="Group 10145">
            <g data-name="Group 10011">
              <path d="M77 130h12.114v12.114H77z" transform="translate(-64.045 -108.127)" style="fill-rule:evenodd;fill:#db0021"/>
              <path d="M149 130h38.7v19.013H149z" transform="translate(-123.931 -108.127)" style="fill-rule:evenodd;fill:#db0021"/>
              <path d="M149 88h38.7v7.067H149z" transform="translate(-123.931 -73.194)" style="fill-rule:evenodd;fill:#db0021"/>
            </g>
            <path d="m283.812 24.73-3.028-1.63L279 19.211 292.965 18h5.721s11.441 0 11.441 11.492a23.527 23.527 0 0 1-3.752 12.568l-2.137 4.375" transform="translate(-232.058 -14.972)" style="fill:#0c132b"/>
            <path d="M288.715 61.617 278.822 58l-2.12 6.343 1.346 2.793L273 72.352l1.228 1.683 2.81 1.01 1.009 9.372 4.038.454 5.384-1.346 1.262 9.658 12.114-3.4-1.6-10.078-4.459-5.636z" transform="translate(-227.067 -48.242)" style="fill:#fbfbfb"/>
            <path d="m327 164.751 7.487-5.283 1.262-5.468h1.935l1.767 9.523-3.062 8.749-2.742.774-1.262-9.658z" transform="translate(-271.982 -128.089)" style="fill:#fbfbfb"/>
            <path d="M315.038 102.86h-3.2a.833.833 0 0 1-.841-.841V100h1.683v1.178h2.356z" transform="translate(-258.674 -83.175)" style="fill:#35322b"/>
            <path d="m301.61 170.4.168 1.666-2.81.269-.168-1.666z" transform="translate(-248.527 -141.73)" style="fill:#504c43;fill-rule:evenodd"/>
            <path d="M362 5h5.721l-1.4 20.863h-2.978z" transform="translate(-301.093 -4.159)" style="fill:#eaeae0"/>
            <path d="M356.441 100.721a5.721 5.721 0 1 0-5.721 5.721 5.716 5.716 0 0 0 5.721-5.721" transform="translate(-286.953 -79.016)" style="fill:#fff"/>
            <path d="M17.114 117.162 5 122.209V100l12.114 5.048z" transform="translate(-4.159 -83.175)" style="fill:#0c132b"/>
            <path d="M111.606 120.672c-4.56-9.136-9.237-31.9-9.237-31.9l-4.56-3.887L95 70.516l9.675-2.944 2.86 1.144L108.78 67h2.2v10.28l3.5-4.223h2.288l-1.346 8.009-4.391 6.68 10.465 21.1 16.556-6.276 5.687-4.139a9.527 9.527 0 0 1 14.773 5.149c2.339 8.413 5.788 23.236 5.788 37.453h-30.6l1.649-20.359z" transform="translate(-79.016 -55.727)" style="fill:#db3529"/>
            <path d="M129.374 120.672h-17.768c-4.576-9.136-9.237-31.9-9.237-31.9l-4.56-3.887L95 70.516l9.675-2.944 2.86 1.144L108.763 67h2.221v10.28l3.5-4.223h2.288l-1.346 8.009-4.391 6.68 10.465 21.1 5.031-1.9z" transform="translate(-79.016 -55.727)" style="fill:#fbfbfb"/>
            <path d="M312.9 79.015a5.1 5.1 0 0 0-1.346-.824 15.2 15.2 0 0 0-3.129.555L308 77.114a12.25 12.25 0 0 1 3.954-.555 6.31 6.31 0 0 1 2 1.144z" transform="translate(-256.179 -63.637)" style="fill:#35322b"/>
            <path d="M335.937 386a90.39 90.39 0 0 1 2.692 20.359H325L326.649 386z" transform="translate(-270.318 -321.055)" style="fill:#b4271e"/>
            <g>
              <path d="m404.572 166.754-1.565-9.843-4.307-5.468 1.312-1.043 4.459 5.636a.88.88 0 0 1 .168.387l1.6 10.061z" transform="translate(-331.618 -125.095)" style="fill:#0c132b"/>
              <path d="m283.673 89.124-1.144-8.732-4.475 1.11a.919.919 0 0 1-.3.017l-4.038-.454a.84.84 0 0 1-.74-.74l-.959-8.85-2.305-.824a.738.738 0 0 1-.387-.286l-1.228-1.683a.839.839 0 0 1 .067-1.077l4.644-4.8-1.094-2.271a.841.841 0 0 1-.034-.639l2.12-6.343a.834.834 0 0 1 .437-.488.81.81 0 0 1 .656-.034l9.893 3.617-.572 1.582-9.071-3.329-1.75 5.2 1.195 2.49a.847.847 0 0 1-.151.942l-4.56 4.711.656.909 2.557.925a.841.841 0 0 1 .555.707l.942 8.7 3.214.353 5.233-1.312a.862.862 0 0 1 .673.118.786.786 0 0 1 .353.589l1.262 9.674z" transform="translate(-222.85 -44.066)" style="fill:#0c132b"/>
              <path d="M315.038 102.86h-3.2a.833.833 0 0 1-.841-.841V100h1.683v1.178h2.356z" transform="translate(-258.674 -83.175)" style="fill:#0c132b"/>
              <path d="M0 0h1.683v2.827H0z" transform="rotate(84.43 10.758 43.579)" style="fill:#0c132b"/>
              <path d="M357.982 16.354 356.99.892a.836.836 0 0 1 .219-.623.852.852 0 0 1 .622-.269h5.721a.881.881 0 0 1 .623.269.875.875 0 0 1 .219.639l-1.043 15.446-1.683-.118.975-14.536h-3.92l.942 14.554z" transform="translate(-296.923)" style="fill:#0c132b"/>
              <path d="M346.562 103.124a6.562 6.562 0 1 1 6.562-6.562 6.57 6.57 0 0 1-6.562 6.562zm0-11.441a4.879 4.879 0 1 0 4.879 4.879 4.883 4.883 0 0 0-4.879-4.879z" transform="translate(-282.794 -74.857)" style="fill:#0c132b"/>
              <path d="m402.226 42.646-1.514-.74 2.137-4.375c.017-.034.05-.084.067-.118a22.949 22.949 0 0 0 3.584-12.08c0-4.425-1.767-7.555-5.249-9.3a13.426 13.426 0 0 0-5.35-1.346V13a14.889 14.889 0 0 1 6.091 1.531c2.843 1.413 6.208 4.442 6.208 10.8a24.11 24.11 0 0 1-3.87 12.989z" transform="translate(-329.289 -10.813)" style="fill:#0c132b"/>
              <path d="m279.21 21.228-3.029-1.628a.826.826 0 0 1-.37-.387l-1.8-3.9a.838.838 0 0 1 .034-.774.88.88 0 0 1 .656-.421l13.964-1.218.151 1.683-12.77 1.11 1.178 2.557 2.776 1.5z" transform="translate(-227.842 -10.73)" style="fill:#0c132b"/>
              <path d="M160.165 137.714h-30.622a.837.837 0 0 1-.841-.909l1.565-19.45h-22.816a.861.861 0 0 1-.757-.471c-4.341-8.682-8.682-29.04-9.254-31.816l-4.341-3.7a.767.767 0 0 1-.286-.488L90.02 66.526a.828.828 0 0 1 .589-.959l9.674-2.944a.892.892 0 0 1 .555.017l2.238.892.858-1.178a.83.83 0 0 1 .69-.353h2.2a.833.833 0 0 1 .841.841v7.941l2.019-2.423a.859.859 0 0 1 .639-.3h2.288a.782.782 0 0 1 .639.3.84.84 0 0 1 .185.69l-1.335 8.009a.766.766 0 0 1-.135.32l-4.122 6.276 9.927 19.972 15.748-5.956L139.1 93.6a10.352 10.352 0 0 1 16.068 5.586c2.17 7.824 5.822 23.1 5.822 37.689a.809.809 0 0 1-.825.839zm-29.713-1.682h28.872c-.135-14.116-3.651-28.8-5.754-36.393a8.7 8.7 0 0 0-8.362-6.343 8.521 8.521 0 0 0-5.1 1.666l-5.686 4.138a.569.569 0 0 1-.2.1l-16.556 6.276a.835.835 0 0 1-1.043-.421l-10.465-21.1a.837.837 0 0 1 .05-.841l4.29-6.545 1.144-6.848h-.892l-3.247 3.92a.837.837 0 0 1-1.481-.538v-9.42h-.942l-.993 1.363a.818.818 0 0 1-.993.286l-2.574-1.026-8.665 2.642 2.591 13.342 4.341 3.7a.967.967 0 0 1 .286.471c.05.219 4.543 21.991 8.934 31.228h23.2a.837.837 0 0 1 .841.909z" transform="translate(-74.861 -51.568)" style="fill:#0c132b"/>
              <path d="M335 381h9.254v1.683H335z" transform="translate(-278.636 -316.896)" style="fill:#0c132b"/>
              <path d="M0 0h10.583v1.683H0z" transform="rotate(78.4 -7.13 55.11)" style="fill:#0c132b"/>
              <path d="M.841 118.856a.952.952 0 0 1-.471-.135.855.855 0 0 1-.37-.707V95.806a.855.855 0 0 1 .37-.706.881.881 0 0 1 .791-.084l12.114 5.048a.839.839 0 0 1 .522.774v12.112a.839.839 0 0 1-.522.774l-12.114 5.048a.538.538 0 0 1-.32.084zm.841-21.789v19.686l10.432-4.341v-10.987z" transform="translate(0 -78.98)" style="fill:#0c132b"/>
              <path d="M190 83h18v1.683h-18z" transform="translate(-158.032 -69.035)" style="fill:#0c132b"/>
              <path d="M216 238h21.368v1.683H216z" transform="translate(-179.658 -197.956)" style="fill:#0c132b"/>
              <path d="M77 125h4.375v1.683H77z" transform="translate(-64.045 -103.968)" style="fill:#0c132b"/>
              <path d="M77 197h10.6v1.683H77z" transform="translate(-64.045 -163.854)" style="fill:#0c132b"/>
              <path d="M220 125h11.1v1.683H220z" transform="translate(-182.985 -103.968)" style="fill:#0c132b"/>
              <path d="M312.9 79.015a5.1 5.1 0 0 0-1.346-.824 15.2 15.2 0 0 0-3.129.555L308 77.114a12.25 12.25 0 0 1 3.954-.555 6.31 6.31 0 0 1 2 1.144z" transform="translate(-256.178 -63.637)" style="fill:#0c132b"/>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">Videography</p>
      </div>
      <div class="flex flex-col justify-center items-center py-12 xl:py-20 border border-[#d8d8d8]" >
        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="86.413" viewBox="0 0 85 86.413">
          <g transform="translate(2.321)" data-name="Group 10146">
            <rect data-name="Rectangle 2888" width="80.119" height="55.215" rx="4" transform="translate(.548 9.598)" style="fill:#0c132b"/>
            <rect data-name="Rectangle 2889" width="73.974" height="44.685" rx="1" transform="translate(3.621 12.671)" style="fill:#b11f24"/>
            <circle data-name="Ellipse 46" cx="14.608" cy="14.608" r="14.608" transform="translate(26 39.915)" style="fill:#fff"/>
            <path data-name="Path 30335" d="M80.915 194.033h13.7a16.316 16.316 0 0 1 16.315 16.315H64.6a16.315 16.315 0 0 1 16.315-16.315z" transform="translate(-47.159 -124.901)" style="fill:#b11f24"/>
            <rect data-name="Rectangle 2890" width="56.638" height="31.407" rx="3" transform="translate(12.289 3.606)" style="fill:#fbfbfb"/>
            <path data-name="Path 30339" d="M207.225 6.679a1.142 1.142 0 0 1 0 1.615l-1.686 1.686a1.142 1.142 0 0 1-1.615-1.615l1.686-1.686a1.142 1.142 0 0 1 1.615 0z" transform="translate(-135.361 -5.796)" style="fill:#f46275"/>
            <path data-name="Path 30340" d="M0 0h21.972v4.517H0z" transform="rotate(-45 47.039 -54.352)" style="fill:#db3529"/>
            <path data-name="Path 30341" d="M0 0h10.61v5.213H0z" transform="rotate(-45 51.92 -41.371)" style="fill:#b11f24"/>
            <path data-name="Path 30342" d="m139.867 76.013-4.667 1.478 1.478-4.672z" transform="translate(-91.958 -47.98)" style="fill:#0c132b"/>
            <g data-name="Group 10012">
              <path data-name="Path 30346" d="M17.765 90.838H97.19a.548.548 0 1 0 0-1.1H81.179A16.882 16.882 0 0 0 64.33 73.426h-1.2a15.2 15.2 0 0 0 4.927-3.226h24.488a5.548 5.548 0 0 0 5.541-5.541V19.434a5.548 5.548 0 0 0-5.541-5.541h-6.2v-1.808l1.861-1.861a.548.548 0 0 0 0-.775l-.4-.4 1.319-1.319a1.69 1.69 0 1 0-2.392-2.389l-1.32 1.317-.4-.4a.564.564 0 0 0-.775 0l-1.677 1.673a.548.548 0 0 0-.094-.017 4.364 4.364 0 0 0-.324-.012h-49.33a4.207 4.207 0 0 0-4.2 4.2v1.79h-6.2a5.548 5.548 0 0 0-5.541 5.541v45.231a5.548 5.548 0 0 0 5.541 5.541H46.9a15.2 15.2 0 0 0 4.931 3.222h-1.2a16.882 16.882 0 0 0-16.854 16.315H17.765a.548.548 0 1 0 0 1.1zm74.78-75.849a4.45 4.45 0 0 1 4.445 4.445v45.23a4.45 4.45 0 0 1-4.445 4.445H69.076a15.116 15.116 0 0 0 3.173-6.361h20.3a2.471 2.471 0 0 0 2.468-2.468V19.434a2.471 2.471 0 0 0-2.468-2.468h-6.2v-1.977zM42.321 59.367a15.213 15.213 0 0 0 .172 2.284H22.411a1.374 1.374 0 0 1-1.372-1.372V19.434a1.374 1.374 0 0 1 1.372-1.372h6.2V36.2a4.207 4.207 0 0 0 4.2 4.2h49.33a4.207 4.207 0 0 0 4.2-4.2V18.062h6.2a1.374 1.374 0 0 1 1.372 1.372v40.845a1.374 1.374 0 0 1-1.372 1.372H72.462a15.157 15.157 0 1 0-30.14-2.284zM87.507 6.114a.594.594 0 0 1 .84.84l-1.319 1.319-.84-.84zm-2.884 1.3 2.419 2.419L72.279 24.6l-2.419-2.419zM37.947 35.207V24.7H56.93v10.507zM57.478 23.6H37.947V13.1h39.062v.383l-7.951 7.951a.546.546 0 0 0-.605.113l-7.5 7.5a.548.548 0 0 0 0 .775l.011.011-1.378 4.354a.548.548 0 0 0 .688.688l4.351-1.375.011.011a.548.548 0 0 0 .775 0l7.5-7.5a.544.544 0 0 0 .114-.606l3.982-3.98v13.782H58.026V24.153a.548.548 0 0 0-.548-.548zm6.275 9.021-2.8.886.887-2.805zm1.272-.279-2.911-2.911 6.727-6.727 2.911 2.911zM29.707 12.1A3.11 3.11 0 0 1 32.813 9h48.681l-3.41 3.41a.548.548 0 0 0-.527-.4H37.4a.548.548 0 0 0-.548.548v23.2a.548.548 0 0 0 .548.548h40.157a.548.548 0 0 0 .548-.548V20.33l7.148-7.15V36.2a3.11 3.11 0 0 1-3.106 3.106H32.813a3.11 3.11 0 0 1-3.106-3.106zM17.966 64.664v-45.23a4.45 4.45 0 0 1 4.445-4.445h6.2v1.977h-6.2a2.471 2.471 0 0 0-2.468 2.468v40.845a2.471 2.471 0 0 0 2.468 2.468h20.3a15.115 15.115 0 0 0 3.173 6.361H22.411a4.45 4.45 0 0 1-4.445-4.444zm25.451-5.3a14.06 14.06 0 1 1 14.061 14.062 14.06 14.06 0 0 1-14.06-14.061zm7.208 15.156h13.7a15.786 15.786 0 0 1 15.762 15.221H34.868a15.786 15.786 0 0 1 15.758-15.218z" transform="translate(-16.87 -4.843)" style="fill:#0c132b"/>
              <circle data-name="Ellipse 47" cx="2.299" cy="2.299" r="2.299" transform="translate(18.23 5.409)" style="fill:#b11f24"/>
              <circle data-name="Ellipse 48" cx="2.299" cy="2.299" r="2.299" transform="translate(38.309 17.011)" style="fill:#b11f24"/>
              <circle data-name="Ellipse 49" cx="2.299" cy="2.299" r="2.299" transform="translate(18.23 28.613)" style="fill:#b11f24"/>
            </g>
          </g>
        </svg>
        <p class="text-xl text-thblack-100 pt-10">UI/UX</p>
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
          <NuxtImg :src="testimonial.featured_media_src_url" class="w-full"/>
          <div class="bg-thred px-6 py-7">
            <h1 class="text-thwhite font-bold text-xl xl:text-base ">
              {{ testimonial.title.rendered }}
            </h1>
            <p class="text-thwhite text-base">
              {{ testimonial.acf.teller }}
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
            <swiper-slide v-for="(test,index) in testimonials">
              <div class="testimonial col-span-2 group mx-0 md:mx-3 transition-all duration-300" :class="test.id == testimonial.id ? 'active': ' '" @click="getActive(index)">
                <NuxtImg class="h-auto w-full" :src="test.featured_media_src_url" />
                <div class="bg-thgray-200 px-6 py-7 text-center xl:text-start group-hover:bg-thred group-[.active]:bg-thred transition-all duration-300" >
                  <h1 class="text-thblack-200 font-semibold text-xl xl:text-base group-hover:text-thwhite group-hover:font-bold group-[.active]:text-thwhite group-[.active]:font-bold transition-all duration-300 ">
                    {{ test.title.rendered }}
                  </h1>
                  <p class="text-thblack-200 opacity-40 text-xl xl:text-base group-hover:text-thwhite group-hover:opacity-100 group-[.active]:text-thwhite group-[.active]:opacity-100 transition-all duration-300" >
                    {{ test.acf.teller }}
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
              <audio ref="player" :src="testimonial.acf.audio"></audio>
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
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused" >
        <div class="flex justify-center items-center" v-for="partner in partners.slice(0,7)">
          <NuxtImg class="max-w-24 max-h-24" :src="partner.featured_media_src_url" />
        </div>
      </div>
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused" aria-hidden="true">
        <div class="flex justify-center items-center" v-for="partner in partners.slice(0,7)">
          <NuxtImg class="max-w-24 max-h-24" :src="partner.featured_media_src_url" />
        </div>
      </div>
    </div>
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused" >
        <div class="flex justify-center items-center" v-for="partner in partners.slice(7,14)">
          <NuxtImg class="max-w-24 max-h-24" :src="partner.featured_media_src_url" />
        </div>
      </div>
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused" aria-hidden="true">
        <div class="flex justify-center items-center" v-for="partner in partners.slice(7,14)">
          <NuxtImg class="max-w-24 max-h-24" :src="partner.featured_media_src_url" />
        </div>
      </div>
    </div>
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused" >
        <div class="flex justify-center items-center" v-for="partner in partners.slice(11,18)">
          <NuxtImg class="max-w-24 max-h-24" :src="partner.featured_media_src_url" />
        </div>
      </div>
      <div class="flex items-center justify-center xl:justify-start [&_div]:mx-10 [&_div]:my-12 [&_img]:max-w-none animate-loop-scroll group-hover:paused" aria-hidden="true">
        <div class="flex justify-center items-center" v-for="partner in partners.slice(11,18)">
          <NuxtImg class="max-w-24 max-h-24" :src="partner.featured_media_src_url" />
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
