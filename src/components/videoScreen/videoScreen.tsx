import React, { useEffect, useState, useRef } from 'react'

export default (): JSX.Element => {
  const [stream, setStream] = useState({active: false})
  const userVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then(video => {
        setStream(video)
        if (userVideo.current) {
          userVideo.current.srcObject = video
        }
      })
      .catch(error => {
        console.error(error)
      })
  }, []);

  return stream.active ? (
    <>
      <video width="750" height="500" autoPlay ref={userVideo} muted />
    </>
  ) : <div>{'Loading...'}</div>
}