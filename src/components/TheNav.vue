<template>
    <nav class="sticky bottom-0 z-20">
        <ul class="flex items-center justify-around border-t">
            <NavItem
                v-for="(icon, page) in navItems"
                :key="page"
                :href="`#${page}`"
                :class="{'pointer-events-none bg-gray-100': page === activePage}"
                @click="emit('navigate', page)"
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
import {ClockIcon, ListBulletIcon, ChartBarIcon} from "@heroicons/vue/24/outline";
import {PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE} from "../constants";
import NavItem from "./NavItem.vue";

defineProps(["activePage"]);

const emit = defineEmits(["navigate"]);
const navItems = {
    [PAGE_TIMELINE]: ClockIcon,
    [PAGE_ACTIVITIES]: ListBulletIcon,
    [PAGE_PROGRESS]: ChartBarIcon,
};
</script>
