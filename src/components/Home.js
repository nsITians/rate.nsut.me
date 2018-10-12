import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Header,
  Icon,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'
import Footer from './Footer'
import './Home.css'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="NSUT Feedback"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <Header
      as="h2"
      content="Review courses and professors."
      inverted
      style={{
        fontSize: mobile ? '1.2em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1em'
      }}
    />
    <Icon
      style={{ marginTop: mobile ? '1.5em' : '2em', fontSize: '2em' }}
      className="down-arrow-icon"
      name="angle double down"
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Courses</Menu.Item>
                <Menu.Item as="a">Professors</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active className="sidebar-menu-item">
              Home
            </Menu.Item>
            <Menu.Item as="a" className="sidebar-menu-item">
              Courses
            </Menu.Item>
            <Menu.Item as="a" className="sidebar-menu-item">
              Professors
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node
}

const Home = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 1em', backgroundColor: '#eee' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Guidelines for writing reviews:
        </Header>
        <List as="ol">
          <List.Item as="li">
            Ensure that the selected course and professor name are correct.
          </List.Item>
          <List.Item as="li">
            Check your grammar before posting comments.
          </List.Item>
          <List.Item as="li">
            Discuss the course structure including the effort required, main
            areas to focus, etc.
          </List.Item>
          <List.Item as="li">
            Discuss the teacher's ability to present the material and teaching
            style.
          </List.Item>
          <List.Item as="li">Refrain from using bad words.</List.Item>
          <List.Item as="li">Spam comments will be deleted.</List.Item>
        </List>
        <Link to="/review">
          <Button
            as="a"
            size="large"
            color="green"
            style={{ marginTop: '2em' }}
          >
            <Icon name="star" />
            Write a Review
          </Button>
        </Link>
      </Container>
    </Segment>

    <Footer />
  </ResponsiveContainer>
)

export default Home
