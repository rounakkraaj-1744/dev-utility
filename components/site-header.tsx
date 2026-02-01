"use client"

import * as React from "react"
import { Search, User, Command } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchModal } from "@/components/search-modal"

export function SiteHeader() {
    const [isSearchOpen, setIsSearchOpen] = React.useState(false)

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault()
                setIsSearchOpen(true)
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0a0a0c]/80 backdrop-blur-sm">
                <div className="container mx-auto flex h-16 items-center px-4">
                    <div className="flex items-center gap-2 mr-8">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-500/20">
                            <Command className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-lg font-bold text-gray-100 tracking-tight">Utility Toolkit</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 mr-auto text-sm font-medium text-gray-400">
                        <a href="/" className="hover:text-blue-500 transition-colors">All Tools</a>
                        <a href="/json-formatter" className="text-gray-100 border-b-2 border-blue-500 pb-0.5">JSON Formatter</a>
                        <a href="#" className="hover:text-blue-500 transition-colors">Base64</a>
                        <a href="#" className="hover:text-blue-500 transition-colors">JWT Decoder</a>
                    </nav>

                    <div className="relative flex items-center max-w-xs ml-auto group">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 group-hover:text-gray-300 transition-colors" />
                        <div
                            className="h-9 w-64 flex items-center pl-9 pr-12 bg-[#16181d] border border-gray-800 hover:border-gray-700 text-gray-500 text-sm rounded-full cursor-text transition-all"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            Search tools...
                        </div>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border border-gray-800 bg-gray-900 px-1.5 font-mono text-[9px] font-bold text-gray-600 opacity-100">
                                <span className="text-xs">⌘</span>K
                            </kbd>
                        </div>
                    </div>

                    <div className="ml-4 flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-100 h-9 w-9 rounded-full">
                            <User className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </header>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    )
}
