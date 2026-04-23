import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  subject?: string
  budget?: string
  message: string
}

export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed',
    })
  }

  const config = useRuntimeConfig()
  const body = await readBody<ContactFormData>(event)

  // Validate required fields
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: name, email, and message are required',
    })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format',
    })
  }

  // Check if email configuration is available
  if (!config.emailUser || !config.emailPassword) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Email configuration not available',
    })
  }

  try {
    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: config.emailHost,
      port: config.emailPort,
      secure: true,
      auth: {
        user: config.emailUser,
        pass: config.emailPassword,
      },
    })

    // Generate beautiful HTML email template
    const htmlTemplate = generateEmailHTML(body)

    // Email options
    const mailOptions = {
      from: config.emailUser, // Use authenticated email address as sender
      to: config.emailTo,
      replyTo: body.email, // User can reply directly to the contact person
      subject: body.subject ? `Portfolio Contact: ${body.subject}` : `Portfolio Contact from ${body.name}`,
      html: htmlTemplate,
      text: generatePlainTextEmail(body), // Fallback plain text
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    return {
      success: true,
      messageId: info.messageId,
    }
  }
  catch (error) {
    console.error('Email sending failed:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email',
    })
  }
})

function generateEmailHTML(data: ContactFormData): string {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  })

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            padding: 20px 0;
        }
        .container {
            max-width: 640px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.06);
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 32px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
            opacity: 0.5;
        }
        .header-content {
            position: relative;
            z-index: 1;
        }
        .header h1 {
            color: white;
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 12px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
            font-weight: 500;
        }
        .content {
            padding: 0;
            background: #ffffff;
        }
        .section {
            padding: 32px;
            border-bottom: 1px solid #f1f5f9;
        }
        .section:last-child {
            border-bottom: none;
        }
        .section-title {
            font-size: 18px;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .contact-info {
            display: grid;
            gap: 20px;
        }
        .info-item {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 24px;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            transition: all 0.2s ease;
        }
        .info-item:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        .info-icon {
            font-size: 18px;
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            text-align: center;
            line-height: 1;
        }
        .info-content {
            flex: 1;
        }
        .info-label {
            font-weight: 600;
            color: #4a5568;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        .info-value {
            color: #1a202c;
            font-weight: 600;
            font-size: 16px;
            word-break: break-word;
        }
        .budget-badge {
            display: inline-flex;
            align-items: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        .message-section {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border: 2px solid #e2e8f0;
            border-radius: 20px;
            padding: 28px;
            margin: 0;
            position: relative;
            overflow: hidden;
        }
        .message-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .message-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }
        .message-icon {
            font-size: 20px;
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
            text-align: center;
            line-height: 1;
        }
        .message-title {
            font-weight: 700;
            color: #1a202c;
            font-size: 18px;
        }
        .message-content {
            color: #2d3748;
            line-height: 1.8;
            white-space: pre-wrap;
            font-size: 16px;
            background: white;
            padding: 24px;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .footer {
            background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
            padding: 32px;
            text-align: center;
        }
        .footer-content {
            max-width: 400px;
            margin: 0 auto;
        }
        .footer p {
            color: #a0aec0;
            font-size: 14px;
            line-height: 1.6;
        }
        .footer strong {
            color: #e2e8f0;
            font-weight: 700;
        }
        .footer .website-link {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 800;
        }
        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%);
            margin: 24px 0;
        }
                     @media (max-width: 640px) {
                 body {
                     padding: 10px 0;
                 }
                 .container {
                     margin: 0 10px;
                     border-radius: 16px;
                 }
                 .header {
                     padding: 32px 24px;
                 }
                 .section {
                     padding: 24px 20px;
                 }
                 .info-item {
                     flex-direction: row;
                     align-items: center;
                     gap: 16px;
                     padding: 20px;
                 }
                 .message-section {
                     padding: 20px;
                 }
                 .footer {
                     padding: 24px 20px;
                 }
             }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-content">
                <h1>🚀 New Contact Form Submission</h1>
                <p>Someone reached out through your portfolio website</p>
            </div>
        </div>
        
        <div class="content">
            <div class="section">
                <h2 class="section-title">
                    <span>📋</span>
                    Contact Information
                </h2>
                <div class="contact-info">
                    <div class="info-item">
                        <div class="info-icon">👤</div>
                        <div class="info-content">
                            <div class="info-label">Full Name</div>
                            <div class="info-value">${data.name}</div>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">📧</div>
                        <div class="info-content">
                            <div class="info-label">Email Address</div>
                            <div class="info-value">${data.email}</div>
                        </div>
                    </div>
                    
                    ${data.subject
                      ? `
                    <div class="info-item">
                        <div class="info-icon">📝</div>
                        <div class="info-content">
                            <div class="info-label">Subject</div>
                            <div class="info-value">${data.subject}</div>
                        </div>
                    </div>
                    `
                      : ''}
                    
                    ${data.budget
                      ? `
                    <div class="info-item">
                        <div class="info-icon">💰</div>
                        <div class="info-content">
                            <div class="info-label">Project Budget</div>
                            <div class="info-value">
                                <span class="budget-badge">${data.budget}</span>
                            </div>
                        </div>
                    </div>
                    `
                      : ''}
                    
                    <div class="info-item">
                        <div class="info-icon">🕒</div>
                        <div class="info-content">
                            <div class="info-label">Received On</div>
                            <div class="info-value">${currentDate}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="message-section">
                    <div class="message-header">
                        <div class="message-icon">💬</div>
                        <div class="message-title">Message Content</div>
                    </div>
                    <div class="message-content">${data.message}</div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-content">
                <p>This email was sent from your portfolio contact form at <span class="website-link">nethsara.me</span></p>
                <div class="divider"></div>
                <p style="font-size: 13px;">You can reply directly to this email to respond to <strong>${data.name}</strong></p>
            </div>
        </div>
    </div>
</body>
</html>
  `.trim()
}

function generatePlainTextEmail(data: ContactFormData): string {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  })

  return `
NEW CONTACT FORM SUBMISSION

Name: ${data.name}
Email: ${data.email}
${data.subject ? `Subject: ${data.subject}` : ''}
${data.budget ? `Budget: ${data.budget}` : ''}
Received: ${currentDate}

Message:
${data.message}

---
This email was sent from your portfolio contact form at nethsara.me
You can reply directly to this email to respond to ${data.name}
  `.trim()
}
