<template>
    <TheHeader
        @navigate="goTo($event)"
    ></TheHeader>
    <main class="flex flex-grow flex-col">
        <TheActivities v-show="activePage === PAGE_ACTIVITIES" :activities="ACTIVITIES"/>
        <TheProgress v-show="activePage === PAGE_PROGRESS" />
        <TheTimeline v-show="activePage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    </main>
    <TheNav
        :active-page="activePage"
        @navigate="goTo($event)"
    ></TheNav>
</template>

<script setup>
import TheActivities from "@/pages/TheActivities.vue";
import TheProgress from "@/pages/TheProgress.vue";
import TheTimeline from "@/pages/TheTimeline.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import {PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE, ACTIVITIES} from "@/constants";
import {getActiveHashPage, genereteTimelineItems} from "@/functions";
import {ref} from "vue";

const activePage = ref(getActiveHashPage());

function goTo(page){
    activePage.value = page
}


const timelineItems = genereteTimelineItems();
</script>
