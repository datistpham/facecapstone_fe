import React from 'react'
import Navbar from './Component/NavBar'
import { Button, Image } from 'antd'

const Information = () => {
  return (
    <div style={{width: "100%", display: "flex", height: "100vh"}}>
        <Navbar />
        <div style={{flex: "1 1 0", padding: 20}}>
            <div style={{width: "100%", maxWidth: 600, display: "flex", gap: 60, margin: 100}}>
                <div>
                    <div style={{textAlign: "center", marginBottom: 12}}>Nguyễn Minh Anh</div>
                    <Image src={""} style={{width: 200, aspectRatio: 1 / 1}} alt={""} />
                </div>
                <div>
                    <div style={{marginBottom: 12}}>Họ và tên: Nguyễn Minh Anh</div>
                    <div style={{marginBottom: 12}}>Ngày tháng năm sinh: 03/12/2000</div>
                    <div style={{marginBottom: 12}}>Email: minhanh@gmail.com</div>
                    <div style={{marginBottom: 12}}>SDT: 0123</div>
                    <div style={{marginBottom: 12}}>Chức vụ: Nhân viên</div>
                </div>
            </div>
            <div style={{width: "100%", maxWidth: 600, direction: "rtl"}}>
                <Button type={"primary"} style={{marginLeft: 12}}>Sửa</Button>
                <Button type={"primary"}>Lưu</Button>
            </div>
        </div>
    </div>
  )
}

export default Information