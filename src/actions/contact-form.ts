'use server'

const action = async (_: { success: boolean; message: string } | null, formData: FormData) => {
  try {
    // Validate form fields
    const name = formData.get('name')
    if (!name)
      return { success: false, message: 'Please provide your name.' }

    const email = formData.get('email')
    if (!email)
      return { success: false, message: 'Please provide your email address.' }

    const subject = formData.get('subject')
    if (!subject)
      return { success: false, message: 'Please provide a subject.' }

    const message = formData.get('message')
    if (!message)
      return { success: false, message: 'Please provide a message.' }

    // ✅ Safe fallback for environment variable
    const actionUrl =
      process.env.CONTACT_FORM_ACTION_URL ||
      'https://formspree.io/f/mbdldqzg'

    const res = await fetch(actionUrl, {
      method: process.env.CONTACT_FORM_METHOD || 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (res.ok) {
      return { success: true, message: 'Thanks for your submission!' }
    } else {
      const data = await res.json()
      console.error('Form submission error:', data?.error)

      return {
        success: false,
        message: 'Oops! There was a problem submitting your form.',
      }
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      message: 'Oops! There was a problem submitting your form.',
    }
  }
}

export default action
