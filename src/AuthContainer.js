import { Container } from 'unstated'

export default class AuthContainer extends Container {
    state = {
        isAuth: false
    }

    login = () => {
        this.setState(state => ({
            isAuth: true
        }))
    }

    logout = () => {
        this.setState(state => ({
            isAuth: false
        }))
    }
}