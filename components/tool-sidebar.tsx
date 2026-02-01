import { AlignLeft, ArrowLeftRight, FileJson, Key, Regex, ShieldCheck, Hash, GraduationCap, LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const categories = [
    {
        title: "TEXT UTILITIES",
        items: [
            { name: "Text Formatter", icon: AlignLeft, href: "/text-formatter", active: true },
            { name: "Case Converter", icon: ArrowLeftRight, href: "#" },
            { name: "JSON Tools", icon: FileJson, href: "#" },
            { name: "Base64 Codec", icon: Key, href: "#" },
            { name: "Regex Tester", icon: Regex, href: "#" },
        ],
    },
    {
        title: "ENCRYPTION",
        items: [
            { name: "SHA Generator", icon: Hash, href: "#" },
            { name: "JWT Debugger", icon: ShieldCheck, href: "#" },
        ],
    },
]

export function ToolSidebar() {
    return (
        <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-gray-800 bg-[#0a0a0c] hidden lg:flex flex-col overflow-y-auto">
            <div className="flex-1 px-4 py-6 space-y-8">
                {categories.map((category) => (
                    <div key={category.title}>
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">
                            {category.title}
                        </h3>
                        <div className="space-y-1">
                            {category.items.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                                        item.active
                                            ? "bg-blue-600/10 text-blue-500"
                                            : "text-gray-400 hover:text-gray-100 hover:bg-gray-800/50"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 border-t border-gray-800">
                <Button variant="default" className="w-full gap-2 rounded-xl bg-blue-600 hover:bg-blue-700">
                    <LayoutGrid className="h-4 w-4" />
                    <span>Explore All</span>
                </Button>
            </div>
        </aside>
    )
}

import { Button } from "@/components/ui/button"
