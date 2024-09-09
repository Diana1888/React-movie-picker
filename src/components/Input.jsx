const Input = ( {name, type, placeholder, value, onChange, required, checked} ) => {

  return(
    <div>
    <input 
    name={name}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange} 
    required={required}
    checked={checked}/>

    </div>
  )
}

export default Input;