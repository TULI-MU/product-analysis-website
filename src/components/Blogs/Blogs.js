import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>What is the purpose of Context Api?</h1>
            <h3>Answer:-</h3>
            <h4>Context is designed to share data that can be considered "global" for a tree of React Components,such as the current authenticated user,theme,or preferred language.The Context API is React structure that enables you to exchange unique details and assists insolving prop-drilling from all levels of your application.The context api gives you a dependency injection system based on your component tree.Context is about sharing data to many components. The reason we need the Context API is that its difficult to pass data from parent to child via props if there are many components requiring the same data.The context object is an object holding the current context value and can be subscribed to
                provider.By using the Context API we no longer pass this kind of shared data with props.</h4>
            <h1>What is Semantic Tag?</h1>
            <h1>What is the difference between Inline,Block &Inline Block elements?</h1>
        </div>
    );
};

export default Blogs;