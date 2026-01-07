'use server'

import { z } from 'zod'
import { headers } from 'next/headers'

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
  const headerList = await headers()
  const ip = headerList.get('x-forwarded-for') || 'unknown'
  const userAgent = headerList.get('user-agent') || 'unknown'

  try {
    const botTrap = formData.get('bot_trap_node_88')
    if (typeof botTrap === 'string' && botTrap.length > 0) {
      return { success: false, message: 'PROTOCOL_VIOLATION: REQUEST_REJECTED' }
    }

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

    const actionUrl = process.env.CONTACT_FORM_ACTION_URL
    if (!actionUrl) {
      return { success: false, message: 'SYSTEM_OFFLINE' }
    }

    const res = await fetch(actionUrl, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        // CHANGED: Added the reference tag to the subject line
        subject: `[Ruwan Sanjeewa's Portfolio] - ${subject}`, 
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
    return { success: false, message: 'INTERNAL_ERROR' }
  }
}