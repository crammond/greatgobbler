import React, { Component } from 'react';

const height = 600

class FacebookPageWrapper extends Component {
  render() {
    return (
      <div style={{overflow: 'hidden'}}>
        <iframe
          src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgreatgobbler5knashua&" +
               "tabs=timeline&" +
               "width=" + this.props.width + "&" +
               "height=" + height + "&" +
               "small_header=true&" +
               "adapt_container_width=true&" +
               "hide_cover=true&" +
               "show_facepile=true&" +
               "appId"}
          title="facebookIFrame"
          width={this.props.width}
          height={height}
          style={{
            border:"none",
            overflow:"hidden"
          }}
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
        >
        </iframe>
      </div>
    )
  }
}

export default FacebookPageWrapper
