import { queryMembers } from '../services/api';

export default {
  namespace: 'test',
  state: {},
  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload.Data.Collection,
        totalcount: action.payload.Data.TotalCount,
        pagesize: action.payload.Data.PageSize,
        pageindex: action.payload.Data.PageIndex,
      };
    },
    isloading(state, action) {
      return {
        ...state,
        isloading: action.payload,
      };
    },
  },
  effects: {
    *getData({ payload }, { call, put }) {
      // yield put({ type: 'isloading', payload: true });
      const data = yield call(queryMembers, payload);
      // yield put({ type: 'isloading', payload: false });
      yield put({ type: 'save', payload: data });
    },
  },
  subscriptions: {

  },
};
