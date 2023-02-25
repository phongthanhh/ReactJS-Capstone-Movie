import React from 'react'
import { useSelector } from 'react-redux'
import { LoadingCp } from './loadingCSS'

function Loading() {
  const { isLoading } = useSelector((state) => state.loadingReducer)
  return (
    <>
      {isLoading ? (
        <div
          style={{
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            display: 'grid',
            placeItems: 'center',
            background: '#04020a',
            zIndex: 50
          }}
          className="main"
        >
          <LoadingCp className="loading">
            <span />
            <span />
            <span />
            <span />
            <span />
          </LoadingCp>
        </div>
      ) : ''}
      <span className="visibility: hidden" />
    </>
  )
}

export default Loading
