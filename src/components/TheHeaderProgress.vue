<template>
    <a
        :href="`#${PAGE_PROGRESS}`"
        class="text-sm"
    >
        <div
            v-if="false"
            class="flex items-center justify-between gap-1"
        >
            Day complete !
            <CheckCircleIcon class="w-7 text-green-500" />
        </div>
        <div
            v-else
            class="flex items-center justify-between gap-1"
        >
            Progress: <span class="font-mono">20%</span>
            <div class="h-3 w-3 rounded-full bg-red-500"></div>
        </div>
    </a>
</template>

<script setup>
import {PAGE_PROGRESS} from "../constants";
import {CheckCircleIcon} from "@heroicons/vue/24/solid";
</script>
