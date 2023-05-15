<template>
    <form
        @submit.prevent="submit"
        class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
    >
        <input
            v-model="activity"
            type="text"
            class="w-full rounded border px-4 text-xl"
            placeholder="Activity name"
        />
        <BaseButton :disabled="activity.trim() === ''">
            <PlusIcon class="h-8" />
        </BaseButton>
    </form>
</template>

<script setup>
import {ref} from "vue";
import {PlusIcon} from "@heroicons/vue/24/outline";
import BaseButton from "@/components/ui/BaseButton.vue";
import {isActivityValid} from "@/validators";

const emit = defineEmits({
    submit: isActivityValid,
});

const activity = ref("");

function submit() {
    emit("submit", activity.value);
    activity.value = "";
}
</script>
