# DillRJS
## Install and create first reactJS
first you have to install following
reactjs and nodejs
# sudo apt install nodejs

node -v # check the version

'''
If the package in the repositories suits your needs, this is all you need to do to get set up with Node.js. 
In most cases, you’ll also want to also install npm, the Node.js package manager. You can do this by installing 
the npm package with apt:
'''
sudo apt install npm

npm -v
9.2.0

# create reactjs
npm create react-app tutorials

# start run
cd tutorials
npm start

# npm is start running npm package runner
npm run this line below
npm create react-app project_name

## To installed globally first we need to run
npm install create-react-app -g
## next
create react-app project-name

## Component Types are two:
1. Stateless Functional Component (JS function)
function Welcome(props){
    return <h1>Hello react Js</h1>;
}

2. Stateful Class Component
Class extending Component class
Render method returning HTML

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

#### Functional Components:
Property(props) ---> JavaScript Function ----> HTML(JSX)
 Going to ---> src/App.js

#### Class Components
Are basically the same ES6 class 

Properties(props) -----> ES6 -----> HTML (JSX)

## Functional vs Class components

# function Simple functions,
 - Use Func components as much as possible
 - Absence of 'this' keyword
 - Solution without using state
 - Mainly responsible for the UI
 - Stateless / Dumb / Presentational

# Class Components
 - More feature rich
 - Maintain their own private data - state
 - Complex UI logic
 - Provide lifecycle hooks
 - Stateful / Smart / Container