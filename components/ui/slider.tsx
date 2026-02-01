"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onValueChange?: (value: number) => void
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
    ({ className, value, onValueChange, min = 0, max = 100, step = 1, ...props }, ref) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onValueChange?.(Number(e.target.value))
        }

        return (
            <input
                type="range"
                ref={ref}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                className={cn(
                    "h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-800 accent-blue-600 focus:outline-none",
                    className
                )}
                {...props}
            />
        )
    }
)
Slider.displayName = "Slider"

export { Slider }
