import React from 'react'
import buttonStyle from './PrimaryButton.module.css'
function PrimaryButton({children}) {
  return (
		<button className={`${buttonStyle.btn} ${buttonStyle.slide}`}>
			{children}
		</button>
	);
}

export default PrimaryButton