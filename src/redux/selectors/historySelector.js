const historySelector = state => ({
    showHistory: state.historyStore.showHistory,
    history: state.historyStore.history
});

export default historySelector;
