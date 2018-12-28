import React from "react"

export default React.createClass({
    render() {
        return (
            <div>
                <h2>{this.props.params.id}</h2>
            </div>
        )
    }
})