import React from 'react'
import {Link} from "react-router-dom";
import {Button} from "antd";


const Home = () => {
    return (<center>
            <div>
                <br/>
                    <h2>BeerList 테이블 project</h2>
                    <h2>박수호</h2>
                <br/>
                <Button>
                    <Link to="/beerlist">BeerList 바로가기</Link>
                </Button>
            </div>
        </center>
    );
};

export default Home
