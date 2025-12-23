<script setup lang="ts">
import type { UiButtonProps } from "./ui-button.vue"
import { NuxtLink } from "#components"
import { useAttrs } from "vue";
import { ButtonStyles } from "../styles/button";

const props = withDefaults(defineProps<Omit<UiButtonProps, "as">>(), {
    variant: "filled",
    size: "md",
    color: "primary",
    weight: "400",
    rounded: false,
})

const { variant, size, color } = props

const attrs = useAttrs()



const className = [
    "outline-blue-500 cursor-pointer transition",
    ButtonStyles.variants[variant][color],
    ButtonStyles.sizes[size],
]

</script>

<template>
    <NuxtLink :class="className" v-bind="attrs">
        <slot />
        <slot name="end-icon" />
    </NuxtLink>
</template>