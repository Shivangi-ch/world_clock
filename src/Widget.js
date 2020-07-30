import React from 'react';
import Axios from 'axios';

class Widget extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            city_name:null,
        };
    }
    // getData(){
    //     // fetch(`https://www.amdoren.com/api/timezone.php?api_key=bUFw43Md4fdaMjPaHcYHQE4DMNQnk6&loc=${this.props.find_city}`, {
    //     //     mode: "no-cors"
    //     // }).then(response=>
    //     //     this.setState({
    //     //         city_name:response,
    //     // }));
    //     fetch(`https://www.amdoren.com/api/timezone.php?api_key=bUFw43Md4fdaMjPaHcYHQE4DMNQnk6&loc=${this.props.find_city}`,{
    //         mode: "no-cors"
    //     })
    //     .then(function(response) {
    //         this.setState({
    //             city_name:response,
    //         })
    //     })
    //     .catch(function(error) {
    //         console.log('Looks like there was a problem: \n', error);
    //     });
    // }
    // componentDidMount(){
    //     this.getData();
    // }

    componentDidMount() {
        Axios.get(`https://www.amdoren.com/api/timezone.php?api_key=bUFw43Md4fdaMjPaHcYHQE4DMNQnk6&loc=delhi`)
        .then(res => {
            const city_name = res.data;
            this.setState({city_name });
        })
    }

    render() {
        if(this.state.city_name)
        {
            if(this.state.city_name.error===0)
            {
                return(
                    <div>
                        <p>xxx</p>
                        {this.state.city_name.time}
                        {this.state.city_name.timezone}
                    </div>
                )
            }
            else
            {
                return(
                    <div>
                        <p>yyy</p>
                        {console.log(this.state.city_name)}
                        {this.state.city_name.error}
                    </div>
                )
            }
        }
        else
        {
            return(
                <div>
                    <p>Try again!</p>
                </div>
            )
        }
        // return(
        //     <div>
        //         {this.props.find_city}
        //     </div>
        // );
    }
}
export default Widget;