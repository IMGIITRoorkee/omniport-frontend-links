import React from 'react'
import { connect } from 'react-redux'
import { isMobile, isBrowser } from 'react-device-detect'
import { Scrollbars } from 'react-custom-scrollbars'
import { Container, Card } from 'semantic-ui-react'

import Sidebar from 'core/common/src/components/primary-sidebar'
import { AppHeader, AppFooter, AppMain, TileCard } from 'formula_one'
import { setLinkList } from '../actions'

import main from 'formula_one/src/css/app.css'
import tile from 'formula_one/src/css/tiles.css'

class App extends React.PureComponent {
  componentDidMount () {
    this.props.SetLinkList()
  }
  render () {
    const { linkList } = this.props
    const creators = [
      {
        name: 'Dhruv Bhanushali',
        role: 'Backend developer',
        link: 'https://dhruvkb.github.io/'
      },
      {
        name: 'Praduman Goyal',
        role: 'Frontend developer',
        link: 'https://pradumangoyal.github.io'
      }
    ]
    return (
      <React.Fragment>
        <div styleName='main.app'>
          <AppHeader mode='site' appName='links' userDropdown />
          {isMobile && <Sidebar />}
          <AppMain>
            <div styleName='main.app-main'>
              {isBrowser && <Sidebar />}
              <Scrollbars autoHide>
                <Container styleName='tile.tile-container'>
                  <Card.Group itemsPerRow={3} stackable doubling>
                    {linkList.isLoaded
                      ? linkList.data.map(link => {
                        return (
                          <TileCard
                            key={link.id}
                            as='a'
                            href={link.url}
                            target='_blank'
                            name={link.title}
                            imageUrl={link.logo}
                            iconName='chain'
                            desc={<span>{link.description}</span>}
                          />
                        )
                      })
                      : 'Loading'}
                  </Card.Group>
                </Container>
              </Scrollbars>
            </div>
          </AppMain>
          <AppFooter creators={creators} />
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    linkList: state.linkList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    SetLinkList: () => {
      dispatch(setLinkList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
