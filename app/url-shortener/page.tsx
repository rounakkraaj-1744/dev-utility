"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Shield, Copy, QrCode, ClipboardList, Download, Clock } from "lucide-react"

export default function URLShortenerPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#0a0a0c]">
            <SiteHeader />
            <main className="flex-1 p-6 lg:p-10">
                <div className="max-w-3xl mx-auto py-12">
                    <div className="flex justify-center mb-8">
                        <Breadcrumb items={[{ label: "URL Shortener" }]} />
                    </div>

                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-100 mb-4 tracking-tight">URL Shortener</h1>
                        <p className="text-lg text-gray-400">Create clean, shortened links in seconds.</p>
                    </div>

                    <Card className="p-8 md:p-12 bg-[#0f1117]/50 border-gray-800/80 mb-16 shadow-2xl backdrop-blur-sm">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <label className="text-sm font-semibold text-gray-400 ml-1">Long URL</label>
                                <Input
                                    className="h-14 bg-[#16181d] border-gray-800 text-gray-100 px-6 rounded-xl text-base focus-visible:ring-blue-500/50"
                                    placeholder="https://your-very-long-link-to-shorten.com/path..."
                                />
                            </div>

                            <div className="flex flex-col items-center gap-6">
                                <Button className="h-14 px-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-lg shadow-blue-500/20 w-full sm:w-auto">
                                    Shorten URL
                                </Button>
                                <div className="flex items-center gap-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-3.5 w-3.5" />
                                        <span>Privacy-First</span>
                                    </div>
                                    <span className="w-1 h-1 rounded-full bg-gray-700" />
                                    <span>No tracking, no logs, no cookies</span>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-800/50">
                                <p className="text-sm font-semibold text-gray-400 mb-6">Your shortened link is ready:</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="flex-1 h-12 flex items-center px-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-blue-400 font-mono text-sm">
                                        dtk.io/x7b2kL9
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="secondary" className="h-12 px-6 rounded-xl bg-gray-800/80 hover:bg-gray-800 text-gray-300 gap-2">
                                            <Copy className="h-4 w-4" />
                                            <span>Copy</span>
                                        </Button>
                                        <Button variant="secondary" className="h-12 px-6 rounded-xl bg-gray-800/80 hover:bg-gray-800 text-gray-300 gap-2">
                                            <QrCode className="h-4 w-4" />
                                            <span>QR Code</span>
                                        </Button>
                                    </div>
                                </div>

                                {/* QR Preview placeholder */}
                                <div className="mt-8 flex flex-col items-center">
                                    <div className="p-4 bg-white rounded-xl mb-4">
                                        <div className="w-32 h-32 bg-[#0a0a0c] flex items-center justify-center rounded-lg">
                                            <QrCode className="h-20 w-20 text-white" />
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-300 text-[11px] font-bold uppercase tracking-wider gap-2">
                                        <Download className="h-3.5 w-3.5" />
                                        Download PNG
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-[0.2em] justify-center">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Session History</span>
                        </div>

                        <div className="space-y-3">
                            {[
                                { id: "a9z4rP", original: "https://github.com/developer/awesome-toolkit-repo-with-very-long-name..." },
                                { id: "k8s2vM", original: "https://medium.com/engineering/microservices-architecture-best-practices..." }
                            ].map((item) => (
                                <div key={item.id} className="group flex items-center justify-between p-4 rounded-xl bg-[#0f1117]/30 border border-gray-800 hover:border-gray-700 transition-all cursor-pointer">
                                    <div className="space-y-1">
                                        <div className="text-sm font-mono text-blue-400">dtk.io/{item.id}</div>
                                        <div className="text-xs text-gray-500 truncate max-w-sm">{item.original}</div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="text-gray-600 group-hover:text-gray-300 bg-transparent hover:bg-gray-800/50">
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    )
}
