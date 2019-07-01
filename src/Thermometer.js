import React from 'react';
import Proptypes from 'prop-types';
import './style.scss';

const getFormattedLabel = ({label, insertAfter}, val) => insertAfter ? val + label : label + val;

const getIntervals = (format, max, steps) => {
	let intervals = [];

	for (let step = 0; step <= steps; step++) {
		const val = Math.abs(((max / steps) * step).toFixed(2));
		const percent = (val / max) * 100;
		const interval = {
			percent,
			label: getFormattedLabel(format, val)
		};
		
		intervals.push(interval);
	}

	return intervals;
}

const Thermometer = ({format, height, max, size, steps, theme, value}) => {
	const intervals = getIntervals(format, max, steps);
	const percent = value / max * 100;
	const valstr = getFormattedLabel(format, value);

	const stepIntervals = intervals.map(({label, percent}, i) => (
		<li key={i} style={{ bottom: `calc(${percent}% - 1px)` }}>
			{label}
		</li>
	));

	const styledHeight = {height: `${height}px`};

	const styledHeightPercent = {height: `${percent}%`};

	const styledHeightBgColor = {height: `calc(${height}px - 57px)`};

	return (
		<div style={styledHeight} className={`thermometer thermometer--${size} thermometer--theme-${theme}`}>
			<div className="thermometer__draw-a"></div>
			<div className="thermometer__draw-b"></div>
			<div className="thermometer__meter">
				<ul className="thermometer__statistics">{stepIntervals}</ul>
				<div style={styledHeightPercent} className="thermometer__mercury">
					<div className="thermometer__percent-current">{valstr}</div>
					<div className="thermometer__mask">
						<div className="thermometer__bg-color" style={styledHeightBgColor}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

Thermometer.propTypes = {
	format: Proptypes.shape({
		label: Proptypes.string,
		insertAfter: Proptypes.bool
	}),
	height: Proptypes.number,
	max: Proptypes.number,
	size: Proptypes.oneOf(['small', 'normal', 'large']),
	steps: Proptypes.number,
	theme: Proptypes.oneOf(['light', 'dark']),
	value: Proptypes.number
};

Thermometer.defaultProps = {
	format: {
		label: '%',
		insertAfter: true
	},
	height: 200,
	max: 100,
	size: 'small',
	steps: 4,
	theme: 'light',
	value: 0
};

export default Thermometer;