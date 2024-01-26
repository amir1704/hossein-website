<script setup>
import Header from '../components/layout/Header.vue';
useHead({
    bodyAttrs: {
        class: 'bg-thgray-100 font-heebo'
    }
})
</script>
<template>
    <div class="container mx-auto mt-20">
        <Header />
        <slot></slot>
    </div>
</template>