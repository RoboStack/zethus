import React from 'react';
import { CONSTANTS } from 'amphion';
import OptionRow from '../../../components/optionRow';
import { updateOptionsUtil } from '../../../utils';
import { Input } from '../../../components/styled';

const { DEFAULT_OPTIONS_PATH } = CONSTANTS;

class PathOptions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.updateOptions = updateOptionsUtil.bind(this);
  }

  render() {
    const { options: propsOptions } = this.props;
    const { alpha, color } = {
      ...DEFAULT_OPTIONS_PATH,
      ...propsOptions,
    };
    return (
      <>
        <OptionRow label="Color">
          <Input
            type="color"
            name="color"
            data-id="color"
            value={color}
            onChange={this.updateOptions}
          />
        </OptionRow>
        <OptionRow label="Alpha">
          <Input
            type="number"
            name="alpha"
            step="0.1"
            data-id="alpha"
            value={alpha}
            onChange={this.updateOptions}
          />
        </OptionRow>
      </>
    );
  }
}

export default PathOptions;
