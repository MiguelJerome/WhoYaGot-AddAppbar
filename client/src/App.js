import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './pages/Home';
import Senators from './pages/Senators';
import Leafs from './pages/Leafs';
import Flames from './pages/Flames';
import Krak from './pages/Krak';
import NoMatch from './pages/NoMatch';
import AppNavBar from './components/NavBar/NavBar';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const navItems = [""];
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});












  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider  />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


function App() {

  return (
    
      <ApolloProvider client={client}>
      
        <Router   >
        <div className = "container" >
              <Routes>
                <Route path="/" />
                <Route path="/home" exact element={<Home></Home>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/Senators" element={<Senators></Senators>}></Route>
                <Route path="/Leafs" element={<Leafs></Leafs>}></Route>
                <Route path="/Flames" element={<Flames></Flames>}></Route>
                <Route path="/Krak" element={<Krak></Krak>}></Route>
                <Route path="*" element={<NoMatch />}  
            />
            
              </Routes>
             
            </div>
          
          
           <Box color="inherit"   sx={{ color:'red', display: 'flex' }}>
        
      <AppBar  className='flex-bar' component="nav" >
      
        <Toolbar   >
        
          <IconButton  
            color="inherit"
            aria-label="open drawer"
            edge="start"
            
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon  />
          </IconButton>
         
          <Typography 
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           
            {navItems.map((item) => (
              
              <Button  key={item} sx={{ color: '#fff' }}>     {item[0]}  <a href ="/"> 
              <img src ="https://wallpaperset.com/w/full/0/6/d/84243.jpg" width={200} height={100}></img> 
              </a>
            
              </Button>
            ))}
            
          </Typography>
          
          <Box   sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              
              <Button  key={item} sx={{ color: '#fff' }}>     {item[0]}  <a href ="/login"> 
              <img src ="https://as2.ftcdn.net/v2/jpg/05/38/42/65/1000_F_538426536_LQ4THwklXkmKJQUdjwWZ8CgM3iOycado.jpg" width={200} height={100} ></img> 
              </a>
              {item[1]}   <a href ="/signup"> 
              <img src ="https://as2.ftcdn.net/v2/jpg/05/40/72/71/1000_F_540727130_OGaD7jpSgA9A6ghzZBwn7bPaRPhJ9kLn.jpg" width={200} height={100}  ></img> 
              </a>
              </Button>
))}

            
          </Box>
        </Toolbar>
      </AppBar>
      </Box>

      
        <AppNavBar  / >
            
        </Router>
       
      </ApolloProvider> 
  );
}

export default App;
