<template>
    <nav class="sticky bottom-0 z-20">
        <ul class="flex items-center justify-around border-t">
            <NavItem
                v-for="(icon, page) in navItems"
                :key="page"
                :href="`#${page}`"
                :class="{'pointer-events-none bg-gray-100': activePage === page}"
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
import {ClockIcon, ListBulletIcon, ChartBarIcon} from "@heroicons/vue/24/outline";
import {ref} from "vue";
import {PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS} from "../constants.js";
import NavItem from "./NavItem.vue";

const navItems = {
    [PAGE_TIMELINE]: ClockIcon,
    [PAGE_ACTIVITIES]: ListBulletIcon,
    [PAGE_PROGRESS]: ChartBarIcon,
};

const activePage = ref(getActiveHashPage());

function getActiveHashPage() {
    const hash = window.location.hash.slice(1);
    if (Object.keys(navItems).includes(hash)) {
        return hash;
    }

    window.location.hash = PAGE_TIMELINE;

    return PAGE_TIMELINE;
}
</script>
