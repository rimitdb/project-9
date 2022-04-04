import React from 'react';
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
            <div>
                <h1>What is Inline, Block, Inline-Block Elements?</h1>
                <h3>inline Elements</h3>
                <p>Inline element displays the element inline or on the same line. In other words, <br />inline elements do NOT start on a new line and only takes up as much width as its content. <br />So, if you try to set any width and height, it will have NO effects.</p>
                <p>List of inline elements: <small>span, a, img, em, strong, i, small</small> </p>
                <br />
                <h3>block Elements</h3>
                <p>block elements starts on a NEW line and takes up the full width available. <br />So that means block elements will occupy the entire width of its parent element.</p>
                <p>List of block elements: <small>div, h1, p, li, section</small></p>
                <br />
                <h3>inline-block Elements</h3>
                <p>inline-block elements displays an element as an inline-level block container. <br />You CAN set height and width values. It’s essentially the same thing as inline, <br />except that you can set height and width values.</p>
            </div>
        </div>
    );
};

export default Blog;