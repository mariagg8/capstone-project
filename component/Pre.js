import useStore from '../hooks/useStore';

export default function Pre() {
  const { fetchedData, ...state } = useStore(state => state);
  return <pre>{JSON.stringify(state, null, 4)}</pre>;
}
