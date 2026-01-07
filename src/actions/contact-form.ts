'use server'

import { z } from 'zod'
import { headers } from 'next/headers'
import { checkBotId } from 'botid/server' // Import BotID server-side check

const ContactSchema = z.object({
  name: z.string()
    .min(2, "IDENTITY_TOO_SHORT")
    .max(50, "IDENTITY_TOO_LONG")
    .trim(),
  email: z.string()
    .email("INVALID_DIGITAL_MAIL")
    .max(100)
    .trim()
    .toLowerCase(),
  subject: z.string()
    .min(3, "SUBJECT_REQUIRED")
    .max(100)
    .trim(),
  message: z.string()
    .min(10, "INTEL_TOO_SHORT")
    .max(2000, "INTEL_LIMIT_EXCEEDED")
    .trim(),
})

export default async function action(_: any, formData: FormData) {
  // 1. Perform BotID verification
  // This must be called before processing sensitive data
  const verification = await checkBotId()
 
  if (verification.isBot) {
    console.warn(`[SECURITY_ALERT] BotID detected automated activity.`)
    return { success: false, message: 'PROTOCOL_VIOLATION: BOT_DETECTED' }
  }

  const headerList = await headers()
  const ip = headerList.get('x-forwarded-for') || 'unknown'
  const userAgent = headerList.get('user-agent') || 'unknown'

  try {
    // 2. Legacy Honeypot Check (Optional secondary defense)
    const botTrap = formData.get('bot_trap_node_88')
    if (typeof botTrap === 'string' && botTrap.length > 0) {
      return { success: false, message: 'PROTOCOL_VIOLATION: REQUEST_REJECTED' }
    }

    // 3. Input Validation
    const validatedFields = ContactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    })

    if (!validatedFields.success) {
      return { success: false, message: 'DATA_INTEGRITY_FAILURE' }
    }

    const { name, email, subject, message } = validatedFields.data

    // 4. Check Environment Configuration
    const actionUrl = process.env.CONTACT_FORM_ACTION_URL
    if (!actionUrl) {
      console.error("[CRITICAL] CONTACT_FORM_ACTION_URL is missing from environment.")
      return { success: false, message: 'SYSTEM_OFFLINE' }
    }

    // 5. Transmission with custom Subject Tag
    const res = await fetch(actionUrl, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        // Reference tag added for your inbox identification
        subject: `[Ruwan Sanjeewa's Portfolio] - ${subject}`, 
        message,
        metadata: {
          src_ip: ip,
          ts: new Date().toISOString(),
          agent: userAgent,
          botid_verified: !verification.isBot
        }
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    if (!res.ok) throw new Error('UPLINK_ERROR')

    return { success: true, message: 'TRANSMISSION_COMPLETE' }

  } catch (error) {
    return { success: false, message: 'INTERNAL_ERROR' }
  }
}