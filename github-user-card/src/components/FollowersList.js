import React from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 400px;
  width: 100%;
  margin-right: 80px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid darkgrey;
  border-radius: 10px;
  background: lavender;
`;

const StyledCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
  max-height: 250px;
  margin-bottom: 20px;
  padding-top: 20px;
  border: 1px solid darkgrey;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  background: lightgrey;
`;

const StyledImg = styled.img`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    max-width: 100px;
    max-height: 100px;
    width: 100%;
    height: 100%;
    border: 1px solid darkgrey;
    border-radius: 10px;
    box-shadow: 2px 2px 5px black;
`;

const StyledLink = styled.a`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

export default function FollowersList (props) {
    const { followerarray } = props;

    return (
        <StyledContainer>
            <h1>Followers:</h1>
            {followerarray.map((follower => {
                return (
                    <StyledCard key={follower.id}>
                        <StyledLink href={follower.url}>
                        <StyledImg src={follower.avatar_url} alt='follower'/>
                        <h3>{follower.login}</h3>
                        </StyledLink>
                    </StyledCard>
            )}))}
        </StyledContainer>
    )
}