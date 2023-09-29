import React, {Component} from "react";
import './Rolldice.css'
import Dice from './dice'

class Rolldice extends Component{
    static defaultProps ={
        sides:['one','two','three','four','five','six']
    }
    constructor(props){
        super(props)

        this.state={
            dice1:'one',
            dice2:'one',
            rolling:false
        }
        this.roll=this.roll.bind(this)
    }
    roll(){
        const {sides}=this.props
        
        this.setState({
            dice1:sides[(Math.floor(Math.random() * sides.length))],
            dice2:sides[(Math.floor(Math.random() * sides.length))],
            rolling:true
        })
        setTimeout(()=>{
            this.setState({rolling:false})
        },1000)
    }
    render(){
        const handleBtn=this.state.rolling ?
            'Rolldice-rolling':''
        const {dice1,dice2,rolling}=this.state
   
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Dice face={dice1} rolling={rolling} />
                    <Dice face={dice2} rolling={rolling} />
                </div>
                <button 
                className={handleBtn}
                disabled={this.state.rolling}
                onClick={this.roll}
                >
                    {this.state.rolling ? "Rolling":"ROll dice" }
                </button>
            </div>
        )
    }




}

export default Rolldice