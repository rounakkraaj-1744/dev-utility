"use client"

import * as React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
    Plus,
    LayoutGrid,
    ArrowLeftRight,
    Key,
    ShieldCheck,
    Hash,
    GraduationCap,
    Star,
    Search,
    Filter,
    HelpCircle,
    Zap,
    AlignLeft,
    Clock,
    ArrowRightLeft as Unit,
    FileText,
    FileJson,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const dashboardTools = [
    { id: 1, name: "Password Generator", desc: "Create secure, random passwords...", icon: ShieldCheck, category: "SECURITY", favorite: false, href: "/password-generator" },
    { id: 2, name: "Stopwatch", desc: "Precision timing for tasks and sprints.", icon: Clock, category: "PRODUCTIVITY", favorite: false, href: "#" },
    { id: 3, name: "Unit Converter", desc: "Convert between metric and imperial...", icon: ArrowLeftRight, category: "UTILITIES", favorite: true, href: "#" },
    { id: 4, name: "Markdown Previewer", desc: "Real-time rendering for your .md files.", icon: FileText, category: "DEVELOPER", favorite: false, href: "#" },
    { id: 5, name: "JSON Formatter", desc: "Pretty-print and validate JSON data.", icon: FileJson, category: "FORMATTING", favorite: false, href: "/json-formatter" },
    { id: 6, name: "Base64 Encoder", desc: "Encode and decode strings or files.", icon: Key, category: "SECURITY", favorite: false, href: "#" },
]

export default function EverydayToolsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#0a0a0c]">
            <SiteHeader />
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-gray-800 bg-[#0a0a0c] hidden lg:flex flex-col">
                    <div className="flex-1 px-4 py-8 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2">Categories</h3>
                            <div className="space-y-1">
                                {[
                                    { name: "Quick Access", icon: Zap, active: true },
                                    { name: "Formatters", icon: ArrowLeftRight },
                                    { name: "Generators", icon: ShieldCheck },
                                    { name: "Converters", icon: ArrowLeftRight },
                                ].map((cat) => (
                                    <button
                                        key={cat.name}
                                        className={cn(
                                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors",
                                            cat.active ? "bg-blue-600/15 text-blue-500 font-bold" : "text-gray-400 hover:text-gray-100 hover:bg-gray-800/50"
                                        )}
                                    >
                                        <cat.icon className="h-4 w-4" />
                                        <span>{cat.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Go Pro Card */}
                        <div className="px-2 pt-20">
                            <Card className="p-5 bg-gradient-to-br from-blue-600/20 to-transparent border-blue-500/30 rounded-2xl">
                                <h4 className="text-sm font-bold text-gray-100 mb-2">Go Pro</h4>
                                <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Unlock cloud sync and custom tools.</p>
                                <Button className="w-full h-9 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold">
                                    Upgrade Now
                                </Button>
                            </Card>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-800">
                        <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-gray-300 transition-colors uppercase tracking-widest">
                            <HelpCircle className="h-4 w-4" />
                            <span>Help Center</span>
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:ml-64 p-6 lg:p-10">
                    <div className="max-w-6xl mx-auto">
                        <Breadcrumb items={[{ label: "Everyday Tools" }]} />

                        <div className="flex items-start justify-between mb-12">
                            <div>
                                <h1 className="text-5xl font-bold text-gray-100 mb-3 tracking-tighter">Everyday Tools</h1>
                                <p className="text-lg text-gray-400">Essential high-performance utilities for your daily workflow.</p>
                            </div>
                            <Button variant="secondary" className="gap-2 bg-gray-800/50 hover:bg-gray-800 text-gray-300 rounded-xl px-5 h-11 transition-all border border-gray-700/50">
                                <Filter className="h-4 w-4" />
                                <span className="font-bold text-sm">Filter</span>
                            </Button>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {dashboardTools.map((tool) => (
                                <Link key={tool.id} href={tool.href}>
                                    <Card className="group relative bg-[#0f1117]/80 hover:bg-[#16181d] border-gray-800 hover:border-blue-500/30 transition-all p-8 h-full rounded-2xl overflow-hidden shadow-2xl">
                                        <button className="absolute top-6 right-6 text-gray-600 hover:text-blue-500 transition-colors">
                                            <Star className={cn("h-5 w-5", tool.favorite && "fill-blue-500 text-blue-500")} />
                                        </button>

                                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500 shadow-inner group-hover:scale-110 transition-transform">
                                            <tool.icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-100 mb-2 italic tracking-tight">{tool.name}</h3>
                                        <p className="text-sm text-gray-500 mb-8 leading-relaxed truncate">{tool.desc}</p>

                                        <div className="inline-flex px-3 py-1 rounded-lg bg-gray-800/50 border border-gray-700 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                            {tool.category}
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-20 pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold text-gray-600 uppercase tracking-[0.2em]">
                            <p>© 2024 Utility Toolkit. Built for developers by developers.</p>
                            <div className="flex gap-8">
                                <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                                <a href="#" className="hover:text-gray-300">Terms of Service</a>
                                <a href="#" className="hover:text-gray-300">GitHub</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
