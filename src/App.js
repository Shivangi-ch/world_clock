import React from 'react';
import './App.css';
import Widget from "./Widget.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            cities: ["London", "Delhi", "Berlin", "Washington DC", "Moscow"],
        };
    }

    render() {
        return (
            <div>
                <div id="cover">
                    <form method="get" action="">
                        <div className="tb">
                            <div className="td">
                                <input type="text" placeholder="Search City...." required></input>
                            </div>
                            <div className="td" id="s-cover">
                                <button type="submit">
                                <div id="s-circle"></div>
                                <span></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div> 
                 <div>
                    {this.state.cities.map(city => <Widget key={city} find_city={city}/>)}            
                </div>
                <Widget find_city="delhi"/>
            </div>
        );
    }
}

export default App;


// api key = bUFw43Md4fdaMjPaHcYHQE4DMNQnk6
// 
//                            |||||||||||||search city||||||||||||||||     ||||seacrch||||
// 
// 
//          ||||||||||               ||||||||||                  ||||||||||                   ||||||||||
//          |||||1||||               |||||2||||                  ||||3|||||                   ||||4|||||
//          ||||||||||               ||||||||||                  ||||||||||                   ||||||||||
// 
// 
// 
// 
//          ||||||||||               ||||||||||                  ||||||||||                   ||||||||||
//          ||||5|||||               ||||6|||||                  |||||7||||                   |||||8||||
//          ||||||||||               ||||||||||                  ||||||||||                   ||||||||||
// 
// 
// --------------------------------------------------------------------------------------------------------------------
// 
// 
// state = city/array
// 
// events = input onsearch/onsubmit
// 
