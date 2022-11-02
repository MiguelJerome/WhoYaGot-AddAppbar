import React from 'react';
import '../components/Player/player.css';
import { Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYERS } from '../utils/queries';

function Krak(props) {
    const numbers = props.value;
    const keys  =  props.id;
    const fantasyPoints = props.FantasyPoints;
    const name = props.PlayerID;
    const position = props.Position;
    const team = props.Team;
    const teamID = props.TeamID;
    
    const teamIDKrak = 36;
    
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
                                        <li>TeamID:{players[teamIDKrak].TeamID}</li>
                                        <li>PlayerID:{players[teamIDKrak].PlayerID}</li>
                                        <li>Name:{players[teamIDKrak].Name}</li>
                                        <li>Team:{players[teamIDKrak].Team}</li>
                                        <li>FantasyPoints:{players[teamIDKrak].FantasyPoints}</li>
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

export default Krak;