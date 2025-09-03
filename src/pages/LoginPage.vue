<template>
  <auth-layout>
    <h2 class="text-xl font-bold text-center">Iniciar Sesión</h2>
    <input-field v-model="usuario" label="Usuario" placeholder="Ingresa el usuario" />
    <input-field v-model="password" label="Contraseña" type="password" placeholder="Ingresa la Contraseña" />
    <submit-button label="Entrar" @click="handleLogin"/>
    <p v-if="error" class="text-red-500 mt-2">
      {{ error }}
    </p>
    <div class="text-center mt-4">
    <router-link to="/register" class="link link-primary text-blue-500 hover:underline">
      Crear una cuenta
    </router-link>
    </div>
  </auth-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import InputField from '@/components/forms/InputField.vue';
import SubmitButton from '@/components/forms/SubmitButton.vue';
import { useAuth } from '@/composables/useAuth';
import { useRouter } from 'vue-router';

const usuario = ref('');
const password = ref('');
const error = ref('');
const { login } = useAuth();
const router = useRouter();

const handleLogin = async () => {
  try {
    await login(usuario.value, password.value);
    router.push('/dashboard');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    error.value = e.message || 'Error al iniciar sesión. Verifica tus credenciales.';
  }
};
</script>
