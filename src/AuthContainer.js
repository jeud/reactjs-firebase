import { Container } from 'unstated'

class AuthContainer extends Container {
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

export default new AuthContainer()