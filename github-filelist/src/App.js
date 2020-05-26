import React from 'react';
import './App.css';
import FileList from './components/FileList';

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at:
      '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'test',
    type: 'folder',
    updated_at:
      '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at:
      '2016-07-18 21:24:00',
    latestCommit: {
      message: 'Added a readme'
    }
  },
  {
    id: 4,
    name: 'READMETOO',
    type: 'folder',
    updated_at:
      '2020-07-18 21:24:00',
    latestCommit: {
      message: 'Added a new folder'
    }
  }
]

function App() {
  return (
    <FileList files={testFiles} />
  );
}

export default App;
