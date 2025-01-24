import React, { useState } from 'react'
import { send } from 'emailjs-com'
import './Kontak.scss'

function Kontak() {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        pesan: ''
    })
    const [errMessage, setErrMessage] = useState({})
    const [loadingSubmit, setLoadingSubmit] = useState(false)

    function changeInput(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function sendMessage() {
        const newData = {
            from_name: `"Your Portfolio"`,
            to_name: 'Mohamad Ridwan Apriyadi',
            to_email: 'ridwan.reactjs@gmail.com',
            message: `Dari Nama : ${formData.nama}`,
            token: `Email : ${formData.email}`,
            note: formData.pesan
        }

        const serviceID = 'service_hmqukxt'
        const templateID = 'template_lwvigvh'
        const publicKey = '9OBxoKBI85PFlIkj7'

        send(serviceID, templateID, newData, publicKey)
            .then(res => {
                setFormData({
                    nama: '',
                    email: '',
                    pesan: ''
                })
                alert('Telah berhasil mengirimkan pesan!')
                setLoadingSubmit(false)
            })
            .catch(err => {
                console.log(err)
                alert('Oops! terjadi kesalahan server.\nMohon coba beberapa saat lagi!')
                setLoadingSubmit(false)
            })
    }

    function submitData() {
        let err = {}

        const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(loadingSubmit === false){
            if (!formData.nama || !formData.nama.trim()) {
                err.nama = 'Nama harus diisi!'
            }
            if (!formData.email || !formData.email.trim()) {
                err.email = 'Email harus diisi!'
            } else if (!formData.email.match(validRegex)) {
                err.email = 'Email tidak valid!'
            }
            if (!formData.pesan || !formData.pesan.trim()) {
                err.pesan = 'Pesan harus diisi!'
            }
    
            if (Object.keys(err).length === 0 && window.confirm('Kirim pesan?')) {
                setLoadingSubmit(true)
    
                
                sendMessage()
            }
    
            setErrMessage(err)
        }
    }

    return (
        <>
            <div className="kontak" id='kontak'>
                <div className="width-kontak">
                    <div className="wrapp-google-maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.985849919385!2d106.79462772110102!3d-6.459057920540529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e9e7ede517f7%3A0xb8953bf5dd0f86f1!2sJl.%20Sunan%20Muria%20IV%2C%20Pabuaran%2C%20Kec.%20Bojong%20Gede%2C%20Bogor%2C%20Jawa%20Barat%2016921!5e0!3m2!1sid!2sid!4v1637844448487!5m2!1sid!2sid" width="100%" style={{
                            border: '0px'
                        }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="form-kontak">
                        <h6 className="title-kontak">
                            Kontak Saya
                        </h6>
                        <p className="deskripsi-kontak">
                            Jika Bapak/Ibu tertarik dengan posisi dan kemampuan yang Saya miliki, dapat hubungi Saya melalui kontak dibawah ini.
                        </p>

                        <div className="column-input">
                            <label htmlFor="label" className="label-input">Nama</label>
                            <input type="text" name='nama' className="input" onChange={changeInput} value={formData.nama} />
                            <p className="error-message">
                                {errMessage && errMessage.nama}
                            </p>
                        </div>
                        <div className="column-input">
                            <label htmlFor="label" className="label-input">Email</label>
                            <input type="email" name='email' className="input" onChange={changeInput} value={formData.email} />
                            <p className="error-message">
                                {errMessage && errMessage.email}
                            </p>
                        </div>
                        <div className="column-input">
                            <label htmlFor="label" className="label-input">Pesan</label>
                            <textarea name="pesan" id="" cols="30" rows="10" className='input' onChange={changeInput}></textarea>
                            <p className="error-message">
                                {errMessage && errMessage.pesan}
                            </p>
                        </div>

                        <button className="btn-submit" onClick={submitData}>
                            Submit

                            <div className="loading-submit" style={{display: loadingSubmit ? 'flex' : 'none'}}>
                                <div className="circle-loading-submit">

                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kontak