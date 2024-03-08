<script setup>
import useWpApi from "~/composables/useWpApi.ts";
import { vInfiniteScroll } from '@vueuse/components';
const projectCategories = ref([]);
const projectCategory = ref(null);
const projects = ref([]);
const page = ref(1);
const canLoadMore = ref(true);

const filters = ref(null);

useHead({
  title: 'Projects',
});
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
}

const getProjects = async (page= 1,category = null) => {
  if(category){
    projectCategory.value = category;
    const {data, error} = await useWpApi().getPosts('projects',page,12,'slug,featured_media,featured_media_src_url','project_categories',category);
    if(!error.value){
      projects.value = data.value;
    }
  }
  else{
    projectCategory.value = null;
    const {data, error} = await useWpApi().getPosts('projects',page,12,'slug,featured_media,featured_media_src_url');
    if(!error.value){
      projects.value = data.value;
    }
  }
}

async function onLoadMore() {
  page.value++;
  if(projectCategory.value){
    const {data, error} = await useWpApi().getPosts('projects',page.value,12,'slug,featured_media,featured_media_src_url','project_categories',projectCategory.value);
    if(!error.value){
      projects.value.push(...data.value);
    }
    else{
      canLoadMore.value = false;
    }
  }
  else{
    const {data, error} = await useWpApi().getPosts('projects',page.value,12,'slug,featured_media,featured_media_src_url');
    if(!error.value){
      projects.value.push(...data.value);
    }
    else{
      canLoadMore.value = false;
    }
  }
}

await getProjects();
</script>

<template>
  <section class=" projects pb-48">
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
                  @click="getProjects(1,null)">
            All
          </button>
          <button class="text-lg mx-3.5 border-b-2 hover:text-thred hover:border-b-2 hover:border-b-thred"
                  :class="projectCategory == project_cat.id ? 'text-thred border-b-thred':'text-thblack-100 border-b-transparent'"
                  v-for="project_cat in projectCategories"
                  @click="getProjects(1,project_cat.id)">
            {{ project_cat.name }}
          </button>
        </div>
      </div>
      <div class="col-span-12 flex-row justify-center hidden lg:flex ">
        <button class="text-lg mx-3.5 border-b-2 hover:text-thred hover:border-b-2 hover:border-b-thred transition-all duration-300"
                :class="!projectCategory ? 'text-thred border-b-thred':'text-thblack-100 border-b-transparent'"
                @click="getProjects(1,null)">
          All
        </button>
        <button class="text-lg mx-3.5 border-b-2 hover:text-thred hover:border-b-2 hover:border-b-thred transition-all duration-300"
                :class="projectCategory == project_cat.id ? 'text-thred border-b-thred':'text-thblack-100 border-b-transparent'"
                v-for="project_cat in projectCategories"
                @click="getProjects(1,project_cat.id)">
          {{ project_cat.name }}
        </button>
      </div>

    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-12" v-infinite-scroll="[onLoadMore,{canLoadMore: () => canLoadMore}]">
      <div class="project relative border-[.5px] border-[#d8d8d8]" v-for="project in projects">
        <NuxtLink class="w-full h-full" :to="`/projects/${project.slug}`">
          <NuxtImg :src="project.featured_media_src_url" class="w-full" alt="project.slug" />
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
  </section>
</template>
