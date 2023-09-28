import React from 'react';
import { showFormattedDate } from '../utils/index';
 
function CatatanItemBody({ body, createdAt }) {
    return (
        <div className="catatan-item__body">
            <blockquote className="blockquote mb-0">
            <p>{body}</p>
            <footer className="blockquote-footer"><cite title="Source Title">{showFormattedDate(createdAt)}</cite></footer>
            </blockquote>
        </div>
    );
}
 
export default CatatanItemBody;