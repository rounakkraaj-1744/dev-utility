import { Command } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="border-t border-gray-800 bg-[#0a0a0c] py-8">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm md:flex-row">
                <div className="flex items-center gap-2 text-gray-400">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-800">
                        <Command className="h-3 w-3 text-gray-400" />
                    </div>
                    <span>© 2024 Utility Toolkit. Built for developers.</span>
                </div>

                <div className="flex gap-6 text-gray-500">
                    <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Support</a>
                    <span className="text-gray-600">v2.4.0</span>
                </div>
            </div>
        </footer>
    )
}
