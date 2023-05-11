<template>
    <TheHeader @navigate="goTo($event)"></TheHeader>
    <main class="flex flex-grow flex-col">
        <TheActivities
            v-show="activePage === PAGE_ACTIVITIES"
            :activities="activities"
            @delete-activity="deleteActivity"
        />
        <TheProgress v-show="activePage === PAGE_PROGRESS" />
        <TheTimeline
            v-show="activePage === PAGE_TIMELINE"
            :timeline-items="timelineItems"
            :activity-select-options="activitySelectOptions"
        />
    </main>
    <TheNav
        :active-page="activePage"
        @navigate="goTo($event)"
    ></TheNav>
</template>

<script setup>
import {ref} from "vue";
import TheNav from "@/components/TheNav.vue";
import TheProgress from "@/pages/TheProgress.vue";
import TheTimeline from "@/pages/TheTimeline.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheActivities from "@/pages/TheActivities.vue";
import {PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE} from "@/constants";
import {getActiveHashPage, genereteTimelineItems, genereteActivitySelectOptions} from "@/functions";

const activities = ref(["Coding", "Reading", "Training"]);
const activePage = ref(getActiveHashPage());
const timelineItems = genereteTimelineItems();
const activitySelectOptions = genereteActivitySelectOptions(activities.value);

function deleteActivity(activity) {
    activities.value.splice(activities.value.indexOf(activity), 1);
}

function goTo(page) {
    activePage.value = page;
}
</script>
