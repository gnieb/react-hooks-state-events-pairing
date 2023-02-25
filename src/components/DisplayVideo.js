import React from "react";



function DisplayVideo ({ title, src, views, uploaded }) { return (
    <div>
    <iframe
        width="919"
        height="525"
        src={src}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h1>{title}</h1>
      <h2>{views} Views | Uploaded {uploaded}</h2>
    </div>
    )
}

export default DisplayVideo