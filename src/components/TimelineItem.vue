<template>
    <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
        <TimelineHour :hour="timelineItem.hour" />
        <div class="flex gap-2">
            <BaseSelect
                placeholder="Reset"
                @select="selectedActivityId = $event"
                :selected="selectedActivityId"
                :options="activitySelectOptions"
            />
        </div>
    </li>
</template>

<script setup>
import {ref} from "vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";
import TimelineHour from "@/components/TimelineHour.vue";
import {isTimelineItemValid, validateSelectOptions} from "@/validators";

defineProps({
    timelineItem: {
        type: Object,
        required: true,
        validator: isTimelineItemValid,
    },
    activitySelectOptions: {
        type: Array,
        required: true,
        validator: validateSelectOptions,
    },
});

const selectedActivityId = ref(0);
</script>
