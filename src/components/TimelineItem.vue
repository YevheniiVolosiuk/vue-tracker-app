<template>
    <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
        <a
            href="#"
            :class="hourLinkClasses"
            >{{ timelineItem.hour }}:00</a
        >
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
import {ref} from "vue";
import {isTimelineItemValid} from "@/validators";
import BaseSelect from "@/components/ui/BaseSelect.vue";

const props = defineProps({
    timelineItem: {
        type: Object,
        required: true,
        validator: isTimelineItemValid,
    },
});

const hourLinkClasses = [
    "absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg",
    props.timelineItem.hour === new Date().getHours()
        ? "bg-purple-900 font-black text-white"
        : "bg-grey-900 text-gray-500",
];

const options = [
    {value: 1, label: "Coding"},
    {value: 2, label: "Reading"},
    {value: 3, label: "Trainig"},
];

const selectedActivityId = ref(1);
</script>
