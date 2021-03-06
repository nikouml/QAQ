import React from 'react'
import { Redirect, Route, Switch ,BrowserRouter} from 'react-router-dom'
import Layout from '../components/Layout'
import createForm from '../components/createForm/CreateForm'
import NotFound from './404'
import ListSortDemo from './motion/index'
import Home from './home'
// async component
import AsyncComponent from '../components/AsyncComponent'
import AsyncDemo from './asyncDemo/index'
import TableEnterLeave from './test'
// const AsyncDemo = AsyncComponent(() => import('./asyncDemo/index.js'))

const App = (props) => {
  // const url = this.props.match.params.url
  // console.log(url)
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Redirect exact from='/' to='/create' />
        {/*<Route path='/home' component={Home} />*/}
        <Route path='/create' component={createForm} />
        <Route path='/async' component={AsyncDemo} />
        <Route path='/404' component={NotFound} />
        <Route path='/motion' component={ListSortDemo} />
        <Route path='/test' component={TableEnterLeave} />
        <Route path='/home/:id' component={Home} />
        <Redirect from='*' to='/404' />
      </Switch>
    </Layout>
    </BrowserRouter>
  )
}

export default App
