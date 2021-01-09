const { observable, autorun, reaction, action, runInAction } = require('mobx');

const state = observable({
    compA: 'a',
    compB: 12,
    compC: null,
});

// 바뀔 때 마다 실행되는 함수
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

// Action을 명시적으로 구분
runInAction(() => {
    state.compA = 'b';
    state.compB = 25;
    state.compB = 'c';
    
});

runInAction(() => {
    state.compC = 'c';
});