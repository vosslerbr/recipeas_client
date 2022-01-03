interface Config {
  [key: string]: string;
}

const config: Config = {
  environment: 'prod',
  prodServer: 'https://recipeas-server.herokuapp.com',
  devServer: 'http://localhost:3000',
};

export default config;
