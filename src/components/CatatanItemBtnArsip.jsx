import React from 'react';

function CatatanItemBtnArsip({ id, archived, onArsip }) {
    if (archived == false) {
        return <button className='catatan-item__arsip btn btn-info me-2 fw-bold' onClick={() => onArsip(id, archived)}><i className="bi bi-clipboard-minus me-2"></i> Arsipkan Catatan</button>
    }else{
        return <button className='catatan-item__arsip btn btn-primary me-2 fw-bold' onClick={() => onArsip(id, archived)}><i className="bi bi-clipboard-check me-2"></i> Daftar Catatan</button>
    }
}
   
export default CatatanItemBtnArsip;