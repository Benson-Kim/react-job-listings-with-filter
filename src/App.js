import { useEffect, useState } from "react";
import { FilterContainer, User } from "./components";
import Data from "./data.json";

const App = () => {
	const [levelFilter, setLevelFilter] = useState("");
	const [roleFilter, setRoleFilter] = useState("");
	const [langFilter, setLangFilter] = useState([]);
	const [toolFilter, setToolFilter] = useState([]);

	const [filtered, setFiltered] = useState([]);

	const clearFilters = () => {
		setLevelFilter("");
		setRoleFilter("");
		setLangFilter("");
		setToolFilter("");
	};

	useEffect(() => {
		let data = [...Data];

		if (levelFilter)
			data = data.filter((skill) => skill.level === levelFilter);

		if (roleFilter)
			data = data.filter((skill) => skill.role === roleFilter);

		if (langFilter.length > 0)
			data = data.filter((skill) =>
				langFilter.every((lang) => skill.languages.includes(lang)),
			);

		if (toolFilter.length > 0)
			data = data.filter((skill) =>
				toolFilter.every((tool) => skill.tools.includes(tool)),
			);

		setFiltered(data);
	}, [levelFilter, roleFilter, langFilter, toolFilter]);

	return (
		<>
			<div className='flex flex-col bg-teal-50'>
				{levelFilter === "" &&
				roleFilter === "" &&
				langFilter.length === 0 &&
				toolFilter.length === 0 ? null : (
					<FilterContainer
						setLevelFilter={setLevelFilter}
						setRoleFilter={setRoleFilter}
						setlangFilter={setLangFilter}
						setToolFilter={setToolFilter}
						clearFilters={clearFilters}
						levelFilter={levelFilter}
						roleFilter={roleFilter}
						langFilter={langFilter}
						toolFilter={toolFilter}
					/>
				)}
			</div>
			<div>
				{filtered.map((userdata) => (
					<div key={userdata.id}>
						<User
							userdata={userdata}
							setLevelFilter={setLevelFilter}
							setRoleFilter={setRoleFilter}
							setlangFilter={setLangFilter}
							setToolFilter={setToolFilter}
							langFilter={langFilter}
							toolFilter={toolFilter}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default App;
