import React from 'react';
import Icon2 from '../../images/WModel.png';
import Icon3 from '../../images/shorts.png';
import { 
    TeamContainer, 
    TeamH1, 
    TeamWrapper, 
    TeamCard, 
    TeamIcon, 
    TeamH2, 
    TeamP 
} from './TeamElements';

const Team = () => {
    return (
        <TeamContainer id='team'>
            <TeamH1>Our Team</TeamH1>
            <TeamWrapper>
                <TeamCard>
                    <TeamIcon src={require('../../images/WModel.png').default} />
                    <TeamH2>Orkun Ozgiray</TeamH2>
                    <TeamP>Co-Founder</TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon src={Icon2} />
                    <TeamH2>FName LName</TeamH2>
                    <TeamP>Designer</TeamP>
                </TeamCard>
                <TeamCard>
                    <TeamIcon src={Icon3} />
                    <TeamH2>FName LName</TeamH2>
                    <TeamP>Marketing</TeamP>
                </TeamCard>
            </TeamWrapper>
        </TeamContainer>
    );
}

export default Team;
