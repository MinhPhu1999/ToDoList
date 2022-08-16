import './SignIn.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Loading from '../../Components/Loading/Loading';

import { login } from '../../Redux/Actions/userActions';

export default function SignIn(props) {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		mode: 'onChange', // "onChange"
	});

	const dispatch = useDispatch();

	const userLogin = useSelector(state => state.userLogin);
	const { loading, userInfo, error } = userLogin;

	useEffect(() => {
		if (userInfo) {
			props.history.push('/');
		}
		return () => {};
	}, [props.history, userInfo]);

	const submitHandle = data => {
		dispatch(login(data.email, data.password));
	};

	return (
		<div id="signin">
			{!loading ? (
				<div className="signin">
					<div className="signin__title">
						Organize it all with Todo
					</div>
					<div className="signin__form">
						<div className="signin__form-wrapper">
							<p className="signin__form-heading">Sign In Now</p>
							<form
								className="signin__from-bottom"
								onSubmit={handleSubmit(submitHandle)}
							>
								<input
									id="email"
									{...register('email', {
										required: 'required',
										pattern: {
											value: /\S+@\S+\.\S+/,
											message:
												'Entered value does not match email format',
										},
									})}
									type="email"
									placeholder="Email"
									className="signin__form-email"
								/>
								{errors.email && (
									<span role="alert" className="error">
										{errors.email.message}
									</span>
								)}
								<input
									id="password"
									{...register('password', {
										required: 'required',
										minLength: {
											value: 5,
											message: 'min length is 5',
										},
									})}
									type="password"
									placeholder="Password"
									className="signin__form-password"
								/>
								{errors.password && (
									<span role="alert" className="error">
										{errors.password.message}
									</span>
								)}
								<button
									className="signin__form-btn"
									type="submit"
								>
									Sign In &gt;{' '}
								</button>
							</form>
						</div>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
}
