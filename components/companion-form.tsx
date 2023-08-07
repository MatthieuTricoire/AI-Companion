"use client"
import { Category, Companion } from '@prisma/client'
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

interface CompanionFormProps {
  initialData: Companion | null;
  categories: Category[]
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  instructions: z.string().min(200, {
    message: "Instructions required at least 200 characters",
  }),
  seed: z.string().min(200, {
    message: "Seed required at least 200 characters",
  }),
  src: z.string().min(1, {
    message: "Image is required",
  }),
  categoryId: z.string().min(1, {
    message: "Category is required.",
  }),
})

const CompanionForm = ({ initialData, categories }: CompanionFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
      instructions: "",
      seed: "",
      src: "",
      categoryId: undefined
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div className='h-full p-4 space-y-2 max-w-3xl mx-auto'>Companion form</div>
  )
}

export default CompanionForm
