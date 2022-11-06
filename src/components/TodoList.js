import Component from '../Component';

export default class TodoList extends Component {
    setup() {
        this.state = { todos: ['reading', 'sleeping'], }
    }

    template() {
        const { todos } = this.state;

        return `
            <div class="addList">
                <input class="todoText" type="text" value=""/>
                <button id="addBtn">입력</button>
            </div>
            <div class="list">
                ${todos.map((todo, index) => `
                    <div data-index=${index}>
                        <span>${todo}</span> 
                        <button class="modifyBtn">수정</button> 
                        <button class="deleteBtn">삭제</button>
                    </div>`).join('')}
            </div>
        `;
    }

    setEvent() {
        // document.querySelector('.addBtn').addEventListener('click', (e) => {
        //     const { todos } = this.state;
        //     const todoText = document.querySelector('.todoText').value;
        //     this.setState({
        //         todos: [...todos, todoText]
        //     })
        // })

        // document.addEventListener('click', function (e) {
        //     if (e.target && e.target.id == 'addBtn') {
        //         console.log('click')
        //     }
        // });
        this.addEvent('click', '#addBtn', ({ target }) => {
            const { todos } = this.state;
            const todoText = document.querySelector('.todoText').value;

            this.setState({ todos: [...todos, todoText] });
        })
            .addEvent('click', '.deleteBtn', ({ target }) => {
                const data = target.closest('[data-index]').dataset.index;
                const todos = [...this.state.todos]
                todos.splice(data, 1);

                this.setState({ todos });
            })
            .addEvent('click', '.modifyBtn', ({ target }) => {
                const parent = target.closest('[data-index]');
                const textSpan = parent.children[0]

                const flag = target.childNodes[0].textContent;

                //텍스트 -> input 으로 가는 기능
                if (flag === '수정') {
                    const text = textSpan.textContent;

                    textSpan.innerHTML = `<input type="text" value=${text} />`
                    target.innerText = '수정완료'
                } else {
                    //input -> 변경된 텍스트
                    target.innerText = '수정'
                    textSpan.innerHTML = textSpan.children[0].value;

                }
            })
    }
}