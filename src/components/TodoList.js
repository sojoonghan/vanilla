import Component from '../Component';

export default class TodoList extends Component {
    setup() {
        // this.state = { todos: ['reading', 'sleeping'] }
        this.state = {
            TodoList: [
                { todo: ['reading', 'sleeping'] }
            ]
        }
    }

    template() {
        const { TodoList } = this.state;
        return `
            <div>
                <input id="todoTitle" type="text" value="" />
                <button id="addListBtn">추가</button>
            </div>
            
            ${TodoList.map((todos) => {
            const [key, value] = Object.entries(todos)[0];

            return `
                <div style="border:1px solid black; margin-top:10px;" data-title='${key}'>
                    <h1>${key}</h1>
                    <div class="addList">
                        <input class="todoText" type="text" value=""/>
                        <button id="addBtn">입력</button>
                    </div>
                    <div class="list">
                        ${value.map((v, index) => {
                return `
                            <div data-index=${index}>
                                <span>${v}</span> 
                                <button class="modifyBtn">수정</button> 
                                <button class="deleteBtn">삭제</button>
                            </div>
                            `;
            }).join('')}
                    </div>
                </div>
                `
        }).join('')}
        `;
    }

    setEvent() {
        this.addEvent('click', '#addBtn', ({ target }) => {
            // const { todo } = this.state;
            // const todoText = document.querySelector('.todoText').value;

            // this.setState({ todos: [...todos, todoText] });

            const rootTarget = target.closest('[data-title]');
            const title = rootTarget.dataset.title;

            const { value } = rootTarget.querySelector('.todoText');

            const { TodoList } = this.state;
            const targetIndex = TodoList.findIndex(todoObj => {
                const [key] = Object.keys(todoObj);
                return key === title;
            })
            const { targetKey, targetValue } = TodoList[targetIndex];

            this.setState({
                TodoList: TodoList.map((todos, index) => {
                    if (index !== targetIndex) return todos;
                    const [todosKey, todosValue] = Object.entries(todos)[0];
                    return {
                        [todosKey]: [
                            ...todosValue,
                            value
                        ]
                    }
                })
            })

        })
            // .addEvent('click', '.deleteBtn', ({ target }) => {
            //     const data = target.closest('[data-index]').dataset.index;
            //     const todos = [...this.state.todos]
            //     todos.splice(data, 1);

            //     this.setState({ todo });
            // })
            // .addEvent('click', '.modifyBtn', ({ target }) => {
            //     const parent = target.closest('[data-index]');
            //     const textSpan = parent.children[0]

            //     const flag = target.childNodes[0].textContent;

            //     //텍스트 -> input 으로 가는 기능
            //     if (flag === '수정') {
            //         const text = textSpan.textContent;

            //         textSpan.innerHTML = `< input type = "text" value = ${text} />`
            //         target.innerText = '수정완료'
            //     } else {
            //         //input -> 변경된 텍스트
            //         target.innerText = '수정'
            //         textSpan.innerHTML = textSpan.children[0].value;

            //     }
            // })

            .addEvent('click', '#addListBtn', ({ target }) => {
                const { value } = document.querySelector('#todoTitle');

                const { TodoList } = this.state;

                this.setState({
                    TodoList: [...TodoList, { [value]: [] }]
                })

            })
    }
}