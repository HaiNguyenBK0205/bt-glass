import React, { Component } from 'react'
import GlassItem from './GlassItem';

export default class GlassList extends Component {
    renderGlassList() {
        return this.props.glassList.map((glassItem,index) => {
            return (
                <GlassItem key={index} glassItem={glassItem} changeGlass={this.props.changeGlass}/>
            );
        });
    }

    render() {
        return (
            <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                {this.renderGlassList()}
            </section>
        )
    }
}
