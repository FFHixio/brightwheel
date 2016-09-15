/**
 * breit-wheeler
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /** @jsx etch.dom */

import etch from 'etch';
import classNames from 'classnames';
import EtchComponent from './etch-component';

class MediaBody extends EtchComponent {

  render() {
    let classes = classNames(
      'media-body',
      this.properties.classNames
    );

    // If this component has a title, make sure we render it
    if(this.properties.title !== undefined){
      this.children.push(<strong>{this.properties.title}</strong>);
    }

    // Add the body text to the component
    this.children.push(<p>{this.properties.text}</p>);


    return (
      <div className={classes}>
        {this.children}
      </div>
    );
  }

}

export default MediaBody;