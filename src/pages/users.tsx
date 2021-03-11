import React from 'react';
import { connect } from 'dva';
import List from "./components/List";
import Message from "./components/Message";
import 'bulma/css/bulma.css'


class Users extends React.Component<{ dispatch: any, datalayer: any, loading: any, history: any }> {

  constructor(props: any, state: any) {
    super(props);

    this.state = {
      loading: false,
      filterBy: "",
      timeIntervalForFllter: "",

    }

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

  filterByTimeAndInput = () => {
    clearInterval(this.state.timeIntervalForFllter);
    this.onRequestFileter(this.state.filterBy);
  }

  onFil = (filter: any) => {
    if (filter !== "") {

      clearInterval(this.state.timeIntervalForFllter);
      this.setState({
        filterBy: filter,
        timeIntervalForFllter: setInterval(this.filterByTimeAndInput, 300)
      });



    } else {
      // console.log("...requesting with empty values ")
      this.onReset();
    }
  }

  onRequestFileter = (filter: any) => {
    const { dispatch, history } = this.props;
    let typeDispatch = (history.location.pathname === "/repos" ? 'datalayer/byOneRepos' : 'datalayer/byOne');

    dispatch({
      type: typeDispatch,
      payload: {
        filter: filter
      },
    });
  }


  requestDataToGit = (initId: any) => {
    const { dispatch, history } = this.props;

    let typeDispatch = (history.location.pathname === "/repos" ? 'datalayer/fetchRepos' : 'datalayer/fetch');
    dispatch({
      type: typeDispatch,
      payload: {
        since: initId
      },
    });
  }

  render() {
    const { datalayer, history } = this.props;
    let currentComponent = <progress className="progress is-small is-primary" max="100">15%</progress>;
    let propsForComponent = {
      titleMessage: "",
      inviteMessage: "?",
      textButton: "",
      typeMeesage: ""
    };
    if (datalayer.err) {

      if (datalayer.err.response && (datalayer.err.response.status === "404" || datalayer.err.response.status === 404)) {
        propsForComponent =
        {
          titleMessage: "The user does not exist on Git Hub!",
          inviteMessage: "Would you try it with another one?",
          textButton: "Reload?",
          typeMeesage: "info"
        }
      } else {
        propsForComponent =
        {
          titleMessage: "The request have gotten a fail respose!",
          inviteMessage: "Would you try it again?",
          textButton: "Reload?",
          typeMeesage: "danger"
        }
      }

      let messageOnList = <Message
        titleMessage={propsForComponent.titleMessage}
        inviteMessage={propsForComponent.inviteMessage}
        textButton={propsForComponent.textButton}
        typeMeesage={propsForComponent.typeMeesage}
      />

      currentComponent = <List
        onNext={this.onNext}
        onPrev={this.onPrev}
        onFilter={this.onFil}
        onReset={this.onReset}
        textFilter={"Search by User Name"}
        users={[]}
        messageOnList={messageOnList}
      ></List>;

    }


    if (datalayer.data) {
      let userRender = [];
      if (datalayer.data && datalayer.data[0]) {
        userRender = datalayer.data
      }

      if (datalayer.data && !datalayer.data[0]) {
        userRender = [datalayer.data]
      }

      currentComponent = <List
        onNext={this.onNext}
        onPrev={this.onPrev}
        onFilter={this.onFil}
        onReset={this.onReset}
        textFilter={"Search by " + (history.location.pathname === "/repos" ? "Org" : "User") + " Name"}
        users={userRender}
        messageOnList={{}}
      ></List>;
    }



    return (



      <div>
        {currentComponent}
      </div>
    );
  }

};

export default connect(({ datalayer }: any) => ({
  datalayer,
}))(Users);