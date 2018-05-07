// actions.js
// action也是函数
export function setPageTitle (data) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
}

export function setInfoList (data) {
    return (dispatch, getState) => {
        // 使用fetch实现异步请求

    }
}


export function showPublicLoading(data) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_PUBLIC_LOADING', data: true })
    }
}

export function hidePublicLoading(data) {
    return (dispatch, getState) => {
        console.log(data,'888')
        dispatch({ type: 'SET_PUBLIC_LOADING', data: false })
    }
}