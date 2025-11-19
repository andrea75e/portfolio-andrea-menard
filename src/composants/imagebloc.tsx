// src/composants/imagebloc.tsx
import React from 'react'

interface ImageBlocProps {
  src: string[]
  alt: string
}

const ImageBloc: React.FC<ImageBlocProps> = ({ src, alt }) => {
  if (!src || src.length === 0) {
    return null
  }
console.log(alt)
  return (
    <div className="my-6">
      {src.map((imageSrc, index) => (
        <img 
          key={index}
          src={imageSrc} 
          alt={`${alt} ${index + 1}`}
          className={` ${alt == 'Football' ? 'h-50' : 'h-full'} rounded-lg shadow-lg mb-4 `}
          onError={(e) => {
            console.error('❌ Erreur de chargement image:', imageSrc)
            e.currentTarget.style.display = 'none'
          }}
        />
      ))}
    </div>
  )
}

export default ImageBloc