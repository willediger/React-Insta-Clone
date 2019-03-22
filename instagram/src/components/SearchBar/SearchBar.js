import React from 'react';
import './SearchBar.css';

import styled, { css } from "styled-components";

const SearchBarHeader = styled.header`
  width: 100%;
  height: 77px;
  border: 1px solid #E6E6E6;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`

const SearchBarContents = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 970px;
  width: 100%;
  padding: 26px 20px;
  margin: 0 auto;
  padding: 0;
  justify-content: space-between;
  align-items: center;
`

const LogoSection = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const SearchBox = styled.div`
  margin-right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${props => 
    props.noSearchEntered &&
    css`
      margin-right: 17px;
    `
  }
`

const ClearSearchBtn = styled.button`
  ${props => 
    props.noSearchEntered &&
    css`
      display: none;
    `
  }
`
const MenuIcons = styled.div`
  display: flex;
  flex-direction: row;
`

const SearchInput = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  padding: 3px 10px 3px 10px;
  height: 100%;
  width: 100%;
  background-color: #FAFAFA;
  &:placeholder {
    color: #999999;
  }
`

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  
  inputChangeHandler = e => {
    e.preventDefault();
    this.setState({search: e.target.value})
    if (e.target.value.length) {
      this.props.search(e.target.value)
    } else {
      this.props.clearSearch();
    }
  }

  clearSearch = e => {
    e.preventDefault();
    this.setState({search: ''})
    this.props.clearSearch();
  }

  render() {
    const noSearchEntered = !this.state.search.length;
    return (
      <SearchBarHeader>
        <SearchBarContents>
          <LogoSection>
            <div className="logo"></div>
            <div className="divider"></div>
            <div className="companyName"></div>
          </LogoSection>
          <SearchBox noSearchEntered={noSearchEntered}>
            <SearchInput
              placeholder="Search"
              name="searchInput"
              onChange={this.inputChangeHandler} 
              value={this.state.search}
            />
            <ClearSearchBtn noSearchEntered={noSearchEntered} onClick={this.clearSearch} className='clearSearchBtn'></ClearSearchBtn>
          </SearchBox>
          <MenuIcons>
            <div className="exploreBtn"></div>
            <div className="activityBtn"></div>
            <div className="profileBtn" onClick={this.props.logout}></div>
          </MenuIcons>
        </SearchBarContents>
      </SearchBarHeader>
    );
  } 
}

export default SearchBar;