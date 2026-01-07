import { ButtonHTMLAttributes, FC } from 'react'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & { text: string }> = ({ text, className, ...props }) => (
  <button 
    {...props} 
    className={`relative overflow-hidden group w-full py-4 rounded-2xl border border-accent/40 transition-all duration-500 bg-transparent cursor-pointer ${className}`}
  >
    <span className="absolute inset-0 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />
    <span className="relative z-10 flex items-center justify-center gap-2 text-accent group-hover:text-primary transition-colors duration-500 text-[11px] font-bold uppercase tracking-[0.3em]">
      {text}
    </span>
  </button>
)
export default Button