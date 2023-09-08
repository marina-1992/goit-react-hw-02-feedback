import React, {Component} from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState(prev=>({ [e]: prev[e] + 1 }));
 }
  // countTotalFeedback = ({ good, neutral, bad})=>
  //  good + neutral + bad;
    countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() ?
      Math.round((this.state.good * 100) / this.countTotalFeedback(this.state)) : "0"; 
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}/>
        </Section>
        {this.countTotalFeedback() ? (
       <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/>
          
          </Section>
          ) : (
          <Notification message="There is no feedback" />
        )}
        </>
    );
  }
  
}

