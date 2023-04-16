<template>
    <nav class="sticky bottom-0 z-20">
        <ul class="flex items-center justify-around border-t">
            <li
                v-for="(icon, navName) in navIcons"
                :key="navName"
                class="flex-1"
            >
                <a
                    :href="`#${navItem}`"
                    class="flex flex-col items-center p-2 text-xs capitalize"
                >
                    <component
                        :is="icon"
                        class="h-6 w-6"
                    />
                    {{ navName }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import {ClockIcon, ListBulletIcon, ChartBarIcon} from '@heroicons/vue/24/outline';

const navIcons = {
    timeline: ClockIcon,
    activities: ListBulletIcon,
    progress: ChartBarIcon,
};
</script>
