import React from 'react'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export function Select({ label, error, options, className = '', ...props }: SelectProps) {
  const baseClass = 'block w-full rounded-lg border border-gray-300 bg-white text-base text-gray-900 py-3 px-4 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none'
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
      <select
        {...props}
        className={finalClass}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

