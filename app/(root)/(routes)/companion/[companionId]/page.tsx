import Categories from '@/components/categories'
import CompanionForm from '@/components/companion-form'
import prismadb from '@/lib/prismadb'
import React from 'react'
interface CompanionIdProps {
  params: {
    companionId: string
  }
}
const CompanionIdPage = async ({ params }
  : CompanionIdProps) => {
  // TODO: Check for subscription 

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId
    }
  })

  const categories = await prismadb.category.findMany()

  return (
    <CompanionForm
      initialData={companion}
      categories={categories}
    />
  )
}

export default CompanionIdPage
