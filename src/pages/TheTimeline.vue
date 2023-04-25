<template>
    <div class="mt-7">
        <ul>
            <TimelineItem
                v-for="timelineItem in timelineItems"
                :key="timelineItem.hour"
                :timeline-item="timelineItem"
            />
        </ul>
    </div>
</template>

<script setup>
import TimelineItem from "../components/TimelineItem.vue";
import {genereteTimelineItems} from "../functions";

const timelineItems = genereteTimelineItems();
</script>
