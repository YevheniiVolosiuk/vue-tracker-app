<template>
    <TheHeader
        @go-to-timeline="goTo(PAGE_TIMELINE)"
        @go-to-progress="goTo(PAGE_PROGRESS)"
    ></TheHeader>
    <main class="flex flex-grow flex-col">
        <TheActivities v-show="activePage === PAGE_ACTIVITIES"></TheActivities>
        <TheProgress v-show="activePage === PAGE_PROGRESS"></TheProgress>
        <TheTimeline v-show="activePage === PAGE_TIMELINE"></TheTimeline>
    </main>
    <TheNav
        :active-page="activePage"
        @navigate="activePage = $event"
    ></TheNav>
</template>

<script setup>
import TheActivities from "./pages/TheActivities.vue";
import TheProgress from "./pages/TheProgress.vue";
import TheTimeline from "./pages/TheTimeline.vue";
import TheHeader from "./components/TheHeader.vue";
import TheNav from "./components/TheNav.vue";
import {PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE} from "./constants";
import {getActiveHashPage} from "./functions";
import {ref} from "vue";

const activePage = ref(getActiveHashPage());

function goTo(page){
    activePage.value = page
}
</script>
