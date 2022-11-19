import { useState } from 'react';

export default function (props: any) {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });

    const submitHandler = () => {
        console.log(formState);
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Profile</h3>

                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            value={formState.name}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
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
                            placeholder="Password"
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
