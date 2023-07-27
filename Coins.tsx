import styled from "styled-components";
import {Link} from "react-router-dom";
const Container = styled.div`
padding: 0px 10px;
`;

const Header = styled.header`
height:10vh;
display: flex;
justify-content: center;
align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
background-color: white;
color: ${(porps) => porps.theme.bgColor};
margin-bottom:20px;
border-radius: 15px;
a {
    padding: 20px 15px;
    transition: all 0.2s ease-in;
    display: block;
}
&:hover {
    a {
        color: ${(props) => props.theme.accentColor}
    }
}
`;

const Title = styled.h1`
font-size: 60px;
color:${props => props.theme.accentColor};
`
const coins = [
    {
      id: "btc-bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "eth-ethereum",
      name: "Ethereum",
      symbol: "ETH",
      rank: 2,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "hex-hex",
      name: "HEX",
      symbol: "HEX",
      rank: 3,
      is_new: false,
      is_active: true,
      type: "token",
    },
  ];


function Coins(){
    return <Container>
        <Header></Header>
            <Title>코인</Title>
            <CoinsList>
               {coins.map(coin  => <Coin key={coin.id}><Link to={`/${coin.id}`}>{coin.name} &rarr;
               </Link> 
               </Coin>)}
            </CoinsList>
        
    </Container>
}
export default Coins;