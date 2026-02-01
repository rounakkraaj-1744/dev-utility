"use client"

import * as React from "react"
import { SiteHeader } from "@/components/site-header"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    Database,
    ChevronDown,
    History,
    Settings2,
    Trash2,
    Copy,
    Wand2,
    AlignLeft,
    FileJson,
    FileCode,
    LayoutGrid,
    Moon,
    User,
    Menu,
    Plus,
    Search,
    Key,
    ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

const initialSql = `SELECT * FROM users WHERE active = true AND last_login > '2023-01-01' ORDER BY created_at DESC;`

export default function SQLFormatterPage() {
    const [sql, setSql] = React.useState(initialSql)
    const lineNumbers = Array.from({ length: 10 }, (_, i) => i + 1)

    return (
        <div className="flex min-h-screen bg-[#0a0a0c]">
            {/* Sidebar - Same as Dashboard for consistency or specialized? Let's use Tool Sidebar */}
            <aside className="fixed left-0 top-0 bottom-0 w-64 border-r border-gray-800 bg-[#0a0a0c] hidden lg:flex flex-col">
                <div className="p-6 border-b border-gray-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-600">
                        <Database className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-gray-100 text-lg">DevUtils.io</span>
                </div>

                <div className="flex-1 p-6 space-y-10">
                    <div className="space-y-4">
                        <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2">Data Utilities</h3>
                        <div className="space-y-1">
                            {[
                                { name: "SQL Formatter", icon: AlignLeft, active: true },
                                { name: "XML Formatter", icon: AlignLeft },
                                { name: "CSV to JSON", icon: FileJson },
                                { name: "JSON Validator", icon: ShieldCheck },
                            ].map((tool) => (
                                <button
                                    key={tool.name}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all",
                                        tool.active ? "bg-blue-600/20 text-blue-500 font-bold shadow-inner" : "text-gray-400 hover:text-gray-100 hover:bg-gray-800/50"
                                    )}
                                >
                                    <tool.icon className="h-4 w-4" />
                                    <span>{tool.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2">Network Tools</h3>
                        <div className="space-y-1">
                            {[{ name: "Request Tester", icon: Database }, { name: "JWT Decoder", icon: Key }].map((tool) => (
                                <button key={tool.name} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 transition-all">
                                    <tool.icon className="h-4 w-4" />
                                    <span>{tool.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 mt-auto">
                    <Button className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold gap-2">
                        <Plus className="h-4 w-4" />
                        <span>New Workspace</span>
                    </Button>
                    <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-gray-600 uppercase tracking-widest px-2">
                        <span>v1.2.0-stable</span>
                        <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online</span>
                    </div>
                </div>
            </aside>

            <main className="flex-1 lg:ml-64 flex flex-col">
                {/* Header */}
                <header className="h-16 border-b border-gray-800 bg-[#0a0a0c] flex items-center justify-between px-8">
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <input className="bg-[#16181d] border border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-100 placeholder:text-gray-600 w-64 focus:outline-none focus:border-blue-500/50" placeholder="Search tools (⌘K)" />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600 group-hover:text-blue-500 transition-colors" />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex gap-6 text-sm font-bold text-gray-500">
                            <a href="#" className="hover:text-gray-100 transition-colors">Docs</a>
                            <a href="#" className="hover:text-gray-100 transition-colors">API</a>
                            <a href="#" className="hover:text-gray-100 transition-colors">Settings</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button variant="ghost" size="icon" className="h-9 w-9 bg-gray-800 text-gray-300 rounded-lg hover:text-white"><LayoutGrid className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="icon" className="h-9 w-9 bg-gray-800 text-gray-300 rounded-lg hover:text-white"><Moon className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="icon" className="h-9 w-9 bg-gray-800 text-gray-300 rounded-lg hover:text-white"><User className="h-4 w-4" /></Button>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="p-10 max-w-7xl">
                    <Breadcrumb items={[{ label: "Data Utilities" }, { label: "SQL Formatter" }]} />

                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-100 tracking-tight mb-3">SQL Formatter</h1>
                            <p className="text-gray-500">Beautify and format your complex SQL queries instantly for better readability.</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="secondary" className="h-11 rounded-xl bg-gray-600/10 hover:bg-gray-800 text-gray-300 font-bold gap-2 px-6">
                                <History className="h-4 w-4" />
                                <span>History</span>
                            </Button>
                            <Button variant="secondary" className="h-11 rounded-xl bg-gray-600/10 hover:bg-gray-800 text-gray-300 font-bold gap-2 px-6">
                                <Settings2 className="h-4 w-4" />
                                <span>Options</span>
                            </Button>
                        </div>
                    </div>

                    <div className="relative rounded-3xl border border-gray-800 bg-[#0f1117] overflow-hidden shadow-2xl">
                        {/* Specialized Options bar */}
                        <div className="flex items-center px-8 py-5 border-b border-gray-800 bg-[#16181d]/50">
                            <div className="flex items-center gap-10">
                                <div className="flex items-center gap-3">
                                    <LayoutGrid className="h-5 w-5 text-blue-500" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Dialect</span>
                                        <button className="flex items-center gap-2 text-sm font-bold text-white">
                                            PostgreSQL <ChevronDown className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-px h-8 bg-gray-800" />
                                <div className="flex items-center gap-3">
                                    <FileCode className="h-5 w-5 text-blue-500" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Indentation</span>
                                        <button className="flex items-center gap-2 text-sm font-bold text-white">
                                            2 Spaces <ChevronDown className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-px h-8 bg-gray-800" />
                                <div className="flex items-center gap-3">
                                    <AlignLeft className="h-5 w-5 text-blue-500" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Keywords</span>
                                        <button className="flex items-center gap-2 text-sm font-bold text-white">
                                            Uppercase <ChevronDown className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Editor */}
                        <div className="flex flex-1 min-h-[500px] overflow-hidden">
                            <div className="w-12 py-8 flex flex-col items-center bg-[#0a0a0c] text-gray-600 font-mono text-sm leading-8 select-none border-r border-gray-800/30">
                                {lineNumbers.map(n => <div key={n}>{n}</div>)}
                            </div>
                            <textarea
                                className="flex-1 bg-transparent p-8 text-lg font-mono text-gray-400 focus:outline-none resize-none leading-relaxed placeholder:text-gray-700"
                                value={sql}
                                onChange={(e) => setSql(e.target.value)}
                            />
                        </div>

                        {/* Status/Actions Bar */}
                        <div className="flex items-center justify-between px-8 py-5 border-t border-gray-800 bg-[#16181d]/30">
                            <div className="flex items-center gap-6 text-[10px] font-bold text-gray-600 uppercase tracking-widest italic">
                                <span>Characters: {sql.length}</span>
                                <span>UTF-8</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Button variant="ghost" className="text-gray-400 hover:text-white font-bold gap-2">
                                    <Trash2 className="h-4 w-4" />
                                    <span>Clear</span>
                                </Button>
                                <Button variant="secondary" className="bg-gray-800 text-gray-100 rounded-xl px-6 h-11 border border-gray-700 font-bold gap-2">
                                    <Copy className="h-4 w-4" />
                                    <span>Copy</span>
                                </Button>
                                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-10 h-12 font-bold gap-2 shadow-xl shadow-blue-500/20">
                                    <Wand2 className="h-5 w-5" />
                                    <span>Beautify SQL</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

