import React from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Container, Card, Grid, Placeholder, Segment } from 'semantic-ui-react'

import CustomBreadcrumb from 'core/common/src/components/custom-breadcrumb'
import { TileCard } from 'formula_one'
import { setLinkList } from '../actions'

import main from 'formula_one/src/css/app.css'
import tile from 'formula_one/src/css/tiles.css'

class App extends React.PureComponent {
  componentDidMount () {
    this.props.SetLinkList()
  }
  render () {
    const { linkList } = this.props
    return (
      <Scrollbars autoHide>
        <Container>
          <CustomBreadcrumb list={[{ name: 'Links' }]} />
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
              : [...Array(6)].map((item, index) => {
                return (
                  <Card key={index}>
                    <Segment>
                      <Placeholder>
                        <Placeholder.Header image>
                          <Placeholder.Line />
                          <Placeholder.Line />
                        </Placeholder.Header>
                      </Placeholder>
                    </Segment>
                  </Card>
                )
              })}
          </Card.Group>
        </Container>
      </Scrollbars>
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
