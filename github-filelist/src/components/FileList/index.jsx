import React from 'react';
import './FileList.css'
import FileListItem from '../FileListItem';


const FileList = ({ files }) => {
    return (
        <table className="file-list">
            <tbody>
                {files.map(file => (
                    <FileListItem key={file.id} file={file} />
                ))}
            </tbody>
        </table>
    )
}



export default FileList;