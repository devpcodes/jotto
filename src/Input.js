import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
    render() {
        return (
            <div>
                <button disabled="disabled">hello</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, null)(Input);
