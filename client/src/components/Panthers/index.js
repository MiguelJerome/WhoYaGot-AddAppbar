import React from 'react';
import '../components/Player/player.css';
import { Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYERS } from '../utils/queries';

function Panthers(props) {
    const numbers = props.value;
    const keys  =  props.id;
    const fantasyPoints = props.FantasyPoints;
    const name = props.PlayerID;
    const position = props.Position;
    const team = props.Team;
    const teamID = props.TeamID;
    
    const teamIDPanthers = 8;
    
    const {loading, data  } = useQuery(QUERY_PLAYERS);
    const players = data?.players ||[];
    
    if(loading)
    {
        return <div>Loading...</div>;
    }
    
  return (
   
    <>
        <Container  key={keys.toString()} value={teamID}>
            <div className="my-2">
                <div className ="player-container">
                    <div className="headerPlayer">
                        <div className="inheaderPlayer">
                            <div className = "logoPlayer">
                                <h1>Player Card</h1>
                                    <ul className="navigationPlayer">
                                        <li>TeamID:{players[teamIDPanthers].TeamID}</li>
                                        <li>PlayerID:{players[teamIDPanthers].PlayerID}</li>
                                        <li>Name:{players[teamIDPanthers].Name}</li>
                                        <li>Team:{players[teamIDPanthers].Team}</li>
                                        <li>FantasyPoints:{players[teamIDPanthers].FantasyPoints}</li>
                                    </ul>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </Container>
    </> 
  );
}

export default Panthers;