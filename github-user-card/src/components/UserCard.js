import React from 'react';

export default function UserCard (props) {
    const { userobject } = props;

    return (
        <div className='usercard'>
            <img src={userobject.avatar_url} alt="user-img"/>
            <div className='userinfo'>
                <h3 className='given-name'>{userobject.name}</h3>
                <p className='user-name'>{userobject.login}</p>
                <p className='location'>{userobject.location}</p>
                <p className='profile-title'>
                    Profile: <a href={userobject.html_url}>{userobject.html_url}
                </a>
                </p>
                <p className='followers'>Followers: {userobject.followers}</p>
                <p className='following'>Following: {userobject.following}</p>
                <p className='bio'>Bio: {userobject.bio}</p>
            </div>
        </div>
    )
}