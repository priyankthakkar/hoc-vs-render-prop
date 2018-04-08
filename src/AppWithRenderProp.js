import React from 'react';

// When we try extract behavious outside with the help of render-prop pattern
// We will end up creating a normal compoent like Mouse here
// It is worth noting that Mouse doesn't wrap anyother component here
// It is expecting childern, to whom it will pass the state
// and the child component is like, you pass me your state and I will show you what to render

class Mouse extends React.Component {

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
        });
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {this.props.children(this.state)}
            </div>
        )
    }
}

class AppWithRenderProp extends React.Component {
    render() {
        return (
            <Mouse>
                {
                    mouse => (
                        <div>
                            <h1>The mouse position is ({mouse.x}, {mouse.y}), the message is: {this.props.message}</h1>
                        </div>
                    )
                }
            </Mouse>
        )
    }
}

// The biggest paradigm in the react community is, use composition
// Composition is better than Inheritence
// Well, in case of HOC, the composition takes place outside component, here
// when we are exporting compoent
// export default withMouse(AppWithHOC);
// Well, that composition at moudle level is static composition
// it takes place while class creation
// compositon in the case render-prop, takes place inside render() method of AppWithRenderProp
export default AppWithRenderProp;