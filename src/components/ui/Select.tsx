import React from 'react'

type SelectProps = {
  options: string[]
  value: string
  onChange: (selectedValue: string) => void
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select
      className='select w-full border-lines-blue !font-[500] outline-none focus:outline-none xs:text-[0.9rem] sm:text-[1rem] md:max-w-xs'
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
