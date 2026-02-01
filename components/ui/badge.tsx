import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline" | "blue"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                {
                    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80": variant === "default",
                    "border-transparent bg-gray-800 text-gray-100 hover:bg-gray-700": variant === "secondary",
                    "text-gray-100 border-gray-700": variant === "outline",
                    "border-transparent bg-blue-600 text-white hover:bg-blue-700": variant === "blue",
                },
                className
            )}
            {...props}
        />
    )
}

export { Badge }
