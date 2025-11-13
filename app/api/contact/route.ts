// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fullName, email, subject, message } = await req.json();

    if (!fullName || !email || !message) {
      return new NextResponse("Missing required fields.", { status: 400 });
    }

    // TODO: integrate email provider (Resend) or store in DB
    console.log("[CONTACT]", { fullName, email, subject, message });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[CONTACT][ERROR]", err?.message || err);
    return new NextResponse("Server error.", { status: 500 });
  }
}
