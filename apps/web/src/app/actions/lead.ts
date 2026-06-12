"use server";

export async function sendLeadAction(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_EMAIL_ID;

  if (!apiKey || !toEmail) {
    console.error("Missing Resend API Key or Target Email in environment variables.");
    return { success: false, message: "Configuration error" };
  }

  const fullName = formData.get("fullName")?.toString() || "Not provided";
  const email = formData.get("email")?.toString() || "Not provided";
  const budget = formData.get("budget")?.toString() || "Not provided";
  const platform = formData.get("platform")?.toString() || "Not provided";
  const comments = formData.get("comments")?.toString() || "None";

  const htmlContent = `
    <div style="font-family: sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eaeaeb; border-radius: 8px;">
      <h2 style="color: #111;">New Lead Form Submission</h2>
      <p style="color: #444; font-size: 16px;">You have received a new inquiry from your website.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tbody>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px 0; color: #666; width: 150px;"><strong>Full Name:</strong></td>
            <td style="padding: 12px 0; color: #111;">${fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px 0; color: #666;"><strong>Email:</strong></td>
            <td style="padding: 12px 0; color: #111;">${email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px 0; color: #666;"><strong>Monthly Budget:</strong></td>
            <td style="padding: 12px 0; color: #111;">${budget}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px 0; color: #666;"><strong>Primary Platform:</strong></td>
            <td style="padding: 12px 0; color: #111;">${platform}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #666; vertical-align: top;"><strong>Comments:</strong></td>
            <td style="padding: 12px 0; color: #111; white-space: pre-wrap;">${comments}</td>
          </tr>
        </tbody>
      </table>
      
      <p style="margin-top: 30px; font-size: 12px; color: #aaa;">This email was sent securely via Resend.</p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Acme <onboarding@resend.dev>",
        to: [toEmail],
        subject: `New Lead: ${fullName}`,
        html: htmlContent,
        reply_to: email !== "Not provided" ? email : undefined,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API Error:", errorData);
      return { success: false, message: "Failed to send email" };
    }

    return { success: true };
  } catch (error) {
    console.error("Fetch Error:", error);
    return { success: false, message: "Network error" };
  }
}
