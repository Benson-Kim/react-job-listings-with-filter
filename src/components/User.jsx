import React from "react";

const User = ({
	userdata,
	setLevelFilter,
	setRoleFilter,
	langFilter,
	setlangFilter,
	toolFilter,
	setToolFilter,
}) => {
	const {
		logo,
		company,
		featured,
		position,
		postedAt,
		contract,
		location,
		role,
		level,
		languages,
		tools,
	} = userdata;

	return (
		<div
			className={`bg-white shadow-md flex flex-col md:flex-row md:items-center md: justify-between md:px-8 md:py-2 md:gap-1 rounded mx-5 md:mx-20 mt-6 mb-8 p-3 ${
				featured && "border-l-4 border-teal-600"
			} `}
		>
			<div className='flex flex-col gap-3 md:gap-1 '>
				<div className='md:flex items-center gap-2'>
					<div className='h-auto w-16 -mt-6 md:mt-0'>
						<img src={logo} alt='' />
					</div>

					<div className='flex gap-4 md:gap-2 items-center'>
						<h2 className='text-teal-600 font-semibold'>
							{company}{" "}
						</h2>
						<span className='flex gap-3'>
							{userdata.new && (
								<button className='uppercase rounded-full px-2 text-white bg-teal-600'>
									new!
								</button>
							)}
							{featured && (
								<button className='uppercase rounded-full px-2 text-white bg-slate-600'>
									featured!
								</button>
							)}
						</span>
					</div>
				</div>

				<span className='font-semibold text-slate-700'>
					{position}{" "}
				</span>
				<span className='flex gap-4 text-slate-500'>
					{" "}
					{postedAt} . {contract} . {location}{" "}
				</span>
				<hr className='md:hidden' />
			</div>
			<div className='mt-4 flex flex-wrap gap-x-6 gap-y-4'>
				{role && (
					<span
						className='bg-teal-50 text-teal-600 py-1 px-2 font-semibold rounded-md cursor-pointer hover:bg-teal-600 hover:text-white'
						onClick={() => setRoleFilter(role)}
					>
						{" "}
						{role}{" "}
					</span>
				)}
				{level && (
					<span
						className='bg-teal-50 text-teal-600 py-1 px-2 font-semibold rounded-md cursor-pointer hover:bg-teal-600 hover:text-white'
						onClick={() => setLevelFilter(level)}
					>
						{" "}
						{level}{" "}
					</span>
				)}

				{languages !== ""
					? languages.map((language, index) => (
							<span
								className='bg-teal-50 text-teal-600 py-1 px-2 font-semibold rounded-md cursor-pointer hover:bg-teal-600 hover:text-white'
								key={index}
								onClick={() => {
									if (!langFilter.includes(language)) {
										setlangFilter((prev) => [
											...prev,
											language,
										]);
									}
								}}
							>
								{language}
							</span>
					  ))
					: ""}

				{tools !== ""
					? tools.map((tool, index) => (
							<span
								className='bg-teal-50 text-teal-600 py-1 px-2 font-semibold rounded-md cursor-pointer hover:bg-teal-600 hover:text-white'
								key={index}
								onClick={() => {
									if (!toolFilter.includes(tool)) {
										setToolFilter((prev) => [
											...prev,
											tool,
										]);
									}
								}}
							>
								{tool}
							</span>
					  ))
					: ""}
			</div>
		</div>
	);
};

export default User;
