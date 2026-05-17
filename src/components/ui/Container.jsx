import './Container.css'

export function Container({ children, className = '', narrow = false }) {
  return (
    <div
      className={`pj-container ${narrow ? 'pj-container--narrow' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
