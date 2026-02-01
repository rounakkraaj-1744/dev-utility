import { Search, Moon, User, Command } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0a0a0c]/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-16 items-center px-4">
                <div className="flex items-center gap-2 mr-8">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                        <Command className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-gray-100">Utility Toolkit</span>
                </div>

                <div className="relative flex-1 max-w-lg">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                        className="pl-9 bg-[#16181d] border-gray-800 text-gray-300 placeholder:text-gray-500 rounded-full"
                        placeholder="Search tools... (Cmd+K)"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border border-gray-700 bg-gray-800 px-1.5 font-mono text-[10px] font-medium text-gray-400 opacity-100">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </div>
                </div>

                <div className="ml-auto flex items-center gap-4 text-sm text-gray-400">
                    <a href="#" className="hover:text-gray-100 transition-colors">Docs</a>
                    <a href="#" className="hover:text-gray-100 transition-colors">GitHub</a>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-100">
                        <Moon className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-100 rounded-full border border-gray-700">
                        <User className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </header>
    )
}
