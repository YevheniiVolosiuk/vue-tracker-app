<template>
    <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
        <TimelineHour :hour="timelineItem.hour"/>
        <div class="flex gap-2">
            <BaseSelect
                @select="selectedActivityId = $event"
                :selected="selectedActivityId"
                :options="options"
                placeholder="Reset"
            />
        </div>
    </li>
</template>

<script setup>
import { ref } from "vue";
import {isTimelineItemValid} from "@/validators";
import BaseSelect from "@/components/ui/BaseSelect.vue";
import TimelineHour from "@/components/TimelineHour.vue";

defineProps({
    timelineItem: {
        type: Object,
        required: true,
        validator: isTimelineItemValid,
    },
});

const options = [
    {value: 1, label: "Coding"},
    {value: 2, label: "Reading"},
    {value: 3, label: "Trainig"},
];

const selectedActivityId = ref(1);
</script>
