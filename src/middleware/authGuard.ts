import { type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import {jwtDecode} from 'jwt-decode';

interface JWTPayload {
	id: string;
	nombre: string;
	apaterno: string;
	amaterno: string;
	rol: string;
	exp: number;
}

export default function authGuard(
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) {
	const authStore = useAuthStore();
	const token = authStore.token;
	
	if (!token) {
		return next('/login');
	}
	
	try {
		const decoded = jwtDecode<JWTPayload>(token);
		const now = Math.floor(Date.now() / 1000);
		if (decoded.exp < now) {
			authStore.logout();
			return next('/login');
		}
		next();
	} catch (error) {
		console.error(error);			
		authStore.logout();
		return next('/login');
	}
}