<template>
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">
        {{ label }}
      </span>
      <input
        :type="type || 'text'"
        class="input input-bordered w-full"
        :placeholder="placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </div>
  </label>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
defineProps<{
  modelValue: string;
  type?: string;
  label: string;
  placeholder?: string;
}>();

const emit = defineEmits(['update:modelValue']);
</script>
