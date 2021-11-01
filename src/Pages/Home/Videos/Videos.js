import React from 'react';

const Videos = () => {
    return (
        <div className="py-5 container" id="videos">
            <h2> Check Our Latest<span> Videos</span></h2>
            <div className="row row-cols-md-2 row-cols-sm-1 row-cols-1 g-5  mb-5">
                <div>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bZkLuCgORi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div >
                <div>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/74dgLjjXABk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div >
        </div>
    );
};

export default Videos;