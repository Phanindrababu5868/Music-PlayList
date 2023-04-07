import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #152850;
`
export const ArtistDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 40vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  width: 100%;
  background-size: cover;
  padding-bottom: 30px;
`

export const ArtistNameContainer = styled.div`
  width: 70%;
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
`
export const Para = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
`
export const SongsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #152850;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
`
export const HeadingSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`
export const SubHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 500;
  color: #ffffff;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: #cbd5e1;
  background-color: transparent;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`
export const Input = styled.input`
  border-width: 0px;
  color: #cbd5e1;
  padding-left: 10px;
  outline: none;
  background-color: transparent;
`
export const ListUlContainer = styled.ul`
  list-style: none;
  margin-left: -40px;
  width: 90%;
  padding: 20px;
  overflow: auto;
  height: 41vh;
`
export const NoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 46vh;
`
