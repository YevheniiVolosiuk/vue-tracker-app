<template>
    <a
        class="relative w-48 h-10"
        :href="`#${PAGE_TIMELINE}`"
        ><img
            src="../assets/images/logo.png"
            alt="Logo"
            class="absolute left-0 top-0 h-full w-full bg-cover object-cover"
    /></a>
</template>
<script setup>
import {PAGE_TIMELINE} from "@/constants";
</script>
