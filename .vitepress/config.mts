import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/nebular-wiki/",
    title: "Nebular Store",
    description: "A self-hostable cloud file storage",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        sidebar: [
            {
                text: "Services",
                items: [
                    {
                        text: "Backend",
                        items: [
                            {
                                text: "Configuration",
                                link: "/backend/configuration"
                            },
                            {
                                text: "Endpoints",
                                link: "/backend/endpoints"
                            }
                        ]
                    },
                ],
            },
        ]
    }
})
