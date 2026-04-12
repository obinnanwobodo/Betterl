import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    // 🔍 DEBUG (check if data is coming)
    console.log("📩 New Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // ❗ IMPORTANT: check API key is loaded
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY in .env.local");
    }

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",

      // ⚠️ CHANGE THIS TO YOUR REAL EMAIL
      to: "obinnanwobodo27@gmail.com",

      subject: "New Contact Form Message",

      // so you can reply directly to user
      reply_to: email,

      html: `
        <div style="font-family: Arial; padding: 10px;">
          <h2>New Message From Website</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    console.log("✅ Email sent successfully:", data);

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("❌ ERROR SENDING EMAIL:", error);

    return Response.json(
      {
        success: false,
        message: error.message || "Failed to send email",
      },
      { status: 500 }
    );
  }
}