import React, { useEffect, useMemo, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { LINKS, LinkItem } from './data'
import ReactTestPage from './ReactTestPage'

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

function LinksPage() {
    const [query, setQuery] = useState('')
    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    const debouncedQuery = useDebounce(query, 300)

    // Helper function to convert relative URLs to absolute URLs
    const getAbsoluteUrl = (url: string) => {
        if (url.startsWith('/')) {
            return `${window.location.origin}${url}`
        }
        return url
    }

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
                <nav className="nav-links">
                    <Link to="/react" className="nav-link">React Test Page</Link>
                </nav>
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
                        <a href={getAbsoluteUrl(l.url)} rel="noopener noreferrer" >
                            {l.title}
                        </a>
                        <div className="meta">
                            <p >{l.url}</p>
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

function App() {
    return (
        <Router >
            <Routes>
                <Route  path="/" index element={<LinksPage />} />
                <Route path="/react" element={<ReactTestPage />} />
            </Routes>
        </Router>
    )
}

export default App