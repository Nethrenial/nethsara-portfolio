interface ContactFormData {
  name: string
  email: string
  subject?: string
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed',
    })
  }

  const config = useRuntimeConfig()
  const body = await readBody<ContactFormData>(event)

  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: name, email, and message are required',
    })
  }

  if (!EMAIL_PATTERN.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format',
    })
  }

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Email configuration not available',
    })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <contact-form@nethsara.me>',
        to: config.emailTo,
        reply_to: body.email,
        subject: body.subject
          ? `nethsara.me — ${body.subject}`
          : `nethsara.me — message from ${body.name}`,
        html: generateEmailHTML(body),
        text: generatePlainTextEmail(body),
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Resend API error:', errorData)
      throw new Error(`Resend API returned ${response.status}`)
    }

    const data = await response.json() as { id: string }

    return {
      success: true,
      messageId: data.id,
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

/** Escapes user-supplied values so a submission cannot inject markup. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function formatReceived(): string {
  return new Date().toLocaleString('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Colombo',
  })
}

function generateEmailHTML(data: ContactFormData): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #e5e5e5;color:#6b6b6b;font-size:13px;width:120px;vertical-align:top;">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid #e5e5e5;color:#131209;font-size:15px;">${value}</td>
    </tr>`

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Message from ${escapeHtml(data.name)}</title>
</head>
<body style="margin:0;padding:32px 16px;background:#f5f1e8;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;width:100%;background:#ffffff;border:1px solid #e5e5e5;border-radius:12px;">
    <tr>
      <td style="padding:32px 32px 24px;border-bottom:1px solid #e5e5e5;">
        <p style="margin:0;color:#6b6b6b;font-size:13px;letter-spacing:0.04em;text-transform:uppercase;">nethsara.me</p>
        <h1 style="margin:8px 0 0;color:#131209;font-size:22px;font-weight:600;letter-spacing:-0.02em;">
          ${escapeHtml(data.name)} sent you a message
        </h1>
      </td>
    </tr>
    <tr>
      <td style="padding:8px 32px 24px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
          ${row('From', escapeHtml(data.name))}
          ${row('Email', `<a href="mailto:${escapeHtml(data.email)}" style="color:#131209;">${escapeHtml(data.email)}</a>`)}
          ${data.subject ? row('Subject', escapeHtml(data.subject)) : ''}
          ${row('Received', formatReceived())}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 32px;">
        <p style="margin:0 0 8px;color:#6b6b6b;font-size:13px;">Message</p>
        <div style="padding:20px;background:#f7f7f7;border-radius:8px;color:#131209;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 32px;border-top:1px solid #e5e5e5;color:#6b6b6b;font-size:13px;">
        Reply to this email to respond to ${escapeHtml(data.name)} directly.
      </td>
    </tr>
  </table>
</body>
</html>`
}

function generatePlainTextEmail(data: ContactFormData): string {
  return [
    `${data.name} sent you a message via nethsara.me`,
    '',
    `From: ${data.name}`,
    `Email: ${data.email}`,
    data.subject ? `Subject: ${data.subject}` : null,
    `Received: ${formatReceived()}`,
    '',
    'Message:',
    data.message,
    '',
    '---',
    `Reply to this email to respond to ${data.name} directly.`,
  ].filter(line => line !== null).join('\n')
}
