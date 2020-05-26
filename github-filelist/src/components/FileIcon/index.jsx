import React from 'react';
import './FileIcon.css'

const FileIcon = ({ file }) => {
    let icon;
    file.type === 'folder' ? icon ='fa fa-folder': icon = 'far fa-file-alt';
    return (
        <span className="file-icon">
            <i className={`${icon}`} />
        </span>
    )
}


export default FileIcon;