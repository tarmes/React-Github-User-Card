import React from 'react'

const UserCard = props => {



        return (
            <div className='user-card'>
                <h1>{props.userData.login}</h1>
                <h2>{props.userData.name}</h2>
                <h5>{props.userData.location}</h5>
                <img 
                    src={props.userData.avatar_url} 
                    alt={props.userData.login} 
                /> 
            </div>
        )
    }

export default UserCard;