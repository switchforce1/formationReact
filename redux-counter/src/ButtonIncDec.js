import React from 'react';

class ButtonIncDec extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    handleIncClick = () => {
        this.props.handleIncClick();
    }

    handleDecClick = () => {
        this.props.handleDecClick();
    }

    render (){
        return(
            <div>
                <button  onClick={this.handleDecClick}>Dec(-)</button>
                    val : {this.props.count}
                <button onClick={this.handleIncClick}>Inc(+)</button>
            </div>
        );
    }
}

export default ButtonIncDec;
