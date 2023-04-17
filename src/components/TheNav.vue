<template>
    <nav class="sticky bottom-0 z-20">
        <ul class="flex items-center justify-around border-t">
            <NavItem
                v-for="(icon, page) in navItems"
                :key="page"
                :href="`#${page}`"
                :class="{'bg-gray-100 pointer-events-none' : activePage === page}"
                @click="activePage = page"
            >
                <component
                    :is="icon"
                    class="h-6 w-6"
                />
                {{ page }}
            </NavItem>
        </ul>
    </nav>
</template>

<script setup>
import { ClockIcon, ListBulletIcon, ChartBarIcon } from "@heroicons/vue/24/outline";
import { ref } from 'vue';
import NavItem from "./NavItem.vue";

const navItems = {
    timeline: ClockIcon,
    activities: ListBulletIcon,
    progress: ChartBarIcon,
};

const activePage = ref('timeline');


</script>
