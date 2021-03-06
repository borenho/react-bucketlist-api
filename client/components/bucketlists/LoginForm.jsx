import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = ({onSubmit, onChange, errors, user,}) => (
    <Card className = "container">
        <form id="login-form" onSubmit = { onSubmit }>
            <h2 className = "card-heading">Login</h2>

            { errors.summary && <p className = "error-message">{errors.summary}</p> }

            <div className = "field-line">
                <TextField
                type = "email"
                floatingLabelText = "Email"
                autoFocus = 'true'
                name = "email"
                errorText = { errors.email }
                onChange = { onChange }
                value = { user.email }
                />
            </div>

            <div className = "field-line">
                <TextField
                floatingLabelText = "Password"
                name = "password"
                type = "password"
                errorText = { errors.password }
                onChange = { onChange }
                value = { user.password }
                />
            </div>

            <div className = "button-line">
                <RaisedButton type =  "submit" label = "Log In" primary />
            </div>

            <CardText>Don't have an account? <br/> <br/> <Link to = {'/signup'}> Sign Up </Link> </CardText>
            
        </form>
    </Card>
);

LoginForm.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm;