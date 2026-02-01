import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlignLeft, Key, Link2, Regex, ShieldCheck, ArrowLeftRight, Code2, MoreHorizontal } from "lucide-react"
import Link from "next/link"

const tools = [
    {
        title: "JSON Formatter",
        description: "Prettify, minify, and validate JSON data with syntax highlighting.",
        icon: AlignLeft,
        href: "/json-formatter",
    },
    {
        title: "Base64 Encoder",
        description: "Encode or decode strings and files to/from Base64 format securely.",
        icon: Key,
        href: "#",
    },
    {
        title: "URL Shortener",
        description: "Generate clean, shortened versions of long tracking URLs instantly.",
        icon: Link2,
        href: "/url-shortener",
    },
    {
        title: "Regex Tester",
        description: "Live testing and explanation for regular expressions in JS, Python, and PHP.",
        icon: Regex,
        href: "#",
    },
    {
        title: "JWT Debugger",
        description: "Decode, verify and generate JSON Web Tokens (JWT) for debugging.",
        icon: ShieldCheck,
        href: "#",
    },
    {
        title: "Case Converter",
        description: "Convert between camelCase, snake_case, PascalCase, and kebab-case.",
        icon: ArrowLeftRight,
        href: "#",
    },
    {
        title: "HTML Entity Encoder",
        description: "Easily escape special characters for HTML or XML documents.",
        icon: Code2,
        href: "#",
    },
    {
        title: "Password Generator",
        description: "Generate secure, random passwords with custom requirements.",
        icon: MoreHorizontal,
        href: "#",
    },
]

export function ToolsGrid() {
    return (
        <div className="container mx-auto px-4 pb-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {tools.map((tool) => (
                    <Link key={tool.title} href={tool.href}>
                        <Card className="group cursor-pointer bg-[#0f1117] h-full">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/50 text-blue-500 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                                    {/* Lucide icons are components */}
                                    <tool.icon className="h-5 w-5" />
                                </div>
                                <CardTitle className="mb-2 text-gray-100">{tool.title}</CardTitle>
                                <CardDescription className="text-gray-400 leading-relaxed">
                                    {tool.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
