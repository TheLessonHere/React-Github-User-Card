import React from 'react';

import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 650px;
  width: 100%;
  max-height: 400px;
  margin: 0 auto;
  border: 1px solid darkgrey;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  background: lightgrey;
`;

const StyledImg = styled.img`
    max-width: 250px;
    max-height: 250px;
    width: 100%;
    height: 100%;
    border: 1px solid darkgrey;
    border-radius: 10px;
    box-shadow: 2px 2px 5px black;
`;

const StyledLink = styled.a`
    text-decoration: none;
`;

export default function UserCard (props) {
    const { userobject } = props;

    return (
        <StyledCard>
            <StyledImg src={userobject.avatar_url} alt="user-img"/>
            <div className='userinfo'>
                <h3 className='given-name'>{userobject.name}</h3>
                <p className='user-name'>{userobject.login}</p>
                <p className='location'>{userobject.location}</p>
                <p className='profile-title'>
                    Profile: <StyledLink href={userobject.html_url}>{userobject.html_url}
                </StyledLink>
                </p>
                <p className='followers'>Followers: {userobject.followers}</p>
                <p className='following'>Following: {userobject.following}</p>
                <p className='bio'>Bio: {userobject.bio}</p>
            </div>
        </StyledCard>
    )
}