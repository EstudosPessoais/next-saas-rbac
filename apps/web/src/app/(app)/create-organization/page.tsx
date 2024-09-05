import { Header } from '@/components/header'

import { OrganizationForm } from './organization-form'

export default function CreateOrganization() {
  return (
    <div className="space-y-4">
      <Header />
      <main className="mx-auto w-full max-w-[1200] space-y-4">
        <OrganizationForm />
      </main>
    </div>
  )
}
