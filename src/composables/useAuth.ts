import api from "@/utils/axios";
import { useAuthStore } from "@/stores/auth";

interface RegisterUser {
	nombre: string;
	apaterno: string;
	amaterno: string;
	direccion: string;
	telefono: string;
	ciudad: string;
	estado: string;
	email: string;
	usuario: string;
	password: string;
	confirmPassword: string;
}

export function useAuth() {
	const auth = useAuthStore();
	const login = async (usuario: string, password: string) => {
		const { data } = await api.post("/empleado/login", { usuario, password });
		auth.setToken(data.token);
	}
	const register = async (form: RegisterUser) => {
		if (form.password !== form.confirmPassword) {
			throw new Error("Las contraseñas no coinciden");
		}
		const data = api.post("/empleado/create", form);
		return data;
	}
	return {
		login,
		register
	};
}