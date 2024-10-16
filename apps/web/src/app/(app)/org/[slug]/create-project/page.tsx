import { Header } from '@/components/header'

import { ProjectForm } from './project-form'

export default function CreateProject() {
  return (
    <div className="space-y-4">
      <Header />
      <main className="mx-auto w-full max-w-[1200] space-y-4">
        <ProjectForm />
      </main>
    </div>
  )
}
