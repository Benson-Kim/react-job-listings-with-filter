import React from "react";

import iconX from "../assets/images/icon-remove.svg";

const FilterContainer = ({
	setLevelFilter,
	setRoleFilter,
	setlangFilter,
	setToolFilter,
	clearFilters,
	levelFilter,
	roleFilter,
	langFilter,
	toolFilter,
}) => {
	return (
		<div className='flex py-5 px-2 mx-5 my-8 justify-between shadow-md rounded bg-white md:mx-20 md:px-8 transition-all duration-300'>
			<div className='flex flex-wrap gap-2'>
				{levelFilter && (
					<div className='bg-teal-50 text-teal-600 flex justify-center items-center pl-2 rounded-md ml-3 font-semibold'>
						<span className='mr-2'>{levelFilter} </span>
						<button className='cursor-pointer bg-cyan-800 text-cyan-100 text-lg p-2 rounded-r-lg hover:bg-teal-600'>
							<img
								src={iconX}
								alt=''
								onClick={() => setLevelFilter("")}
							/>{" "}
						</button>
					</div>
				)}
				{roleFilter && (
					<div className='bg-teal-50 text-teal-600 flex justify-center items-center pl-2 rounded-md ml-3 font-semibold'>
						<span className='mr-2'>{roleFilter} </span>
						<button className='cursor-pointer bg-cyan-800 text-cyan-100 text-lg p-2 rounded-r-lg hover:bg-teal-600'>
							<img
								src={iconX}
								alt=''
								onClick={() => setRoleFilter("")}
							/>{" "}
						</button>
					</div>
				)}
				{langFilter.length > 0 &&
					langFilter.map((lang) => (
						<div className='bg-teal-50 text-teal-600 flex justify-center items-center pl-2 rounded-md ml-3 font-semibold'>
							<span className='mr-2'>{lang} </span>
							<button className='cursor-pointer bg-cyan-800 text-cyan-100 text-lg p-2 rounded-r-lg hover:bg-teal-600'>
								<img
									src={iconX}
									alt=''
									onClick={() =>
										setlangFilter(
											langFilter.filter(
												(l) => l !== lang,
											),
										)
									}
								/>{" "}
							</button>
						</div>
					))}
				{toolFilter.length > 0 &&
					toolFilter.map((tool) => (
						<div className='bg-teal-50 text-teal-600 flex justify-center items-center pl-2 rounded-md ml-3 font-semibold'>
							<span className='mr-2'>{tool} </span>
							<button className='cursor-pointer bg-cyan-800 text-cyan-100 text-lg p-2 rounded-r-lg hover:bg-teal-600'>
								<img
									s
									src={iconX}
									alt=''
									onClick={() =>
										setToolFilter(
											toolFilter.filter(
												(t) => t !== tool,
											),
										)
									}
								/>{" "}
							</button>
						</div>
					))}
			</div>

			<button
				className='text-slate-700 font-semibold hover:text-teal-500 hover:underline'
				onClick={() => clearFilters()}
			>
				Clear
			</button>
		</div>
	);
};

export default FilterContainer;
