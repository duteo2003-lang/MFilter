import React, { useEffect, useMemo, useState } from 'react'
import { LINKS, LinkItem } from './data'

// Custom hook for debouncing
function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}

function App() {
    const [query, setQuery] = useState('')
    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    const debouncedQuery = useDebounce(query, 300)

    const tags = useMemo(() => {
        const s = new Set<string>()
        LINKS.forEach((l) => l.tags?.forEach((t) => s.add(t)))
        return Array.from(s).sort()
    }, [])

    const filtered = useMemo(() => {
        const q = debouncedQuery.toLowerCase()
        return LINKS.filter((l) => {
            if (selectedTag && !(l.tags || []).includes(selectedTag)) return false
            if (!q) return true
            if (l.title.toLowerCase().includes(q)) return true
            if (l.url.toLowerCase().includes(q)) return true
            if ((l.tags || []).some((t) => t.toLowerCase().includes(q))) return true
            return false
        })
    }, [debouncedQuery, selectedTag])

    return (
        <div className="wrap">
            <header>
                <h1>Links — filter & search</h1>
                <p className="muted">Search by title, URL or tag. Click a tag to filter.</p>
            </header>


            <div className="controls">
                <input
                    aria-label="Search links"
                    className="search"
                    placeholder="Search by title, url or tag..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />


                <div className="tagRow" role="toolbar" aria-label="Tag filters">
                    <button
                        className={`tag ${selectedTag === null ? 'active' : ''}`}
                        onClick={() => setSelectedTag(null)}
                    >
                        All
                    </button>
                    {tags.map((t) => (
                        <button
                            key={t}
                            className={`tag ${selectedTag === t ? 'active' : ''}`}
                            onClick={() => setSelectedTag((p) => (p === t ? null : t))}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>


            <p className="count">{filtered.length} / {LINKS.length} links</p>


            <ul className="list" role="list">
                {filtered.map((l: LinkItem) => (
                    <li key={l.id} className="listItem">
                        <a href={l.url} target="_blank" rel="noopener noreferrer" >
                            {l.title}
                        </a>
                        <div className="meta">
                            <span className="url">{l.url}</span>
                            <div className="badges">
                                {(l.tags || []).map((tg) => (
                                    <span key={tg} className="badge">{tg}</span>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>


            <footer className="foot muted">Built with Vite + React + TypeScript</footer>
        </div>
    )
}

export default App
