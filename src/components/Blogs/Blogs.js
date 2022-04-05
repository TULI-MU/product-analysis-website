import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>What is the purpose of Context Api?</h1>
            <h3>Answer:-</h3>
            <h4>Context is designed to share data that can be considered "global" for a tree of React Components,such as the current authenticated user,theme,or preferred language.The Context API is React structure that enables you to exchange unique details and assists insolving prop-drilling from all levels of your application.The context api gives you a dependency injection system based on your component tree.Context is about sharing data to many components. The reason we need the Context API is that its difficult to pass data from parent to child via props if there are many components requiring the same data.The context object is an object holding the current context value and can be subscribed to
                provider.By using the Context API we no longer pass this kind of shared data with props.</h4>
            <h1>What is Semantic Tag?</h1>
            <h3>Answer:-</h3>
            <h4>The semantic tags are the ones that have meaning.These tags are clearly define its content.HTML5 semantic tags are header,footer,nav,main,section,article,aside.The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.It has greater accessibility.It offers a better user experience.</h4>
            <h1>What is the difference between Inline,Block &Inline Block elements?</h1>
            <h3>Answer:-</h3>
            <h3>Inline elements</h3>
            <h4><li>Displays an element as an inline element. Any height and width properties will have no effect.</li></h4>
            <h4> <li>Few elements of Inline:-span,a,img</li></h4>
            <h4><li>The element doesnot start on a new line and only occupy just the width it requires. You cannot set the width or height.</li></h4>
            <h3>Inline-Block Elements</h3>
            <h4> <li>Displays an element as an inline-level block container. You CAN set height and width values.</li></h4>
            <h4><li>Few elements of Inline Block:
                Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides.</li></h4>
            <h4><li>It is formatted just like the inline element, where it does not start on a new line. BUT, you can set width and height values.</li></h4>
            <h3>Block Elements</h3>
            <h4><li>Check the length of the string</li></h4>
            <h4><li>Few elements of Block:-div,h1,p,li,section</li></h4>
            <h4><li>The element will start on a new line and occupy the full width available. And you can set width and height values.</li></h4>
        </div>
    );
};

export default Blogs;