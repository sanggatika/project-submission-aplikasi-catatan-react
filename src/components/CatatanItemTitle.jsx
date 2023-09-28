import React from 'react';
 
function CatatanItemTitle({ title }) {
    return (
        <div className="catatan-item__title">
            <h5 className="pt-2">{title}</h5>
        </div>
    );
}
 
export default CatatanItemTitle;