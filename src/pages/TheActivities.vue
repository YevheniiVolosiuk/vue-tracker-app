<template>
    <div class="flex grow flex-col">
        <ul
            v-if="activities.length"
            class="grow divide-y"
        >
            <ActivityItem
                v-for="activity in activities"
                :key="activity.id"
                :activity="activity"
                @delete="emit('deleteActivity', activity)"
            />
        </ul>
        <TheActivitiesEmptyState v-else />
        <TheActivityForm @submit="emit('createActivity', $event)" />
    </div>
</template>

<script setup>
import ActivityItem from "@/components/ActivityItem.vue";
import {validateActivities, isActivityValid} from "@/validators";
import TheActivityForm from "@/components/TheActivityForm.vue";
import TheActivitiesEmptyState from "@/components/TheActivitiesEmptyState.vue";

defineProps({
    activities: {
        type: Array,
        required: true,
        validate: validateActivities,
    },
});

const emit = defineEmits({
    createActivity: isActivityValid,
    deleteActivity: isActivityValid,
});
</script>
