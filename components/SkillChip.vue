<script setup lang="ts">
import type { Skill } from '~/constants/skills';
import { skillIcons, skillLabels } from '~/constants/skills';
defineProps<{ skill: Skill }>();
</script>

<template>
  <span
    class="py-1 px-2 bg-skill-color rounded-full flex items-center space-x-1 text-sm
      tracking text-white/90"
    :class="`color-${skill}`"
  >
    <img
      class="w-4"
      :src="skillIcons[skill]"
      alt=""
    />
    <span>{{ skillLabels[skill] }}</span>
  </span>
</template>

<style></style>
