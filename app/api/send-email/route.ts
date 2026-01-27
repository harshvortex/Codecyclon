import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, businessIdea, budgetRange, message } = await request.json()

    // Email to client
    const clientEmailBody = `
Hi ${name},

Thank you for reaching out to Codecyclon! We've received your inquiry and will review your project details.

Project Details:
- Business/Idea: ${businessIdea}
- Budget Range: ${budgetRange}
- Message: ${message}

Our team will contact you within 24 hours to discuss your project and provide a customized proposal.

Best regards,
Codecyclon Team
Email: harshvortex001@gmail.com
WhatsApp: +91 9520535135
    `

    // Email to Codecyclon team
    const teamEmailBody = `
New Project Inquiry from ${name}

Contact: ${email}
Business/Idea: ${businessIdea}
Budget Range: ${budgetRange}
Message: ${message}

Please reach out to the client within 24 hours.
    `

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Email submission error:", error)
    return NextResponse.json({ success: false, error: "Failed to submit inquiry" }, { status: 500 })
  }
}
