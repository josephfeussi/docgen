import ClientProjectView from '@/components/custom/projects/ClientProjectView'

// Server component: render client-side detail view
const ProjectDetailPage = async ({ params }: { params: { id: string } | Promise<{ id: string }> }) => {
  const { id } = (await params) as { id: string }

  return (
    <div style={{ padding: 24 }}>
      <ClientProjectView id={id} />
    </div>
  )
}

export default ProjectDetailPage
