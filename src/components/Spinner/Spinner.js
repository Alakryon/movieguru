import './Spinner.css';
import SpinnerImage from '../../assets/spinner.svg';

function Spinner() {
	return (
		<div className="Spinner">
			<img src={SpinnerImage} className="SpinnerImage" alt="SpinnerImage" />
		</div>
	);
}

export default Spinner;
