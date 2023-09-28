import React from 'react';
import Swal from 'sweetalert2';

class CatatanTambah extends React.Component {
    // constructor dan handler
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            titleCatatan: '',
            bodyCatatan: '',
        }

        this.onTitleCatatanChangeEventHandler = this.onTitleCatatanChangeEventHandler.bind(this);
        this.onBodyCatatanChangeEventHandler = this.onBodyCatatanChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);        
    }

    onTitleCatatanChangeEventHandler(event) {
        this.setState(() => {
            return {
                titleCatatan: event.target.value,
            }
        });
    }

    onBodyCatatanChangeEventHandler(event) {
        this.setState(() => {
            return {
                bodyCatatan: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        // validasi input data
        if(this.state.titleCatatan.length == 0 || this.state.bodyCatatan.length == 0)
        {
            Swal.fire({
                icon: 'info',
                title: 'Informasi !',
                text: 'Data Form Wajib Untuk Di Isi Semua, Terimakasih.'
            });
            return false; 
        }

        if(this.state.titleCatatan.length > 50)
        {
            Swal.fire({
                icon: 'info',
                title: 'Informasi !',
                text: 'Aplikasi dapat mencegah pengguna untuk memberikan judul catatan lebih dari 50 karakter'
            });
            return false; 
        }

        Swal.fire({
            icon: 'info',
            title: 'Apa anda akan menyimpan catatan ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                this.props.addCatatan(this.state);
            }
        })        
    }

    render() {
        return (
            <div className="catatan-tambah">
                <div className="alert alert-info" role="alert">
                    <h4 className="alert-heading">Tambah Catatan Pribadi</h4>
                    <form className='contact-input__form' onSubmit={this.onSubmitEventHandler}>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleFormControlInput1"><b>Judul Catatan</b></label>
                            <input type="text" className="form-control" placeholder="Judul Catatan Pribadi" value={this.state.titleCatatan} onChange={this.onTitleCatatanChangeEventHandler} />
                            <small className="mx-1">judul catatan maksimal 50 karakter ( Sisa {50-this.state.titleCatatan.length} Karakter )</small>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleFormControlInput2"><b>Isi Catatan</b></label>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Isi Catatan Pribadi" rows="5" value={this.state.bodyCatatan} onChange={this.onBodyCatatanChangeEventHandler}></textarea>
                                <label htmlFor="floatingTextarea2">Isi Catatan Pribadi</label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary btn fw-bold"><i className="bi bi-clipboard-check me-2"></i> Simpan Catatan</button>
                        </div>
                    </form>                    
                </div>
            </div>
        )
    }
}

export default CatatanTambah;