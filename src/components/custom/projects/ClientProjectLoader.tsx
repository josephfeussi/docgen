'use client'

import React, { useEffect, useState } from 'react'

import ProjectForm from './ProjectForm'

const ClientProjectLoader = ({ id }: { id: string }) => {
  const [initial, setInitial] = useState<any>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('projects')
      const arr = stored ? JSON.parse(stored) : []
      const p = arr.find((x: any) => x.id === id)

      setInitial(p || null)
    } catch (e) {
      setInitial(null)
    }
  }, [id])

  if (!initial) return <div>Loading...</div>

  return <ProjectForm initialData={initial} />
}

export default ClientProjectLoader
