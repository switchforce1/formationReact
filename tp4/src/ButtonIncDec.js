import React from 'react';

class ButtonIncDec extends React.Component {
    constructor(props){
        super(props);
        this.state = {val : props.initVal}
        //Pour que le this ne soit pas le this des buntons mais 
        //plutot du composant
        //this.handleIncClick  = this.handleIncClick.bind(this);
        // this.handleDecClick  = this.handleDecClick.bind(this);
        //Ici on utilise plutot les lambda directement au niveau des fuonctions 
    }

    handleIncClick = () => {
        this.setState((state, props) =>  ({val : state.val + 1 }));
    }

    handleDecClick = () => {
        this.setState((state, props) =>  ({val : state.val - 1 }));
    }

    render (){
        return(
            <div>
                <button  onClick={this.handleDecClick}>Dec(-)</button>
                    val : {this.state.val}
                <button onClick={this.handleIncClick}>Inc(+)</button>
            </div>
        );
    }
}

export default ButtonIncDec;
