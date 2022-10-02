import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <h2>Questions</h2>
            <h3>How Does React Work ?</h3>
            <p>React uses a declarative paradigm that makes it easier to reason about application and aims to be both efficient and flexible. It designs simple views for each state in application, and React will efficiently update and render just the right component when data changes.</p>
            <h3>What are the differences between Props and State?</h3>
            <p>In PROPS  the Data is passed from one component to another.In STATE the Data is passed within the component only.
                PROPS is Immutable.STATE is Mutable.
                Props can be used with state and functional components.	State can be used only with the state components/class component.
                Props are read-only.State is both read and write.</p>
            <h3>Where UseEffect works ?(Except Data fetching from API)</h3>
            <p>i. When we want to fetch data based on passed parameter, we can updated this parameter from client side. Once the parameter is updated to new data , useEffect hook will be re-called.
                <br />
                ii. We should useEffect, when your component depends on the outside world data, and we can not guarantee that data will come or not (maybe the server is down there). So, Instead of throwing errors and stop other components from being rendered, move them into useEffect hook.</p>
        </div>
    );
};

export default Blog;