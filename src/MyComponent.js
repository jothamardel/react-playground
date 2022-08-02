




const MyComponent = (props) => {
 
    return (
        <div>
            <h1>
                {props.greet}, my name is {props.name} 
                 I am a {props.stack} developer.
            </h1>
        </div>
    )
}

export default MyComponent;