"use client"

import { useState, useMemo } from "react"
import type { Project } from "@/types"

export function useFilteredProjects(projects: Project[]) {
    const [filter, setFilter] = useState("all")

    const filteredProjects = useMemo(() => {
        return filter === "all" ? projects : projects.filter((project) => project.category === filter)
    }, [projects, filter])

    return {
        filter,
        setFilter,
        filteredProjects,
    }
}