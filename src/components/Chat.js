import React from 'react';

export default class Chat extends React.Component{
	render(){
		return( <div>
				<div className="container">
				<div className="row">
				<div class="col-lg-6">
				<div className="panel panel-default">
				<div className="panel-heading"> Users </div>
				<div className="panel-body"> 
				<h6> Bill </h6>
				<h6> Phillip </h6>
				</div>
				</div>
				</div>
				<div class="col-lg-6">
				<pre id='Message'> </pre>
				<textarea id='message'> </textarea>
				<input type='submit' id='subBox'></input>
				</div>
				</div>
				</div>
				</div>
				);

	}
}
