import { ButtonWraper, ButtonFeedback} from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateKeys = Object.keys(options);
  return (
    
   <ButtonWraper>
      {stateKeys.map(option => (
        <ButtonFeedback
          key={option}
          type="button"
          name={option}
          onClick={()=>onLeaveFeedback(option)}
        >
          {option}
    </ButtonFeedback>
  
))}
  </ButtonWraper>
 ) 
}