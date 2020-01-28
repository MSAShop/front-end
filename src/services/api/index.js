// React.js
const { useEffect, useReducer } = require('react');

// Axios
const Axios = require('axios');

// Await-to-js
const to = require('await-to-js').default;

// ----------------------------------------

exports.useRequest = function(opts = {}) {
  // Variables
  const defaultState = { loading: true, res: null, err: null };
  const source = Axios.CancelToken.source();
  opts.CancelToken = source.token;

  // Functions
  const areEqualStates = (state, newState) => {
    return JSON.stringify(state) === JSON.stringify(newState);
  };

  const updateState = (state, newState) => {
    return areEqualStates(state, newState) ? state : { ...state, ...newState };
  };

  const callApi = async () => {
    setRequest(defaultState);

    const [err, res] = await to(this.axios(opts));

    setRequest({ res: res && res.data, err, loading: false });
  };

  // Hooks
  const [request, setRequest] = useReducer(updateState, defaultState);
  useEffect(() => {
    callApi();

    return () => source.cancel('Request canceled!');
  }, []);

  // Return
  return [request.res, request.err, request.loading, source];
};

exports.config = function({ baseURL }) {
  this.axios = Axios.create({
    baseURL
  });
};
