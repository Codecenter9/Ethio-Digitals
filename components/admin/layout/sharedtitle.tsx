"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { ChevronRight } from "lucide-react"

function formatSegment(segment: string) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

type SharedTitleProps = {
  title: string
}

const SharedTitle: React.FC<SharedTitleProps> = ({ title }) => {
  const pathname = usePathname()
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((s) => s !== "admin")

  return (
    <div className="flex flex-col md:flex-row-reverse gap-4 mb-8 md:justify-between md:items-center">

      <Breadcrumb>
        <BreadcrumbList className="text-sm font-medium text-muted-foreground">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/admin" className="hover:text-foreground transition-colors">
                Admin
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {segments.map((segment, idx) => {
            const href = "/admin/" + segments.slice(0, idx + 1).join("/")
            const isLast = idx === segments.length - 1

            return (
              <React.Fragment key={href}>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-foreground">
                      {formatSegment(segment)}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        href={href}
                        className="hover:text-foreground transition-colors"
                      >
                        {formatSegment(segment)}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
    </div>
  )
}

export default SharedTitle