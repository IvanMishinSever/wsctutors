import React from 'react';
import FirstContent from './FirstContent/FirstContent';
import MenuNodes from './MenuNodes/MenuNodes';
import './MainView.css';
import QuizContainer from './Quiz/QuizContainer';
import Example1 from './Example/Example_1';

export default class MainView extends React.Component {
    
//RENDER MENU NODES

renderMenuNodes() {
    const { dispatch } = this.props;
  
    return (
        <div>
            <MenuNodes 
           
            quizViewChangeRedux={this.props.quizViewChangeRedux}
            menuSide={this.props.menuSide}
            dispatch={dispatch}
            />
        </div>
    )
}
//RENDER QUIZ

renderQuizContainer() {
    const { dispatch } = this.props;
    return (
        <div>
            <QuizContainer 
            quizRedux={this.props.quizViewChangeRedux}
            dispatch={dispatch}
            onAnswerSelected={this.props.onAnswerSelected}
            nextQuestion={this.props.nextQuestion}
           />

           
        </div>
    )
}


//EXAMPLE 
renderExample() {
    
        
        return (
            <div>
                <Example1  />
            </div>
        );
    
}

    render() {


        
        return (
            <div className="MainView">
             {/* <Category categoryView={this.props.categoryView} idCategory={this.props.idCategory} /> */}

              <FirstContent firstContentView={this.props.menuSide.firstContentView} />

               {this.renderMenuNodes()}
               {this.renderQuizContainer()}
               {/*this.renderExample()*/} 

            </div>
            )
    }
}