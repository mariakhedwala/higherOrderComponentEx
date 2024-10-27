import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    const WithAuthComponent = (props) => {
        const navigate = useNavigate();
        const isAuth = false;

        useEffect(() => {
            console.log("User Authentication", isAuth)
            if (!isAuth) {
                navigate('/')
            }
        }, [isAuth, navigate])

        return isAuth ? <WrappedComponent {...props} /> : <div>null</div>
    }
    return WithAuthComponent
}

export default withAuth