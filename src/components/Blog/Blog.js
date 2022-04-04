import React from 'react';
import Chart from '../Chart/Chart';
import './Blog.css';

const Blog = () => {
    return (
        <div className='body'>
            <div >
                <h1>What is Contex API and How it is Works?</h1>
                <p>
                    Context API is a latest feature added in version 16.3 of React that allows one to share state across the entire app easily. <br />This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br />Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
                <p>
                    React.createContext() is all you need. It returns a consumer and a provider. <br /> Provider is a component that as it's names suggests provides the state to its children. <br /> It will hold the "store" and be the parent of all the components that might need that store. <br /> Consumer as it so happens is a component that consumes and uses the state.
                </p>
            </div>
            <div>
                <h1>What is Semantic Tag?</h1>
                <p>Semantic tag or elements refers to elements with a meaning.</p>
                <p>A semantic element clearly describes its meaning to both the browser and the developer.</p>
                <p>Examples of non-semantic elements: "div"and "span"" - Tells nothing about its content .</p>
                <p>Examples of semantic elements: "form, table, and article" - Clearly defines its content.</p>
            </div>
        </div>
    );
};

export default Blog;