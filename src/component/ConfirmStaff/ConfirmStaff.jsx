import React, { useState, useRef } from 'react'
import Webcam from "react-webcam";
import { FaCamera } from "react-icons/fa";
import { Button } from '@mui/material';
import swal from 'sweetalert';
import {API_URL } from "../../config"
import { useLocation, useNavigate } from 'react-router-dom';
const ConfirmStaff = () => {
  return (
    <div>

      <CameraCapture />
    </div>
  )
}

const CameraCapture = () => {
    const location= useLocation()
    const webcamRef = useRef(null);
    const [image, setImage] = useState(null);
    const navigate= useNavigate()
    const capture = async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    };
    if(location.state?.uid) {

        return (
          <div style={{display: "flex", width: "100%", justifyContent: "space-around"}}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                <div style={{fontSize: 18}}>Xác thực nhân viên</div>
              <Webcam audio={false} ref={webcamRef} style={{borderRadius: 10}} />
                <div
                style={{
                    display: "flex",
                
                    marginTop: "1rem",
                }}
                >
                <button onClick={capture} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", marginTop: "-4rem", zIndex: 999 }}>
                    <FaCamera size={32} />
                </button>
                </div>
            </div>
            {image && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", flexDirection: "column" }}>
                <div style={{fontSize: 18}}>Ảnh nhân viên</div>
                <img src={image} alt="Captured Image" style={{ width: 200, aspectRatio: 1 / 1, height: 200, objectFit: "cover", borderRadius: 10 }} />
                <br />
                <Button color={"primary"} variant={"contained"} onClick={()=> {
                    swal("Thông báo", "Bạn đã chắc xác nhận đây là khuôn mặt của bạn, Đây là khuôn mặt chúng tôi sẽ chấm công cho bạn mỗi khi bạn đi làm", {buttons: {
                        ok: "Xác nhận",
                        cancel: "Hủy"
                    }})
                    .then(async value=> {
                        if(value=== "ok") {
                            const data = new FormData();
                            data.append('file', image);
                            data.append("name", location.state?.uid)
                            fetch(`${API_URL}/staff/confirm-user`, {
                                method: 'POST',
                                body: data
                            })
                            .then(response => response.json())
                            .then(data => {
                                if(data?.confirm=== true) {
                                    swal("Thông báo", "Bạn đã xác thực thành công, Bạn sẽ được điều hướng đến trang đăng nhập", "success")
                                    .then(()=> navigate("/login", {replace: true}))
                                }
                            })
                            .catch(error => console.error(error));
                        }
                        else {
                            return null
                        }
                    })
                }}>Xác nhận</Button>
              </div>
            )}
          </div>
        );
    }
    else {
        return <div>Đã có lỗi xảy ra. Vui lòng thao tác lại</div>
    }
  };
  

export default ConfirmStaff