"use client"

import * as React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import {
    Copy,
    RefreshCw,
    ShieldCheck,
    Clock,
    ChevronDown,
    Lock,
    Eye,
    Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function PasswordGeneratorPage() {
    const [password, setPassword] = React.useState("p&W9 ! rT2$zQ8")
    const [length, setLength] = React.useState(16)
    const [options, setOptions] = React.useState({
        upper: true,
        lower: true,
        numbers: true,
        symbols: true
    })

    return (
        <div className="flex min-h-screen flex-col bg-[#0a0a0c]">
            <SiteHeader />
            <main className="flex-1 p-6 lg:p-10">
                <div className="max-w-4xl mx-auto py-12">
                    <div className="flex justify-center mb-8">
                        <Breadcrumb items={[{ label: "Password Generator" }]} />
                    </div>

                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-100 mb-4 tracking-tighter">Password Generator</h1>
                        <p className="text-lg text-gray-400">Generate secure, random passwords locally in your browser.</p>
                    </div>

                    <div className="space-y-8">
                        {/* Display Area */}
                        <Card className="relative p-12 bg-[#0f1117]/50 border-gray-800/80 shadow-2xl backdrop-blur-sm overflow-hidden rounded-3xl group">
                            <div className="absolute top-6 right-8 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Secure State</span>
                            </div>

                            <div className="flex flex-col items-center gap-10">
                                <div className="text-5xl md:text-6xl font-black text-gray-100 tracking-tighter text-center break-all px-4">
                                    {password}
                                </div>

                                <div className="w-full max-w-lg space-y-3">
                                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-gray-600 px-1">
                                        <span>Security Strength</span>
                                        <span className="text-green-500 italic">Strong</span>
                                    </div>
                                    <div className="h-2.5 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-800/50 p-0.5">
                                        <div className="h-full w-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)]" />
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Button className="h-14 px-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-xl shadow-blue-500/20 gap-2 transition-all">
                                        <Copy className="h-5 w-5" />
                                        <span>Copy Password</span>
                                    </Button>
                                    <Button variant="secondary" className="h-14 w-14 rounded-2xl bg-gray-800/80 hover:bg-gray-800 text-gray-300 border border-gray-700 transition-all">
                                        <RefreshCw className="h-6 w-6" />
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        {/* Configuration */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Length */}
                            <Card className="p-10 bg-[#0f1117]/30 border-gray-800 rounded-3xl">
                                <div className="flex items-center justify-between mb-10">
                                    <h3 className="text-lg font-bold text-gray-100 flex items-center gap-3">
                                        <Settings className="h-5 w-5 text-gray-600" />
                                        Password Length
                                    </h3>
                                    <div className="h-10 w-16 flex items-center justify-center text-lg font-bold bg-blue-600/15 text-blue-500 rounded-xl border border-blue-500/20">
                                        {length}
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <Slider
                                        min={4}
                                        max={64}
                                        value={length}
                                        onValueChange={setLength}
                                    />
                                    <div className="flex justify-between text-[10px] font-bold text-gray-600 uppercase tracking-widest px-1">
                                        <span>4</span>
                                        <span>64</span>
                                    </div>
                                </div>
                            </Card>

                            {/* Options */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { id: "upper", label: "Uppercase Letters", sub: "ABC...", icon: "A" },
                                    { id: "numbers", label: "Include Numbers", sub: "123...", icon: "1" },
                                    { id: "symbols", label: "Include Symbols", sub: "@#$...", icon: "#" },
                                    { id: "lower", label: "Lowercase Letters", sub: "abc...", icon: "a" },
                                ].map((opt) => (
                                    <Card key={opt.id} className="p-6 bg-[#0f1117]/30 border-gray-800 rounded-2xl flex items-center justify-between group-hover:border-gray-700 transition-colors">
                                        <div className="space-y-1">
                                            <div className="text-xs font-bold text-gray-100">{opt.label}</div>
                                            <div className="text-[10px] font-bold text-gray-600 uppercase tracking-tighter">{opt.sub}</div>
                                        </div>
                                        <Switch
                                            checked={options[opt.id as keyof typeof options]}
                                            onCheckedChange={(checked) => setOptions({ ...options, [opt.id]: checked })}
                                        />
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Security Note */}
                        <Card className="p-8 bg-blue-600/5 border border-blue-500/10 rounded-3xl flex items-center gap-6">
                            <div className="h-14 w-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/10">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-100 italic mb-1">Privacy First Security</h4>
                                <p className="text-xs text-gray-500 leading-relaxed max-w-2xl font-medium">
                                    Passwords are generated locally on your device. No data is ever sent to our servers.
                                </p>
                            </div>
                        </Card>

                        <div className="flex justify-center pt-6">
                            <button className="flex items-center gap-2 text-[10px] font-bold text-gray-600 hover:text-gray-300 transition-colors uppercase tracking-[0.2em]">
                                <Clock className="h-3.5 w-3.5" />
                                <span>Show Session History</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <div className="py-12 flex justify-center border-t border-gray-900 mt-20">
                <div className="text-[10px] font-bold text-gray-700 uppercase tracking-widest italic">
                    © 2024 DevKit Utilities. Open Source & Privacy Guaranteed.
                </div>
            </div>
        </div>
    )
}
