export type LinkItem = {
id: string
title: string
url: string
tags?: string[],
relative?: boolean
}


export const LINKS: LinkItem[] = [
{ id: '1', title: 'Vite', url: 'https://vitejs.dev', tags: ['build', 'tool'] },
{ id: '2', title: 'React', url: '/react', tags: ['framework', 'ui'] },
{ id: '3', title: 'Relative href React', url: '/react', tags: ['framework', 'ui'], relative: true },
{ id: '4', title: 'External Href', url: 'https://www.typescriptlang.org', tags: ['language'] },
{ id: '5', title: 'MDN Web Docs', url: 'https://developer.mozilla.org', tags: ['docs'] },
{ id: '6', title: 'Stack Overflow', url: 'https://stackoverflow.com', tags: ['community'] },
{ id: '7', title: 'Tailwind CSS', url: 'https://tailwindcss.com', tags: ['css', 'utility'] },
{ id: '8', title: 'GitHub', url: 'https://github.com', tags: ['code', 'hosting'] },
{ id: '9', title: 'Google', url: 'https://google.com', tags: ['search'] }
]