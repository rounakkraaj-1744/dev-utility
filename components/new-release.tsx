import { Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function NewRelease() {
    return (
        <div className="container mx-auto px-4 pb-20">
            <div className="relative overflow-hidden rounded-2xl bg-[#0f1117] border border-gray-800 p-8 md:p-12">
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start justify-between">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <Rocket className="h-4 w-4 text-blue-500" />
                            <span className="text-xs font-bold font-mono text-blue-500 uppercase tracking-wider">New Release</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-100 mb-3">Image Optimizer Beta</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Lossless compression for PNG, JPEG, and WebP directly in your browser. No files are uploaded to any server.
                        </p>
                        <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                            Try Beta
                        </Button>
                    </div>

                    <div className="hidden md:flex flex-col items-center justify-center text-center p-8 bg-[#0a0a0c] rounded-xl border border-gray-800/50 w-full max-w-sm ml-auto">
                        <span className="text-4xl font-bold text-white mb-2">50+</span>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Available Utilities</span>
                    </div>
                </div>

                {/* Background decorative element */}
                <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none" />
            </div>
        </div>
    )
}
