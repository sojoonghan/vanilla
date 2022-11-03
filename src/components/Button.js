import Component from '../Component';

class Button extends Component {
    setup() {
    }

    template() {
        const btnClass = 'coin';
        return `<button class="${btnClass}">코인</button>`;
    }

    setEvent() {
        this.$target.querySelector('#btn').addEventListener('click', () => {
            const { items } = this.$state;
            this.setState();
        });
    }
}
