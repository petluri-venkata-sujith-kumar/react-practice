import  { Component } from 'react'
import { GrLocation } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
export default class SearchComponent extends Component {
  render() {
    return (
      <div className='searchBlock'>
        <aside className='searchDivider'>
            <div className="leftSearch">
                <span className='icon_left'><GrLocation/></span>
                <span className='inputContainer'><input type="text" name="" id=""placeholder='banglore' /></span>
                <span className='icon_right'><FaAngleDown/></span>
            </div>
            <div className="rightSearch">
                <span className='icon_left'><FaSearch/></span>
                <span className='inputContainer'><input type="text" name="" id=""placeholder='search for cleaning...' /></span>
            </div>
        </aside>
      </div>
    )
  }
}
