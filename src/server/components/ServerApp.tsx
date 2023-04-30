import { Request, Response } from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import Html from './Html';
import App from '../../client/App';
import setupStore from '../../client/app/store';
import { rickAndMortyApi } from '../../services/rickAndMorty';

const store = setupStore({});

interface AssetMap {
  style?: string;
  script: string;
}

async function render(req: Request, res: Response, assetMap: AssetMap) {
  await store.dispatch(rickAndMortyApi.endpoints.getCardsBySearchQuery.initiate(''));
  await Promise.all(store.dispatch(rickAndMortyApi.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();
  let didError = false;

  const { pipe } = renderToPipeableStream(
    <Html style={assetMap.style} preloadedState={preloadedState}>
      <Provider store={store}>
        <StaticRouter location={req.originalUrl}>
          <App />
        </StaticRouter>
      </Provider>
    </Html>,
    {
      onShellReady() {
        res.statusCode = didError ? 500 : 200;
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.setHeader('content-type', 'text/html');
        res.send('<h1>Something wrong =(</h1>');
      },
      onError(err: unknown) {
        didError = true;
        console.error(err);
      },
      bootstrapModules: [assetMap.script],
    }
  );
}

export { render };
