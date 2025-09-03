<template>
	<button type="submit" class="btn btn-primary w-full mt-4">
		{{ label }}
	</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
	label: string;
}>();
</script>