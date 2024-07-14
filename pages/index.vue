<script setup lang="ts">
function storeTextInClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
</script>

<template>
  <div class="text-center -translate-y-32 p-2">
    <h1 class="text-5xl">Hi, I'm Rigo</h1>
    <p class="text-2xl leading-[3.25rem] mt-3">
      <span>
        I’m a
        <span class="bg-indigo-700 rounded">freelance developer.</span>
      </span>
      <br />
      <span>
        I specialize in making
        <span class="bg-fuchsia-700 rounded"> front-end applications </span>
      </span>
      <br />
      <span>Let's work on something together. 🤝</span>
      <!-- <span class="underline">Ready to collaborate? 🤝</span> -->
      <br />
    </p>

    <div class="text-2xl text-zinc-500 mt-10 flex items-center justify-center">
      <div class="relative mr-3">
        <span class="block w-3 h-3 bg-emerald-400/50 rounded-full" />
        <span
          class="block w-3 h-3 bg-emerald-400 rounded-full absolute top-0 left-0
            animate-ping-slow"
        />
      </div>
      <span> Available for work (Based in USA) </span>

      <!-- <v-button
        class="w-8 h-8 opacity-50"
        @click="storeTextInClipboard('RigoMan1')"
      >
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png"
          alt=""
        />
      </v-button> -->
    </div>
  </div>
</template>

<style>
@keyframes ping {
  75%,
  100% {
    transform: scale(1.75);
    opacity: 0;
  }
}
.animate-ping-slow {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
