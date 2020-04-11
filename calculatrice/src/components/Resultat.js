import React, {Component} from 'react';

class Resultat extends Component {


    render() {
        let {resultat} = this.props;
        return (
            <div className="resultat">
                <p>{resultat}</p>
            </div>
        )
            ;
    }
}


export default Resultat;

