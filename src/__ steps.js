/*
Basic Project Steps:
=====================
1. Create react app
2. create a app on firebase 
3. add firebase sdk: npm install firebase
4. install : npm install firebase react-router-dom
5. create folder on src:>firebase>firebase.config.js
6. copy and paste firebase initialized code: here 
7. add export default app; on the bottom of the code 
8. add a boostrap: npm install react-bootstrap bootstrap
9. import the css file on index.js file to use the bootstrap: 
import 'bootstrap/dist/css/bootstrap.min.css';

Router Setup:
========================
1. Crete Router folder > Router Folder> Router.js file and export the const routes variable: 
export const routes=createBrowserRouter([]);
2. in app.js delete the initial code and add <RouterProver></RouterProvider> 
import router
<RouterProvider router={routes}></RouterProvider>
create a a layout folder and create Main.js component
3. create routes objects on the routes.js :
 
 {
        path:'/',
        element: <Main></Main>,
        // Children array to go to the other components 
        children:
        [


        ]
    }

4.  In Main layout we will create Header container from react boostrap
<Container></Container>

5. for Different Pages use different routes create a Shared Folder: and create different headers and LeftSide, Right Side nav

6.add footer 
7. create dragon news server folder 
8. Crete the server using express js: cmd > dragon-news-server open >
E:\Programming Hero\dragon-news-server>
9. npm init: its will ask several questions. 
10 npm init -y : will by default all questions answer will be given and crete a package 


// On the left side nav: 
Declear a use state to load and hold the data from the api: 

use state e array [] use kora hoise coz we will get the data from the api as an array 
const []= useState([])

*** of we want to load data on routes we use loader

but for other component : json placehowler and use effect use kora lagbe

* Modudle 60.6 to get the details information 

get button vertial variant from reactbootstrap

get icons from react icons 
// npm install react-icons --save

then: import
import { FaGoogle, FaGithub} from "react-icons/fa";
and use it as a component <FaGoogle></FaGoogle>

also use: List group; 
// import list group
import ListGroup from 'react-bootstrap/ListGroup';

use list group 
<ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>


// Add BrandCarousel 

import carousel from react-bootstrap
import Carousel from 'react-bootstrap/Carousel'


Create Nav bar on Header component : 

// we will choose a responsive nav from bootstrap nav 

imports 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';






*/