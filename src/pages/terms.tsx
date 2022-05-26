import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import './terms.css';
import { RouteComponentProps, withRouter} from 'react-router-dom';
import home1 from '../assets/home1.png';
import privacy from '../assets/shield.png';



const TermsPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage ] = useState<string>('');

    useEffect(() => {
        logging.info(`Loading ${props.name}`);

        let number = props.match.params.number;
    }, [props.name])

    return ( 
        <div className="Terms">
            <div className="Terms_Navbar">
                <a href="/"><img src={home1} alt="home1"/></a><br/>
                <a href="/Privacy"><img src={privacy} alt="terms"/></a>
            </div>
            <div className="Terms_name">
                <h1>Terms and Conditions</h1>
            </div>
            <div className="Terms_paragraph">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus commodi porro dolorem dolor distinctio nemo,
                    nulla quis asperiores quidem ducimus qui magnam veniam. Corporis sit voluptates placeat sed soluta odio quidem illum dicta, maiores, 
                    optio aliquid. Dicta, atque similique et velit natus unde nesciunt dolorum maiores quisquam, autem quibusdam doloribus reprehenderit laboriosam 
                    illo veniam excepturi magnam id eaque non optio aspernatur quia debitis! Distinctio id culpa officia eligendi hic sapiente laboriosam nemo rerum, 
                    ut nihil, libero ratione magnam neque magni!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus commodi porro dolorem dolor distinctio nemo,
                    nulla quis asperiores quidem ducimus qui magnam veniam. Corporis sit voluptates placeat sed soluta odio quidem illum dicta, maiores, 
                    optio aliquid. Dicta, atque similique et velit natus unde nesciunt dolorum maiores quisquam, autem quibusdam doloribus reprehenderit laboriosam 
                    illo veniam excepturi magnam id eaque non optio aspernatur quia debitis! Distinctio id culpa officia eligendi hic sapiente laboriosam nemo rerum, 
                    ut nihil, libero ratione magnam neque magni!
                </p>
            </div>
        </div>
    )
}

export default withRouter(TermsPage);