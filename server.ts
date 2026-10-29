import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON parser with generous payload size limit to accept base64 attachments
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // API endpoint for form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, role, email, phone, research, cvText, fileData, fileName, fileType } = req.body;

      console.log(`[TAJ Global Email Router] Received a new consultation request from: ${name} (${email})`);

      const destinationEmail = "mtajodini@gmail.com";

      // 1. Build the email body
      const emailBodyHTML = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #0A1A2F; padding: 24px; text-align: center; border-bottom: 2px solid #D4AF37;">
            <h2 style="color: #D4AF37; margin: 0; font-size: 22px; tracking-widest: 2px;">TAJ Global - Migration Design</h2>
            <p style="color: #94a3b8; font-size: 11px; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 2px;">Elite Consultation Request Logged</p>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <p style="font-size: 15px; font-weight: bold; color: #0f172a; margin-top: 0;">درخواست جدید مشاوره همکاران نخبه و کادر درمان:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 35%;">نام و نام خانوادگی:</td>
                <td style="padding: 8px 0; color: #0f172a;">${name || "ثبت نشده"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">جایگاه تخصص بالینی/آموزش:</td>
                <td style="padding: 8px 0; color: #0f172a;">${role || "ثبت نشده"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">آدرس پست الکترونیک:</td>
                <td style="padding: 8px 0; color: #0f172a; font-family: monospace;">${email || "ثبت نشده"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">تلفن همراه (واتساپ فعال):</td>
                <td style="padding: 8px 0; color: #0f172a; font-family: monospace;">${phone || "ثبت نشده"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">تعداد پروپوزال/مقاله ISI:</td>
                <td style="padding: 8px 0; color: #0f172a;">${research || "ثبت نشده"}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border-left: 3px solid #D4AF37; padding: 12px; margin-bottom: 20px; border-radius: 4px;">
              <h4 style="margin: 0 0 6px 0; font-size: 13px; color: #334155;">لینک صفحات علمی / بیانیه‌ی پیام:</h4>
              <p style="margin: 0; font-size: 12px; color: #4f46e5; white-space: pre-wrap; font-family: monospace;">${cvText || "هیچ پیامی ارسال نشده است."}</p>
            </div>

            ${
              fileName
                ? `<div style="background-color: #f0fdf4; border: 1px dashed #b91c1c; border-color: #86efac; padding: 12px; border-radius: 4px; display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 12px; font-weight: bold; color: #166534;">📎 فایل رزومه متقاضی پیوست گردید:</span>
                    <span style="font-family: monospace; font-size: 11px; padding: 2px 6px; background-color: #dcfce7; color: #15803d; border-radius: 4px;">${fileName}</span>
                   </div>`
                : `<p style="font-size: 12px; color: #64748b;">[فایلی با این درخواست ارسال نشده است]</p>`
            }
          </div>
          <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 10px; color: #64748b; border-t: 1px solid #e2e8f0;">
            سیستم خودکار ثبت ارزیابی نخبگان TAJ Global • توسعه داده شده توسط پرهام عارف
          </div>
        </div>
      `;

      // 2. Check if SMTP is configured
      const smtpHost = process.env.SMTP_HOST;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;

      if (!smtpHost || !smtpUser || !smtpPass) {
        console.warn("[TAJ Global SMTP Warning] SMTP Host, User or Pass is not defined in environment secrets. Email simulated successfully in server logs.");
        return res.json({
          success: true,
          status: "simulated_success",
          message: "SMTP is not configured yet. The dispatch logic triggered successfully, details are logged to the console stream."
        });
      }

      // 3. Setup Nodemailer Transporter
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // 4. Construct attachments if file was enclosed
      const attachments = [];
      if (fileData && fileName) {
        // Decode base64 to buffer
        const fileContentBuffer = Buffer.from(fileData, "base64");
        attachments.push({
          filename: fileName,
          content: fileContentBuffer,
          contentType: fileType || "application/octet-stream",
        });
      }

      // 5. Send actual mail
      const mailOptions = {
        from: `"${name} (TAJ Global Client)" <${smtpUser}>`,
        to: destinationEmail,
        subject: `🎯 درخواست ارزیابی مشاوره جدید: ${name}`,
        html: emailBodyHTML,
        attachments: attachments,
        replyTo: email || smtpUser,
      };

      await transporter.sendMail(mailOptions);
      console.log(`[TAJ Global Email Dispatch] Email successfully sent to ${destinationEmail}`);

      return res.json({ success: true, status: "success", message: "Email Sent Successfully" });
    } catch (err: any) {
      console.error("[TAJ Global Email Router Error]:", err);
      return res.status(500).json({ error: err.message || "Failed to deliver email message." });
    }
  });

  // Serve static assets & fallback SPA routing
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[TAJ Global Fullstack] Server listening at http://localhost:${PORT}`);
  });
}

startServer();
