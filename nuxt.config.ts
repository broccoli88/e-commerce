// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	pages: true,
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-icon",
		"nuxt-lodash",
		"@pinia/nuxt",
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
		// "@nuxtjs/supabase",
	],
	build: {
		transpile: ["pinia-plugin-persistedstate"],
	},
	runtimeConfig: {
		public: {
			stripePk: process.env.STRIPE_PK_KEY,
		},
	},
	app: {
		head: {
			script: [{ src: "https://js.stripe.com/v3/", defer: true }],
		},
	},
});
