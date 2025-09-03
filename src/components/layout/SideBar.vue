<template>
	<aside class="h-screen flex flex-col p-4">
		<div class="text-2xl font-bold mb-6">
			App Vue3JS
		</div>
		<ul class="menu flex-1">
			<li>
				<router-link to="/usuarios" class="rounded-lg">
					<i class="mdi-account mr-2">

					</i>
					Usuarios

				</router-link>
			</li>
		</ul>
	</aside>
</template>

<style scoped>
aside {
	@apply bg-base-200;
}
</style>