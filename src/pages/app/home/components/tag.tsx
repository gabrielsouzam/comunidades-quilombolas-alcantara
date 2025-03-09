interface TagProps {
    text: string
}

export function Tag({ text }: TagProps) {
    return (
        <div className="flex h-8 items-center justify-center rounded-3xl bg-[#501E0D] px-2">
            <p className="text-sm font-[400] text-[#F5F5DC]">{text}</p>
        </div>
    )
}