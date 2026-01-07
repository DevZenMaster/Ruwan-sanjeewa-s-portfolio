'use server'

import { z } from 'zod'
import { headers } from 'next/headers'

// 1. Strict Schema: Whitelisting only what we expect.
// We use .trim() and .transform() to sanitize inputs.
const ContactSchema = z.object({
  name: z.string()
    .min(2, "IDENTITY_TOO_SHORT")
    .max(50, "IDENTITY_TOO_LONG")
    .trim()
    .regex(/^[a-zA-Z\s]*$/, "INVALID_CHARACTERS_DETECTED"), // Only allow letters/spaces
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
  // 2. Security Context: Capture metadata for audit logs
  const headerList = await headers()
  const ip = headerList.get('x-forwarded-for') || 'unknown'
  const userAgent = headerList.get('user-agent') || 'unknown'

  try {
    // 3. Anti-Automation: Honeypot Check
    const botTrap = formData.get('bot_trap_node_88') // Obscure name
    if (typeof botTrap === 'string' && botTrap.length > 0) {
      console.warn(`[SECURITY_ALERT] Bot detected from IP: ${ip}`)
      return { success: false, message: 'PROTOCOL_VIOLATION: REQUEST_REJECTED' }
    }

    // 4. Input Validation & Sanitization
    const validatedFields = ContactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    })

    if (!validatedFields.success) {
      return { 
        success: false, 
        message: validatedFields.error.flatten().fieldErrors.name?.[0] || 'DATA_INTEGRITY_FAILURE' 
      }
    }

    const { name, email, subject, message } = validatedFields.data

    // 5. Secure Transmission
    const actionUrl = process.env.CONTACT_FORM_ACTION_URL
    if (!actionUrl) {
      console.error("[CRITICAL] Environment Variable 'CONTACT_FORM_ACTION_URL' is missing.")
      return { success: false, message: 'SYSTEM_OFFLINE' }
    }

    const res = await fetch(actionUrl, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        subject: `[SECURE_GATEWAY] ${subject}`,
        message,
        metadata: {
          src_ip: ip,
          ts: new Date().toISOString(),
          agent: userAgent
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
    // 6. Generic Error Messages (Do not leak system stack traces)
    return { success: false, message: 'INTERNAL_ERROR: ENCRYPTED_LOG_GENERATED' }
  }
}