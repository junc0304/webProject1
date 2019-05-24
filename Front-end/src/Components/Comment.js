import React, { Component } from 'react';
import { Form, ListGroup, Container, Row, Col, Collapse, Modal, Button, InputGroup, Tab, Fade } from 'react-bootstrap';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      inputComment: '',
      currentUser: '',
      showUsers: true,
      btnBG: 'rgba(255,255,255,0.1)',
      btnFG: 'rgba(55,55,55,0.8)'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleButtonLeave() {
    this.setState({
      btnBG: 'rgba(255,255,255,0.6)',
      btnFG: 'rgba(55,55,55,0.8)'
    });
  }

  handleButtonEnter() {
    this.setState({
      btnBG: 'rgba(55,55,55,0.2)',
      btnFG: 'rgba(255,255,255,0.5)'
    })
  }

  userControl() {
    this.setState({ showUsers: !this.state.showUsers })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.inputComment)
      return;
    let newComment = {
      date: Date(),
      userName: 'Jun',
      input: this.state.inputComment
    }
    this.setState((prevState) => ({
      comments: prevState.comments.concat(newComment),
      inputComment: ''
    }));
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  render() {
    const { showUsers } = this.state;

    return (
      <Modal
        size="lg"
        show={true}
        dialogClassName="modal-w90"
        aria-labelledby="example-modal-sizes-title-lg"
        centered >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Posting Title</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ height: '40vh' }}>
          {/* 
          <Button
            onClick={() => this.userControl()}
            onMouseEnter={() => this.handleButtonEnter()}
            onMouseLeave={() => this.handleButtonLeave()}
            aria-controls="user-list-container"
            aria-expanded={showUsers}
            style={{
              padding: '1px', margin: '0px', marginTop:'5px', width: '5rem', height: '2.5rem',
              position: 'absolute', right: '21px', color: this.state.btnFG,
              textAlign: 'center', border: '0', transition: 'all 0.6s ease 0s',
              zIndex: '1000', outline: 'none', backgroundColor: this.state.btnBG
            }}
          >
            {showUsers ? 'hide' : 'show'}
          </Button>
          */}
          <Container fluid style={{ height: "100%", width: "100%", borderRadius: '5px', border: '0.5px solid rgba(0,0,0,0.3)' }}>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" style={{ borderRadius: '5px 0px 0px 5px', border: '0.5px solid rgba(0,0,0,0.5)' }}>
              <Row >
                <Col sm={9} xs={9} md={9} xl={9} style={{ padding: '0px' }}>
                  <Tab.Content style={{ height: '100%', width: '100%' }}>
                    <Tab.Pane
                      eventKey="#link1"
                      style={{
                        readOnly: true,
                        padding: '6px 12px 6px 12px', wordWrap: 'break-word',
                        boxSizing: 'border-box', width: '100%', height: '100%',
                        resize: "none"
                      }}>
                      <ul>
                        {this.state.comments.map((item , i) =>
                          <li style={{ textAlign: 'right' }} key={i}>
                            <span >{item.Date}, {item.userName} {item.input}</span>
                          </li>
                        )}
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="#link2"
                      style={{
                        readOnly: true,
                        padding: '6px 12px 6px 12px', wordWrap: 'break-word',
                        boxSizing: 'border-box', width: '100%', height: '100%',
                        resize: "none"
                      }}>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
                <Col xs={3} sm={3} md={3} xl={3} style={{ padding: '0px' }}>
                  <ListGroup style={{ border: '0px' }}>
                    <ListGroup.Item action href="#link1" style={{ width: '100%', padding: '5px', margin: '0px', textAlign: 'center' }} disabled={!showUsers}>
                      user1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2" style={{ width: '100%', padding: '5px', margin: '0px', textAlign: 'center' }} disabled={!showUsers}>
                      user2
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              {/* 
            <Fade dimension='width' in={this.state.showUsers} style={{ width: "5rem", position: "absolute", top: '65px', right: '21px' }}>
              <ListGroup >
                <ListGroup.Item action href="#link1" style={{ padding: '5px', margin: '0px', textAlign: 'center' }} disabled={!showUsers}>
                  user1
                  </ListGroup.Item>
                <ListGroup.Item action href="#link2" style={{ padding: '5px', margin: '0px', textAlign: 'center' }} disabled={!showUsers}>
                  user2
                  </ListGroup.Item>
              </ListGroup>
            </Fade>*/}
            </Tab.Container>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container fluid style={{ height: "100%", width: "100%", borderRadius: '5px', border: '0.5px solid rgba(0,0,0,0.3)' }}>
            {this.state.inputComment}
            <Form onSubmit={this.handleSubmit}>
              <Row >
                <Col sm={9} xs={9} md={9} xl={9} style={{ padding: '0px' }}>
                  <Form.Group controlId="inputComment" style={{ padding: '0px', margin: '0px' }}>
                    <Form.Control
                      type="text"
                      as="textarea"
                      onChange={this.handleChange}
                      value={this.state.inputComment}
                      style={{
                        overflow: 'auto', resize: "none",
                        borderRadius: '5px', border: '0.5px solid rgba(0,0,0,0.1)', wrap: 'hard'
                      }}
                      rows="2" />
                  </Form.Group>
                </Col>
                <Col xs={3} sm={3} md={3} xl={3} style={{ padding: '0px' }}>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      width: '100%', height: '100%'
                    }} >
                    Send
                </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Comment;