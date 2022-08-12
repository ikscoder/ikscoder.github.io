<template>
	<div class="home">
		<ui-button>Standard</ui-button>
		<ui-fab extended>
			<template #before="{ iconClass }">
				<ui-icon :class="iconClass">add</ui-icon>
			</template>
			<span>Create</span>
		</ui-fab>
		<v-hello-world msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
	name: 'v-home-view',
	components: {
		'v-hello-world': HelloWorld,
	},
});
</script>
