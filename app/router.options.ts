import type { RouterConfig } from '@nuxt/schema';
import { nextTick } from 'vue';

const normalizeLocalePath = (path: string) =>
	path.replace(/^\/(ru|kk)(?=\/|$)/, '') || '/';

const scrollRootToHash = async (hash: string) => {
	if (import.meta.server) {
		return;
	}

	await nextTick();

	requestAnimationFrame(() => {
		const root = document.getElementById('root');
		const target = document.getElementById(decodeURIComponent(hash.slice(1)));

		if (!root || !target) return;

		const rootRect = root.getBoundingClientRect();
		const targetRect = target.getBoundingClientRect();

		root.scrollTo({
			top: targetRect.top - rootRect.top + root.scrollTop - 96,
		});
	});
};

export default {
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) return savedPosition;

		if (to.hash) {
			scrollRootToHash(to.hash);
			return false;
		}

		if (normalizeLocalePath(to.path) === normalizeLocalePath(from.path))
			return false;

		return { top: 0 };
	},
} satisfies RouterConfig;
