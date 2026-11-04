
const express = require("express");
const router = express.Router();
const supabase = require("../config/db");
const transporter = require("../config/mailer");

// HTML special characters escape karna
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Required fields validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required."
      });
    }

    // Length validation
    if (
      name.length > 100 ||
      email.length > 254 ||
      (subject !== undefined &&
        (typeof subject !== "string" || subject.length > 150)) ||
      message.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length."
      });
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address."
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject =
      typeof subject === "string" ? subject.trim() : "";
    const cleanMessage = message.trim();

    // Save message in Supabase
    const { error } = await supabase
      .from("contact_messages")
      .insert({
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage
      });

    if (error) {
      console.error("Supabase Error:", error);

      return res.status(500).json({
        success: false,
        message: "Message could not be saved."
      });
    }

    // Send professional HTML email
    try {
      await transporter.sendMail({
        from: `"Sheikh Fahad Portfolio" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: cleanEmail,
        subject: `New Portfolio Message: ${cleanSubject || "New Contact"}`,

        html: `
          <div style="font-family:Arial,sans-serif;background:#f4f6fb;padding:30px;">
            <div style="max-width:600px;margin:auto;background:#fff;border-radius:14px;overflow:hidden;">

              <div style="background:#080b14;padding:25px;text-align:center;">
                <h1 style="color:#fff;margin:0;">Sheikh Fahad</h1>
                <p style="color:#93c5fd;margin:8px 0 0;">New Portfolio Message</p>
              </div>

              <div style="padding:30px;">
                <h2 style="color:#111827;">New Contact Submission</h2>
                <p style="color:#6b7280;">
                  Someone has contacted you through your portfolio website.
                </p>

                <div style="background:#f9fafb;padding:18px;border-radius:10px;margin-top:20px;">
                  <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
                  <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
                  <p><strong>Subject:</strong> ${escapeHtml(cleanSubject || "Not provided")}</p>
                </div>

                <h3 style="color:#111827;margin-top:25px;">Message</h3>

                <div style="background:#eff6ff;padding:20px;border-left:4px solid #2563eb;border-radius:8px;color:#374151;white-space:pre-wrap;">
                  ${escapeHtml(cleanMessage)}
                </div>

                <div style="margin-top:25px;">
                  <a href="mailto:${encodeURIComponent(cleanEmail)}"
                    style="background:#2563eb;color:white;padding:12px 22px;text-decoration:none;border-radius:7px;display:inline-block;">
                    Reply to Sender
                  </a>
                </div>
              </div>

              <div style="background:#f9fafb;padding:18px;text-align:center;color:#9ca3af;font-size:12px;">
                Automated notification from Sheikh Fahad Portfolio
              </div>

            </div>
          </div>
        `
      });

      console.log("Contact notification email sent!");

      return res.status(201).json({
        success: true,
        message: "Message submitted successfully! Email notification sent."
      });

    } catch (emailError) {
      console.error("Gmail Error:", emailError);

      return res.status(201).json({
        success: true,
        message: "Message saved, but email notification could not be sent."
      });
    }

  } catch (error) {
    console.error("Server Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
});

module.exports = router;
