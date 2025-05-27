"use client"

import React from "react"

type MotionProps = {
  children: React.ReactNode
  initial?: any
  animate?: any
  transition?: any
  className?: string
  [key: string]: any
}

// Simple wrapper component to handle animations without needing the full framer-motion library
export const motion = {
  div: ({ children, initial, animate, transition, className, ...rest }: MotionProps) => {
    const [isClient, setIsClient] = React.useState(false)
    
    React.useEffect(() => {
      setIsClient(true)
    }, [])
    
    if (!isClient) {
      return <div className={className} {...rest}>{children}</div>
    }
    
    // Apply simple CSS animations based on the props
    const style = {
      opacity: animate?.opacity,
      transform: `translateY(${animate?.y}px) scale(${animate?.scale || 1})`,
      transition: `all ${transition?.duration || 0.3}s ease-out ${transition?.delay || 0}s`
    }
    
    return (
      <div 
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </div>
    )
  },
  p: ({ children, initial, animate, transition, className, ...rest }: MotionProps) => {
    return (
      <p 
        className={className}
        style={{
          opacity: animate?.opacity,
          transform: `translateY(${animate?.y}px)`,
          transition: `all ${transition?.duration || 0.3}s ease-out ${transition?.delay || 0}s`
        }}
        {...rest}
      >
        {children}
      </p>
    )
  }
}