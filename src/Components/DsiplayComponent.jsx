import React, {useState} from 'react';

const DisplayComponent = () => {
    console.log(props);

    const [age1, setAge] = useState(props.age);

    const increaseAgeHandler = () => {
        setAge(age + 1);
    };

    return (
        <div>
            <h3>First name: {props.firstName}</h3>
            <h3>Last Name: {props.lastName}</h3>
            <h3>Age: {props.age}</h3>
            <p></p>
            <button onClick = {(e) => {
                increaseAgeHandler()
            }}
            >
                Happy Birthday!
            </button>
            <hr />
        </div>
    );
};

export default DisplayComponents;