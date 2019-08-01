import Check_ from './check.sc'
import styled from 'styled-components'

const Top_ = styled.ul`
  align-items: center;
  background: #eef5fd;
  color: #545556;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  justify-content: center;
  margin: 0;
.showOverlay {
  bottom: 0;
  display: flex;
  font-size: 16px;
  left: calc(50% - 55px);
  margin-bottom: 7px;
  position: absolute;
}
.containerOuter {
  background: white;
  border-radius: 8px;
  box-shadow: 2px 6px 20px 2px rgba(10, 10, 120, 0.15);
}
.container {
  position: relative;
  margin: 20px;
  overflow: hidden;
  width: 160px;
}
.hidden {
  display: none;
}
.entry {
  height: 25px;
  position: absolute;
  width: 160px;
}
.entry:nth-child(2) {
  left: 8px;
  top: 8px;
}
.entry:nth-child(4) {
  left: 8px;
  top: 58px;
}
.entry:nth-child(6) {
  left: 8px;
  top: 108px;
}
.circle {
  border: 2px solid #545556;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  position: absolute;
  transition: border-color 300ms;
  width: 20px;
}
.entry-label {
  cursor: pointer;
  margin-top: -3px;
  padding-left: 40px;
  user-select: none;
  -moz-user-select: none;
}
.overlay {
  background: #fff;
  mask: url(#holes);
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAACMCAYAAAAOc+uVAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAItSURBVHic7ZnNjhJBFIVPA0txr0Iyw+tIdOXWaDRufZWZeYbZuMKOUV9Gg+HHGN/BHBcNcSBT1KVOEVycb0mq635UVd9U5zQkif+Y3rkFclhQxYIqFlQZiM8vALQAPgP4AWC1+X0E4ALAFMBzAOPiCixjRfIdyX5g/h7JFyTnJYVKBGckHxQsxJBke2rBK5LF55bdal6fSnCmyO1JhlcyKrhkwbYekBySXNcUfF1L7o7k20jhhsxetxYAJk3T/Kks2EfXmkaHxkXO1MfacgCwmbPNjYsIftV1knzJDYgIfqsgkuJ7bkBE8FcFkRTr3IBzXxay9SOCjyuIFM8dEZxUECmeOyL4tIJIimluQKRRLwFcnqBRDwDMUaFRjwG8quC0zxtk5ACEL6wrksNaZiQfkvwZKRxtM08AfGDgBh2Q6wG4BfAo+sAxXB/xp+6VI3lzTMGSK3/Lgu1mt62fji1W+tH0m+R7dm9iZNVeMnjm9om0mUOs8O+zc47dz84Juh76DJG3NYEqeHLOfVnIYkEVC6pYUMWCKhZUsaCKBVUsqGJBFQuqWFDFgipO3OnEfRcn7qWCTtxTOHFP4cS9Ek7cVZy4qzhxL4ZO3AXoxF2QoxP3DifuW5y4q1hQxYIqFlSxoIoFVSyoYkEVC6pYUMWCKhZUsaCKE3c6cd/FiXupoBP3FE7cUzhxr4QTdxUn7ipO3IuhE3cBOnEX5OjEvcOJ+xYn7ioWVLGgigVV/gKEL4RSyM8Z8wAAAABJRU5ErkJggg==);
  height: 140px;
  pointer-events: none;
  transition: background 300ms;
  width: 40px;
}
.highlight {
  background: #4d98ef;
  border-radius: 50%;
  height: 12px;
  left: 14px;
  pointer-events: none;
  position: absolute;
  top: 14px;
  transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.2);
  transform: translateY(-50px);
  width: 12px;
}
.hidden:nth-child(1):checked ~ .highlight {
  transform: translateY(0);
}
.hidden:nth-child(3):checked ~ .highlight {
  transform: translateY(50px);
}
.hidden:nth-child(5):checked ~ .highlight {
  transform: translateY(100px);
}
.hidden:nth-child(1):checked + .entry .circle {
  border-color: #4d98ef;
}
.hidden:nth-child(3):checked + .entry .circle {
  border-color: #4d98ef;
}
.hidden:nth-child(5):checked + .entry .circle {
  border-color: #4d98ef;
}
.check:checked ~ .containerOuter .overlay {
  background: #ecf0f4;
}
`

// list-style-type: none;
// padding-left: 50px;
// margin: 0;

// > li {
//   display: block;
//   position: relative;
//   padding: 20px 0px;
// }

// /* Radio Button
// /* ––––––––––––––––––––––––––––––––––––––––––––––––––  */
// input[type=radio] {
//   position: absolute;
//   visibility: hidden;
// }

// /* Reset */
// input#one ~ ${Check_} { 
//   transform: translate(-50px, -25px); 
//   background: #B2D7F5;
// }
// input#two ~ ${Check_} { 
//   transform: translate(-50px, -83px); 
//   background: #2196F3;
//   box-shadow: 0 6px 12px rgba(33, 150, 243, 0.35);
// }

// /* Radio Input #1 */
// input#one:checked ~ ${Check_} { transform: translate(-50px, 33px); }

// /* Radio Input #2  */
// input#two:checked ~ ${Check_} { transform: translate(-50px, -25px); }

export default Top_