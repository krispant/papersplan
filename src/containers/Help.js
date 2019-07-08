import React, {Component} from 'react';
import Page1 from "../components/Page1/Page1"


import Container from 'react-bootstrap/Container'

export default class Help extends React.Component {
  render() {
    return (   
		<div className="container-fluid">
          <Page1 />
        </div>
    );
  }
}
