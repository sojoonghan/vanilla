export default class Component {
    #target;
    #state;
    #props

    constructor(target, props) {
        this.#target = target;
        this.#props = props;

        this.setup(); //state 초기화 함수
        this.render();
        this.setEvent();
        this.mounted();//컴포넌트가 마운트 된 직후 호출
    }

    set state(state) {
        this.#state = state;
    }
    get state() {
        return this.#state;
    }

    get target() {
        return this.#target
    }

    setup() { } //state정의
    render() {
        this.#target.innerHTML = this.template();
        this.setEvent();
    }
    mounted() {
    }
    template() {
        return '';
    }
    setEvent() { }
    addEvent(event, selector, callback) { }

    setState(nextState) {
        this.state = { ...this.state, ...nextState };
        this.render();
    }
}

// state가 변경되면 render()를 실행한다. state는 setState()로만 변경해야 한다.
// 생성자 실행순서 = 1.state정의한다.setup() 2.렌더링.render() 3.상태를 바꾸거나 렌더링이 된 후에 실행할 것들을 실행한다. mounted().
// template() 에서는 string으로 html태그를 넣어주고 render() 에서 target에 innerHTML으로 넣어주면 된다. 그리고 mounted 에서 보통 비동기로 데이터들을 가져와서 state를 바꾼다. 
// state를 바꿀때는 setState()를 이용해 상태를 바꾸고 render() 메서드를 호출한다
// mutationObserver
//contains()=
//closest()= CSS선택자와 일치하는 요소를 찾을 때까지,자기 자신을 포함(부모방향,문서root까지)문서 트리 순회.closest(selectors);
//includes()=배열이 특정 요소를 포함하고 있는지 판별 arr.includes('요소');boolean 값을 return
//e.target.dataset = 데이터의 속성을 받아온다.