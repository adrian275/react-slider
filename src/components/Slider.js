import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
    width: 25px;
    height: 25px;
    background: ${props.color};
    cursor: pointer;
    opacity: ${props.opacity};
    -webkit-transition: .2s;
    transition: opacity .2s;
    
`);

const Styles = styled.  div `
  display: flex;
  align-items: center;

  .main {
     
  }

  .value {
      flex: 1; 
      font-size: 2rem;
  }

  .slider {
      
      flex: 6;
      -webkit-appearance: none;
      transform-origin: 400px 10px;
      transform: rotate(-90deg);
      border-radius: 5px;
      background: #efefef;
      outline: none;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        ${props => sliderThumbStyles(props)}
      }

      &::-moz-range-thumb {
        ${props => sliderThumbStyles(props)}
      }
  }
`;

export default class slider extends React.Component {
    state = {
        value: 50
    }   

    handleOnChange = (e) => this.setState({value: e.target.value})

    render() {
        return(
            <Styles opacity={this.state.value > 10 ? (this.state.value / 255) : .1 } color={this.props.color}>
                <div className="">
                    <input type="range" min={0} max={255} value={this.state.value} className="" onChange={this.handleOnChange}/>
                </div>
            </Styles>
        )
    }
}