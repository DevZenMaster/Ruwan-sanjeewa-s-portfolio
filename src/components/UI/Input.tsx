import { FC, InputHTMLAttributes } from 'react'

const Input: FC<InputHTMLAttributes<HTMLInputElement> & { label?: string }> = ({ label, id, ...props }) => (
  <div className="flex flex-col gap-1.5 group w-full">
    {label && (
      <label 
        htmlFor={id} 
        className="text-[10px] uppercase tracking-[0.25em] font-bold text-neutral/80 group-focus-within:text-accent transition-colors ml-1"
      >
        {label}
      </label>
    )}
    <input 
      id={id} 
      {...props} 
      className="bg-neutral/5 border-b-2 border-border/50 py-3 px-2 text-sm text-primary-content outline-none focus:border-accent transition-all placeholder:text-neutral/50 hover:bg-neutral/10" 
    />
  </div>
)
export default Input