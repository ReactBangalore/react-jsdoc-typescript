// @ts-check
import React, { useState, useEffect } from "react"

function FriendStatus() {
  const [isOnline, setIsOnline] = useState(null)

  /**
   * @param {{ isOnline: (boolean|null); }} status
   */
  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    setTimeout(() => {
      handleStatusChange({ isOnline: true })
    }, 2000)

    return () => {
      setTimeout(() => {
        handleStatusChange({ isOnline: false })
      }, 2000)
    }
  })

  if (isOnline === null) {
    return <p>Loading...</p>
  }
  return <p>{isOnline ? "Online" : "Offline"}</p>
}

export default FriendStatus
