import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  const baseClass = 'block w-full rounded-lg border border-gray-300 bg-white text-base text-gray-900 placeholder:text-gray-400 py-3 px-4 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none'
  const errorClass = error ? 'border-red-300 focus:border-red-600 focus:ring-red-600' : ''
  const marginClass = label ? 'mt-1' : ''
  const finalClass = `${baseClass} ${errorClass} ${marginClass} ${className}`.trim()

  return (
    <div>
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        {...props}
        className={finalClass}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

