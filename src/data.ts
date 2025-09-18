export type LinkItem = {
id: string
title: string
url: string
tags?: string[]
}


export const LINKS: LinkItem[] = [
{ id: '1', title: 'React', url: 'https://reactjs.org', tags: ['framework', 'ui'] },
{ id: '2', title: 'Vite', url: 'https://vitejs.dev', tags: ['build', 'tool'] },
{ id: '3', title: 'TypeScript', url: 'https://www.typescriptlang.org', tags: ['language'] },
{ id: '4', title: 'MDN Web Docs', url: 'https://developer.mozilla.org', tags: ['docs'] },
{ id: '5', title: 'Stack Overflow', url: 'https://stackoverflow.com', tags: ['community'] },
{ id: '6', title: 'Tailwind CSS', url: 'https://tailwindcss.com', tags: ['css', 'utility'] },
{ id: '7', title: 'GitHub', url: 'https://github.com', tags: ['code', 'hosting'] },
{ id: '8', title: 'Google', url: 'https://google.com', tags: ['search'] }
]