<script setup lang="ts">
import { ref, computed } from 'vue';
import { skills as skillsData } from '../constants/skills';

const selectedSkillIndex = ref(0);
const selectedSkill = computed(() => skills[selectedSkillIndex.value]);

const skills = skillsData;

let startTime = 0 as number | null;

const DURATION = 4000;
const TOTAL_SLIDES = skills.length;

const nextSlide = (timestamp = 0) => {
  if (startTime === null) startTime = timestamp;
  const elapsed = timestamp - startTime;

  if (elapsed > DURATION) {
    if (selectedSkillIndex.value < TOTAL_SLIDES - 1) {
      selectedSkillIndex.value++;
    } else {
      selectedSkillIndex.value = 0;
    }
    startTime = timestamp;
  }
  requestAnimationFrame(nextSlide);
};

watch(selectedSkillIndex, () => {
  startTime = null;
});

onMounted(() => {
  requestAnimationFrame(nextSlide);
});
</script>

<template>
  <section
    class="flex justify-between items-center flex-col h-full pb-32 sm:pt-20 max-h-[800px]"
  >
    <v-slides
      v-model="selectedSkillIndex"
      class="max-w-[640px]"
    >
      <v-slide
        v-for="(skill, skillIndex) in skills"
        :key="skill.name"
        :value="skillIndex"
        transition="v-slides-fade-scale-transition"
        reverse-transition="v-slides-fade-scale-transition"
      >
        <div
          class="max-w-6xl mx-auto p-8 flex flex-col items-center text-center"
        >
          <div class="size-24 rounded-lg overflow-hidden mb-3">
            <img
              class="w-full h-full object-contain"
              :src="skill.icon"
              alt=""
            />
          </div>

          <h2 class="text-5xl font-bold capitalize mt-4 text-zinc-200">
            {{ selectedSkill.name }}
          </h2>

          <p class="text-zinc-500 leading-loose text-lg mt-8">
            {{ selectedSkill.description }}
          </p>
        </div>
      </v-slide>
    </v-slides>

    <v-item-group
      class="flex justify-center flex-wrap"
      mandatory
      v-model="selectedSkillIndex"
    >
      <v-item-slot
        v-for="(skill, skillIndex) in skills"
        v-slot="{ isSelected, toggle, selectedClass }"
        :value="skillIndex"
        selected-class="grayscale-0 scale-110"
      >
        <client-only>
          <v-button
            @click="toggle"
            class="bg-opacity-10 bg-skill-color mx-2 transition-all hover:scale-110 duration-300
              ease-out select-none rounded-full flex items-center justify-center
              cursor-pointer size-16 sm:size-20 grayscale"
            :class="[selectedClass, skill.color]"
            :style="{ '--opacity': isSelected ? 0.1 : 0 }"
          >
            <img
              class="w-9"
              :src="skill.icon"
              alt=""
            />
          </v-button>
        </client-only>
      </v-item-slot>
    </v-item-group>
  </section>
</template>

<style scoped>
.bg-skill-color {
  --opacity: 0;

  background-color: rgba(var(--rgb), var(--opacity));
}
</style>
