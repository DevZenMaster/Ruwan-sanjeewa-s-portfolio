'use client'

import action from '@/actions/contact-form'
import { useActionState } from 'react'
import { motion } from 'framer-motion'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

const ContactForm = () => {
  const [status, formAction, isPending] = useActionState(action, null)

  if (status?.success) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-87.5 space-y-6" // Fixed CSS
      >
        <div className="size-20 border-2 border-accent text-accent rounded-full flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(24,242,229,0.4)]">
          ✓
        </div>
        <div className="text-center">
          <h5 className="text-white text-2xl font-bold tracking-tight">TRANSMISSION_SUCCESS</h5>
          <p className="text-accent text-[10px] mt-2 uppercase tracking-[0.2em]">Intel logged. Awaiting response.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot */}
      <div className="absolute opacity-0 -z-50 size-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="bot_trap_node_88">Do not fill this field</label>
        <input id="bot_trap_node_88" name="bot_trap_node_88" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="IDENTITY" name="name" id="name" placeholder="Agent Name" required />
        <Input label="DIGITAL_MAIL" name="email" id="email" type="email" placeholder="mail@domain.com" required />
      </div>

      <Input label="ENCRYPTION_SUBJECT" name="subject" id="subject" placeholder="Project Inquiry" required />
      <Textarea name="message" id="message" label="INTEL_MESSAGE" rows={3} placeholder="Provide tactical details..." required />

      {status?.message && !status.success && (
        <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
          <p className="text-[10px] uppercase font-black text-red-500 tracking-widest leading-none">
            {status.message}
          </p>
        </div>
      )}

      <div className="pt-4">
        <Button 
          text={isPending ? 'ENCRYPTING...' : 'SEND_TRANSMISSION'} 
          disabled={isPending} 
        />
      </div>
    </form>
  )
}

export default ContactForm