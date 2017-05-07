const FETCH_GIPHY_PROFILE = 'FETCH_GIPHY_PROFILE';
const FETCH_GIPHY_PROFILE_SUCCESS = 'FETCH_GIPHY_PROFILE_SUCCESS';

export {
  FETCH_GIPHY_PROFILE,
  FETCH_GIPHY_PROFILE_SUCCESS
}

export const getGiphySuccess = data => {
  return {
    type: 'FETCH_GIPHY_PROFILE_SUCCESS',
    giph: data
  }
}

export const getGiphyProfile = () => {
  return (dispatch) => {
    fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC').then(response => {
      let giph = response.json()
      return giph
    }).then(giph => {
      return dispatch(getGiphySuccess(giph.giph))
    })
  }
}
