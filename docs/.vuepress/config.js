import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
    title: 'Melody Space',
    description: 'A site about music hobbies by Simranjot',
    theme: defaultTheme({
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Genres', link: '/genres.md' },
            { text: 'Playlists', link: '/playlists.md' },
            { text: 'Artists', link: '/artists.md' },
            { text: 'Contact', link: '/contact.md' },
        ],
        sidebar: {
            '/': [
                {
                    text: 'Navigations',
                    collapsible: false,
                    children: [
                        '/index.md',
                        '/genres.md',
                        '/playlists.md',
                        '/artists.md',
                        '/contact.md',
                    ],
                },
            ],
        }
    }),
    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' }]
    ],
    bundler: viteBundler(),
})
