import React, { Component } from "react";
import CardGlass from "./CardGlass";
import GlassList from "./GlassList";

class AppGlass extends Component {
    glassList = [
        {
            glassName : "GUCCI",
            glassCost : "$30",
            glassImg : "./img/glassesImage/v1.png",
        },
        {
            glassName : "GUCCF",
            glassCost : "$35",
            glassImg : "./img/glassesImage/v2.png",
        },
        {
            glassName : "DIOR",
            glassCost : "$40",
            glassImg : "./img/glassesImage/v3.png",
        },
        {
            glassName : "DIRF",
            glassCost : "$35",
            glassImg : "./img/glassesImage/v4.png",
        },
        {
            glassName : "PRADA",
            glassCost : "$25",
            glassImg : "./img/glassesImage/v5.png",
        },
        {
            glassName : "DARAP",
            glassCost : "$25",
            glassImg : "./img/glassesImage/v6.png",
        },
        {
            glassName : "FENDI",
            glassCost : "$40",
            glassImg : "./img/glassesImage/v7.png",
        },
        {
            glassName : "DIFEN",
            glassCost : "$30",
            glassImg : "./img/glassesImage/v8.png",
        },
        {
            glassName : "GDEDG",
            glassCost : "$35",
            glassImg : "./img/glassesImage/v9.png",
        },
    ];

    state = {
        glassActive : {
            glassName : "GUCCI",
            glassCost : "$30",
            glassImg : "./img/glassesImage/v1.png",
        }
    };

    changeGlass = (name,cost,img) => {
        this.setState({
            glassActive : {
                glassName : name,
                glassCost : cost,
                glassImg : img,
            }
        });
    };

    render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <CardGlass glassActive={this.state.glassActive}/>
              <GlassList glassList={this.glassList} changeGlass={this.changeGlass}/>
            </div>
          </div>
        </section>
      </div>
    );
    }
}

export default AppGlass;
