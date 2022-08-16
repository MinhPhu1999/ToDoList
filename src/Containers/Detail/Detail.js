import './Detail.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

// Components
import Header from 'Components/Header/Header';
import Loading from 'Components/Loading/Loading';
import DeleteTodo from 'Components/DeleteTodo/DeleteTodo';
import ActionTodo from 'Components/ActionTodo/ActionTodo';

// Actions
import { getTodo } from 'Redux/Actions/todoActions';
import { deleteTodoById } from 'Redux/Actions/todoActions';
import { editTodo } from 'Redux/Actions/todoActions';

// svgs
import arrowback from 'assets/svgs/arrowback.svg';
import edit from 'assets/svgs/edit.svg';
import deleteIcon from 'assets/svgs/delete.svg';

export default function Detail(props) {
	const dispatch = useDispatch();
	const [isOpenDelete, setisOpenDelete] = useState(false);
	const [isOpenEdit, setisOpenEdit] = useState(false);

	const param = useParams();
	const id = parseInt(param.id, 10);

	const todoDetail = useSelector(state => state.getTodoDetail);
	const { todo, loading } = todoDetail;

	useEffect(() => {
		dispatch(getTodo(id));
	}, [dispatch, id]);

	const togglePopup = () => {
		setisOpenDelete(!isOpenDelete);
	};

	const openEdit = () => {
		setisOpenEdit(!isOpenEdit);
	};

	const deleteTodo = () => {
		dispatch(deleteTodoById(id));
	};

	const handleEdit = data => {
		data.id = id;
		dispatch(editTodo(data));
		setTimeout(() => {
			setisOpenEdit(!isOpenEdit);
		}, 500);
	};

	if (isEmpty(todo)) {
		props.history.push('/');
	}

	return (
		<div>
			<Header />
			{loading ? (
				<>
					<Loading />
				</>
			) : (
				<div id="detail">
					<div className="detail__heading">
						<Link to="/" className="detail__backhome-btn">
							<div className="detail__backhome-link">
								<img src={arrowback} alt={'arrowback'} />
							</div>
						</Link>
						<div className="detail__task">
							<p className="detail__task-top">Task Details</p>
							<p className="detail__task-bottom">
								#0f417571-1fa9-468d-9c81-72fe465a5762
							</p>
						</div>
						<div
							className={`${
								todo
									? 'detail__action'
									: 'detail__action disabled'
							}`}
						>
							<div
								className="detail__action-edit"
								onClick={openEdit}
							>
								<img src={edit} alt="Edit" />
								<button className="detail__action-edit--btn">
									Edit
								</button>
							</div>
							<div
								className="detail__action-delete"
								onClick={togglePopup}
							>
								<img src={deleteIcon} alt="Delete" />
								<button className="detail__action-delete--btn">
									Delete
								</button>
							</div>
						</div>
					</div>

					{isOpenEdit && (
						<ActionTodo
							todo={todo}
							handleClose={openEdit}
							handleAction={handleEdit}
							heading="Edit"
						/>
					)}

					{isOpenDelete && (
						<DeleteTodo
							handleClose={togglePopup}
							handleDelete={deleteTodo}
						/>
					)}

					<div className="detail__form">
						<div className="detail__form-content">
							<div className="detail__form-group">
								<p className="detail__form-left">Title</p>
								<p className="detail__form-title">
									{todo?.title}
								</p>
							</div>
							<div className="detail__form-group">
								<p className="detail__form-left">Status</p>
								<p
									className={`detail__form-status ${todo?.status
										?.toLowerCase()
										.replace(/\s+/g, '')}`}
								>
									{todo?.status}
								</p>
							</div>
							<div className="detail__form-group">
								<p className="detail__form-left">Priority</p>
								<p
									className={`detail__form-priority ${todo?.priority?.toLowerCase()}`}
								>
									{todo?.priority}
								</p>
							</div>
							<div className="detail__form-group">
								<p className="detail__form-left">Create Date</p>
								<p className="detail__form-createdate">
									{todo?.createdDate}
								</p>
							</div>
							<div className="detail__form-group">
								<p className="detail__form-left">Description</p>
								<p className="detail__form-des">
									{todo?.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
