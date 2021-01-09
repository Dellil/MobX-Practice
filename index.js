const { observable, autorun, reaction, action, runInAction } = require('mobx');

const state = observable({
    compA: 'a',
    compB: 12,
    compC: null,
});

autorun(() => {
    console.log('changed');
});

// 첫번째 함수에서 return되는 값이 바뀌었을 때만 실행됨
reaction(() => {
    return state.compB
}, () => {
    console.log('react', state.compB);
});

// 함수로 만들어서 나중에 실행
const change = action(() => {
    state.compA = 'c';
    state.compB = 25;
    state.compC = 'c';
});

runInAction(() => {
    state.compA = 'b';
    state.compB = 25;
    state.compB = 'c';
    
});

runInAction(() => {
    state.compC = 'c';
});