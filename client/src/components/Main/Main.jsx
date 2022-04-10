import "./main.css"
import { Button } from '@chakra-ui/react'
import {Link } from 'react-router-dom'

export const Main = () => {
    

    return (
        <div className="mainDiv">
            
            <img className="cloudImg" src="https://user-images.githubusercontent.com/87421852/162575718-fa567c07-71a0-46b2-996e-b84b6baa815e.png" alt="" />
            <br/>
            <img className="monkeyImg" src="https://user-images.githubusercontent.com/87421852/162575786-77f0c6c8-570a-45b9-bef9-4626a73854e4.png" alt="" />
            <br/>
            <img className="boyImg" src="https://user-images.githubusercontent.com/87421852/162576006-79d93aed-0a22-4ffd-ab79-cd89aae6cdfd.png" alt="" />
            <br />
              <Button className="btnStart" colorScheme="pink" size="lg" >
               <Link to="/to-cartoons"> START</Link>
            </Button>
        </div>
    )
}