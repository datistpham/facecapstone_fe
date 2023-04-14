import React, { useState, useRef } from 'react'
import Webcam from "react-webcam";
import axios from "axios";
import { FaCamera } from "react-icons/fa";

const TimeKeeping = () => {
  return (
    <div>
      <CameraCapture />
    </div>
  )
}

const CameraCapture = () => {
    const webcamRef = useRef(null);
    const [image, setImage] = useState(null);
  
    const capture = async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
      await uploadImage(imageSrc);
    };
  
    const uploadImage = async (base64EncodedImage) => {
      try {
        await axios.post("/api/upload", { data: base64EncodedImage });
        console.log("Image uploaded successfully");
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Webcam audio={false} ref={webcamRef} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <button onClick={capture} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", marginTop: "-4rem", position: "relative", zIndex: 999 }}>
            <FaCamera size={32} />
          </button>
        </div>
        {image && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <img src={image} alt="Captured Image" style={{ maxWidth: "100%" }} />
          </div>
        )}
      </>
    );
  };
  

export default TimeKeeping