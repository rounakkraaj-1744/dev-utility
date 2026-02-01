import { LayoutGrid, Type, FileJson, Shield, Image, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const tabs = [
    { name: "All Tools", icon: LayoutGrid, active: true },
    { name: "Text", icon: Type, active: false },
    { name: "JSON", icon: FileJson, active: false },
    { name: "Security", icon: Shield, active: false },
    { name: "Images", icon: Image, active: false },
    { name: "Network", icon: Wifi, active: false },
]

export function HeroSection() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-gray-100 mb-4 tracking-tight">All-in-one toolbox for developers</h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    A minimal, offline-first collection of essential tools for everyday development. No tracking, no ads, just productivity.
                </p>
            </div>

            <div className="flex items-center gap-2 border-b border-gray-800 pb-1">
                {tabs.map((tab) => (
                    <Button
                        key={tab.name}
                        variant="ghost"
                        className={cn(
                            "h-9 gap-2 rounded-none border-b-2 bg-transparent px-4 pb-3 pt-2 font-medium hover:bg-transparent",
                            tab.active
                                ? "border-blue-500 text-blue-500 hover:text-blue-400"
                                : "border-transparent text-gray-400 hover:text-gray-200"
                        )}
                    >
                        <tab.icon className="h-4 w-4" />
                        {tab.name}
                    </Button>
                ))}
            </div>
        </div>
    )
}
