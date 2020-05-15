import React from 'react';
import './App.css';
import Reddit from './components/Reddit/Reddit';


const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://reduxjs.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('React');
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
      <hr />
      <Reddit />


    </div>
  );
}



const Search = ({ handleSearch }) => {

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleSearch} />
    </div>
  );
}

const List = (props) => {
  return props.list.map((item) => {
    return (
      <div key={item.objectID}>
        <span><a href={item.url}>{item.title} </a></span>
        <span>written by {item.author} </span>
        <span>{item.num_comments} </span>
        <span>{item.points}</span>
      </div>
    );
  })
};


export default App;
