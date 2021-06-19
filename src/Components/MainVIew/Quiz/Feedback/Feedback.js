import './Feedback.css'


const Feedback = (props) => {
   
        return (
            <div class='Feedback'>
                <p>FEEDBACK{props.feedback[props.isSelected].feedback}</p>
            </div>
        )
  
    

};
export default Feedback;