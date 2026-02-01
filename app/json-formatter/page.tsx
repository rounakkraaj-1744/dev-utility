"use client"

import * as React from "react"
import { SiteHeader } from "@/components/site-header"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    CheckCircle2,
    Trash2,
    Download,
    Wand2,
    Minimize2,
    Settings2,
    LayoutList,
    Copy,
    Clock,
    Globe
} from "lucide-react"
import { cn } from "@/lib/utils"

const initialJson = `{
  "toolkit": "JSON Formatter",
  "version": 2.0,
  "features": [
    "Beautify",
    "Minify",
    "Tree View"
  ],
  "active": true,
  "settings": {
    "theme": "dark",
    "indent": 2
  }
}`

export default function JSONFormatterPage() {
    const [input, setInput] = React.useState(initialJson)

    const lineNumbers = input.split("\n").map((_, i) => i + 1)
    const formattedLineNumbers = input.split("\n").map((_, i) => i + 1) // Just for demo

    return (
        <div className="flex min-h-screen flex-col bg-[#0a0a0c]">
            <SiteHeader />
            <main className="flex-1 p-6 lg:p-10">
                <div className="max-w-[1600px] mx-auto">
                    <Breadcrumb items={[{ label: "JSON Formatter" }]} />

                    <div className="flex items-start justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-100 mb-2 tracking-tight">JSON Formatter</h1>
                            <p className="text-base text-gray-400">Beautify, minify, and validate your JSON data with instant syntax highlighting.</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                <span className="text-[11px] font-bold text-green-500 uppercase tracking-widest">Valid JSON</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-800 bg-[#0f1117] overflow-hidden shadow-2xl">
                        {/* Toolbar */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#16181d]/50">
                            <div className="flex items-center gap-4">
                                <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-400 hover:text-blue-500 hover:bg-blue-500/5">
                                    <Wand2 className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-400 hover:text-blue-500 hover:bg-blue-500/5">
                                    <Minimize2 className="h-5 w-5" />
                                </Button>
                                <div className="w-px h-6 bg-gray-800 mx-2" />
                                <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-400 hover:text-blue-500 hover:bg-blue-500/5">
                                    <Trash2 className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-400 hover:text-blue-500 hover:bg-blue-500/5">
                                    <Download className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="flex items-center p-1 rounded-xl bg-black/40 border border-gray-800">
                                    <Button variant="ghost" className="h-9 px-4 rounded-lg bg-gray-800 text-gray-100 gap-2 text-xs font-bold">
                                        <span className="text-xs">{"<>"}</span>
                                        <span>Code View</span>
                                    </Button>
                                    <Button variant="ghost" className="h-9 px-4 rounded-lg text-gray-400 gap-2 text-xs font-bold hover:text-gray-200">
                                        <LayoutList className="h-3.5 w-3.5" />
                                        <span>Tree View</span>
                                    </Button>
                                </div>
                                <Button variant="default" className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold gap-2 ml-4">
                                    <Settings2 className="h-4 w-4" />
                                    <span>Settings</span>
                                </Button>
                            </div>
                        </div>

                        {/* Split Editor */}
                        <div className="grid lg:grid-cols-2 divide-x lg:divide-y-0 divide-y divide-gray-800">
                            {/* Input Pane */}
                            <div className="flex flex-col bg-[#0a0a0c]/30">
                                <div className="px-6 py-3 border-b border-gray-800 flex items-center justify-between uppercase tracking-widest text-[9px] font-bold text-gray-500">
                                    <span>Input JSON</span>
                                    <div className="flex gap-4">
                                        <span>Lines: {lineNumbers.length}</span>
                                        <button className="text-blue-500 hover:text-blue-400">Paste from Clipboard</button>
                                    </div>
                                </div>
                                <div className="flex flex-1 min-h-[600px] overflow-hidden">
                                    <div className="w-12 py-6 flex flex-col items-center bg-[#0a0a0c] text-gray-600 font-mono text-xs select-none border-r border-gray-800/50">
                                        {lineNumbers.map(n => <div key={n} className="leading-6">{n}</div>)}
                                    </div>
                                    <textarea
                                        className="flex-1 bg-transparent p-6 text-sm font-mono text-gray-400 focus:outline-none resize-none leading-6 placeholder:text-gray-700"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Output Pane */}
                            <div className="flex flex-col bg-[#0a0a0c]/20">
                                <div className="px-6 py-3 border-b border-gray-800 flex items-center justify-between uppercase tracking-widest text-[9px] font-bold text-gray-500">
                                    <span>Formatted Output</span>
                                    <div className="flex gap-4 items-center">
                                        <span>Size: 142 B</span>
                                        <Button variant="ghost" size="sm" className="h-6 px-2 rounded-lg text-blue-500 hover:bg-blue-500/5 gap-1 text-[9px] font-bold">
                                            <Copy className="h-3 w-3" />
                                            <span>Copy JSON</span>
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-1 min-h-[600px] overflow-hidden">
                                    <div className="w-12 py-6 flex flex-col items-center bg-[#0a0a0c] text-gray-600 font-mono text-xs select-none border-r border-gray-800/50">
                                        {formattedLineNumbers.map(n => <div key={n} className="leading-6">{n}</div>)}
                                    </div>
                                    <div className="flex-1 p-6 text-sm font-mono leading-6 overflow-auto">
                                        <pre className="text-gray-300">
                                            {`{`}
                                            <br />
                                            {`  `}
                                            <span className="text-blue-400">"toolkit"</span>
                                            {`: `}
                                            <span className="text-orange-400">"JSON Formatter"</span>
                                            {`,`}
                                            <br />
                                            {`  `}
                                            <span className="text-blue-400">"version"</span>
                                            {`: `}
                                            <span className="text-purple-400">2.0</span>
                                            {`,`}
                                            <br />
                                            {`  `}
                                            <span className="text-blue-400">"features"</span>
                                            {`: [`}
                                            <br />
                                            {`    `}
                                            <span className="text-orange-400">"Beautify"</span>
                                            {`,`}
                                            <br />
                                            {`    `}
                                            <span className="text-orange-400">"Minify"</span>
                                            {`,`}
                                            <br />
                                            {`    `}
                                            <span className="text-orange-400">"Tree View"</span>
                                            <br />
                                            {`  ],`}
                                            <br />
                                            {`  `}
                                            <span className="text-blue-400">"active"</span>
                                            {`: `}
                                            <span className="text-green-400">true</span>
                                            {`,`}
                                            <br />
                                            {`  `}
                                            <span className="text-blue-400">"settings"</span>
                                            {`: {`}
                                            <br />
                                            {`    `}
                                            <span className="text-blue-400">"theme"</span>
                                            {`: `}
                                            <span className="text-orange-400">"dark"</span>
                                            {`,`}
                                            <br />
                                            {`    `}
                                            <span className="text-blue-400">"indent"</span>
                                            {`: `}
                                            <span className="text-purple-400">2</span>
                                            <br />
                                            {`  }`}
                                            <br />
                                            {`}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] px-2">
                        <div className="flex gap-8">
                            <div className="flex items-center gap-2">
                                <Clock className="h-3.5 w-3.5" />
                                <span>Last validated: Just now</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="h-3.5 w-3.5" />
                                <span>Encoding: UTF-8</span>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-300">Documentation</a>
                            <span className="text-gray-700">© 2024 Toolkit Labs</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
