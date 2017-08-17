import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCWyDuXPhWl6SkE270-5Esh8d_RGczpvhQ';

YTSearch({key: API_KEY, term: 'if every mountain bike video'}, function(data) {
    console.log(data);
})

// Create a new component. This component should produce some HTML
const App = () => {
    return (<div>
        <SearchBar/>
    </div>);
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
