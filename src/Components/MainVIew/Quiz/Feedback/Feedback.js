import './Feedback.css'


const Feedback = (props) => {
   
        return (
            <div className='Feedback'>
                <p>FEEDBACK{props.feedback[props.isSelected].feedback}</p>
            </div>
        )
  
    

};
export default Feedback;