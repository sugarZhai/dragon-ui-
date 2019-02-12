import React, { Component } from 'react';
import classnames from 'classnames';
import { IProps } from './PropsType';

class PanelMore extends Component<IProps, any> {
  render() {
    const { className, children, style } = this.props;

    const cls = classnames({
      'ui-panel-more': true,
      [className!]: !!className,
    });

    return (
      <div className={cls} style={style}>
        {children}
      </div>
    );
  }
}

export default PanelMore;
