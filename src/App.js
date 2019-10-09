import React, { Component } from 'react';
import './App.css';
import HoverCounter from './components/HoverCounter.js'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import styles from './App.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import User from './components/User';
import RenderPropCounter from './components/RenderPropCounter';
import ComponentA from './components/contextComponents/ComponentA';
import { UserProvider } from './components/contextComponents/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

class App extends Component{
   render(){
    return(
      <div className="App">
        <h1 className={styles.error}>CSS Module error class</h1>
        <HoverCounter name='Test'/>
        <Message/>
        <Counter/>
        <FunctionClick/>
        <ParentComponent/>
        <UserGreeting/>
        <NameList/>
        <Stylesheet primary={true}/>
        <Inline/>
         <Form/>
         <LifeCycleA/>
         <FragmentDemo/>
         <Table/>
         <ParentComp/>
         <RefsDemo/>
         <FocusInput/>
         <FRParentInput/>
         <PortalDemo/>
         {/** <ErrorBoundary>
            <Hero heroName='Batman'/>
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName='Joker'/>
         </ErrorBoundary>*/}
         <ClickCounter/>
         <User render={(isLoggedIn) => isLoggedIn? 'Selin':'Guest'}/>
         <RenderPropCounter render={(count,incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}/>)}/>
         <UserProvider value='Selin'>
            <ComponentA/>
         </UserProvider>
         {/* <PostList/> */}
         <PostForm/>
      </div>
    );
  }
}

export default App;


