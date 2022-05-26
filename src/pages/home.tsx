import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { RouteComponentProps, withRouter} from 'react-router-dom';
import TodoApp from '../TodoApp';
import './home.css';
import shield from '../assets/shield.png';
import terms from '../assets/insurance.png';

const HomePage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage ] = useState<string>('');

    useEffect(() => {
        logging.info(`Loading ${props.name}`);

        let number = props.match.params.number;
    }, [props.name])

    return ( 
        <div className="Home">
            <div className="Home_Navbar">
                <a href="/Privacy"><img src={shield} alt="shield"/></a><br/>
                <a href="/Terms"><img src={terms} alt="terms" /></a>
            </div>
            <div className="Navbar_name">
                <h1>TODO-APP</h1>
            </div>
            <div className="TodoApp">
                <TodoApp/>
            </div>
        </div>
    )
}



export default withRouter(HomePage);