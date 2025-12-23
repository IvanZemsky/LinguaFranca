<script setup lang="ts">
import type { UiButtonProps } from "./ui-button.vue"
import { NuxtLink } from "#components"
import { useAttrs } from "vue";
import { getButtonClassNames } from "../styles/button";

const props = withDefaults(defineProps<Omit<UiButtonProps, "as">>(), {
    variant: "filled",
    size: "md",
    color: "primary",
    weight: "400",
    rounded: false,
})

const attrs = useAttrs()

const className = getButtonClassNames(props)

</script>

<template>
    <NuxtLink :class="className" v-bind="attrs">
        <slot />
        <slot name="end-icon" />
    </NuxtLink>
</template>