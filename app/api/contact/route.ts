import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, service } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
    }

    const payload = {
      name,
      email,
      phone: phone || "—",
      service: service || "General inquiry",
      message,
      timestamp: new Date().toISOString(),
    }

    console.log("Contact form submission:", payload)

    // TODO: Add email notification via nodemailer or Resend
    // Example with Resend:
    // await resend.emails.send({
    //   from: "TechSight <noreply@techsightinnovation.com>",
    //   to: "aadnan@techsightinnovation.com",
    //   subject: `New inquiry from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
    // })

    return NextResponse.json({ success: true, message: "Thank you! We'll be in touch within 24 hours." })
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
