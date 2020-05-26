import React from 'react';
import FileIcon from '../FileIcon';
import './FileName.css'

const FileName = ({ file }) => {
    return (
        <>
        <FileIcon file={file} />
        <span className="file-name">
            {file.name}
        </span>
        </>
    )
}

export default FileName;