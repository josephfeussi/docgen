import ClientProjectLoader from '@/components/custom/projects/ClientProjectLoader'

const EditProjectPage = async ({ params }: { params: { id: string } | Promise<{ id: string }> }) => {
  const { id } = (await params) as { id: string }

  return (
    <div style={{ padding: 24 }}>
      <ClientProjectLoader id={id} />
    </div>
  )
}

export default EditProjectPage
