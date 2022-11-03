import Component from '../Component';

export default class TodoList extends Component {
    setup() {
        this.state = { todos: ['reading', 'sleeping'], }
    }

    template() {
        const { todos } = this.state;

        return `
            <div>
                <input class="todoText" type="text" value=""/>
                <button id="addBtn">입력</button>
            </div>
            <ul class="list">
                ${todos.map(todo => `<li>${todo}</li>`).join('')}
            </ul>
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
    }
}