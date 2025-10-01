<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { isDark } = useData();

const props = defineProps({
  gameId: { type: Number, required: true },
  width: { type: Number, required: false, default: 552 },
  height: { type: Number, required: false, default: 167 },
  linkback: { type: Boolean, required: false, default: false },
});

const embedGameLink = computed(() => {
  const params = new URLSearchParams();
  if (isDark.value) {
    params.append("dark", "true");
  }
  if (isDark.value) {
    params.append("linkback", "true");
  }
  return `https://itch.io/embed/${props.gameId}?${params.toString()}`;
});
</script>

<template>
  <iframe frameborder="0" :src="embedGameLink" :width="width" :height="height">
    <slot />
  </iframe>
</template>
