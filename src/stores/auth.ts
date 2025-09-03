import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';
import { ref,computed } from 'vue';

interface JWTPayload {
  id: string;
  nombre: string;
  apaterno: string;
  amaterno: string;
  email: string;
  rol: string;
  exp: number;
}

export const useAuthStore = defineStore('auth', () => {
	const token = ref<string | null>(null);
	const user = ref<JWTPayload | null>(null);


	function setToken(newToken: string) {
		token.value = newToken;
		try {
			user.value = jwtDecode<JWTPayload>(newToken);
		} catch (error) {
			console.error('Invalid token');
			token.value = null;
			user.value = null;
		}
	}

	function logout() {
		token.value = null;
		user.value = null;
	}
		
		const isAuthenticated = computed(() => !!token.value && !!user.value);

	return { token, user, setToken, logout, isAuthenticated };
	});