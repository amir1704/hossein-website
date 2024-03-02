<script setup>
 const props = defineProps({
   show: Boolean,
 })
</script>

<template>
  <teleport to="body">
    <div class="gray-back fixed w-full h-full top-0 left-0 bg-thblack-200 opacity-50 z-30" v-if="show">
    </div>
    <div class="gray-back fixed w-full h-full top-0 left-0 z-30 flex items-center justify-center " v-if="show">
      <div class="size-4/5 max-w-[600px] max-h-[600px] opacity-100 z-40">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>
