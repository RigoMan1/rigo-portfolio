<template>
  <v-app class="bg-zinc-900">
    <v-app-bar
      height="200"
      class="flex justify-center items-center space-x-2 sm:space-x-16 bg-zinc-900 w-full"
    >
      <v-button
        class="text-lg text-zinc-400 px-4 py-3 rounded-lg hover:bg-white/10 focus:bg-white/10"
        active-class="bg-white/10"
        to="/"
      >
        <v-icon
          class="mr-3"
          name="i-heroicons-solid-identification"
        />
        <span>About me</span>
      </v-button>
      <v-button
        class="text-lg text-zinc-400 px-4 py-3 rounded-lg hover:bg-white/10 focus:bg-white/10"
        active-class="bg-white/10"
        to="/projects"
      >
        <v-icon
          class="mr-3"
          name="i-heroicons-solid-folder"
        />
        <span>Projects</span>
      </v-button>
      <v-button
        class="text-lg text-zinc-400 px-4 py-3 rounded-lg hover:bg-white/10 focus:bg-white/10"
        active-class="bg-white/10"
        to="/skills"
      >
        <v-icon
          class="mr-3"
          name="i-heroicons-solid-academic-cap"
        />
        <span>Skills</span>
      </v-button>
    </v-app-bar>

    <v-main class="container flex items-center justify-center">
      <nuxt-page />
    </v-main>
  </v-app>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s var(--v-ease-out);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(4px);
}
</style>
