import React from 'react';
import './DisplayShelf.css'
import DisplayItem from '../DisplayItem';

const DisplayShelf = () => {
  
    return (
        <div id="display-shelf">
            <DisplayItem name="apple" image="https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png" price="2.50" description="a delicious apple to eat"/>
            <DisplayItem name="kitten" image="https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-field.jpg?w=585&scale=down" price="50.00" description="a kitten frolicking upon the grass" />
            <DisplayItem name="puppy" image="https://cdn2-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg" price="62.50" description="awww a litle doggy" />
        </div>
    )
}

export default DisplayShelf;