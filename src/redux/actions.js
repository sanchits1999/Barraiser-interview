export const setName = () => (dispatch, getState) => {
    dispatch({
        type: 'SETNAME',
        payload: 'rishab'
    })
}