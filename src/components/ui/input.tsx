import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // eslint-disable-next-line no-unused-vars
  onChangeText?: (text: string) => void;
  isInvalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onChangeText, isInvalid, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      typeof onChangeText === 'function' && onChangeText(event.target.value);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className='relative'>
        <input
          type={type === 'password' && !showPassword ? 'password' : 'text'}
          className={cn(
            'flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            isInvalid ? 'border-red-500' : 'border-input',
            className
          )}
          ref={ref}
          onChange={handleTextChange}
          {...props}
        />
        {type === 'password' && (
          <button
            type='button'
            className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
