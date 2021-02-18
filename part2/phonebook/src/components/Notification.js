import React from 'react'

const Notification = ({ message, notificationType }) => {
    if (message === null) {
      return null
    }
    if (notificationType === 'error') {
    return (
      <div className = "error">
        {message}
      </div>
    )
    }
    if (notificationType === 'notification') {
      return (
        <div className = "notification">
          {message}
        </div>
      )
      }
  }
  export default Notification