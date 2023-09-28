import React from 'react';

function CatatanItemBtnHapus({ id, onDelete }) {
    return <button className='catatan-item__delete btn btn-secondary me-2 fw-bold' onClick={() => onDelete(id)}><i className="bi bi-clipboard-x me-2"></i> Hapus Catatan</button>
}
   
export default CatatanItemBtnHapus;