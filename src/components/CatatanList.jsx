import React from 'react';

import CatatanItem from './CatatanItem';

function CatatanList({ data_catatan, onDelete, onArsip }) {
    if (data_catatan.length === 0) {
        return <div className="catatan-list"><center><h3>-- Tidak Ada Catatan Tersimpan --</h3></center></div>;
    }

    return (
        <div className="catatan-list">
            {
                data_catatan.map((catatan) => (
                    <CatatanItem 
                    key={catatan.id} 
                    id={catatan.id}
                    onDelete={onDelete}
                    onArsip={onArsip}
                    {...catatan} />
                ))
            }
        </div>
    );
}
 
export default CatatanList;