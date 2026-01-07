import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section id="contact" className="pt-10 pb-20 max-w-[1200px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* INFO TILE: Dynamic Glassmorphism */}
        <div className="md:col-span-5 relative group">
          <div className="h-full bg-secondary/30 border border-border/20 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between overflow-hidden relative backdrop-blur-md">
             {/* Dynamic Theme-Aware Glow */}
             <div className="absolute -top-24 -right-24 size-64 bg-accent/20 blur-[100px] group-hover:opacity-100 opacity-40 transition-all duration-700" />
             
             <div className="relative z-10">
               <h3 className="text-primary-content text-5xl font-bold tracking-tighter leading-none">
                 Let's <span className="text-accent italic">Talk</span>
               </h3>
               <p className="text-tertiary-content mt-6 text-sm leading-relaxed max-w-[280px]">
                 Available for global opportunities in SecOps, Cloud Architecture, and Technical Leadership.
               </p>
             </div>

             <div className="relative z-10 mt-12 space-y-4">
               <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-2">Direct Lines</p>
               
               <a href="mailto:tmruwansanjeewa@gmail.com" className="flex items-center gap-4 group/link">
                 <div className="size-11 bg-primary/20 rounded-2xl flex items-center justify-center border border-border/30 group-hover/link:border-accent transition-colors text-neutral group-hover/link:text-accent">
                    <MsgIcon />
                 </div>
                 <span className="text-xs font-medium text-primary-content/70 group-hover/link:text-primary-content transition-colors">
                   tmruwansanjeewa@gmail.com
                 </span>
               </a>

               <a href="tel:+94703383837" className="flex items-center gap-4 group/link">
                 <div className="size-11 bg-primary/20 rounded-2xl flex items-center justify-center border border-border/30 group-hover/link:border-accent transition-colors text-neutral group-hover/link:text-accent">
                    <PhoneIcon />
                 </div>
                 <span className="text-xs font-medium text-primary-content/70 group-hover/link:text-primary-content transition-colors">
                   +94 70 338 3837
                 </span>
               </a>
             </div>
          </div>
        </div>

        {/* FORM TILE: High Contrast Stealth Form */}
        <div className="md:col-span-7 bg-secondary/30 border border-border/20 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl relative shadow-2xl">
          {/* Top Decorative Beam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          
          <div className="mb-8">
            <h4 className="text-primary-content text-xl font-bold uppercase tracking-tight">Send a Message</h4>
            <p className="text-accent text-[10px] mt-1 uppercase tracking-[0.2em] font-bold opacity-80">Encrypted Transmission</p>
          </div>

          <ContactForm />
        </div>

      </div>
    </section>
  )
}

export default ContactSection