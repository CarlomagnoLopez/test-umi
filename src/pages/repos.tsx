import React from 'react';
import { connect } from 'dva';
import List from "./components/List";
import Message from "./components/Message";
import 'bulma/css/bulma.css'

class Repos extends React.Component<{ dispatch: any, datalayer: any, loading: any }> {

  constructor(props: any) {
    super(props);

  }

  componentDidMount = () => {
    this.requestDataToGit(0)
  }

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'datalayer/originalstate',
      payload: {},
    });
  }

  onReset = () => {
    this.requestDataToGit(0)
  }

  onNext = (initId: any) => {
    this.requestDataToGit(initId)


  }
  onPrev = (initId: any) => {
    this.requestDataToGit(initId - 10)
  }
  onFil = (filter: any) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'datalayer/byOneRepos',
      payload: {
        filter: filter
      },
    });
  }


  requestDataToGit = (initId: any) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'datalayer/fetchRepos',
      payload: {
        since: initId
      },
    });
  }

  render() {
    const { datalayer } = this.props;
    let currentComponent = <progress className="progress is-small is-primary" max="100">15%</progress>;
    if (datalayer.err) {

      if (datalayer.err.response && (datalayer.err.response.status === "404" || datalayer.err.response.status === 404)) {

        currentComponent = (<Message
          titleMessage="The user does not exist on Git Hub!"
          inviteMessage="Would you try it with another one?"
          textButton="Another one!"
          typeMeesage="info"

        />)
      } else {
        currentComponent = (
          <Message
            titleMessage="The request have gotten a fail respose!"
            inviteMessage="Would you try it again?"
            textButton="Try it!"
            typeMeesage="danger"
          />
        )
      }

    }
    let userRender = [];
    if (datalayer.data && datalayer.data[0]) {
      userRender = datalayer.data
    }

    if (datalayer.data && !datalayer.data[0]) {
      userRender = [datalayer.data]
      // currentComponent = <List
      //   onNext={this.onNext}
      //   onPrev={this.onPrev}
      //   onFilter={this.onFil}
      //   onReset={this.onReset}
      //   textFilter={"Search by Repo Name"}
      //   users={[datalayer.data]}
      // ></List>;
    }

    currentComponent = <List
      onNext={this.onNext}
      onPrev={this.onPrev}
      onFilter={this.onFil}
      onReset={this.onReset}
      textFilter={"Search by Repo Name"}
      users={userRender}
    ></List>;


    return (



      <div>
        {currentComponent}
      </div>
    );
  }

};

export default connect(({ datalayer }: any) => ({
  datalayer,
}))(Repos);