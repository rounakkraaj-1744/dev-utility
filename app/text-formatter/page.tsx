"use client"

import { SiteHeader } from "@/components/site-header"
import { ToolSidebar } from "@/components/tool-sidebar"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Trash2, Wand2, Minimize2, Sparkles, RefreshCw, Copy, Download, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function TextFormatterPage() {
    const [inputText, setInputText] = useState("")

    return (
        <div className="flex min-h-screen flex-col bg-[#0a0a0c]">
            <SiteHeader />
            <div className="flex flex-1">
                <ToolSidebar />
                <main className="flex-1 lg:ml-64 p-6 lg:p-10">
                    <div className="max-w-5xl mx-auto">
                        <Breadcrumb items={[{ label: "Text Utilities" }, { label: "Formatter" }]} />

                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-100 mb-2">Text Formatter</h1>
                                <p className="text-gray-400">Clean, indent, and transform your text data instantly with real-time feedback.</p>
                            </div>
                            <Button variant="secondary" className="gap-2 bg-gray-800/50 hover:bg-gray-800 text-gray-300">
                                <Trash2 className="h-4 w-4" />
                                <span>Clear All</span>
                            </Button>
                        </div>

                        {/* Input Section */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2 text-blue-500 font-medium">
                                    <div className="p-1 rounded bg-blue-500/10">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </div>
                                    <span>Input</span>
                                </div>
                                <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                                    <span>Lines: 128</span>
                                    <span>Chars: 4,092</span>
                                </div>
                            </div>
                            <div className="relative rounded-xl border border-gray-800 bg-[#0f1117] overflow-hidden focus-within:border-blue-500/50 transition-colors">
                                <textarea
                                    className="w-full h-80 bg-transparent p-6 text-sm font-mono text-gray-300 placeholder:text-gray-600 focus:outline-none resize-none"
                                    placeholder="Paste your raw text here... (Ctrl + Enter to process)"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Actions Section */}
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 py-6 border-b border-gray-800/50">
                            <Button className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 gap-2 shadow-lg shadow-blue-500/20">
                                <Wand2 className="h-4 w-4" />
                                <span>Auto Format</span>
                            </Button>
                            <Button variant="secondary" className="h-11 px-6 rounded-xl bg-gray-800/80 hover:bg-gray-800 text-gray-300 gap-2">
                                <Minimize2 className="h-4 w-4" />
                                <span>Minify</span>
                            </Button>
                            <Button variant="secondary" className="h-11 px-6 rounded-xl bg-gray-800/80 hover:bg-gray-800 text-gray-300 gap-2">
                                <Sparkles className="h-4 w-4" />
                                <span>Clean Text</span>
                            </Button>
                            <div className="w-px h-6 bg-gray-800 mx-2 hidden sm:block" />
                            <Button variant="secondary" className="h-11 px-6 rounded-xl bg-gray-800/80 hover:bg-gray-800 text-gray-300 gap-2">
                                <RefreshCw className="h-4 w-4" />
                                <span>Convert Case</span>
                            </Button>
                        </div>

                        {/* Output Section */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2 text-green-500 font-medium">
                                    <div className="p-1 rounded bg-green-500/10">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </div>
                                    <span>Output</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="secondary" size="sm" className="bg-gray-800/50 text-gray-300 gap-2 h-8">
                                        <Copy className="h-3.5 w-3.5" />
                                        <span>Copy</span>
                                    </Button>
                                    <Button variant="secondary" size="sm" className="bg-gray-800/50 text-gray-300 gap-2 h-8">
                                        <Download className="h-3.5 w-3.5" />
                                        <span>Save</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative rounded-xl border border-dashed border-gray-700 bg-black/40 h-80 flex items-center justify-center">
                                <div className="absolute inset-0 p-8 font-mono text-xs text-gray-500 overflow-hidden opacity-30 select-none">
                                    {`{
  "status": "ready",
  "data": {
    "message": "Start typing to see magic",
    "shortcuts": [
      "Ctrl + Enter: Process",
      "Ctrl + L: Clear",
      "Ctrl + C: Copy Output"
    ]
  }
}`}
                                </div>
                                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse" />
                                        <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse delay-150" />
                                        <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse delay-300" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-500">Waiting for input transformation...</span>
                                </div>
                            </div>
                        </div>

                        {/* Status Bar */}
                        <div className="mt-12 flex items-center justify-between border-t border-gray-800/50 pt-4 text-[10px] font-medium text-gray-500 uppercase tracking-widest">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-1.5">
                                    <kbd className="px-1.5 py-0.5 rounded border border-gray-800 bg-gray-900">Ctrl</kbd>
                                    <span>+</span>
                                    <kbd className="px-1.5 py-0.5 rounded border border-gray-800 bg-gray-900">Enter</kbd>
                                    <span className="ml-2">Process</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <kbd className="px-1.5 py-0.5 rounded border border-gray-800 bg-gray-900">Esc</kbd>
                                    <span className="ml-2">Reset All</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span>Online</span>
                                </div>
                                <span>Last process: 2 mins ago</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
