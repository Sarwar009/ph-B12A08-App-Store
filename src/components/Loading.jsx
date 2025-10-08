import React from 'react'
import { useNavigation } from 'react-router-dom'

export default function Loading() {
  const navigation = useNavigation?.()
  const isLoading = navigation && navigation.state === 'loading'
  return (
    <div>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="w-12 h-12 border-4 border-white loader"></div>
        </div>
      )}
    </div>
  )
}
