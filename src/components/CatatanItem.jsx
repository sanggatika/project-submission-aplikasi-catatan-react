import React from 'react';

import CatatanItemTitle from './CatatanItemTitle';
import CatatanItemBody from './CatatanItemBody';
import CatatanItemBtnHapus from './CatatanItemBtnHapus';
import CatatanItemBtnArsip from './CatatanItemBtnArsip';

function CatatanItem({ id, title, body, archived, createdAt, onDelete, onArsip }) {
    return (
        <div className="catatan-item">
            <div className="card mb-3">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-8">
                            <CatatanItemTitle title={title} />                        
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-end">
                                <CatatanItemBtnArsip id={id} archived={archived} onArsip={onArsip} />
                                <CatatanItemBtnHapus id={id} onDelete={onDelete} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">                    
                    <CatatanItemBody body={body} createdAt={createdAt}/>
                </div>
            </div>            
        </div>
    );
}
 
export default CatatanItem;