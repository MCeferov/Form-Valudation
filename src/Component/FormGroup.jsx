import React from 'react'
const styles= {
    formGroup : "flex flex-col mb-2",
    formGroupLabel : 'mb-2',
    formGroupInput: "border border-gray-600 rounded-lg placeholder:font-sans-serif px-2 py-1 text-sm placeholder:text-gray-500 focus:outline-none",
    formGroupError: "mt-2 text-sm text-red-500",
}

const FormGroup = React.forwardRef((props,ref) => {


  return (
    <div className={styles.formGroup}>
        <label htmlFor={props.id} className={styles.formGroupLabel}>
           {props.label}
        </label>
        <input 
        autoComplete="off"
        ref={ref}
                type={props.type}
        id={props.id}
        className={`${styles.formGroupInput} ${props.error ? "border-red-500" : ""}`} 
        placeholder={props.placeholder}
        />
        {props.error &&( 
        <p className={styles.formGroupError}>{props.errorMessage}</p>
        )} 
    </div>
  )
})

export default FormGroup