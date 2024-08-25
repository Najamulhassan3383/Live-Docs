
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to CollaBraDocs</h1>
      <p className="text-xl text-center max-w-2xl">
        A collaborative platform for creating and editing documents in real-time.
      </p>
      <Button>Click me</Button>
    </main>
  )
}
