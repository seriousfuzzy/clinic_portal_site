import React from 'react'
import { Input, InputProps } from './input'

export interface DateInputProps extends Omit<InputProps, 'type'> {
  // DateInput固有のプロパティがあれば追加
}

export function DateInput(props: DateInputProps) {
  return <Input type="date" {...props} />
}

