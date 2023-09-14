import React from 'react'

type SelectProps = {
  options: string[]
  value: string
  onChange: (selectedValue: string) => void
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select
      className='select w-full max-w-xs border-lines-blue outline-none focus:outline-none'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option} className=''>
          {option}
        </option>
      ))}
    </select>
  )
}
