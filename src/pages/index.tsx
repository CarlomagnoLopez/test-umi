import React from 'react';
import styles from './index.css';
import { connect } from 'dva';
import LandingTiles from './components/LandingTiles';

class Home extends React.Component<{ dispatch: any, datalayer: any, loading: any }> {

  constructor(props: any) {
    super(props);

  }
  componentDidMount = () => {
    const { dispatch } = this.props;
  }

  render() {
    return (
      <div>
        <LandingTiles />
      </div>
    );
  }

};

export default connect(({ datalayer }: any) => ({
  datalayer,
}))(Home);