import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function (props: any) {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });
    const submitHandler = async () => {
        try {
            await axios.post('http://localhost:5002/api/v1/login', {
                ...formState,
            });
            alert('You have successfully Logedin!');
        } catch (e) {
            console.log('error in service = ', e);
            alert('Something went wrong!');
        }
    };
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Not registered?{' '}
                        <Link className="link-primary" to="/register">
                            Sign UP
                        </Link>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value={formState.email}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={formState.password}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={submitHandler}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
