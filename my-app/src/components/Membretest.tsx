import React from 'react';

interface infoMember {
    firstName: string;
    age?: number;
    hobbies?: string
}

export function Membre(props: infoMember) {

    // const name:string = props.firstName
    const {firstName, age, hobbies} = props
    return (
        <h2>Membre de ma famille : {firstName.toUpperCase()}</h2>
    )
}

export default Membre;