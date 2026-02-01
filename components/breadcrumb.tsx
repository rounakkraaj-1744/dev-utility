import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface BreadcrumbProps {
    items: {
        label: string
        href?: string
    }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-100 transition-colors">Home</Link>
            {items.map((item, index) => (
                <div key={item.label} className="flex items-center gap-2">
                    <ChevronRight className="h-3 w-3" />
                    {item.href ? (
                        <Link href={item.href} className="hover:text-gray-100 transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-100 font-medium">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    )
}
