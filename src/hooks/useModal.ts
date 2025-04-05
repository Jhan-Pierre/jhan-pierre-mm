import { useState } from "react"

export function useModal<T>(initialState: T | null = null) {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState<T | null>(initialState)

    const open = (item: T) => {
        setData(item)
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
        // Opcional: puede limpiar los datos después de un cierto tiempo
        // setTimeout(() => setData(null), 300)
    }

    return { isOpen, data, open, close }
}