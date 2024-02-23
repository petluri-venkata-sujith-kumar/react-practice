const Button = ({children,onTest}) => {
  return (
    <button onClick={onTest}>
        {children}
    </button>
  )
}

export default Button