import React from 'react';


// This is the higer order component, who has the mouseMove behaviour
// We can see here, withMouse is a HOC, who takes Component as input

// Most important thing to remember here is, this can still run into a problem
// when the component is being wrapped in multiple HOCs and of there is a name collision
// React won't throw any error and it will be hard to track down which prop are being over-ridden and by whom
const withMouse = (Component) => {

    // This HOC, wraps the input component and returns a wrapped Component
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                x: 0,
                y: 0
            }
        }

        handleMouseMove = event => {
            this.setState({
                x: event.clientX,
                y: event.clientY
            })
        }

        // render method here emits the wrapped Component
        render() {
            return (
                <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                    {
                        /*
                            Look at this syntax, it is very important to pass the props down to the Component being wrapped
                            Otherwise, props passed with lost from here onwards in the hierarchy
                            Also the state of the wrapped componet is being passed as props with name as mouse
                            <Component {...this.props} mouse={this.state} />
                        */
                    }
                    <Component {...this.props} mouse={this.state} />
                </div>
            );
        }
    }
}

// This is my compoent, who needs behavious of onMouseMove, and wants to display the current cursor coordinates
class AppWithHOC extends React.Component {
    render() {
        // This prop mouse here is passed from HOC
        const {x, y} = this.props.mouse;

        return (
            <div>
                <h1>The mouse position is: ({x}, {y}), the message is: {this.props.message}</h1>
            </div>
        )
    }
}

// Component being wrapped
export default withMouse(AppWithHOC);