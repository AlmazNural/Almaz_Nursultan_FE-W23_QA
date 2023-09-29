const User = ({ id, name, email, onDelete }) => {

	const handleDelete = () => {
		onDelete(id);
	}

	return (
		<>
			<div className='list'>
				<span className='bg-[#9a7af159] py-3 px-3 rounded-md focus:outline-none'>{name}</span>
				<span className='py-3 text-gray-400'>{email}</span>
				<span>
					<button className='btnPrimary' onClick={handleDelete}> delet </button>
				</span>
			</div>
		</>
	)
}

export default User