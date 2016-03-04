const manifest = {
  host: 'http://localhost:3000',
  resources: {
    User: {
      me: {path: '/api'}
    }
  }
};

let API;

if (typeof window == 'undefined') {
  const ServerMappersmith = require('mappersmith/node');
  API = ServerMappersmith.forge(manifest, ServerMappersmith.node.NodeVanillaGateway);
} else {
  const ClientMappersmith = require('mappersmith');
  API = ClientMappersmith.forge(manifest);
}

export default API;
