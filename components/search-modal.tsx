"use client"

import * as React from "react"
import { Search, X, Command, SearchX, Wand2, ShieldCheck, Regex, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchModalProps {
    isOpen: boolean
    onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = React.useState("")
    const modalRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                ref={modalRef}
                className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-gray-800 bg-[#0f1117] shadow-2xl animate-in fade-in zoom-in duration-200"
            >
                <div className="relative flex items-center border-b border-gray-800 px-4">
                    <Search className="h-5 w-5 text-blue-500" />
                    <Input
                        autoFocus
                        className="h-14 border-none bg-transparent text-gray-100 placeholder:text-gray-500 focus-visible:ring-0 text-base"
                        placeholder="Search tools..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {query && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-500 hover:text-gray-300"
                            onClick={() => setQuery("")}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    )}
                </div>

                <div className="p-8">
                    {query ? (
                        <div className="flex flex-col items-center py-12 text-center">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800/30">
                                <SearchX className="h-8 w-8 text-gray-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-100 mb-2">No tools found</h3>
                            <p className="text-sm text-gray-400 max-w-xs mb-8 leading-relaxed">
                                We couldn't find any results for "<span className="text-blue-400 font-mono">{query}</span>". Try a different keyword or request a new tool.
                            </p>
                            <Button className="h-11 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold gap-2">
                                <Command className="h-4 w-4" />
                                <span>Request a tool</span>
                            </Button>
                        </div>
                    ) : null}

                    <div className={cn("space-y-6", query && "mt-8 pt-8 border-t border-gray-800/50")}>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                            <span>Try these instead:</span>
                        </div>

                        <div className="space-y-2">
                            {[
                                { name: "JSON Formatter", desc: "Pretty print or minify your JSON strings", icon: Wand2, color: "text-blue-500", bg: "bg-blue-500/10" },
                                { name: "JWT Decoder", desc: "Decode and verify JSON Web Tokens instantly", icon: ShieldCheck, color: "text-blue-400", bg: "bg-blue-400/10" },
                                { name: "Regex Tester", desc: "Build and test regular expressions with live feedback", icon: Regex, color: "text-blue-500", bg: "bg-blue-500/10" }
                            ].map((tool) => (
                                <div key={tool.name} className="group flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-gray-800 hover:bg-gray-800/20 transition-all cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg shadow-inner", tool.bg, tool.color)}>
                                            <tool.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{tool.name}</div>
                                            <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{tool.desc}</div>
                                        </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-gray-700 group-hover:text-gray-400 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-800 px-6 py-3 bg-[#0a0a0c]">
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                            <kbd className="px-1.5 py-0.5 rounded border border-gray-800 bg-gray-900 text-[9px]">ESC</kbd>
                            <span>to close</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                            <kbd className="px-1.5 py-0.5 rounded border border-gray-800 bg-gray-900 leading-none">
                                <Command className="h-2.5 w-2.5 inline mr-0.5 mb-0.5" />
                            </kbd>
                            <span>to select</span>
                        </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-700 italic">All-in-One Utility Toolkit</span>
                </div>
            </div>
        </div>
    )
}
