export default () => (
  <style global jsx>{`
    @import url('https://fonts.googleapis.com/css?family=Fredoka+One|Mallanna:400,700');
    body {
      font-family: 'Mallanna', sans-serif;
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
      color: #000;
    }
    p::selection {
      background: #79ffe1;
    }
    a::selection {
      background: #79ffe1;
    }
    a:hover {
      color: #00695f;
    }
    h2::selection {
      background: #79ffe1;
    }
    h1::selection {
      background: none;
    }
  `}</style>
)
