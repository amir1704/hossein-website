<script setup>

import useWpApi from "~/composables/useWpApi.ts";

const slug = useRoute().params?.slug;

const project = ref(null);
project.value = await useWpApi().getPost('projects', slug);

useHead({
  title: project.value.title.rendered,
})

</script>

<template>

</template>
