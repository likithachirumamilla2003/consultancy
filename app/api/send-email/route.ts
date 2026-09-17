import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

   const {
  name,
  email,
  phone,
  destination,
  studyLevel,
  preferredDate,
  message,
} = body;

    if (!name || !email) {
      return NextResponse.json(
        {
          success: false,
          error: "Name and email are required.",
        },
        { status: 400 }
      );
    }

    const emailContent = `
New Consultancy Request

Full Name: ${name}
Email: ${email}
Phone Number: ${phone || "Not provided"}
Destination: ${destination || "Not provided"}
Study Level: ${studyLevel || "Not provided"}
Preferred Consultation Date: ${preferredDate || "Not provided"}

Message:
${message || "No message provided"}
`;

    const { data, error } = await resend.emails.send({
      from: "Consultancy Website <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Consultancy Request from ${name}`,
      text: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          error: "Email could not be sent.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your request has been sent successfully!",
      data,
    });
  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}