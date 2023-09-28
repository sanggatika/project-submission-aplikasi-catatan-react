import React from 'react';
import Swal from 'sweetalert2';
import { getInitialData } from '../utils/index';

import CatatanList from './CatatanList';
import CatatanListArsip from './CatatanListArsip';
import CatatanTambah from './CatatanTambah';
import CatatanFilterPencarian from './CatatanFilterPencarian';

class CatatanApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data_catatan: getInitialData(),
            querySearch:'',
        }

        this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this);
        this.onArsipHandler = this.onArsipHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onFilterHandler = this.onFilterHandler.bind(this);
    }

    onAddCatatanHandler({ titleCatatan, bodyCatatan }) {
        // menggunakan error hendler try catch
        try {
            this.setState((prevState) => {
                const currentDate = new Date();
                const newCatatan = {
                    id: +new Date(),
                    title: titleCatatan,
                    body: bodyCatatan,
                    archived: false,
                    createdAt: currentDate.toISOString(),
                };
            
                // Show a SweetAlert2 success notification
                Swal.fire({
                    title: 'Success!',
                    text: 'Catatan berhasil ditambahkan.',
                    icon: 'success',
                });
        
                return {
                    data_catatan: [...prevState.data_catatan, newCatatan],
                };
            });
        } catch (error) {
            // Show a SweetAlert2 error notification
            Swal.fire({
                title: 'Error!',
                text: 'Catatan gagal saat akan disimpan.',
                icon: 'error',
            });
        }        
    }

    onArsipHandler(id, archived) {
        var data_status = false;
        var tmp_pesan = 'daftar';
        if(archived == false)
        {
            data_status = true;
            tmp_pesan = 'arsip';
        }

        Swal.fire({
            icon: 'info',
            title: 'Kamu akan menyimpan '+tmp_pesan+' Catatan?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // Membuat salinan data_catatan agar tidak mengubah state langsung
                const updatedDataCatatan = this.state.data_catatan.map(catatan => {
                    if (catatan.id === id) {
                    // Jika id cocok, ubah nilai archived menjadi true
                    return { ...catatan, archived: data_status };
                    }
                    return catatan;
                });

                // Setel state dengan data_catatan yang diperbarui
                this.setState({ data_catatan: updatedDataCatatan });

                // Show a SweetAlert2 success notification
                Swal.fire({
                    title: 'Success!',
                    text: 'Catatan berhasil disimpan ke '+tmp_pesan,
                    icon: 'success',
                });
            }
        })        
    }

    onDeleteHandler(id) {
        // console.log(id);        
        Swal.fire({
            icon: 'info',
            title: 'Apakan anda akan menghapus catatan ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const data_catatan = this.state.data_catatan.filter(catatan => catatan.id !== id);
                this.setState({ data_catatan });

                // Show a SweetAlert2 success notification
                Swal.fire({
                    title: 'Success!',
                    text: 'Catatan berhasil dihapus.',
                    icon: 'success',
                });
            }
        })
    }

    // Fungsi untuk melakukan pencarian berdasarkan judul
    onFilterHandler = (filterCatatan) => {
        console.log(filterCatatan);

        this.setState(() => {
            return { querySearch: filterCatatan }
        });
    }

    render() {
        // jumlah catatan
        document.getElementById("v_jumlahCatatan").innerHTML = this.state.data_catatan.length;

        var data_catatan_list = this.state.data_catatan.filter(catatan => catatan.archived == false  && catatan.title.toLowerCase().includes(this.state.querySearch.toLowerCase().trim()));
        var data_catatan_list_arsip = this.state.data_catatan.filter(catatan => catatan.archived == true && catatan.title.toLowerCase().includes(this.state.querySearch.toLowerCase().trim()));
        
        return (
            <div className="catatan-app">
                <CatatanTambah addCatatan={this.onAddCatatanHandler} />
                
                <hr></hr>
                <h3>Filter Data Pencarian</h3>
                <CatatanFilterPencarian onFilter={this.onFilterHandler} />
                <hr></hr>

                <h3>Daftar Catatan</h3>
                
                <CatatanList data_catatan={data_catatan_list} onDelete={this.onDeleteHandler} onArsip={this.onArsipHandler}/>

                <hr></hr>
                <h3>Arsip Catatan</h3>

                <CatatanListArsip data_catatan={data_catatan_list_arsip} onDelete={this.onDeleteHandler} onArsip={this.onArsipHandler}/>
            </div>            
        );
    }
}
export default CatatanApp;