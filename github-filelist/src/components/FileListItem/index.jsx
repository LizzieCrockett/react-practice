import React from 'react';
import FileName from '../FileName';
import CommitMessage from '../CommitMessage';
import Time from '../Time';

const FileListItem = ({ file }) => {
    return (
        <tr className="file-list-item">
            <td>
            <FileName file={file} />
            </td>
            <td>
            <CommitMessage commit={file.latestCommit} />
            </td>
            <td>
            <Time time={file.updated_at} />
            </td>
        </tr >
    )
}

export default FileListItem;