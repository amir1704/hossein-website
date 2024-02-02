<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="gray-back fixed w-full h-full top-0 left-0 bg-thblack-200 opacity-50 z-10" v-if="active">

  </div>
</template>
