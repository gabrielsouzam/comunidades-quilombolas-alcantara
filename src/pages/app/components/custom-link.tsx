import { Link } from '@phosphor-icons/react'

interface CustomLinkProps {
  title: string
  link: string
}

export function CustomLink({ title, link }: CustomLinkProps) {
  return (
    <div className="flex items-center gap-3 justify-center">
      <Link size={28} weight="light" className="text-base-white" />
      <a
        href={link}
        className="text-normal text-2xl underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </div>
  )
}
