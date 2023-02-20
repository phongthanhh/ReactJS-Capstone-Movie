import React from 'react'
import { useSelector } from 'react-redux'
import './loading.css'

function Loading() {
  const { isLoading } = useSelector((state) => state.loadingReducer)
  console.log(isLoading)
  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <h2 className="text-white">Loading...</h2>
        </div>
      ) : ''}
    </div>

  )
}

export default Loading
