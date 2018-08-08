export const loadState = () => {
  try{
    let serializedState = localStorage.getItem('state');
    if (serializedState == null) {
      return undefined;
    }
    serializedState = JSON.parse(serializedState)
    serializedState.payments.push(
      {
        date: new Date(2018, 10),
        category: 'test',
        price: 1,
        sum: 100
      }
    )
    return serializedState;
  } catch (err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {}
}
