"use client"

import { useEffect, useState } from "react"

const categories = ["sepatu", "jersey", "aksesoris"]

export default function RotatingCategory() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="font-bold text-blue-600">
      {categories[index]}
    </span>
  )
}