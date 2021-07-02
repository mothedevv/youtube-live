import React, { useState } from 'react';
import styles from './Tabs.module.css';

const Tabs = ({ children }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label);

	const handleClick = (e, currentTab) => {
		e.preventDefault();
		setActiveTab(currentTab);
	};

	return (
		<div className={styles.dashboard}>
			<ul className={styles.tabs}>
				{/* tab labels */}
				{children.map((tab) => {
					const { label, icon } = tab.props;
					return (
						<li
							key={label}
							className={label === activeTab ? styles.current : ''}
						>
							<a href="#" onClick={(e) => handleClick(e, label)}>
								<i className={icon}></i> {label}
							</a>
						</li>
					);
				})}
			</ul>
			{/* tabbed content */}
			{children.map(
				(child) =>
					child.props.label === activeTab && (
						<div key={child.props.label} className={styles.content}>
							{child.props.children}
						</div>
					)
			)}
		</div>
	);
};

export { Tabs };
