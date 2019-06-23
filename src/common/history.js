import {createBrowserHistory} from 'history'

export const history = createBrowserHistory()

export const navto = url => () => history.push(url)
