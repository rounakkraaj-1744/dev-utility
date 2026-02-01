"use client"

import * as React from "react"
import { X, Plus, ShieldCheck, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface RequestToolModalProps {
    isOpen: boolean
    onClose: () => void
}

export function RequestToolModal({ isOpen, onClose }: RequestToolModalProps) {
    const [isSubmitted, setIsSubmitted] = React.useState(false)
    const [formData, setFormData] = React.useState({ name: "", description: "" })

    React.useEffect(() => {
        if (!isOpen) {
            setIsSubmitted(false)
            setFormData({ name: "", description: "" })
        }
    }, [isOpen])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-800 bg-[#0f1117] shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="p-8">
                    <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-500 shadow-inner">
                                <Plus className="h-6 w-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-100 italic">Request a new tool</h2>
                                <p className="text-xs font-bold text-gray-500">Tell us what you're missing in your toolkit.</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-500 hover:text-gray-300"
                            onClick={onClose}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Tool Name</label>
                            <Input
                                required
                                className="h-12 bg-[#16181d] border-gray-800 text-gray-100 px-4 rounded-xl text-sm focus-visible:ring-blue-500/50"
                                placeholder="e.g. SVG Compressor"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">What should it do?</label>
                            <textarea
                                required
                                className="w-full h-32 bg-[#16181d] border border-gray-800 text-gray-100 p-4 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 resize-none leading-relaxed placeholder:text-gray-600"
                                placeholder="Describe the functionality you'd like to see..."
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button type="submit" className="flex-1 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold shadow-lg shadow-blue-500/20 transition-all">
                                Submit Request
                            </Button>
                            <Button type="button" variant="secondary" onClick={onClose} className="flex-1 h-12 rounded-xl bg-gray-800/50 hover:bg-gray-800 text-gray-300 font-bold transition-all">
                                Cancel
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8 flex items-center justify-center gap-3 text-[10px] font-bold text-gray-600">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        <p className="max-w-xs text-center leading-relaxed">
                            Privacy-first: We only collect your tool idea to improve DevToolkit. No personal data is stored or shared without your explicit consent.
                        </p>
                    </div>
                </div>

                {/* Success Feedback Sub-modal/Toast simulation as per design */}
                {isSubmitted && (
                    <div className="absolute inset-x-0 bottom-8 flex justify-center px-8 pointer-events-none">
                        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#0a0a0c] border border-green-500/30 shadow-2xl animate-in slide-in-from-bottom duration-300 pointer-events-auto">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-100">Request submitted</span>
                            </div>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="ml-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-gray-300 transition-colors"
                            >
                                Dismiss
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
