<script setup lang="ts">
import type { Project } from '~/constants/projects';
import { projects } from '~/constants/projects';

defineProps<{
  projects: Project[];
}>();

const selectedProjectIndex = defineModel<number>();
</script>

<template>
  <v-slides
    v-model="selectedProjectIndex"
    class="flex-1 max-w-[640px]"
  >
    <v-slide
      v-for="(project, projectIndex) in projects"
      :key="project.title"
      :value="projectIndex"
      transition="v-slides-y-transition"
      reverse-transition="v-slides-y-reverse-transition"
    >
      <div class="max-w-[500px] p-8">
        <span class="text-zinc-500 uppercase text-sm mb-2 block">
          {{ project.type }}
        </span>
        <h2 class="text-5xl font-bold capitalize">
          {{ project.title }}
        </h2>
        <p class="text-zinc-500 leading-loose text-lg mt-8">
          {{ project.description }}
        </p>

        <ul class="text-zinc-500 leading-loose text-lg ml-6 mt-2">
          <li
            class="flex items-center space-x-2"
            v-for="(keyPoint, i) in project.keyPoints"
          >
            ☑️ {{ keyPoint }}
          </li>
        </ul>
      </div>
    </v-slide>
  </v-slides>
</template>

<style></style>
