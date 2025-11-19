// src/composants/textbloc.tsx
import React from 'react'

interface TextBlocProps {
  title?: string
  text?: string
  text1?: string
  text2?: string
  text3?: string
  list?: string[]
}

const TextBloc: React.FC<TextBlocProps> = ({ title, text, list }) => {
  // ⬅️ Ne rien afficher si ni text ni list
  if (!text && (!list || list.length === 0)) {
    return null
  }

  return (
    <div className="mb-6">
      {title && <h2 className="text-2xl font-bold mb-3 text-black">{title}</h2>}
      
      {text && <p className="text-black leading-relaxed mb-3">{text}</p>}
      
      {list && list.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TextBloc