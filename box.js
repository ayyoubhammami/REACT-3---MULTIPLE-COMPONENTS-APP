import React, {Component} from "react";

class Box extends Component {
	render() {
		return(

			<div className="box1" style={{backgroundColor:this.props.color,marginLeft:this.props.margL,marginRight:this.props.margR}}>
				
				
				<p style={{textAlign:"center"}}><button className="bt1" style={{color:this.props.colort}} >{this.props.titre} </button></p>
				<hr className="hr"></hr>
				<p className="pg1" style={{color:this.props.colorp}}>{this.props.pg} </p>
				<button className="bt2" style={{color:this.props.colorbt}}>En savoir plus</button>
				<h1>{this.props.titre4}</h1>
			</div>
			
		);
	}
}

export default Box;