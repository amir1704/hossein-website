<script setup>
import useWpApi from "~/composables/useWpApi.ts";
const slug = useRoute().params?.slug;
const blog = ref(null);
const comments = ref([]);

blog.value = await useWpApi().getPost('posts', slug);

if(blog.value){
  const {data, error} = await useWpApi().getComments(blog.value.id);
  if(!error.value){
    comments.value = data.value;
  }
}
useHead({
  title: blog.value.title.rendered,
});

</script>

<template>
<div class="container grid grid-cols-12 mt-40">
  <div class="hidden lg:flex lg:col-span-3">
    filters
  </div>
  <div class="col-span-12 lg:col-span-9">
    <h2 class="font-medium text-[24px] text-thgray-400">{{blog.title.rendered}}</h2>
    <NuxtImg class="mt-10 w-full" :src="blog.acf.top_banner" />
    <div class="mt-12 flex flex-row">
      <div class="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18.005" height="18.005" viewBox="0 0 18.005 18.005">
          <path d="M9 10.8a.9.9 0 1 0-.637-.264A.9.9 0 0 0 9 10.8zm4.5 0a.9.9 0 1 0-.637-.264.9.9 0 0 0 .637.264zM9 14.4a.9.9 0 1 0-.637-.264A.9.9 0 0 0 9 14.4zm4.5 0a.9.9 0 1 0-.637-.264.9.9 0 0 0 .637.264zm-9-3.6a.9.9 0 1 0-.637-.264.9.9 0 0 0 .637.264zm10.8-9h-.9V.9a.9.9 0 1 0-1.8 0v.9H5.4V.9a.9.9 0 1 0-1.8 0v.9h-.9A2.7 2.7 0 0 0 0 4.5v10.8A2.7 2.7 0 0 0 2.7 18h12.6a2.7 2.7 0 0 0 2.7-2.7V4.5a2.7 2.7 0 0 0-2.7-2.7zm.9 13.5a.9.9 0 0 1-.9.9H2.7a.9.9 0 0 1-.9-.9V7.2h14.4zm0-9.9H1.8v-.9a.9.9 0 0 1 .9-.9h12.6a.9.9 0 0 1 .9.9zm-11.7 9a.9.9 0 1 0-.637-.264.9.9 0 0 0 .637.264z" style="fill:#a7a7a7"/>
        </svg>
        <span class="text-[#a7a7a7] text-[18px] ml-2.5">{{new Date(blog.date).toLocaleDateString('en-us', { day:"numeric", month:"short"})}}</span>
      </div>
      <div class="flex justify-center items-center ml-11">
        <svg xmlns="http://www.w3.org/2000/svg" width="16.069" height="19.58" viewBox="0 0 16.069 19.58">
          <path d="M13.436 5.4a5.4 5.4 0 1 0-5.4 5.4 5.409 5.409 0 0 0 5.4-5.4zm-8.777 0a3.376 3.376 0 1 1 3.376 3.377A3.377 3.377 0 0 1 4.659 5.4zm5 6.752H6.414A6.42 6.42 0 0 0 0 18.568a1.011 1.011 0 0 0 1.013 1.012h14.044a1.011 1.011 0 0 0 1.013-1.013 6.42 6.42 0 0 0-6.415-6.414zm-7.515 5.4a4.4 4.4 0 0 1 4.274-3.376h3.237a4.4 4.4 0 0 1 4.274 3.376z" style="fill:#a7a7a7"/>
        </svg>
        <span class="text-[#a7a7a7] text-[18px] ml-2.5">{{blog._embedded.author[0].name}}</span>
      </div>
      <div class="flex justify-center items-center ml-11" v-if="blog.comment_status == 'open'">
        <svg xmlns="http://www.w3.org/2000/svg" width="18.005" height="18.005" viewBox="0 0 18.005 18.005">
          <path d="M8.1 1.8H.9A.9.9 0 0 1 .9 0h7.2a.9.9 0 1 1 0 1.8zm0 3.6H.9a.9.9 0 1 1 0-1.8h7.2a.9.9 0 1 1 0 1.8z" transform="translate(4.501 4.501)" style="fill:#a7a7a7"/>
          <path data-name="Vector" d="M1.8 18.005A1.8 1.8 0 0 1 0 16.2V4.5A4.507 4.507 0 0 1 4.5 0h9A4.507 4.507 0 0 1 18 4.5v5.4a4.507 4.507 0 0 1-4.5 4.5H5.247a.908.908 0 0 0-.556.193l-1.465 2.679a.887.887 0 0 1-.153.2 1.8 1.8 0 0 1-1.273.529zM4.5 1.8a2.7 2.7 0 0 0-2.7 2.7v11.627L3.184 13.6a.887.887 0 0 1 .153-.2 2.685 2.685 0 0 1 1.91-.8H13.5a2.7 2.7 0 0 0 2.7-2.7V4.5a2.7 2.7 0 0 0-2.7-2.7z" style="fill:#a7a7a7"/>
        </svg>
        <span class="text-[#a7a7a7] text-[18px] ml-2.5">{{comments.length}}</span>
      </div>
    </div>
    <div class="mt-12 text-[18px] text-thgray-400 [&_blockquote]:bg-thred [&_blockquote]:text-thwhite [&_blockquote]:py-11 [&_blockquote]:px-12" v-html="blog.content.rendered"></div>
  </div>
</div>
</template>
