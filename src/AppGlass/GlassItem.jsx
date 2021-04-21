import React, { Component } from 'react'

export default class GlassItem extends Component {
    render() {
        const {glassItem,changeGlass} = this.props;
        return (
            <div className="col-3">
                  <button className="btn btn-outline-secondary" onClick={() => {changeGlass(glassItem.glassName,glassItem.glassCost,glassItem.glassImg)}}>
                    <img
                      src={glassItem.glassImg}
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
            </div>
        )
    }
}
