var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

var Animal = function (_React$Component) {
  _inherits(Animal, _React$Component);

  function Animal() {
    _classCallCheck(this, Animal);

    return _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).apply(this, arguments));
  }

  _createClass(Animal, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Navbar,
        { bg: 'dark', variant: 'dark' },
        React.createElement(
          Navbar.Brand,
          { href: '#home' },
          'Navbar'
        ),
        React.createElement(
          Nav,
          { className: 'mr-auto' },
          React.createElement(
            Nav.Link,
            { href: '#home' },
            'Home'
          ),
          React.createElement(
            Nav.Link,
            { href: '#features' },
            'Features'
          ),
          React.createElement(
            Nav.Link,
            { href: '#pricing' },
            'Pricing'
          )
        ),
        React.createElement(
          Form,
          { inline: true },
          React.createElement(FormControl, { type: 'text', placeholder: 'Search', className: 'mr-sm-2' }),
          React.createElement(
            Button,
            { variant: 'outline-info' },
            'Search'
          )
        )
      );
    }
  }]);

  return Animal;
}(React.Component);

ReactDOM.render(React.createElement(Animal, null), document.getElementById('root'));
export default Animal;