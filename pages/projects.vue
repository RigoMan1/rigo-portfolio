<script setup lang="ts">
import { projects } from '~/constants/projects';
const selectedProjectIndex = ref(0);
const activeProject = computed(() => projects[selectedProjectIndex.value]);

const dialog = ref(false);

function handleClick(toggle: any) {
  toggle();
  dialog.value = true;
}
</script>

<template>
  <section class="h-full w-full flex">
    <div
      class="flex justify-center lg:justify-between xl:justify-around w-full items-center"
    >
      <!-- side nav -->

      <v-item-group
        class="lg:flex justify-center hidden"
        mandatory
        v-model="selectedProjectIndex"
      >
        <div class="flex flex-col space-y-2">
          <v-item-slot
            v-for="(project, projectIndex) in projects"
            v-slot="{ isSelected, toggle, selectedClass }"
            :value="projectIndex"
            selected-class="grayscale-0 scale-110"
          >
            <v-button
              @click="toggle"
              class=" text-zinc-400 px-4 py-3 rounded-lg hover:bg-white/10 focus:bg-white/10"
            >
              <span>{{ project.title }}</span>
            </v-button>
          </v-item-slot>
        </div>
      </v-item-group>

      <!-- preview -->

      <v-slides
        v-model="selectedProjectIndex"
        class="max-w-[480px] hidden lg:block items-center"
      >
        <v-slide
          v-for="(project, projectIndex) in projects"
          :key="project.title"
          :value="projectIndex"
          transition="v-slides-y-transition"
          reverse-transition="v-slides-y-reverse-transition"
        >
          <div
            class="bg-zinc-500 aspect-[1/2] w-[200px] rounded-2xl hidden lg:block"
          >
            <img
              :src="`/images/projects/${activeProject.id}.png`"
              alt="Project preview"
              class="object-cover rounded-2xl"
            />
          </div>
        </v-slide>
      </v-slides>

      <!-- description -->

      <v-slides
        v-model="selectedProjectIndex"
        class="max-w-[480px] hidden lg:block items-center"
      >
        <v-slide
          v-for="(project, projectIndex) in projects"
          :key="project.title"
          :value="projectIndex"
          transition="v-slides-fade-transition"
          reverse-transition="v-slides-fade-transition"
        >
          <div class="py-8">
            <div class="flex justify-between items-center mb-6">
              <span
                class="text-zinc-500 uppercase text-xs tracking-wide block px-2 py-0.5 bg-gray-500/10
                  rounded"
              >
                {{ project.type }}
              </span>

              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="text-blue-500 hover:underline flex items-center"
              >
                <span>View Project</span>
                <v-icon
                  name="i-heroicons-solid-arrow-top-right-on-square"
                  class="mx-1.5"
                />
              </a>
            </div>

            <h2 class="text-5xl font-bold capitalize text-zinc-200">
              {{ project.title }}
            </h2>
            <p class="text-zinc-500 leading-loose mt-8">
              {{ project.description }}
            </p>

            <v-icon
              size="sm"
              name="i-heroicons-arrow-top-right-on-square"
            />

            <ul class="text-zinc-500 leading-loose ml-6 mt-2">
              <li
                class="flex space-x-2 my-3"
                v-for="(keyPoint, i) in project.keyPoints"
              >
                <span class="w-1.5 h-1.5 bg-white/50 rounded-full mt-4 mr-2" />
                <span>{{ keyPoint }}</span>
              </li>
            </ul>

            <!-- technologies used -->
            <div class="gap-1.5 flex mt-12 flex-wrap">
              <skill-chip
                v-for="(skill, i) in project.technologies"
                :key="i"
                :skill="skill"
              />
            </div>
          </div>
        </v-slide>
      </v-slides>

      <!--  ================= MOBILE VIEW ================= -->

      <v-item-group
        class="lg:hidden justify-center"
        mandatory
        v-model="selectedProjectIndex"
      >
        <div class="flex flex-col space-y-2">
          <v-item-slot
            v-for="(project, projectIndex) in projects"
            v-slot="{ isSelected, toggle, selectedClass }"
            :value="projectIndex"
            selected-class="grayscale-0 scale-110"
          >
            <v-button
              @click="handleClick(toggle)"
              class=" text-zinc-400 px-4 py-3 rounded-lg hover:bg-white/10 focus:bg-white/10"
            >
              <span>{{ project.title }}</span>
            </v-button>
          </v-item-slot>
        </div>
      </v-item-group>

      <v-dialog v-model="dialog">
        <div
          class="p-4 bg-zinc-900 rounded-xl overflow-auto"
          style="width: 90vw; max-width: 600px"
        >
          <div class="flex justify-between items-center mb-6">
            <span
              class="text-zinc-500 uppercase text-sm tracking-wide block px-2 py-0.5 bg-gray-500/10
                rounded"
            >
              {{ activeProject.type }}
            </span>

            <a
              v-if="activeProject.link"
              :href="activeProject.link"
              target="_blank"
              class="text-blue-500 hover:underline flex items-center"
            >
              <span>View Project</span>
              <v-icon
                name="i-heroicons-solid-arrow-top-right-on-square"
                class="mx-1.5"
              />
            </a>
          </div>

          <h2 class="text-2xl font-bold capitalize text-zinc-200">
            {{ activeProject.title }}
          </h2>

          <div class="flex mt-6 space-x-4">
            <div
              class="bg-zinc-500 rounded-2xl max-h-[400px] overflow-hidden aspect-[1/2] w-1/2"
            >
              <!-- center image -->
              <img
                :src="`/images/projects/${activeProject.id}.png`"
                alt="Project preview"
                class="object-cover h-full w-full object-top"
              />
            </div>

            <!-- technologies used -->
            <div class="space-y-2 flex flex-col items-start justify-center">
              <skill-chip
                v-for="(skill, i) in activeProject.technologies"
                :key="i"
                :skill="skill"
              />
            </div>
          </div>

          <p class="text-zinc-500 leading-loose mt-8">
            {{ activeProject.description }}
          </p>

          <v-icon
            size="sm"
            name="i-heroicons-arrow-top-right-on-square"
          />

          <ul class="text-zinc-500 leading-loose ml-6 mt-2">
            <li
              class="flex space-x-2 my-3"
              v-for="(keyPoint, i) in activeProject.keyPoints"
            >
              <span class="w-1.5 h-1.5 bg-white/50 rounded-full mt-4 mr-2" />
              <span>{{ keyPoint }}</span>
            </li>
          </ul>
        </div>
      </v-dialog>
    </div>
  </section>
</template>

<style></style>
