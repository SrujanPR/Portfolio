"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export type ContactFormData = z.infer<typeof formSchema>

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(data)

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // to send an email to sruja2401@gmail.com with the form data

    // For this demo, we'll simulate a successful submission with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed",
        errors: error.errors.map((e) => ({ field: e.path[0], message: e.message })),
      }
    }

    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}
