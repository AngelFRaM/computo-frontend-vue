<template>
	<AuthLayout>
		<h2 class="text-xl font-bold text-center">
			Registro de Usuarios
		</h2>
		<input-field v-model="usuario.nombre" label="Nombre" placeholder="Ingresa tu nombre" />
		<input-field v-model="usuario.apaterno" label="A. Paterno" placeholder="Ingresa tu A. Paterno" />
		<input-field v-model="usuario.amaterno" label="A. Materno" placeholder="Ingresa tu A. Materno" />
		<input-field v-model="usuario.direccion" label="Dirección" placeholder="Ingresa tu Dirección" />
		<input-field v-model="usuario.telefono" label="Teléfono" placeholder="Ingresa tu Teléfono" />
		<input-field v-model="usuario.ciudad" label="Ciudad" placeholder="Ingresa tu Ciudad" />
		<input-field v-model="usuario.estado" label="Estado" placeholder="Ingresa tu Estado" />
		<input-field v-model="usuario.email" label="E-mail" placeholder="Ingresa tu E-mail" />
		<input-field v-model="usuario.usuario" label="Usuario" placeholder="Ingresa el Usuario" />
		<input-field v-model="usuario.password" label="Contraseña" type="password" placeholder="Ingresa la Contraseña" />
		<input-field v-model="usuario.confirmPassword" label="Confirmar Contraseña" type="password" placeholder="Confirma la Contraseña" />
		<submit-button label="Registrar" @click="handleRegister"/>
		<p v-if="error" class="text-red-500 mt-2">
			{{ error }}
		</p>
		<div class="text-center mt-4">
			<router-link to="/login" class="link link-primary text-blue-500 hover:underline">
				¿Ya tienes una cuenta? Inicia Sesión
			</router-link>
		</div>
	</AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue';
import InputField from '@/components/forms/InputField.vue';
import SubmitButton from '@/components/forms/SubmitButton.vue';
import { ref } from 'vue';
import { useAuth } from '@/composables/useAuth';
import { useRouter } from 'vue-router';

const usuario = ref({
	nombre: '',
	apaterno: '',
	amaterno: '',
	direccion: '',
	telefono: '',
	ciudad: '',
	estado: '',
	email: '',
	usuario: '',
	password: '',
	confirmPassword: '',
});

const error = ref('');
const { register } = useAuth();
const router = useRouter();

const handleRegister = async () => {
  try {
    await register(usuario.value);
    router.push('/login');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    error.value = e.message || 'Error al registrarte.';
  }
};
</script>