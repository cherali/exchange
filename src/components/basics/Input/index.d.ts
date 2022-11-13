import type { ChangeEventHandler, ReactNode } from 'react'

interface InputProps {
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  clearable?: boolean;
}
