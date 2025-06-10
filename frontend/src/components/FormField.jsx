import React from 'react'

const FormField = ({
  label,
  type,
  name,
  onChange,
  onClick,
  className = 'text-white text-sm font-medium',
  value,
  placeholder,
  error,
  Icon,
  required

}) => {
  return (
    <div>
        <label 
        htmlFor={name}
        className={`${className} focus:ring-0 focus:outline-none`}>{label}</label>
        
        <div className='relative'>
          <input 
          type={type}
          name={name} 
          className={`border border-slate-700 w-full h-10 mb-4 mt-2 text-slate-400 p-4 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none `}
          value={value}
          onChange={onChange}
          placeholder={placeholder} 
          required={required}                  
          />

          {Icon && 
            <div className='text-slate-400 absolute top-[45%] right-3 transform -translate-y-1/2 cursor-pointer'
            onClick={onClick}>
                {<Icon size={18}/>}
            </div>
          }

        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

    </div>
  )
}

export default FormField