'use client'

import Link from "next/link"
import { Button } from "../ui/button"

const BackButton = ({ label, href }: { label: string, href: string }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>
        {label}
      </Link>
    </Button>
  )
}

export default BackButton