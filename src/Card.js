import React from 'react';

//comments are showing a second way of doing this
//const Card = (props) => {
    const Card = ({name, email, id}) => {
    //const {name, email} = props;
    return (

        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card