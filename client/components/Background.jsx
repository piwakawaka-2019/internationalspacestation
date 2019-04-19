import React, { Component } from 'react';

class Background extends Component {
    render() {
        return (
            <div>
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Xjs6fnpPWy4?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                {/* <div id="vidtop-content">
                    <div className="vid-info">
                        <h1 className="horizontal-scroll">
                            
                        </h1>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Background;
