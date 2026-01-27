import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, type, message } = body

    // Validate required fields
    if (!email || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Log lead data (in production, send to email/CRM)
    console.log("Lead captured:", {
      name: name || "Not provided",
      email,
      type,
      message: message || "No message",
      timestamp: new Date().toISOString(),
    })

    // In production, you would:
    // 1. Store in database
    // 2. Send confirmation email
    // 3. Send to Zapier/Make/n8n for workflow automation
    // 4. Add to email list service (Resend, SendGrid, etc.)

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
      leadId: `lead_${Date.now()}`,
    })
  } catch (error) {
    console.error("Lead capture error:", error)
    return NextResponse.json({ error: "Failed to capture lead" }, { status: 500 })
  }
}
